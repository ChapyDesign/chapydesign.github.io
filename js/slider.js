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
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Auto-slide every 6 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}, 7000);

// Dot click behavior
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    goToSlide(Number(dot.dataset.index));
  });
});

// Initialize
goToSlide(0);
