/* ==========================================
   1. PROJECT DETAILS DATA STORAGE
   ========================================== */
const projectDetailsData = {
  candyrush: {
    title: "캔디러쉬 (Candy Rush)",
    category: "Games & TA (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/qbmI2e71-LU",
    team: "총 18명 (기획, 아트, 개발 대규모 대학/동아리 연합팀)",
    contribution: "메인 클라이언트 프로그래밍 및 테크니컬 디렉션(TD) 90%",
    overview: "대학교 2학년 재학 당시, 소규모 연합 개발진 환경에서 리팩토링 및 3D 로프 물리 시스템, 그리고 대규모 신입/비전공 협업 생산성을 끌어올리기 위한 가이드라인 정형화 작업을 총괄한 3D 액션 어드벤처 타이틀입니다.",
    details: [
      "<strong>대규모 초급 팀 리드 & 파이프라인 수립:</strong> 게임 개발을 처음 마주하는 아티스트, 이펙터 등 17명의 동료들을 위해 유니티 명명 체계 규격화(모델명@행동.fbx) 및 텍스처 사양 최적화 가이드라인 문서 작성/배포.",
      "<strong>오프라인 상용 전시 기회 견인:</strong> 전체 17개의 2학년 동아리 프로젝트 중 압도적인 완성도를 입증하여 단 <strong>3개의 우수작</strong>으로 선정, 청강 크로니클(네오위즈 협업) 3학년 졸업작품 전시회에 동반 출품하여 첫 부스 운영 시연 성공.",
      "<strong>고성능 독립 아키텍처 아키텍팅:</strong> 스크립트 간 직접적 결합을 파괴하기 위해 Zenject(의존성 주입) 구조를 초기 설계하고, UniTask 및 UniRx 비동기 처리를 도입해 리소스 로딩에 의한 프레임 스파이크 방지.",
      "<strong>메인 물리 로프 시스템 & 셰이더 해결:</strong> 실시간 신축 로프 구현을 위해 동적 매시 계산 대신 원통 실린더 메쉬 조절을 유도하고, 텍스처 없이 반사광 및 림라이트만으로 탱글탱글한 반투명 재질을 표현하는 <strong>커스텀 서피스 셰이더(Custom Surface Shader)</strong>를 개발하여 비주얼과 성능을 동시 타협.",
      "<strong>보안 위변조 차단 데이터 입출력:</strong> MessagePack 바이너리 직렬화 파이프라인을 구축하고 대칭키 암호화 알고리즘 레이어를 입혀 세이브 데이터 변조 방지 구현."
    ]
  },
  snowrabbit: {
    title: "코나 & 스노래빗",
    category: "Games & TA (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/2BVrix9AbSA",
    team: "개발 3명, 아트 2명 / 눈토끼단 팀",
    contribution: "테크니컬 아티스트(TA) 100%, 클라이언트 개발 50%",
    overview: "인디게임 활성화 축제인 <strong>부산인디커넥트 BIC 2023 루키 부문 선정작</strong>으로, 아트와 코딩 간의 렌더링 솔팅 및 식물 오버드로우 성능 문제를 혁신적으로 해결한 고품질 3D 타이틀입니다.",
    details: [
      "<strong>얼음/물 반투명 투명 몬스터 렌더 솔팅 이슈 해결:</strong> 얼음과 반투명 물 몬스터들이 이펙트(VFX)와 화면에 마구 겹칠 때 앞뒤가 꼬이거나 깨지던 렌더링 솔팅 오류를 감지 및 기술적 개입 수행.",
      "<strong>얼음 몬스터 렌더 패스 Opaque 전환:</strong> 아티스트들을 설득하여 알파 투명 패스를 완전히 걷어내고 프레넬(Fresnel) 반사 및 메탈릭/스펙큘러 굴절 수식을 연산하는 커스텀 셰이더를 제작, 깊이 버퍼 쓰기(Z-Write On)가 활성화된 불투명(Opaque) 큐 내에서 완벽한 굴절 질감으로 우회 연출 성공.",
      "<strong>물 몬스터 깊이 버퍼 계산 우회:</strong> 물 몬스터 역시 Transparent 패스를 포기하고 <strong>AlphaTest(Cutout)</strong> 방식으로 재설계한 뒤, 카메라 깊이 텍스처(Depth Buffer) 값을 계산하는 Depth-based Refraction 기법을 셰이더에 심어 깊이에 따른 반투명 물의 질감을 렌더링 깨짐 없이 연출.",
      "<strong>오프라인 상용 시연 부스 성공:</strong> 복잡한 반투명 솔팅 연산 부하와 대량의 Transparent 픽셀 오버드로우(Overdraw)를 완전 차단하여, 안정적인 60fps 풀 프레임으로 BIC 2023 루키 전시 부스 상용 시연 무사 완수.",
      "<strong>아티스트 전용 제작 툴 확장:</strong> 커스텀 툴바 확장 및 씬 뷰 버그 프리뷰 수정 유틸리티 에디터를 개발하여 아티스트 반복 소요 시간 대폭 단축."
    ]
  },
  noopy: {
    title: "AR 포토카드 '누피(Noopy)'",
    category: "Web AR & Apps (Mobile App)",
    videoUrl: null, // No video, text and images only
    team: "클라이언트 1명 (단독 외주 프리랜서)",
    contribution: "Unity 클라이언트 모바일 엔진 개발 및 셰이더 최적화 100%",
    overview: "정적인 포토카드 위에 모바일 카메라 화면을 비추었을 때 입체적인 AR 특수효과 및 비디오 가수가 증강 오버레이되는 실시간 모바일 AR 포토카드 서비스 누피(Noopy)의 핵심 기능 개발 외주 프로젝트입니다.",
    details: [
      "<strong>모바일 실시간 블러 렌더링 한계 극복:</strong> 타 외주사 및 기존 개발진이 모바일 GPU 연산 부하(가우시안 블러 사용 시 10~15fps 및 디바이스 과열)를 이유로 구현 불가능 판정을 내린 실시간 화면 블러 락(Lock) 해제 기능을 완벽히 해결.",
      "<strong>Downsampling 및 Dual-pass Kawase Blur 적용:</strong> 무거운 Gaussian 연산 대신 렌더 텍스처 해상도를 1/4, 1/8로 축소(Downsampling)하여 메모리 대역폭 부하를 완전 차단하고, 모바일 GPU 연산량이 획기적으로 낮으면서도 경계가 부드러운 <strong>Dual-pass Kawase Blur</strong> 셰이더를 자체 설계 및 적용.",
      "<strong>시그니처 상품 '익스크루시브 카드' 론칭:</strong> 저사양 모바일 단말기에서도 프레임 저하 없는 안정적 60fps 풀 프레임 블러 연출을 성공시킴으로써, 회사의 최고 매출 라인업인 시그니처 BM '익스크루시브 카드' 론칭의 결정적 공헌.",
      "<strong>안정적 모바일 영상 녹화 파이프라인:</strong> 미디어 인코딩 최적화를 통해 실시간 AR 증강 연출 화면를 매끄럽게 화면 녹화 및 로컬 미디어 라이브러리에 저장하는 비디오 파이프라인 빌딩."
    ]
  },
  rainbow_ar: {
    title: "레인보우 AR 뷰어 Engine",
    category: "Web AR & Apps (WebGL / Web)",
    videoUrl: null,
    team: "인하우스 정규직 개발팀 메인 리드",
    contribution: "Unity AR 크로스 플랫폼 빌드 파이프라인 및 OpenCV.js 트래킹 100%",
    overview: "누피(Noopy) 프리랜서 당시에 보여준 압도적인 최적화 및 문제 해결 역량을 인정받아 인하우스 개발팀으로 스카웃되어 정규직으로 리드한 크로스 플랫폼 AR 뷰어 및 Web AR 분석 기술 엔진 구축 프로젝트입니다.",
    details: [
      "<strong>크로스 플랫폼 AR 통합 대응:</strong> Android, iOS 단말 앱 환경뿐만 아니라 모바일 브라우저 WebGL 환경 전체에서 레이턴시 없이 통일되고 안정된 AR 트래킹 뷰어 파이프라인 설계 및 빌드.",
      "<strong>OpenCV.js 연동 마커 판별 모듈 개발:</strong> 브라우저 메모리 부하와 JS 비동기 버퍼 전송을 차단하는 모듈을 R&D하여, 이미지 마커의 적합성(별점 점수 계산)을 실시간 분석 및 판별 시각화 리포팅 제공.",
      "<strong>사내 CS 부서 프린트 자동화 소프트웨어 구축:</strong> 수작업으로 발생하던 인쇄용 마킹 오류 및 CS 반복 부하 프로세스를 한 번에 처리해 주는 전용 툴을 개발하여 사내 CS 운영 일일 리소스 50% 단축 달성."
    ]
  },
  ta_unity6: {
    title: "Unity 6 URP 17 그래픽스 데모",
    category: "Shaders & Rendering (PC / Mobile)",
    videoUrl: "https://www.youtube.com/embed/MqzTyogYVZ8",
    team: "개인 연구 (R&D)",
    contribution: "테크니컬 아티스트(TA) 100%",
    overview: "유니티의 최신 LTS 버전인 Unity 6 및 URP 17의 신기술을 복합 적용하여 실시간 하이엔드 그래픽 비주얼을 데스크톱/모바일 전체 기기에서 최고의 연산 효율로 렌더링하도록 튜닝한 종합 그래픽스 연구 프로젝트입니다.",
    details: [
      "<strong>Beautify 포스트 프로세싱 극대화:</strong> 포스트 스택 연산을 활용해 일관되고 묵직한 하이엔드 색조(Color Grading) 레이어를 구성하고 부드러운 림라이팅 극대화.",
      "<strong>실시간 볼륨메트릭 안개 라이팅:</strong> 실시간 레이마칭 연산량을 정밀 조절하여, 기기 발열 및 프레임 드롭 없는 가벼운 실시간 대기 산란(Atmospheric scattering) 광선 효과 설계.",
      "<strong>AMD FSR 3.0 프레임 업스케일러 통합:</strong> FidelityFX Super Resolution 3 레이어를 결합하여, 네이티브 비주얼을 완벽히 유지하면서 프레임 레이트를 획기적으로 상승시키는 고성능 렌더링 검증 완료."
    ]
  },
  ta_upscaler: {
    title: "AI 이미지 업스케일러 생산성 도구",
    category: "Tools & Plugins (Desktop App)",
    videoUrl: "https://www.youtube.com/embed/vBQJtt1DaDE",
    team: "개인 개발 (R&D)",
    contribution: "OS 네이티브 데스크톱 개발 및 AI 모델 최적화 100%",
    overview: "Realgen AI 초고해상도 복원 신경망을 로컬 하드웨어 가속 레이어에 통합하고, 아티스트가 이미지 소스를 원버튼으로 고속 디노이징 업스케일할 수 있도록 설계한 고생산성 데스크톱 응용 소프트웨어입니다.",
    details: [
      "<strong>WinUI 3 & SwiftUI 크로스 컴파일:</strong> Windows OS 타겟은 WinUI 3(C#) 기술을 적용하고, macOS 타겟은 네이티브 SwiftUI 프레임워크를 적용하여 완벽하고 유려한 플랫폼별 하이엔드 UI/UX 설계.",
      "<strong>Realgen AI 로컬 서빙 최적화:</strong> 딥러닝 추론 컨텍스트와 GPU 인퍼런스 파이프라인의 연동 구조를 경량 최적화하여 텍스처 노이즈 제거 및 선명도 디테일 극대화.",
      "<strong>아티스트 리소스 제작 소요 300% 단축:</strong> 고해상도 리소스를 제작하기 위해 들이던 수동 리터칭 워크플로우를 완전 자동화하여 그래픽 부서 전체의 파이프라인 병목 완벽 제거."
    ]
  },
  ta_nexo_ik: {
    title: "서서담 'Nexo' 보스 - 실시간 동적 IK 리깅",
    category: "VFX & Animation (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/P7J5rGpzKG4",
    team: "청강대 졸업작품팀 '서서담' (아트 4명, 개발 3명)",
    contribution: "애니메이션 기술 아티스트(TA) 100%",
    overview: "3D 로봇 보스의 움직임에 맞춰 보스의 무겁고 육중한 팔에 걸쳐져 있는 다수의 두꺼운 전선줄이 자연스럽고 물리적인 텐션을 가지며 실시간 꼬임과 장력을 극복해 내도록 설계한 애니메이션 하이브리드 리깅 기술입니다.",
    details: [
      "<strong>유니티 Animation Rigging 패키지 통합:</strong> 기존 단순 트랜스폼 연동 구조의 한계를 넘어, 복잡한 본 하이러키 구조 위에 동적 다중 본 조인트 체인을 실시간 빌딩.",
      "<strong>실시간 동적 IK & 충돌 회피 계산:</strong> 보스 팔과 전선 가중치 피벗 사이의 각도 왜곡을 실시간 감지하여, 팔 메시 내부로 파고드는 비주얼 크래시를 완벽 차단하고 자연스러운 흔들림 유도.",
      "<strong>모바일/PC 멀티플랫폼 고속 연산 확보:</strong> 실시간 삼각법 조인트 연산 부하를 획기적으로 낮추기 위해 불필요한 트랜스폼 조인트를 간소화하고 가속화된 룩업 가중치를 분배 적용."
    ]
  },
  ta_nexo_flow: {
    title: "서서담 'Nexo' 보스 - 전기에너지 코어 흐름 셰이더",
    category: "Shaders & Rendering (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/axhE_ZdTSlA",
    team: "청강대 졸업작품팀 '서서담' (아트 4명, 개발 3명)",
    contribution: "그래픽스 및 셰이더 개발 100%",
    overview: "기계 거대 보스의 약점인 가슴 중앙 전기 코어에서 발산하는 흐름광이 신체 전반의 미세 회로를 따라 유기적으로 에너지를 순환하며 발광 흐름을 완성하는 고품질 실시간 플로우 셰이더입니다.",
    details: [
      "<strong>Flow Map 기반 고속 UV 애니메이션:</strong> 복잡한 실시간 시뮬레이션 없이 가벼운 2D 벡터 Flow 텍스처의 방향 좌표를 정밀 파싱해 흐르는 에너지를 셰이더 내에서 완전 제어.",
      "<strong>Cosine 기반 발광 펄스 연산:</strong> 시간에 따라 에너지가 물결치듯 맥동(Pulsing)을 치는 느낌을 주기 위해 코사인 주기 함수와 마스크 노이즈 텍스처를 픽셀 셰이더 내부에서 블렌딩 연산.",
      "<strong>보스 AI 전투 트리거 연동:</strong> C# 스크립트에서 보스의 분노 게이지 상황에 맞춰 실시간으로 셰이더 파라미터(발광 강도, 흐름 속도)를 가변적으로 제어할 수 있는 동적 런타임 인터페이스 구축."
    ]
  },
  ta_directional_dissolve: {
    title: "디렉셔널 월드 디졸브 & 아웃라인 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/ZD-nD7iYfDc",
    team: "개인 연구 (R&D)",
    contribution: "테크니컬 아티스트(TA) 100%",
    overview: "3D 메시가 고유의 로컬 트랜스폼 회전 상태에 영향받지 않고, 특정 지정 월드 방향 벡터를 기준으로 타들어가며 깔끔하게 소멸하는 고성능 연출용 디졸브 테크놀로지입니다.",
    details: [
      "<strong>World Space Projection 클리핑:</strong> 월드 공간 좌표계의 지정 평면 방정식을 셰이더에 전달하여 모든 각도의 3D 메시 표면이 하나의 거대한 에너지 파동에 밀려 소멸하는 연출 완성.",
      "<strong>HDR 경계 발광 아웃라인 설계:</strong> 클리핑 소멸 한계선 바로 직전 영역(Border edge)에 에디티브 발광 HDR 색상과 노이즈 마스킹을 결합해 마그마가 타오르는 듯한 극도의 비주얼 연출.",
      "<strong>동적 콜라이더 차단 싱크:</strong> 디졸브가 일어나는 월드 높이 경계를 실시간 C# 레이어로 역산해 게임 상의 박스 콜라이더 크기를 동시에 수축시키는 플레이 물리 일체화 유틸리티 구현."
    ]
  },
  ta_outline_shading: {
    title: "모툰/애니메이션 스타일 정밀 아웃라인 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/Bp0t2KFC3S4",
    team: "개인 연구 (R&D)",
    contribution: "셰이더 그래픽스 개발 100%",
    overview: "3D 카툰 스타일 렌더링에서 캐릭터의 입체적인 실루엣을 또렷하게 잡아주며 카메라와의 거리가 바뀌어도 일정한 외곽선 두께와 엣지를 유지하는 정밀 툰 아웃라인 셰이딩 시스템입니다.",
    details: [
      "<strong>Vertex Normal Expansion 기법:</strong> 버텍스 셰이더 내에서 법선 벡터 방향으로 메시 외곽선을 밀어내고 Backface를 그리는 고성능 2-Pass 구조 개발.",
      "<strong>원근 거리별 두께 보정 공식 탑재:</strong> Perspective 카메라 렌즈 상에서 멀어진 물체의 아웃라인이 지나치게 두꺼워져 메시가 뭉개지는 오류를 방지하기 위해 거리에 비례한 스케일링 계수 연산 처리.",
      "<strong>하드 엣지 노멀 크래싱 방지:</strong> 3D 모델링의 거친 꺾임선(Hard Edge)에서 외곽선이 터지거나 구멍이 뚫리는 부작용을 없애기 위해 아티스트가 구운 Vertex Color Normal 데이터를 파싱해 매끄러운 윤곽선 흐름 유지."
    ]
  },
  ta_trail_fx: {
    title: "Trail FX 실시간 그래픽스 이펙트 패키지",
    category: "VFX & Animation (Unity Package)",
    videoUrl: "https://www.youtube.com/embed/lULnVezdp_Q",
    team: "개인 연구 (R&D)",
    contribution: "그래픽스 이펙트 및 모듈 설계 100%",
    overview: "칼날 궤적이나 투사체 이동 흔적 등 실시간으로 역동적인 흔적을 남길 때, 유니티 기본 트레일의 부자연스러운 끊김 버그와 텍스처 늘어짐을 정교하게 수정한 그래픽 라이브러리 패키지입니다.",
    details: [
      "<strong>Catmull-Rom 스플라인 실시간 보간:</strong> 급격한 프레임 스파이크 상황에서도 트레일 궤적이 꺾여 보이지 않고 고밀도 곡선을 유지하도록 런타임 메시 수학적 보간 알고리즘 적용.",
      "<strong>디스토션 및 발광 그라디언트 셰이딩:</strong> 노이즈 디스토션 기술을 툰 이펙트 트레일에 연계하여 연기가 부드럽게 감돌며 흩어지는 고품질 픽셀 연산 레이어 결합.",
      "<strong>메모리 최적화 및 GC 프리:</strong> 매 프레임 다량 생성되는 메쉬 데이터로 인한 Garbage Collection 병목을 무력화하기 위해 내부 전용 Object Pooler 구조를 탑재해 모바일 성능 극대화."
    ]
  },
  ta_toon_rendering: {
    title: "'코나와 스노래빗' 스타일라이즈드 카툰 툰 렌더링",
    category: "Shaders & Rendering (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/VHWBFmkQSa4",
    team: "눈토끼단 팀 / BIC 2023 전시작",
    contribution: "툰 렌더링 기술 아티스트(TA) 100%",
    overview: "부산인디커넥트 BIC 2023 전시 부스에서 훌륭한 툰 비주얼로 큰 호평을 이끌어 냈던 툰 렌더링 핵심 파이프라인으로, 포근하고 감성적인 파스텔풍 3D 카툰 스타일을 연출했습니다.",
    details: [
      "<strong>1D Ramp Texture 조명 매핑:</strong> 하프 램버트 연산 결과를 커스텀 그라디언트 램프 텍스처로 매핑하여 모서리에 부드럽고 따뜻한 툰 경계 음영 연출 성공.",
      "<strong>스타일라이즈드 림라이팅 극대화:</strong> 빛과 카메라의 시선 각도를 활용해 외곽 부분에 밝은 광을 띄워 어두운 밤 씬에서도 캐릭터의 입체감과 셰이프가 돋보이도록 비주얼 디렉션 제어.",
      "<strong>저사양 타겟 프레임 방어:</strong> URP 포워드 패스에서 발생 가능한 오버드로우를 걷어내고 복잡한 실시간 그림자를 단순화하여 최적화와 비주얼 퀄리티를 최상으로 절충."
    ]
  },
  ta_preview_shadow_fix: {
    title: "유니티 3D 매시 프리뷰 그림자 Y축 반전 버그 픽서 툴",
    category: "Tools & Plugins (Unity Editor)",
    videoUrl: "https://www.youtube.com/embed/ntnLfhvuHyA",
    team: "개인 툴 개발 (R&D)",
    contribution: "에디터 유틸리티 설계 및 후킹 개발 100%",
    overview: "유니티 2022.3 LTS 버전 인스펙터 뷰 프리뷰 창에서 3D 메시의 실시간 그림자가 상하(Y축) 반전되어 렌더링되는 엔진 코어 결함을 우회 수정한 확장 플러그인 도구입니다.",
    details: [
      "<strong>유니티 에디터 비공개 API 리플렉션 후킹:</strong> 유니티 엔진 에디터 렌더러 루틴의 Private 클래스 카메라 버퍼에 접근하기 위해 C# Reflection API와 메모리 매핑 구조를 정교하게 설계.",
      "<strong>Projection Matrix 실시간 오버라이드:</strong> 프리뷰 렌더 패스 직전, 그림자 스케일링 Projection 행렬을 강제 캐치해 Y축을 역산 리버스하는 에디터 렌더 타겟 코어 제작.",
      "<strong>개발 비주얼 신뢰도 200% 복구:</strong> 씬 뷰의 라이팅과 프리뷰 창의 라이팅 불일치 현상을 종결시켜 3D 그래픽 아티스트 및 디자이너의 작업 피드백 시간 대폭 단축."
    ]
  },
  ta_cloud_shadow: {
    title: "실시간 구름 이동 라이팅 프로젝션 그림자 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/PLc2ykvCMp8",
    team: "개인 연구 (R&D)",
    contribution: "셰이더 그래픽스 개발 100%",
    overview: "구름 3D 오브젝트를 대량으로 배치하는 부하 없이, 셰이더 내부 수학적 2D 회전 행렬 연산과 노이즈를 결합해 지형 전체에 실시간 구름 드리프트 그림자를 연출하는 고효율 그래픽스 기법입니다.",
    details: [
      "<strong>2D Rotation Matrix 적용 드리프트:</strong> 단순 선형 이동이 아닌 바람 방향 벡터에 대응하여 구름 그림자 형상이 부드럽게 비틀어지며 회전하고 흘러가는 동적 연산 탑재.",
      "<strong>Custom Render Pass 섀도우 마스크 바인딩:</strong> 지형 머티리얼에 종속되지 않는 독립 패스 드로잉을 구현하기 위해 유니티 섀도우 버퍼(Shadow Map) 마스킹 단계에 연산을 추가하여 지형 위의 모든 물체에 그림자가 일체형으로 깔끔히 적용되도록 설계.",
      "<strong>모바일 대역폭 90% 이상 세이빙:</strong> 구름의 메시 데이터 및 애니메이션 부하를 0으로 만들고 단 1장의 노이즈 텍스처 매핑 연산만으로 입체적인 자연 경관 완성."
    ]
  },
  ta_water_rendering: {
    title: "스타일라이즈드 수심 반응형 물 렌더링 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/A6Pn09UK9-s",
    team: "개인 연구 (R&D)",
    contribution: "테크니컬 아티스트(TA) 100%",
    overview: "수심(깊이) 변화에 따라 물의 투명도가 자동 조절되고 환경 물체 접경 부위에 잔잔한 흰색 거품 포말이 형성되는 고품질 스타일라이즈드 수면 셰이더입니다.",
    details: [
      "<strong>Depth-based 수심 그라데이션 보간:</strong> 카메라의 Depth Buffer 텍스처를 파싱하고 수면과의 깊이 차(Depth Difference) 값을 보간하여 얕은 해안가는 투명하고 깊은 해저는 짙은 파란색으로 표현.",
      "<strong>실시간 경계 거품(Foam) 자동 드로잉:</strong> 수면 아래 배치된 지형지물의 충돌 볼륨 깊이 차를 실시간 계산하여, 바위나 지형 경계 주변에 연하게 소용돌이치는 듯한 물결 포말을 자동 생성.",
      "<strong>수면 일렁임 굴절 왜곡:</strong> Normal 맵 두 장의 UV 스크롤 방향을 상호 교차 분산시켜, 빛이 수면에 굴절되어 일렁거리는 듯한 굴절 디스토션 기법 구축."
    ]
  },
  ta_soul_dissolve: {
    title: "몬스터 소멸 디졸브 및 영혼 흡수 경로 VFX 연출",
    category: "VFX & Animation (Universal)",
    videoUrl: "https://www.youtube.com/embed/AT_bUEfECW0",
    team: "개인 연구 (R&D)",
    contribution: "TA & VFX 그래픽 디자인 100%",
    overview: "몬스터 처치 시 물리적 타격감을 연출하기 위해, 발끝부터 타들어 가는 디졸브 효과와 3차 베지에 스플라인 곡선 패스를 타고 플레이어에게 동적으로 날아와 수확되는 고성능 영혼 수확 VFX 연출입니다.",
    details: [
      "<strong>메시 그라데이션 디졸브 셰이더:</strong> 버텍스 축의 높이 데이터를 파싱해 소멸 한계선 경계에 강렬한 HDR Emission 발광 처리가 일어나며 메시가 녹아내리는 연출 설계.",
      "<strong>3차 베지에 스플라인 경로 탐색 VFX:</strong> 플레이어 캐릭터가 런타임에 움직이더라도 영혼 파티클이 정확히 조준하여 곡선을 그리며 날아오도록 파티클 본 유도 벡터 제어 수식 탑재.",
      "<strong>C# 스크립트 기반 고성능 타이밍 동기화:</strong> 애니메이션 소멸 시점, 파티클 분사, 플레이어 획득 UI 연동의 트리거 시퀀스를 프레임 오차 없이 완벽히 동기화해 최고의 피드백 타격감 선사."
    ]
  },
  noopy: {
    title: "AR 포토카드 '누피(Noopy)'",
    category: "Web AR & Apps (Mobile App)",
    videoUrl: null, // No video, text and images only
    team: "클라이언트 1명 (단독 외주 프리랜서)",
    contribution: "Unity 클라이언트 모바일 엔진 개발 및 셰이더 최적화 100%",
    overview: "정적인 포토카드 위에 모바일 카메라 화면을 비추었을 때 입체적인 AR 특수효과 및 비디오 가수가 증강 오버레이되는 실시간 모바일 AR 포토카드 서비스 누피(Noopy)의 핵심 기능 개발 외주 프로젝트입니다.",
    details: [
      "<strong>모바일 실시간 블러 렌더링 한계 극복:</strong> 타 외주사 및 기존 개발진이 모바일 GPU 연산 부하(가우시안 블러 사용 시 10~15fps 및 디바이스 과열)를 이유로 구현 불가능 판정을 내린 실시간 화면 블러 락(Lock) 해제 기능을 완벽히 해결.",
      "<strong>Downsampling 및 Dual-pass Kawase Blur 적용:</strong> 무거운 Gaussian 연산 대신 렌더 텍스처 해상도를 1/4, 1/8로 축소(Downsampling)하여 메모리 대역폭 부하를 완전 차단하고, 모바일 GPU 연산량이 획기적으로 낮으면서도 경계가 부드러운 <strong>Dual-pass Kawase Blur</strong> 셰이더를 자체 설계 및 적용.",
      "<strong>시그니처 상품 '익스크루시브 카드' 론칭:</strong> 저사양 모바일 단말기에서도 프레임 저하 없는 안정적 60fps 풀 프레임 블러 연출을 성공시킴으로써, 회사의 최고 매출 라인업인 시그니처 BM '익스크루시브 카드' 론칭의 결정적 공헌.",
      "<strong>안정적 모바일 영상 녹화 파이프라인:</strong> 미디어 인코딩 최적화를 통해 실시간 AR 증강 연출 화면를 매끄럽게 화면 녹화 및 로컬 미디어 라이브러리에 저장하는 비디오 파이프라인 빌딩."
    ]
  },
  rainbow_ar: {
    title: "레인보우 AR 뷰어 Engine",
    category: "Web AR & Apps (WebGL / Web)",
    videoUrl: null,
    team: "인하우스 정규직 개발팀 메인 리드",
    contribution: "Unity AR 크로스 플랫폼 빌드 파이프라인 및 OpenCV.js 트래킹 100%",
    overview: "누피(Noopy) 프리랜서 당시에 보여준 압도적인 최적화 및 문제 해결 역량을 인정받아 인하우스 개발팀으로 스카웃되어 정규직으로 리드한 크로스 플랫폼 AR 뷰어 및 Web AR 분석 기술 엔진 구축 프로젝트입니다.",
    details: [
      "<strong>크로스 플랫폼 AR 통합 대응:</strong> Android, iOS 단말 앱 환경뿐만 아니라 모바일 브라우저 WebGL 환경 전체에서 레이턴시 없이 통일되고 안정된 AR 트래킹 뷰어 파이프라인 설계 및 빌드.",
      "<strong>OpenCV.js 연동 마커 판별 모듈 개발:</strong> 브라우저 메모리 부하와 JS 비동기 버퍼 전송을 차단하는 모듈을 R&D하여, 이미지 마커의 적합성(별점 점수 계산)을 실시간 분석 및 판별 시각화 리포팅 제공.",
      "<strong>사내 CS 부서 프린트 자동화 소프트웨어 구축:</strong> 수작업으로 발생하던 인쇄용 마킹 오류 및 CS 반복 부하 프로세스를 한 번에 처리해 주는 전용 툴을 개발하여 사내 CS 운영 일일 리소스 50% 단축 달성."
    ]
  }
};

