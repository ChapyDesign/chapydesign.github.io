// --- Hero Fade on Scroll ---
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-slider');
  if (!hero) return;

  const scrollY = window.scrollY;
  const fade = Math.max(0.5, 1 - scrollY / 600); // adjust strength here

  hero.style.opacity = fade;
});


// --- Tray Close Button ---
// Clicking the "chapy" logo scrolls back to the top, collapsing the tray.
const trayCloseBtn = document.querySelector('.tray-close');

if (trayCloseBtn) {
  trayCloseBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
