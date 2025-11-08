let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const slideInterval = 6000; // 6 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Start the slider
setInterval(nextSlide, slideInterval);
