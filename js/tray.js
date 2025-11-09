window.addEventListener('scroll', () => {
  const tray = document.querySelector('.tray');
  const scrollY = window.scrollY;
  const heroHeight = document.querySelector('.hero-slider').offsetHeight;

  if (scrollY > heroHeight / 2) {
    tray.style.bottom = '0'; // slide tray fully into view
  } else {
    tray.style.bottom = '-100%'; // hide tray off-screen
  }
});