/* ==========================================
   2. FLOATING MENU & MOBILE NAVIGATION
   ========================================== */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    navbar.classList.toggle('active');
  });
}

// Close mobile menu on clicking any navigation anchor
const navAnchors = document.querySelectorAll('.nav-links a');
navAnchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    navLinks.classList.remove('active');
    navbar.classList.remove('active');
  });
});

/* ==========================================
   3. NAVIGATION ACTIVE LINK INTERACTION
   ========================================== */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navAnchors.forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href') === `#${id}`) {
          anchor.classList.add('active');
        }
      });
    }
  });

  // Floating navbar background intensity transition on scroll
  if (scrollPos > 50) {
    navbar.style.background = 'rgba(10, 12, 18, 0.85)';
    navbar.style.top = '10px';
  } else {
    navbar.style.background = 'rgba(13, 17, 23, 0.65)';
    navbar.style.top = '20px';
  }
});

/* ==========================================
   4. SCROLL ENTER TRIGGER FADE-IN OBSERVER
   ========================================== */
const fadeInSections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}, observerOptions);

fadeInSections.forEach(section => {
  sectionObserver.observe(section);
});

/* ==========================================
   5. PORTFOLIO DYNAMIC FILTERING ENGINE
   ========================================== */
const filterButtons = document.querySelectorAll('.portfolio-filters button[data-filter]');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Active button state transition
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.classList.remove('hide');
        // Simple subtle entrance transition on category switch
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(10px)';
        setTimeout(() => {
          card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        }, 30);
      } else {
        card.classList.add('hide');
      }
    });
  });
});

