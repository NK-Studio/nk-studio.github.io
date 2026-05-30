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
    title: "서서담 'NEXO' 보스 - 실시간 동적 IK 리깅",
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
    title: "서서담 'NEXO' 보스 - 전기에너지 코어 흐름 셰이더",
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
    title: "아웃라인 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/Bp0t2KFC3S4",
    team: "개인 연구 (R&D)",
    contribution: "셰이더 그래픽스 개발 100%",
    overview: "3D 공간에서 객체의 입체적인 실루엣을 부드럽게 잡아주는 범용적인 실시간 아웃라인 셰이더입니다. 원근 거리와 카메라 각도에 상관없이 안정적인 엣지를 유지하며, 다양한 렌더링 스타일에 보편적으로 적용할 수 있습니다.",
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
    title: "구름 그림자 셰이더",
    category: "Shaders & Rendering (Universal)",
    videoUrl: "https://www.youtube.com/embed/PLc2ykvCMp8",
    team: "개인 연구 (R&D)",
    contribution: "셰이더 그래픽스 개발 100%",
    overview: "하늘에 실제 구름 3D 오브젝트를 배치하지 않고, 노이즈 텍스처의 UV 흐름 이동과 Cast Shadow 렌더링을 조합하여 Top View 시점의 게임에서 구름 그림자가 지나가는 듯한 연출을 유도하는 가볍고 실용적인 그림자 셰이더입니다.",
    details: [
      "<strong>UV 흐름 이동 연산:</strong> 바람 방향 벡터에 맞춰 노이즈 텍스처를 매끄럽게 UV 스크롤(Scrolling)하여 흘러가는 구름 형상을 구현.",
      "<strong>Cast Shadow 렌더링:</strong> 지형이나 게임 내 오브젝트 위에 어둡게 투영된 그림자가 지나가도록 하여, 실제 구름이 하늘을 덮어 가리는 듯한 현장감 선사.",
      "<strong>극도의 렌더링 최적화:</strong> 2D 회전 매트릭스나 복잡한 라이트 프로젝션 연산 등을 완전 배제하고, 단순 텍스처 연산과 섀도우 마스킹만으로 탑뷰 환경에 완벽한 연출 실현."
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
  nupy: {
    title: "AR 포토카드 '누피(Noopy)'",
    category: "Web AR & Apps (Mobile App)",
    videoUrl: "https://www.youtube.com/embed/0jD73brdcIU",
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
  webtoonviewer: {
    title: "WebtoonViewer25 (웹툰 뷰어)",
    category: "Web AR & Apps (Flutter / PWA)",
    videoUrl: "https://www.youtube.com/embed/w_BYznAk8Do",
    team: "1명 (단독 개발)",
    contribution: "Flutter PWA 아키텍처 설계, 반응형 뷰포트 레이아웃 최적화 100%",
    overview: "Flutter 프레임워크 기반으로 구축하고 크로스 플랫폼 PWA(Progressive Web App) 규격을 적용하여, 2025년 청강문화산업대학교 웹툰만화콘텐츠전공 졸업전시회 현장에서 크롬북 디바이스를 통해 관람객들이 학생들의 졸업 웹툰 작품을 쾌적하고 한눈에 감상할 수 있도록 개발한 고성능 웹툰 전시 전용 뷰어 웹 애플리케이션입니다.",
    details: [
      "<strong>Flutter 기반 크로스 플랫폼 PWA 구축:</strong> 네이티브 앱에 준하는 반응 속도를 위해 플러터를 선정하고 PWA 규격을 이식하여 별도 설치 과정 없이 고속 캐싱 및 크롬북 터치 디스플레이 완벽 대응.",
      "<strong>졸업전시회 무인 쇼케이스 연동:</strong> 2025년 청강대 웹툰 졸업 전시 현장의 크롬북 디바이스 한쪽에 실시간 거치 시연되어 관람객들이 웹툰 작품을 부드럽게 무한 롤링 및 줌인/아웃하여 볼 수 있도록 뷰어 기능 고도화.",
      "<strong>반응형 모바일 및 태블릿 뷰포트 최적화:</strong> 모바일 기기뿐만 아니라 크롬북 디바이스 화면 해상도 규격에 맞춰 종횡비를 자동 스케일링하고 웹툰 이미지 리소스 로드 속도를 획기적으로 개선.",
      "<strong>안정적인 무인 거치 운용성 확보:</strong> 오프라인/네트워크 불안정 상태에서도 서비스 워커 동작을 통한 리소스 복원 기능을 구현하여 전시 기간 내내 다운타임 없는 100% 무중단 운용 달성."
    ]
  },
  nexo: {
    title: "NEXO (넥소)",
    category: "Games & TA (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/zAwMnne5-eE",
    team: "졸업작품 개발팀 '서서담' (TA 이펙터 서포터 참여)",
    contribution: "UI 블러, 보스 전기 플로우, 카메라 빗물 스크린, 캐릭터 툰 셰이딩 등 핵심 TA 셰이더 서포트",
    overview: "청강문화산업대학교 졸업작품팀 '서서담'의 하이엔드 액션 프로젝트 NEXO에 TA 이펙터 서포터로 참여하여, Unity 6.1 엔진 및 URP 16 환경 하에서 게임의 그래픽 완성도와 연출력을 극대화하는 핵심 특수 효과 및 보스/캐릭터 셰이딩 시스템을 전담 지원한 프로젝트입니다.",
    details: [
      "<strong>Unity 6.1 & URP 16 그래픽 파이프라인 대응:</strong> 최신 엔진 규격에 맞춘 포스트 프로세싱 피드백 제어 및 셰이더 연산 고속화를 R&D하여 기기 부하 최소화.",
      "<strong>화면 UI 블러 셰이딩 구현:</strong> UI 오픈 시 런타임 환경에서 뒷배경이 부드럽고 고급스럽게 가려지는 실시간 화면 블러 셰이더 구축.",
      "<strong>보스 전기 플로우 이동 셰이딩:</strong> 기계 거대 보스의 약점 및 신체 표면 회로를 따라 전기가 흐르고 맥동 치는 실시간 UV Flow 셰이더 개발.",
      "<strong>카메라 빗물 풀화면 스크린 셰이딩:</strong> 날씨 연출의 극대화를 위해 렌즈 표면에 실시간으로 빗물이 맺히고 흘러내리는 듯한 Full-screen Screen Space 빗물 왜곡 포스트 셰이더 구현.",
      "<strong>캐릭터 툰 렌더링 셰이딩:</strong> 캐릭터의 형태와 비주얼 특징을 돋보이게 하는 스타일라이즈드 캐릭터 툰 렌더링 파이프라인 협업."
    ]
  },
  dododoit: {
    title: "DoDo Doit (두두두잇)",
    category: "Games & TA (PC / Mobile / Runner)",
    videoUrl: "https://www.youtube.com/embed/lnLTA-0WeUQ",
    team: "졸업작품 개발팀 '쁘띠꿍디' (TA / 그래픽 디렉팅 지원)",
    contribution: "오큘루전 컬링, 렌더 스케일 최적화 R&D, 라이팅 베이킹 및 포스트 프로세싱 튜닝 교육 100%",
    overview: "청강문화산업대학교 졸업작품팀 '쁘띠꿍디'의 러너 장르 프로젝트 DoDo Doit에 TA로 참여하여, 최적화 노하우가 부족한 배경 모델러들을 교육하고 엔진 성능 이슈를 종합 진단/해결하여 쾌적한 플레이 성능을 확보한 기술 지원 프로젝트입니다.",
    details: [
      "<strong>배경 모델러 대상 엔진 최적화 및 라이팅 베이킹 교육:</strong> 한 씬에 대규모 사물을 과도하게 렌더링하여 프레임이 저하되던 배경 파이프라인의 원인을 직접 짚어주고, 유니티 라이팅 베이크 기법에 관한 실무 교육 세션 진행.",
      "<strong>카메라 오큘루전 컬링(Occlusion Culling) 적용:</strong> 보이지 않는 지형지물이 과도하게 드로우 콜을 낭비하던 구조를 차단하기 위해 유니티 Occlusion Culling 데이터 오프라인 베이킹 파이프라인을 구축하여 드로우 콜 대폭 단축.",
      "<strong>Render Scale 및 업스케일러 통합 최적화:</strong> 모바일 및 저사양 PC 타겟의 픽셀 병목(Fillrate)을 해결하기 위해 런타임 렌더 해상도 배율을 0.7로 축소하고 후처리 업스케일러 보정을 거쳐 고해상도 품질을 유지하며 드로우 타임 절감.",
      "<strong>러너 장르 전용 라이팅 베이크 파이프라인 R&D:</strong> 배경이 고정된 채 캐릭터와 가상 트랙이 이동하는 무한 러너 게임의 지형 특성을 고려하여 실시간 라이팅을 정적 머티리얼 라이트 맵(Lightmap)으로 베이킹해 런타임 연산 0에 수렴.",
      "<strong>SSAO 연산 차단 및 모바일 성능 방어:</strong> 빠르게 배경이 스쳐 지나가는 하이 스피드 러너 게임의 특성상 세밀한 구석 접경 그림자(SSAO)는 시각적으로 인지하기 불가능함을 감안, 무거운 화면 공간 앰비언트 오클루전(SSAO) 연산을 의도적으로 차단하여 런타임 계산 부하 대폭 절충."
    ]
  },
  tabuti: {
    title: "타부티 (Tabuti)",
    category: "Games & TA (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/mlkKjLJGvIY",
    team: "졸업작품 개발팀 'Ipari' (TA 서포터 참여)",
    contribution: "Magica Cloth 2 시뮬레이션 환경 구축, HDR Bloom 마스킹 및 아웃라인 셰이더 적용, 기술 자문 100%",
    overview: "청강문화산업대학교 졸업작품팀 'Ipari'의 3D 액션 프로젝트 타부티(Tabuti)에 테크니컬 아티스트 서포터로 참여하여, 캐릭터 및 환경 오브젝트의 물리적 텐션 시뮬레이션을 정밀 세팅하고 그래픽 완성도를 높이는 핵심 연출 셰이딩 구현 및 개발팀 전반의 프로그래밍 이슈를 자문한 프로젝트입니다.",
    details: [
      "<strong>Magica Cloth 2 기반 실시간 천 시뮬레이션 구축:</strong> 캐릭터 의상 및 천 재질의 매끄러운 런타임 흔들림 시뮬레이션을 구현하기 위해 물리 충돌(Collider) 피벗 및 콜라이더 파라미터를 물리 엔진 내 최적으로 통합/적용.",
      "<strong>신화 속 고래 대상 HDR Bloom 마스킹 셰이더 R&D:</strong> 게임 내 상징적인 거대 신화적 생명체인 고래 표면에 림라이트 연산과 커스텀 마스크 텍스처를 블렌딩하여 과도한 난반사 없이 신비롭고 영롱하게 빛나는 발광 비주얼 구현.",
      "<strong>실시간 원근 대응 아웃라인 셰이더 적용:</strong> 버텍스 법선 확장 및 카메라 원근 거리를 역산 보정한 범용 아웃라인 셰이더를 탑재하여 캐릭터 및 고래의 실루엣 시인성 대폭 향상.",
      "<strong>테크니컬 프로그래밍 구조적 자문:</strong> 클라이언트 개발 파트에서 빌드 오류나 아키텍처 상의 질문 등 기술적 병목이 발생할 때마다 빠르고 정확한 디버깅 가이드라인 및 코드 자문 제공."
    ]
  },
  operation: {
    title: "오퍼레이션 (Operation)",
    category: "Games & TA (PC / Steam)",
    videoUrl: "https://www.youtube.com/embed/nbsZhxGLIoE",
    team: "졸업작품 개발팀 '청강리카노' (TA / 클라이언트 서포터 참여)",
    contribution: "UGUI 해상도 대응 솔루션 구현, 시네마신 타임라인 드래곤 보스 연출 설계 및 후처리 효과 복합 제어 100%",
    overview: "청강문화산업대학교 졸업작품팀 '청강리카노'의 3D 프로젝트 Operation에 테크니컬 아티스트 및 클라이언트 서포터로 참여하여, 게임을 처음 구축해보는 학생팀의 구조적 UGUI 해상도 대응 좌표 버그를 근본적으로 수정하고, 시네마신 컷씬 연출력 극대화를 위한 후처리 카메라 효과를 적용한 기술 지원 프로젝트입니다.",
    details: [
      "<strong>UGUI 멀티 해상도 드래그앤드롭 좌표 매핑 버그 수정:</strong> 특정 1920x1080 고정 해상도 캔버스에서만 작동하여 타 모니터 해상도에서 먹통이 되던 드래그 UI 시스템의 앵커링 스케일 배율을 스크린 픽셀 좌표 대비 역산하여 완벽한 해상도 대응 솔루션 설계.",
      "<strong>시네마신(Cinemachine) 드래곤 보스 시네마틱 등장 컷씬 연출:</strong> 타임라인 기반 카메라 카메라 제어를 활용해, 저 멀리 안개 속 검은 드래곤 실루엣 상태로 비행하며 접근하다 최종적으로 사용자 눈앞으로 강렬히 안착하는 연동 등장 시퀀스 구축.",
      "<strong>포스트 프로세싱 중첩을 통한 위압감 시각 극대화:</strong> 보스의 등장을 강조하기 위해 런타임 카메라 충격(Impact)과 동기화하여 RGB 색수차(Chromatic Aberration) 스플릿 현상 및 라디알 블러(Radial Blur) 디스토션 연쇄 발동 기법 탑재."
    ]
  },
  unityanimatorpro: {
    title: "UnityAnimatorPro",
    category: "Packages & Tools (Open Source)",
    projectUrl: "https://github.com/NK-Studio/UnityAnimatorPro",
    videoUrl: null,
    team: "개인 개발 (GitHub 오픈소스 배포)",
    contribution: "오픈소스 패키지 아키텍처 설계 및 런타임 최적화 모듈 개발 100%",
    overview: "유니티의 기본 Animator 컴포넌트 제어 시 파라미터 타입별로 SetInteger, SetFloat, SetBool 등을 매번 분기 호출해야 하는 구조적 불편함을 개선하고, 런타임 가비지 컬렉터(GC) 부하와 코딩 피로도를 최소화하기 위해 개발한 애니메이터 래핑 최적화 오픈소스 패키지입니다.",
    details: [
      "<strong>단일 파라미터 제어 API (SetParam / GetParam):</strong> 자료형에 상관없이 Polymorphism(다형성)을 이용하여 단일 래핑 메소드로 애니메이터의 모든 형태 파라미터를 유연하게 설정 및 조회.",
      "<strong>StringToHash 자동 캐싱 레이어:</strong> 매 프레임 스트링 파싱으로 유발되는 극심한 가비지(GC Heap Allocation) 부하를 방지하기 위해, 최초 등록 시 C# 딕셔너리에 Animator.StringToHash 정수 해시값을 캐싱하여 즉시 매핑 처리.",
      "<strong>C# 커스텀 애트리뷰트 콜백 바인딩:</strong> State Machine Behaviour를 사용하지 않고도 C# 스크립트 상에서 [AnimatorEnter], [AnimatorStay], [AnimatorExit] 애트리뷰트를 통해 상태 전이 시점의 콜백을 우아하게 관찰.",
      "<strong>결합도 감소 및 사이드 이펙트 제로:</strong> 기존 Animator 컴포넌트의 본래 기능과 완전한 호환성을 유지하여 프로젝트 도중 도입하더라도 사이드 이펙트 없이 부분 이식 가능.",
      "<strong>UPM(Unity Package Manager) 규격 배포:</strong> 유니티 표준 배포용 UPM 팩키징 구조를 준수하여 GitHub URL을 통해 바로 프로젝트에 원클릭 임포트할 수 있도록 배포."
    ]
  }
};
