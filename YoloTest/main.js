// HTML 요소 가져오기
const imageInput = document.getElementById('imageInput');
const imageDisplay = document.getElementById('imageDisplay');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('status');
const backendButtons = document.querySelectorAll('.backend-selector button');

const MODEL_URL = 'yolo12n.onnx';
const MODEL_INPUT_SHAPE = [1, 3, 640, 640];

let session;
let classNames = [];
let currentBackend = 'webgpu'; // 기본 백엔드

// 1. ONNX 런타임 세션 초기화 함수 (백엔드를 인자로 받도록 수정)
async function initialize(backend) {
    // 만약 이미 세션이 존재한다면, 메모리 누수 방지를 위해 해제
    if (session) {
        await session.release();
        console.log("기존 세션을 해제했습니다.");
    }

    statusText.innerText = `${backend.toUpperCase()} 백엔드로 모델을 초기화하는 중...`;
    console.log(`${backend.toUpperCase()} 백엔드로 초기화를 시작합니다.`);

    try {
        // 클래스 이름 로드 (한 번만 실행하면 됨)
        if (classNames.length === 0) {
            const response = await fetch('labels.txt');
            const textData = await response.text();
            classNames = textData.split('\n').map(name => name.trim()).filter(name => name);
            console.log("클래스 이름이 로드되었습니다.");
        }

        session = await ort.InferenceSession.create(MODEL_URL, {
            // 선택된 백엔드를 최우선으로 설정
            executionProviders: [backend, 'webgl', 'wasm'],
            graphOptimizationLevel: 'all'
        });

        // 현재 사용 중인 백엔드 확인
        console.log(`ONNX 모델 초기화 완료. 사용된 백엔드: ${currentBackend.toUpperCase()}`);
        statusText.innerText = `초기화 완료. 사용된 백엔드: ${currentBackend.toUpperCase()}. 이미지를 선택하세요.`;

    } catch (e) {
        console.error(`${currentBackend} 백엔드 초기화에 실패했습니다.`, e);
        statusText.innerText = `${currentBackend.toUpperCase()} 백엔드 초기화 실패. 다른 백엔드를 선택해보세요.`;
        alert(`모델 초기화 실패: ${e}.`);
    }
}

// ✨ 2. 백엔드 변경 및 초기화를 위한 함수 (새로 추가) ✨
async function changeBackend(backend) {
    currentBackend = backend;
    // 모든 버튼의 'active' 클래스 제거
    backendButtons.forEach(btn => btn.classList.remove('active'));

    // 현재 선택된 버튼에 'active' 클래스 추가
    document.getElementById(`${backend}Btn`).classList.add('active');

    // 1. 캔버스를 깨끗하게 지워 "흰색 캔버스"처럼 만듭니다.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. 이전에 보였던 원본 이미지(<img>)를 다시 숨깁니다.
    imageDisplay.style.display = 'none';

    // 3. 파일 입력 필드에 표시된 파일 이름을 지웁니다.
    imageInput.value = '';

    await initialize(backend);
}

imageInput.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageDisplay.src = e.target.result;
            imageDisplay.style.display = 'block';
            imageDisplay.onload = async () => {
                await detectObjects(imageDisplay);
            };
        };
        reader.readAsDataURL(file);
    }
    imageInput.value = null;
};

async function detectObjects(image) {
    if (!session) {
        console.error("세션이 초기화되지 않았습니다. 먼저 백엔드를 선택하세요.");
        statusText.innerText = "오류: 세션이 초기화되지 않았습니다. 백엔드를 선택하세요.";
        return;
    }
    statusText.innerText = "객체 탐지 중...";

    canvas.width = image.width;
    canvas.height = image.height;
    const modelWidth = MODEL_INPUT_SHAPE[2];
    const modelHeight = MODEL_INPUT_SHAPE[3];
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = modelWidth;
    tempCanvas.height = modelHeight;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(image, 0, 0, modelWidth, modelHeight);
    const imageData = tempCtx.getImageData(0, 0, modelWidth, modelHeight);
    const { data } = imageData;
    const red = [], green = [], blue = [];
    for (let i = 0; i < data.length; i += 4) {
        red.push(data[i] / 255);
        green.push(data[i + 1] / 255);
        blue.push(data[i + 2] / 255);
    }
    const inputTensorData = [...red, ...green, ...blue];
    const inputTensor = new ort.Tensor('float32', inputTensorData, MODEL_INPUT_SHAPE); // float16 대신 float32가 더 안정적일 수 있습니다.

    try {
        const feeds = { [session.inputNames[0]]: inputTensor };
        const startTime = performance.now();
        const results = await session.run(feeds);
        const endTime = performance.now();
        const inferenceTime = endTime - startTime;

        console.log(`[${currentBackend.toUpperCase()}] 추론에 걸린 시간: ${inferenceTime}ms`);
        statusText.innerText = `탐지 완료! 추론 시간(${currentBackend.toUpperCase()}): ${inferenceTime.toFixed(2)}ms`;

        processOutput(results[session.outputNames[0]], image.width, image.height, image);

        imageDisplay.style.display = 'none';
    } catch (e) {
        console.error("추론 중 오류가 발생했습니다.", e);
        statusText.innerText = "추론 중 오류 발생.";
    }
}

