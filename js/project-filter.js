const filterButtons = document.querySelectorAll('.tray .filter');
const projectCards = document.querySelectorAll('.projects-grid .project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = 'block'; // show matching cards
      } else {
        card.style.display = 'none';  // hide non-matching cards
      }
    });
  });
});
