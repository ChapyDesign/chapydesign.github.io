console.log("home-reveal.js loaded");

// =========================================================
// HOME — TYPE REVEAL IMAGE SWAP
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const previewImage = document.getElementById("home-preview-image");

  if (!previewImage) return;

  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const newImage = item.getAttribute("data-image");
      previewImage.src = newImage;
    });

    item.addEventListener("focus", () => {
      const newImage = item.getAttribute("data-image");
      previewImage.src = newImage;
    });
  });
});