function processOutput(outputTensor, imageWidth, imageHeight, image) {
    const confidenceThreshold = 0.5;
    const iouThreshold = 0.45;
    let boxes = [];
    const modelWidth = MODEL_INPUT_SHAPE[2];
    const modelHeight = MODEL_INPUT_SHAPE[3];
    const outputData = outputTensor.data;
    const numClasses = classNames.length || 80;
    const numBoxes = outputTensor.dims[2];

    for (let i = 0; i < numBoxes; ++i) {
        const [classId, prob] = getClassAndScore(outputData, i, numClasses, numBoxes);

        if (prob > confidenceThreshold) {
            const xc = outputData[i];
            const yc = outputData[i + numBoxes];
            const w = outputData[i + 2 * numBoxes];
            const h = outputData[i + 3 * numBoxes];
            const x1 = ((xc - w / 2) / modelWidth) * imageWidth;
            const y1 = ((yc - h / 2) / modelHeight) * imageHeight;
            const x2 = ((xc + w / 2) / modelWidth) * imageWidth;
            const y2 = ((yc + h / 2) / modelHeight) * imageHeight;
            boxes.push([x1, y1, x2, y2, prob, classId]);
        }
    }

    boxes.sort((a, b) => b[4] - a[4]);
    const result = [];
    while (boxes.length > 0) {
        result.push(boxes[0]);
        const bestBox = boxes[0];
        boxes = boxes.filter(box => iou(bestBox, box) < iouThreshold);
    }
    drawBoundingBoxes(result, image);
}

function getClassAndScore(data, index, numClasses, numBoxes) {
    let maxProb = 0;
    let classId = -1;
    for (let j = 0; j < numClasses; j++) {
        const prob = data[index + (4 + j) * numBoxes];
        if (prob > maxProb) {
            maxProb = prob;
            classId = j;
        }
    }
    return [classId, maxProb];
}

function drawBoundingBoxes(boxes, image) {

    // 캔버스 크기를 원본 이미지 크기와 동일하게 맞춥니다.
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // 캔버스를 깨끗하게 지웁니다.
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ✨ --- 이 부분이 핵심 변경 사항입니다 --- ✨
    // 캔버스에 원본 이미지를 먼저 그립니다.
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // 이제 그 위에 바운딩 박스를 그립니다.
    ctx.font = "16px sans-serif";
    ctx.lineWidth = 2;

    boxes.forEach(([x1, y1, x2, y2, prob, classId]) => {
        const labelName = (classId >= 0 && classId < classNames.length)
            ? classNames[classId]
            : `Class ${classId}`;
        const score = Math.round(prob * 100);
        const label = `${labelName}: ${score}%`;
        ctx.strokeStyle = 'red';
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
        ctx.fillStyle = 'red';
        ctx.fillText(label, x1, y1 > 10 ? y1 - 5 : 10);
    });
}

function iou(box1, box2) {
    const [x1, y1, x2, y2] = box1;
    const [x3, y3, x4, y4] = box2;
    const interX1 = Math.max(x1, x3);
    const interY1 = Math.max(y1, y3);
    const interX2 = Math.min(x2, x4);
    const interY2 = Math.min(y2, y4);
    const interArea = Math.max(0, interX2 - interX1) * Math.max(0, interY2 - interY1);
    if (interArea === 0) return 0;
    const box1Area = (x2 - x1) * (y2 - y1);
    const box2Area = (x4 - x3) * (y4 - y3);
    const unionArea = box1Area + box2Area - interArea;
    return interArea / unionArea;
}

// 페이지 로드 시 기본 백엔드로 초기화
window.onload = () => {
    changeBackend(currentBackend);
};