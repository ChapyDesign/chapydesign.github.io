const filterButtons = document.querySelectorAll('.tray .filter');
const projectLinks = document.querySelectorAll('.projects-grid > a'); // select <a> wrappers
const grid = document.querySelector('.projects-grid');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // 1. Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    const visible = [];

    projectLinks.forEach(link => {
      const card = link.querySelector('.project-card');
      const type = card.dataset.type;

      if (filter === 'all' || type === filter) {
        link.classList.remove('hidden');  // toggle <a> visibility
        visible.push(link);               // reorder the <a>
      } else {
        link.classList.add('hidden');     // hide <a> entirely
      }
    });

    // 2. Reorder visible links
    visible.forEach(link => grid.appendChild(link));
  });
});
