// 안내 모달 설정: DOMContentLoaded 시점에 실행 (OpenCV 준비와 무관하게 동작)
document.addEventListener('DOMContentLoaded', () => {
  setupInfoModal();
});

document.addEventListener('opencv-ready', () => {
  console.log('OpenCV is ready.');
  main();
});

// 전역 변수로 현재 선택된 모드를 관리 (기본값 '1장'으로 변경)
let currentMode = '1-single';

function main() {
  const dropZoneContainer = document.getElementById('drop-zone-container');
  const resultsContainer = document.getElementById('results-container');
  const loadingOverlay = document.getElementById('loading-overlay');
  const cardGrid = document.getElementById('card-grid');
  const modeButtons = document.querySelectorAll('.mode-button:not(:disabled)');
  const modeStatusDiv = document.getElementById('mode-status');

  // --- UI 업데이트 전용 함수 ---
  function updateModeUI() {
    const modeTexts = {
      '1-single': '1장',
      '2-vertical': '2장 세로',
      '4-grid': '4장'
    };
    modeStatusDiv.textContent = `현재 모드: ${modeTexts[currentMode]}`;
    modeButtons.forEach(btn => {
      const btnMode = btn.id.replace('mode-', '');
      btn.classList.toggle('active', btnMode === currentMode);
    });
    console.log('UI Updated. Current mode:', currentMode);
  }

  // --- 설정 함수들 ---
  function setupModeControls() {
    modeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const selectedMode = e.currentTarget.id.replace('mode-', '');
        if (currentMode !== selectedMode) {
          currentMode = selectedMode;
          updateModeUI();
          // 모드 전환 시 결과를 초기화하여 드롭 영역으로 복귀합니다 (다시하기와 동일)
          resetApp();
        }
      });
    });
  }

  function setupDragAndDrop() {
    const dropArea = document.getElementById('drop-area');
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, e => {
        e.preventDefault();
        e.stopPropagation();
      }, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
    });
    dropArea.addEventListener('drop', handleDrop, false);
  }

  function resetApp() {
    resultsContainer.classList.add('hidden');
    dropZoneContainer.classList.remove('hidden');
    cardGrid.innerHTML = '';
  }

  function setupResetButton() {
    document.getElementById('reset-button').addEventListener('click', () => {
      resetApp();
    });
  }

  // --- 파일/이벤트 핸들러 ---
  function handleFile(file) {
    if (!file) {
      alert('이미지 파일을 찾을 수 없습니다.');
      return;
    }
    if (!file.type || !file.type.startsWith('image/')) {
      alert('이미지 파일만 지원합니다.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => processAndDisplayImage(img);
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleFile(dt.files[0]);
    } else {
      alert('이미지 파일만 드롭해주세요.');
    }
  }

  function setupClipboardPaste() {
    window.addEventListener('paste', (e) => {
      const cd = e.clipboardData;
      if (!cd || !cd.items) return; // 다른 붙여넣기는 무시
      let foundImage = false;
      for (let i = 0; i < cd.items.length; i++) {
        const item = cd.items[i];
        if (item.kind === 'file' && item.type && item.type.startsWith('image/')) {
          const file = item.getAsFile();
          if (file) {
            e.preventDefault();
            handleFile(file);
            foundImage = true;
            break;
          }
        }
      }
      if (!foundImage) {
        // 클립보드에 이미지가 없으면 알림
        // 텍스트나 HTML만 있는 경우는 이 앱에서 사용하지 않음
        alert('클립보드에 이미지가 없습니다. 이미지(스크린샷 등)를 붙여넣어 주세요.');
      }
    });
  }

  // --- 핵심 처리 함수들 ---
  function processAndDisplayImage(imgElement) {
    loadingOverlay.classList.remove('hidden');
    setTimeout(() => {
      try {
        let src = safeImread(imgElement);
        const subImages = splitImage(src, currentMode);
        cardGrid.innerHTML = '';
        updateCardGridClass(currentMode);
        subImages.forEach(subImgMat => {
          const card = analyzeAndCreateCard(subImgMat);
          cardGrid.appendChild(card);
          subImgMat.delete();
        });
        src.delete();
        dropZoneContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
      } catch (err) {
        console.error('Image processing error:', err);
        alert('이미지 처리 중 오류가 발생했습니다. 콘솔을 확인해주세요.');
      } finally {
        loadingOverlay.classList.add('hidden');
      }
    }, 1000);
  }

  function safeImread(src) {
    // src: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | string(id)
    const el = (typeof src === 'string') ? document.getElementById(src) : src;
    if (!el) throw new Error('safeImread: element not found');

    // 크기 확보 (이미지가 DOM에 없어도 naturalWidth/Height는 있음)
    const w = el.width || el.videoWidth || el.naturalWidth;
    const h = el.height || el.videoHeight || el.naturalHeight;
    if (!w || !h) throw new Error(`safeImread: invalid image size (${w}x${h})`);

    // 캔버스에 그려서 ImageData -> Mat
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(el, 0, 0, w, h);

    // 여기서 CORS로 tainted면 이 줄에서 throw
    const imgData = ctx.getImageData(0, 0, w, h);
    return cv.matFromImageData(imgData); // CV_8UC4 (RGBA)
  }

  function splitImage(sourceMat, mode) {
    const subImages = [];
    if (mode === '1-single') {
      subImages.push(sourceMat.clone());
      return subImages;
    }
    const w = sourceMat.cols;
    const h = sourceMat.rows;
    if (mode === '2-vertical') {
      const h_half = Math.floor(h / 2);
      subImages.push(sourceMat.roi(new cv.Rect(0, 0, w, h_half)));
      subImages.push(sourceMat.roi(new cv.Rect(0, h_half, w, h - h_half)));
    } else if (mode === '4-grid') {
      const w_half = Math.floor(w / 2);
      const h_half = Math.floor(h / 2);
      subImages.push(sourceMat.roi(new cv.Rect(0, 0, w_half, h_half)));
      subImages.push(sourceMat.roi(new cv.Rect(w_half, 0, w - w_half, h_half)));
      subImages.push(sourceMat.roi(new cv.Rect(0, h_half, w_half, h - h_half)));
      subImages.push(sourceMat.roi(new cv.Rect(w_half, h_half, w - w_half, h - h_half)));
    }
    return subImages;
  }

  function analyzeAndCreateCard(imageMat) {
    // 메모리 객체들 미리 만들기
    const gray = new cv.Mat();
    const keypoints = new cv.KeyPointVector();
    const displayMat = new cv.Mat();
    let featureDetector = null;

    try {
      // 1) RGBA -> GRAY (SIFT는 CV_8UC1 요구)
      cv.cvtColor(imageMat, gray, cv.COLOR_RGBA2GRAY);

      // 2) SIFT 준비 및 검출
      //    new cv.SIFT(nfeatures, nOctaveLayers, contrastThreshold, edgeThreshold, sigma)
      featureDetector = new cv.BRISK(40, 3, 0.5);
      //    ★ 반드시 gray 사용
      featureDetector.detect(gray, keypoints);  // mask 필요 없으면 생략

      const keypointCount = keypoints.size();

      // 3) 카드/캔버스 구성
      const card = document.createElement('div');
      card.className = 'card';
      // 이미지 종횡비에 따라 카드에 landscape/portrait 클래스를 부여해 스타일 분기
      const isLandscape = imageMat.cols >= imageMat.rows;
      card.classList.add(isLandscape ? 'landscape' : 'portrait');

      const canvasWrapper = document.createElement('div');
      canvasWrapper.className = 'canvas-wrapper';
      canvasWrapper.style.paddingTop = `${(imageMat.rows / imageMat.cols) * 100}%`;

      const originalCanvas = document.createElement('canvas');
      originalCanvas.className = 'original-view';
      cv.imshow(originalCanvas, imageMat);
      canvasWrapper.appendChild(originalCanvas);

      // 4) 키포인트 시각화 (커스텀 십자 표시)
      cv.cvtColor(gray, displayMat, cv.COLOR_GRAY2RGBA);
      const color = new cv.Scalar(255, 255, 0, 255); // 노란색 RGBA
      drawCrossKeypoints(displayMat, keypoints, color, 7);

      const keypointCanvas = document.createElement('canvas');
      keypointCanvas.className = 'keypoint-view';
      cv.imshow(keypointCanvas, displayMat);
      canvasWrapper.appendChild(keypointCanvas);

      card.appendChild(canvasWrapper);

      // 5) 정보/토글 UI
      const infoDiv = document.createElement('div');
      infoDiv.className = 'card-info';

      const countP = document.createElement('p');
      countP.textContent = `검출된 특징점: ${keypointCount}개`;
      infoDiv.appendChild(countP);

      const starsDiv = createStarElements(calculateStars(keypointCount));
      infoDiv.appendChild(starsDiv);

      const toggleContainer = document.createElement('div');
      toggleContainer.className = 'toggle-switch-container';
      const toggleLabelText = document.createElement('span');
      toggleLabelText.textContent = '특징점 보기';
      const toggleSwitch = document.createElement('label');
      toggleSwitch.className = 'toggle-switch';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const slider = document.createElement('span');
      slider.className = 'slider';
      toggleSwitch.appendChild(checkbox);
      toggleSwitch.appendChild(slider);
      toggleContainer.appendChild(toggleLabelText);
      toggleContainer.appendChild(toggleSwitch);
      infoDiv.appendChild(toggleContainer);

      checkbox.addEventListener('change', (e) => {
        canvasWrapper.classList.toggle('show-keypoints', e.target.checked);
      });

      card.appendChild(infoDiv);

      return card;
    } finally {
      // 메모리 해제
      gray.delete();
      keypoints.delete();
      displayMat.delete();
      if (featureDetector) featureDetector.delete();
    }
  }

  function updateCardGridClass(mode) {
    cardGrid.className = 'card-grid';
    if (mode === '1-single') {
      // 단일 카드도 2장 축소 크기와 동일하게 보이도록 컴팩트 클래스 부여
      cardGrid.classList.add('grid-1-compact');
    } else if (mode === '2-vertical') {
      cardGrid.classList.add('grid-2-vertical');
    } else if (mode === '4-grid') {
      cardGrid.classList.add('grid-4');
    }
  }

  function calculateStars(count) {
    // 별점 규칙 (요청 기준):
    // - 800개 이상      -> ★★★★★ (5)
    // - 700~799개       -> ★★★★ (4)
    // - 401~699개       -> ★★★ (3)
    // - 206~400개       -> ★★ (2)
    // - 100~205개       -> ★ (1)
    // - 그 외            -> 0
    if (count >= 800) return 5;
    if (count >= 700) return 4;      // 700~799
    if (count >= 401) return 3;      // 401~699
    if (count >= 206) return 2;      // 206~400
    if (count >= 100) return 1;      // 100~205
    return 0;
  }

  function createStarElements(rating) {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    for (let i = 0; i < 5; i++) {
      const starSpan = document.createElement('span');
      starSpan.className = i < rating ? 'star filled' : 'star empty';
      starSpan.textContent = i < rating ? '★' : '☆';
      starsContainer.appendChild(starSpan);
    }
    return starsContainer;
  }

  // --- 유틸: 키포인트 십자(+) 그리기 ---
  function drawCrossKeypoints(matRGBA, keypointVector, color, thickness = 2) {
    // matRGBA: CV_8UC4 (RGBA)
    // keypointVector: cv.KeyPointVector
    // color: cv.Scalar(R, G, B, A)
    const count = keypointVector.size();
    const lineType = (typeof cv.LINE_AA !== 'undefined') ? cv.LINE_AA : 8;
    for (let i = 0; i < count; i++) {
      const kp = keypointVector.get(i);
      const x = Math.round(kp.pt.x);
      const y = Math.round(kp.pt.y);
      const size = Math.max(2, Math.round(kp.size / 7)); // 파이썬 예시와 유사한 스케일, 최소 2px

      // 수평선
      cv.line(
        matRGBA,
        new cv.Point(x - size, y),
        new cv.Point(x + size, y),
        color,
        thickness,
        lineType,
        0
      );
      // 수직선
      cv.line(
        matRGBA,
        new cv.Point(x, y - size),
        new cv.Point(x, y + size),
        color,
        thickness,
        lineType,
        0
      );
    }
  }

  // --- 초기 설정 실행 ---
  setupModeControls();
  setupDragAndDrop();
  setupClipboardPaste();
  setupResetButton();
  updateModeUI();

}

// 안내 모달 로직
function setupInfoModal() {
  const overlay = document.getElementById('info-modal-overlay');
  if (!overlay) return;

  const DONT_SHOW_KEY = 'nupi.hideInfoPopup';

  function show() {
    overlay.classList.remove('hidden');
  }
  function hide() {
    overlay.classList.add('hidden');
  }

  // 버튼 이벤트
  const closeBtn = document.getElementById('modal-close');
  const dontShowBtn = document.getElementById('modal-dont-show');
  if (closeBtn) closeBtn.addEventListener('click', hide);
  if (dontShowBtn) dontShowBtn.addEventListener('click', () => {
    try {
      localStorage.setItem(DONT_SHOW_KEY, '1');
    } catch (e) {
      // storage 사용 불가 시에도 조용히 실패
    }
    hide();
  });

  // 오버레이 빈 영역 클릭 시 닫기 (모달 바깥 클릭)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hide();
  });

  // 표시 여부 결정
  let shouldHide = false;
  try {
    shouldHide = localStorage.getItem(DONT_SHOW_KEY) === '1';
  } catch (e) {
    shouldHide = false;
  }
  if (!shouldHide) show();
}