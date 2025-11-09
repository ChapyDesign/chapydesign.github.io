window.addEventListener('scroll', () => {
  const tray = document.querySelector('.tray');
  const scrollY = window.scrollY;

  // Move tray up proportionally to scroll, but stop at top of viewport
  const trayTop = Math.max(window.innerHeight - scrollY, 0);
  tray.style.top = trayTop + 'px';
});
