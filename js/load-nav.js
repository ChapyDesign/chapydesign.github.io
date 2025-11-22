// nav-loader.js
document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav-placeholder");

  fetch("/parts/nav.html")
    .then(response => response.text())
    .then(data => {
      navContainer.innerHTML = data;

      // After injecting nav, re-bind hamburger functionality
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    })
    .catch(err => {
      console.error("Error loading nav:", err);
    });
});
