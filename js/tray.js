// Tray scroll effect: moves over hero while keeping hero partially visible
const tray = document.querySelector('.tray');
const hero = document.querySelector('.hero-slider');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Hero fades out as tray scrolls up
  const maxFade = 0.5;
  const heroHeight = hero.offsetHeight;
  const fade = Math.min(scrollY / heroHeight, maxFade);
  hero.style.opacity = 1 - fade;

  // Tray moves with scroll
  tray.style.transform = `translateY(${Math.max(heroHeight - scrollY, 0)}px)`;
});
