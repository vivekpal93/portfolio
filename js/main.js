/**
 * ==========================================================================
 * VIVEK PAL — PERSONAL PORTFOLIO
 * Main JavaScript Interactions & UI Logic
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNavigation();
  initScrollSpy();
  initScrollReveal();
  initEmailCopy();
  initHeroCodeCopy();
  initContactForm();
  initProjectModals();
  updateFooterYear();
});

/**
 * 1. Sticky Header scroll state
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check on load
}

/**
 * 2. Mobile Navigation Drawer (Open / Close / Focus trap / Escape key)
 */
function initMobileNavigation() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-footer .btn');

  if (!mobileToggle || !drawer || !backdrop) return;

  const openDrawer = () => {
    mobileToggle.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileToggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  mobileToggle.addEventListener('click', () => {
    const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  backdrop.addEventListener('click', closeDrawer);

  // Close when clicking any link inside mobile navigation
  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      mobileToggle.focus();
    }
  });
}

/**
 * 3. ScrollSpy: Highlight active navigation link based on viewport
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-drawer .mobile-nav-link');

  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveLinks(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));

  function updateActiveLinks(activeId) {
    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

/**
 * 4. Scroll Reveal Animations (with prefers-reduced-motion check)
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/**
 * 5. 1-Click Copy Email
 */
function initEmailCopy() {
  const copyButtons = document.querySelectorAll('.js-copy-email-btn');
  if (!copyButtons.length) return;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-email') || (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.contact.email) || 'vivekpal.dev@example.com';

      const success = await copyTextToClipboard(email);
      if (success) {
        const originalText = btn.innerHTML;
        btn.classList.add('copied');
        btn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;

        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = originalText;
        }, 2200);
      }
    });
  });
}

/**
 * 6. Hero Visual Code Snippet Copy
 */
function initHeroCodeCopy() {
  const codeCopyBtn = document.querySelector('.card-copy-btn');
  const codeBody = document.querySelector('.code-editor-body pre');

  if (!codeCopyBtn || !codeBody) return;

  codeCopyBtn.addEventListener('click', async () => {
    const textToCopy = codeBody.innerText;
    const success = await copyTextToClipboard(textToCopy);

    if (success) {
      codeCopyBtn.style.color = '#34d399';
      codeCopyBtn.setAttribute('title', 'Copied to clipboard!');
      
      setTimeout(() => {
        codeCopyBtn.style.color = '';
        codeCopyBtn.setAttribute('title', 'Copy code snippet');
      }, 2000);
    }
  });
}

/**
 * 7. Contact Form Handling (Realistic mailto fallback + Draft Copy)
 */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  const feedbackBanner = document.querySelector('#contact-feedback');

  if (!form || !feedbackBanner) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#contact-name').value.trim();
    const email = document.querySelector('#contact-email').value.trim();
    const subject = document.querySelector('#contact-subject').value.trim() || 'Portfolio Inquiry / Hello Vivek';
    const message = document.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill out your name, email, and message.');
      return;
    }

    const recipient = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.contact.email) || 'vivekpal.dev@example.com';
    const emailBody = `Hi Vivek,\n\n${message}\n\n---\nFrom: ${name} (${email})`;

    // Create mailto link
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Show transparent feedback
    feedbackBanner.className = 'form-feedback-banner info';
    feedbackBanner.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div>
          <strong>🚀 Opening your email application...</strong>
          <p style="margin-top: 4px; font-size: 0.82rem; color: var(--text-secondary);">
            Since this is a static portfolio without a server backend, your default mail app will open with this message pre-filled.
          </p>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; margin-top: 6px;">
          <button type="button" class="btn btn-sm btn-secondary js-copy-draft-btn" style="padding: 6px 12px; font-size: 0.78rem;">
            📋 Copy Message Draft
          </button>
          <a href="${mailtoUrl}" class="btn btn-sm btn-primary" style="padding: 6px 12px; font-size: 0.78rem;">
            ✉️ Open Mail Client
          </a>
        </div>
      </div>
    `;

    // Attempt to open mailto
    window.location.href = mailtoUrl;

    // Attach listener for draft copy button
    const copyDraftBtn = feedbackBanner.querySelector('.js-copy-draft-btn');
    if (copyDraftBtn) {
      copyDraftBtn.addEventListener('click', async () => {
        const fullDraft = `To: ${recipient}\nSubject: ${subject}\n\n${emailBody}`;
        const copied = await copyTextToClipboard(fullDraft);
        if (copied) {
          copyDraftBtn.innerText = '✅ Draft Copied!';
          setTimeout(() => {
            copyDraftBtn.innerText = '📋 Copy Message Draft';
          }, 2000);
        }
      });
    }
  });
}

/**
 * 8. Project Concept Modals / Friendly Notification
 */
function initProjectModals() {
  const conceptButtons = document.querySelectorAll('.js-concept-btn');
  if (!conceptButtons.length) return;

  conceptButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectTitle = btn.getAttribute('data-project-title') || 'This project';
      showToast(`${projectTitle} is currently an active experiment. Source code and live demo will be published as development progresses!`);
    });
  });
}

/**
 * Simple Toast Notification Helper
 */
function showToast(message) {
  let toast = document.querySelector('.site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'site-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      max-width: 380px;
      background: var(--bg-surface-elevated, #161a26);
      border: 1px solid var(--border-accent, #6366f1);
      color: var(--text-primary, #fff);
      padding: 14px 18px;
      border-radius: 12px;
      font-size: 0.85rem;
      line-height: 1.5;
      box-shadow: 0 10px 30px rgba(0,0,0,0.7);
      z-index: 10000;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  toast.style.pointerEvents = 'auto';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.pointerEvents = 'none';
  }, 4500);
}

/**
 * Utility: Copy Text to Clipboard
 */
async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn('Clipboard API failed, trying fallback...', err);
    }
  }

  // Fallback for older browsers or insecure contexts
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy failed', err);
  }

  document.body.removeChild(textArea);
  return successful;
}

/**
 * Dynamic Footer Year
 */
function updateFooterYear() {
  const yearElement = document.querySelector('#current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

