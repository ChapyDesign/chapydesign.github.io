// Horizontal slider with pagination
const slidesContainer = document.querySelector(".hero-slider .slides-container");
const slides = document.querySelectorAll(".hero-slider .slide");
const pagination = document.querySelector(".hero-slider .pagination");

let currentIndex = 0;
const totalSlides = slides.length;

// Create pagination dots
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Move slider
function goToSlide(index) {
  currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
  slidesContainer.style.transition = "transform 0.4s ease";
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Auto-slide every 7 seconds
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}, 7000);

// Dot click behavior
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    clearInterval(autoSlide);
    goToSlide(Number(dot.dataset.index));
  });
});

// -----------------------------------------------------
// TOUCH SWIPE SUPPORT
// -----------------------------------------------------

let startX = 0;
let isDragging = false;

slidesContainer.addEventListener("touchstart", (e) => {
  clearInterval(autoSlide); // stop auto-slide on swipe
  slidesContainer.style.transition = "none"; // disable animation during drag

  startX = e.touches[0].clientX;
  isDragging = true;
});

slidesContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const deltaX = currentX - startX;

  // Move slider visually during drag
  slidesContainer.style.transform = `translateX(calc(-${currentIndex * 100}% + ${deltaX}px))`;
});

slidesContainer.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  isDragging = false;

  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;

  const swipeThreshold = 50; // must swipe at least 50px

  if (deltaX > swipeThreshold && currentIndex > 0) {
    // Swipe right → go to previous slide
    goToSlide(currentIndex - 1);
  } else if (deltaX < -swipeThreshold && currentIndex < totalSlides - 1) {
    // Swipe left → next slide
    goToSlide(currentIndex + 1);
  } else {
    // Not enough swipe → snap back
    goToSlide(currentIndex);
  }

  // Restart auto-slide after interaction
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }, 8000);
});

// Initialize
goToSlide(0);
