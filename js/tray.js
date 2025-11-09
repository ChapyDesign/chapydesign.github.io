window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-slider');
  const scrollY = window.scrollY;
  const maxFade = 0.5; // minimum opacity
  const fade = Math.max(maxFade, 1 - scrollY / 600);
  hero.style.opacity = fade;
});
