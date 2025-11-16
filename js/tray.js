// --- Hero Fade on Scroll ---
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-slider');
  if (!hero) return;

  const scrollY = window.scrollY;
  const fade = Math.max(0.5, 1 - scrollY / 600); // adjust strength here

  hero.style.opacity = fade;
});


// --- Tray Close Button ---
// Clicking ANY element with .tray-close will collapse the tray by scrolling to top
document.addEventListener('click', (event) => {
  // match clicks on .tray-close or inside it
  if (event.target.closest('.tray-close')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
