// Horizontal slider with pagination + mobile swipe
const slidesContainer = document.querySelector(".hero-slider .slides-container");
const slides = document.querySelectorAll(".hero-slider .slide");
const pagination = document.querySelector(".hero-slider .pagination");

let currentIndex = 0;
const totalSlides = slides.length;

// ----- Create pagination dots -----
slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.dataset.index = i;
  pagination.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

// ----- Move slider -----
function goToSlide(index) {
  currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
  slidesContainer.style.transition = "transform 0.35s ease";
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// ----- Auto-slide -----
let autoSlide = setInterval(nextSlide, 7000);

function stopAutoSlide() {
  clearInterval(autoSlide);
}
function restartAutoSlide() {
  autoSlide = setInterval(nextSlide, 7000);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

// ----- Dot click -----
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    goToSlide(Number(dot.dataset.index));
    restartAutoSlide();
  });
});

// ---------------------------------------------------
// TOUCH SWIPE LOGIC
// ---------------------------------------------------
let startX = 0;
let isDragging = false;
let deltaX = 0;

slidesContainer.addEventListener("touchstart", (e) => {
  stopAutoSlide(); // stop interval while swiping
  startX = e.touches[0].clientX;
  isDragging = true;
  slidesContainer.style.transition = "none"; // allow smooth dragging
});

slidesContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  deltaX = currentX - startX;

  const percentage = deltaX / window.innerWidth * 100;

  slidesContainer.style.transform = `translateX(calc(-${currentIndex * 100}% + ${percentage}%))`;
});

slidesContainer.addEventListener("touchend", () => {
  isDragging = false;

  // If swipe distance is more than 50px → trigger slide change
  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) {
      goToSlide(currentIndex + 1); // swiped left → next
    } else {
      goToSlide(currentIndex - 1); // swiped right → previous
    }
  } else {
    goToSlide(currentIndex); // snap back
  }

  deltaX = 0;
  restartAutoSlide();
});

// Initialize
goToSlide(0);
