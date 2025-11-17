// tray-filter.js
const filterButtons = document.querySelectorAll('.tray .filter');

// IMPORTANT: select the anchor wrappers, not the cards
const projectLinks = document.querySelectorAll('.projects-grid .project-link');
const grid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 1. Button state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    const visible = [];

    // 2. Filter visibility
    projectLinks.forEach(link => {
      const card = link.querySelector('.project-card');
      const type = card.dataset.type;

      if (filter === 'all' || type === filter) {
        link.classList.remove('hidden');
        visible.push(link);
      } else {
        link.classList.add('hidden');
      }
    });

    // 3. Reflow visible cards by moving the *links*, not cards
    visible.forEach(link => grid.appendChild(link));

  });
});
