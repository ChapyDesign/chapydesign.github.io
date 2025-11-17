// --- HERO FADE ON SCROLL ---
const hero = document.querySelector('.project-hero img');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const fade = Math.max(0.5, 1 - scrollY / 600); // adjust fade strength
    hero.style.opacity = fade;
  });
}

// --- TRAY CLOSE LOGO ---
const trayCloseBtn = document.querySelector('.tray-close');
if (trayCloseBtn) {
  trayCloseBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
