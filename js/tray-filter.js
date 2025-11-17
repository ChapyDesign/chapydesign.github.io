// tray-filter.js
const filterButtons = document.querySelectorAll('.tray .filter');
const projectCards = document.querySelectorAll('.projects-grid .project-card');
const grid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    // 2. Show/hide cards
    const visibleCards = [];
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = "flex"; // make sure it's in the flow
        visibleCards.push(card);
      } else {
        card.style.display = "none"; // remove from flow
      }
    });

    // 3. Re-append visible cards to shuffle them inline
    visibleCards.forEach(card => grid.appendChild(card));
  });
});
