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
// 5.4. PROGRAMMER LAB DYNAMIC FILTERING ENGINE
// ==========================================
const progFilterButtons = document.querySelectorAll('[data-prog-filter]');
const progCards = document.querySelectorAll('.prog-card');

progFilterButtons.forEach(button => {
  button.addEventListener('click', () => {
    progFilterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.getAttribute('data-prog-filter');

    progCards.forEach(card => {
      const cardCategory = card.getAttribute('data-prog-category');
      
      if (filterValue === 'all' || cardCategory === filterValue) {
        card.classList.remove('hide');
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
