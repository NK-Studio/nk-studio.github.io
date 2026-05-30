/* ==========================================
   PORTFOLIO BUSINESS LOGIC (app.js)
   ========================================== */

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

  // Project External URL Link Button if exists
  if (data.projectUrl) {
    modalContent += `
      <div style="margin-top: -10px; margin-bottom: 25px; display: flex; justify-content: flex-start;">
        <a href="${data.projectUrl}" target="_blank" class="btn btn-secondary" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 22px; font-size: 0.85rem; border-color: rgba(255,255,255,0.15);">
          <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub 저장소 바로가기
          <svg style="width: 12px; height: 12px; fill: currentColor; margin-left: 2px;" viewBox="0 0 24 24"><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6H6z" /></svg>
        </a>
      </div>
    `;
  }

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

/* ==========================================
   7. CONTACT SYSTEM LOGIC (Clipboard Copy & Mailto Form)
   ========================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" class="toast-success-icon"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span class="toast-message"></span>
    `;
    document.body.appendChild(toast);
  }
  toast.querySelector('.toast-message').textContent = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2500);
}

// Copy email address handler
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('bnm000215@naver.com').then(() => {
      showToast('이메일 주소가 복사되었습니다!');
      const tooltip = document.getElementById('copyTooltip');
      if (tooltip) {
        tooltip.textContent = '복사 완료!';
        setTimeout(() => {
          tooltip.textContent = '복사';
        }, 2000);
      }
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
    });
  });
}

// Interactive mailto form handler
window.handleContactSubmit = function(event) {
  event.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  
  const mailtoLink = `mailto:bnm000215@naver.com` + 
    `?subject=${encodeURIComponent('[포트폴리오 문의] ' + subject)}` + 
    `&body=${encodeURIComponent(
      `안녕하세요,\n\n${name}님께서 보내신 포트폴리오 사이트 문의 내용입니다.\n\n` + 
      `-----------------------------------------\n` +
      `보낸이: ${name}\n` +
      `제목: ${subject}\n` +
      `-----------------------------------------\n\n` + 
      `${message}\n\n` +
      `-----------------------------------------`
    )}`;
    
  showToast('메일 작성 클라이언트를 실행합니다...');
  
  setTimeout(() => {
    window.location.href = mailtoLink;
    document.getElementById('contactForm').reset();
  }, 800);
};

/* ==========================================
   15. OPEN SOURCE LAB DIRECTORY FILTERING ENGINE
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  const labSearchInput = document.getElementById('labSearchInput');
  const labFilterButtons = document.querySelectorAll('.lab-filter-btn');
  const dirCards = document.querySelectorAll('.dir-card');
  const labMoreBtnContainer = document.querySelector('.lab-more-btn-container');
  const loadMoreBtn = document.getElementById('labLoadMoreBtn');

  let isExpanded = false;

  function filterLabDirectory() {
    const query = labSearchInput ? labSearchInput.value.toLowerCase().trim() : '';
    const activeFilterBtn = document.querySelector('.lab-filter-btn.active');
    const activeCategory = activeFilterBtn ? activeFilterBtn.getAttribute('data-lab-filter') : 'all';

    const isDefaultState = (query === '' && activeCategory === 'all');
    let matchCount = 0;

    dirCards.forEach(card => {
      const cardCategory = card.getAttribute('data-lab-category');
      const title = card.querySelector('h4').textContent.toLowerCase();
      const desc = card.querySelector('.dir-card-desc').textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.dir-card-tags span')).map(span => span.textContent.toLowerCase()).join(' ');

      const matchesCategory = (activeCategory === 'all' || cardCategory === activeCategory);
      const matchesSearch = (title.includes(query) || desc.includes(query) || tags.includes(query));

      if (matchesCategory && matchesSearch) {
        if (isDefaultState && !isExpanded && matchCount >= 6) {
          card.classList.add('hide-item');
        } else {
          card.classList.remove('hide-item');
          // Smooth entry animation
          card.style.opacity = '0';
          card.style.transform = 'scale(0.98) translateY(5px)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
          }, 10);
        }
        matchCount++;
      } else {
        card.classList.add('hide-item');
      }
    });

    // Update Load More Button visibility and text
    if (query !== '' || activeCategory !== 'all') {
      if (labMoreBtnContainer) labMoreBtnContainer.style.display = 'none';
    } else {
      if (labMoreBtnContainer) labMoreBtnContainer.style.display = 'flex';
      const chevronIcon = document.getElementById('chevronIcon');
      if (loadMoreBtn && chevronIcon) {
        if (isExpanded) {
          loadMoreBtn.querySelector('span').textContent = '오픈소스 폴더 접기';
          chevronIcon.style.transform = 'rotate(180deg)';
        } else {
          loadMoreBtn.querySelector('span').textContent = '더 많은 오픈소스 보기';
          chevronIcon.style.transform = 'rotate(0deg)';
        }
      }
    }
  }

  if (labSearchInput) {
    labSearchInput.addEventListener('input', filterLabDirectory);
  }

  labFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      labFilterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      filterLabDirectory();
    });
  });

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      filterLabDirectory();
      
      // Smooth scroll back to top of directory if collapsed to avoid getting lost on long pages
      if (!isExpanded) {
        const wrapper = document.querySelector('.lab-directory-wrapper');
        if (wrapper) {
          wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  // Initialize visibility state
  filterLabDirectory();
});

