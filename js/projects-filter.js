document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-bar button");
    const projectCards = document.querySelectorAll(".projects-all-card");

    // Function to apply a filter
    function applyFilter(filter) {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        filterButtons.forEach(btn => {
            if (btn.getAttribute("data-filter") === filter) {
                btn.classList.add("active");
            }
        });

        projectCards.forEach(card => {
            const category = card.getAttribute("data-category");
            if (filter === "all" || category === filter) {
                card.style.display = "flex"; // show the card
            } else {
                card.style.display = "none"; // hide the card
            }
        });
    }

    // Attach click events
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            applyFilter(filter);
        });
    });

    // Check URL for pre-selected filter
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get("filter");
    if (filterParam) {
        applyFilter(filterParam);
    } else {
        applyFilter("all"); // default
    }
});
