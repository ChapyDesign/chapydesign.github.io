// Select filter buttons and project cards
const filters = document.querySelectorAll(".filters .filter");
const projectCards = document.querySelectorAll(".projects-grid .project-card");

// Filter click behavior with animation
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.textContent.toLowerCase();

    // Update active button
    filters.forEach(f => f.classList.remove("active"));
    btn.classList.add("active");

    // Animate project cards
    projectCards.forEach(card => {
      const cardType = card.dataset.type.toLowerCase();
      
      if (filter === "all" || cardType === filter) {
        card.classList.remove("hide"); // fade/scale in
      } else {
        card.classList.add("hide"); // fade/scale out
      }
    });
  });
});
