document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll(".project-images img"));
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".lightbox-close");
  const nextBtn = document.querySelector(".lightbox-next");
  const prevBtn = document.querySelector(".lightbox-prev");

  let currentIndex = 0;

  // Open Lightbox
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage();
      lightbox.classList.add("active");
    });
  });

  // Show image in lightbox
  function showImage() {
    lightboxImg.src = images[currentIndex].src;
  }

  // Close lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // Next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

  // Previous image
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  // Keyboard support (Left / Right / Escape)
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    }
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
});
