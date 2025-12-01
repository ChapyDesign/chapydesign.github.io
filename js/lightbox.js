document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".project-images img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const btnClose = document.querySelector(".lightbox-close");
    const btnPrev = document.querySelector(".lightbox-prev");
    const btnNext = document.querySelector(".lightbox-next");

    let index = 0;

    function showLightbox(i) {
        index = i;
        lightboxImage.src = images[i].src;
        lightbox.classList.add("fade-in");
        lightbox.style.display = "flex";
    }

    images.forEach((img, i) => {
        img.addEventListener("click", () => showLightbox(i));
    });

    // Close lightbox
    btnClose.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Prev / Next
    btnPrev.addEventListener("click", () => {
        index = (index === 0) ? images.length - 1 : index - 1;
        lightboxImage.src = images[index].src;
    });

    btnNext.addEventListener("click", () => {
        index = (index === images.length - 1) ? 0 : index + 1;
        lightboxImage.src = images[index].src;
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display !== "flex") return;
        if (e.key === "Escape") lightbox.style.display = "none";
        if (e.key === "ArrowRight") btnNext.click();
        if (e.key === "ArrowLeft") btnPrev.click();
    });

    // Click outside image to close
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
