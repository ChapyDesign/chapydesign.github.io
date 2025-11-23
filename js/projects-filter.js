document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-bar button");
  const cards = document.querySelectorAll(".projects-all-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");

        // Show all
        if (filter === "all") {
          card.style.display = "block";
        } 
        // Show only matching category
        else if (category === filter) {
          card.style.display = "block";
        } 
        // Hide non-matching
        else {
          card.style.display = "none";
        }
      });
    });
  });
});
