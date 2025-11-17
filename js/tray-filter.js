// tray-filter.js

const filterButtons = document.querySelectorAll('.tray .filter');

// Select the anchor wrappers (correct selector for your HTML)
const projectLinks = document.querySelectorAll('.projects-grid a');

const grid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // Update button active states
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    const visible = [];

    // Filter project cards
    projectLinks.forEach(link => {
      const card = link.querySelector('.project-card');
      const type = card.dataset.type;

      if (filter === 'all' || type === filter) {
        card.classList.remove('hidden');
        visible.push(link);
      } else {
        card.classList.add('hidden');
      }
    });

    // Reflow visible cards
    visible.forEach(link => grid.appendChild(link));
  });
});
