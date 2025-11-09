// ----------------------
// Slide Auto-Rotation
// ----------------------
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 6000; // 6 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, slideInterval);

// ----------------------
// Tray Fade on Scroll
// ----------------------
const tray = document.querySelector('.tray');
const coverSection = document.querySelector('.cover-section');

window.addEventListener('scroll', () => {
  const trayHeight = tray.offsetHeight;
  const scrollY = window.scrollY;

  // Fade tray to 50% while scrolling
  if (scrollY < trayHeight) {
    const fade = 1 - scrollY / (trayHeight * 0.5);
    tray.style.opacity = Math.max(fade, 0.5);
  }

  // Bring cover section over tray
  if (scrollY > trayHeight * 0.1) {
    coverSection.style.zIndex = 3;
  } else {
    coverSection.style.zIndex = 2;
  }
});
