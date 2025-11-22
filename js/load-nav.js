document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav-placeholder");

  // ALWAYS use an absolute path from the root
  fetch("/parts/nav.html")
    .then(response => response.text())
    .then(data => {
      navContainer.innerHTML = data;

      // Re-bind hamburger functionality
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");

      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("open");
        });
      }
    })
    .catch(err => {
      console.error("Error loading nav:", err);
    });
});
