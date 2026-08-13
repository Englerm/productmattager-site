// ============================================================
// NAV — glass effect on scroll
// ============================================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 48);
}, { passive: true });

// ============================================================
// SCROLL ANIMATIONS — fade-up on enter
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ============================================================
// SMOOTH SCROLL — anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// CASE STUDY ACCORDION
// ============================================================
document.querySelectorAll('.case-study').forEach(article => {
  const btn = article.querySelector('button.case-study__link');
  if (!btn) return;
  const panel = document.getElementById(btn.getAttribute('aria-controls'));

  article.addEventListener('click', (e) => {
    if (e.target.closest('.case-study__panel')) return;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('button.case-study__link[aria-expanded="true"]').forEach(openBtn => {
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.textContent = 'Read the story →';
      document.getElementById(openBtn.getAttribute('aria-controls')).classList.remove('is-open');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = 'Close ↑';
      panel.classList.add('is-open');
    }
  });
});
