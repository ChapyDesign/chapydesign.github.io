// load-nav.js
fetch("/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // After nav is injected, activate hamburger logic
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  })
  .catch(err => console.error("Error loading navigation:", err));
// JavaScript Document