// ==========================================
// 5.5. TA LAB DYNAMIC FILTERING ENGINE
// ==========================================
const taFilterButtons = document.querySelectorAll('[data-ta-filter]');
const taCards = document.querySelectorAll('.ta-card');

taFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Active button state transition
    taFilterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-ta-filter');

    taCards.forEach(card => {
      const cardCategory = card.getAttribute('data-ta-category');
      
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.classList.remove('hide');
        // Simple subtle entrance transition on category switch
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(10px)';
        setTimeout(() => {
          card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
        }, 30);
      } else {
        card.classList.add('hide');
      }
    });
  });
});

/* ==========================================
   6. INTERACTIVE DETAIL & VIDEO MODAL CONTROLLER
   ========================================== */
const projectModal = document.getElementById('projectModal');
const modalBodyContent = document.getElementById('modalBodyContent');

window.openProjectModal = function(projectId) {
  const data = projectDetailsData[projectId];
  if (!data) return;

  // Design modal HTML structure
  let modalContent = `
    <h2>${data.title}</h2>
    <p class="modal-subtitle">${data.category}</p>
  `;

  // Embed YouTube video if exists
  if (data.videoUrl) {
    modalContent += `
      <div class="modal-video-wrapper">
        <iframe src="${data.videoUrl}?autoplay=1&mute=1&enablejsapi=1" title="${data.title} Play Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  } else {
    // Beautiful dynamic static backdrop icon for text-only items
    modalContent += `
      <div style="width: 100%; height: 120px; border-radius: 12px; background: var(--accent-gradient); display: flex; align-items: center; justify-content: center; margin-bottom: 30px; opacity: 0.85; box-shadow: 0 4px 20px var(--cyan-glow);">
        <svg style="width: 48px; height: 48px; fill: var(--bg-deep);" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      </div>
    `;
  }

  // Meta Grid Section
  modalContent += `
    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <h4>참여 인원 및 구성</h4>
        <p>${data.team}</p>
      </div>
      <div class="modal-meta-item">
        <h4>본인 기여도</h4>
        <p>${data.contribution}</p>
      </div>
    </div>
  `;

  // Overview Section
  modalContent += `
    <div class="modal-text-section">
      <h3>프로젝트 개요</h3>
      <p>${data.overview}</p>
    </div>
  `;

  // Details Bullet List Section
  modalContent += `
    <div class="modal-text-section">
      <h3>주요 업무 및 기술 성과</h3>
      <ul>
        ${data.details.map(bullet => `<li>${bullet}</li>`).join('')}
      </ul>
    </div>
  `;

  // Set modal overlay active state
  modalBodyContent.innerHTML = modalContent;
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
};

window.closeProjectModal = function() {
  // Empty modal body iframe first to stop YouTube video playback immediately
  modalBodyContent.innerHTML = '';
  projectModal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Unlock background scrolling
};

// Close modal when clicking outside container on overlay canvas
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });
}
