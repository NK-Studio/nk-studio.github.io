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
const filterButtons = document.querySelectorAll('.filter-btn');
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
