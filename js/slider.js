const slidesWrapper = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;
const totalSlides = slides.length;

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.dataset.index = i;
  pagination.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  currentIndex = index;
  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

// Auto-slide every 6s
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}, 6000);

// Click dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(Number(dot.dataset.index));
  });
});
