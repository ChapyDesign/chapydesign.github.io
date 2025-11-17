// --- HERO FADE ON SCROLL ---
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.project-hero img');
  if (!heroImg) return;

  const scrollY = window.scrollY;
  const fade = Math.max(0.5, 1 - scrollY / 600); // adjust min opacity or scroll factor
  heroImg.style.opacity = fade;
});


// --- TRAY CLOSE LOGO ---
const trayCloseBtn = document.querySelector('.tray-close');
if (trayCloseBtn) {
  trayCloseBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
