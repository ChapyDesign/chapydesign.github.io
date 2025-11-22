// hamburger.js
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
