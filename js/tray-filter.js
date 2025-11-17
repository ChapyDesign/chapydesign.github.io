// tray-filter.js
const filterButtons = document.querySelectorAll('.tray .filter');
const projectCards = document.querySelectorAll('.projects-grid > a'); // FIXED
const grid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 1. Active state toggle
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    // 2. Filter cards
    const visibleCards = [];

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = "flex";  // card is the <a>, and its child is flex — works perfectly
        visibleCards.push(card);
      } else {
        card.style.display = "none"; // <a> removed from flow — no gaps
      }
    });

    // 3. Reposition visible ones
    visibleCards.forEach(card => grid.appendChild(card));
  });
});
