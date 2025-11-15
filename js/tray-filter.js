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

    const visibleCards = [];

    // 2. Show/hide cards with animation
    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.classList.remove('hidden');
        visibleCards.push(card);
      } else {
        card.classList.add('hidden');
      }
    });

    // 3. Shuffle visible cards inline by re-appending them
    visibleCards.forEach(card => grid.appendChild(card));
  });
});
