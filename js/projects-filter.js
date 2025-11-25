// projects-filter.js
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-bar button");
    const projectCards = document.querySelectorAll(".projects-all-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    card.style.display = "flex"; // show the card
                } else {
                    card.style.display = "none"; // hide the card
                }
            });
        });
    });
});
