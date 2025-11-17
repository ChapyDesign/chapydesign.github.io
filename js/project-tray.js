document.addEventListener('DOMContentLoaded', () => {

  // --- Tray Close Logo ---
  const trayCloseBtn = document.querySelector('.tray-close');
  if (trayCloseBtn) {
    trayCloseBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- RELATED PROJECTS ---
  const projects = [
    { title: "Deadwood Tree Camo", folder: "deadwood-tree-camo", category: "design", thumb: "/img/project/design/deadwood/project-tray-image.jpg" },
    { title: "Example 1", folder: "example-1", category: "design", thumb: "/images/projects/example-1/thumb.jpg" },
    { title: "Example 2", folder: "example-2", category: "design", thumb: "/images/projects/example-2/thumb.jpg" },
    { title: "MML Project", folder: "mml-project", category: "mml", thumb: "/images/projects/mml-project/thumb.jpg" },
    { title: "Art Project", folder: "art-project", category: "art", thumb: "/images/projects/art-project/thumb.jpg" },
  ];

  const currentCategory = document.body.dataset.type; // "design"
  const currentTitle = document.querySelector('.project-title h1').textContent;
  const relatedContainer = document.getElementById('related-projects-grid');

  projects.forEach(p => {
    if (p.category === currentCategory && p.title !== currentTitle) {
      // Create project-card element like home page
      const card = document.createElement('a');
      card.href = `/project/${p.folder}`;
      card.className = "project-card";
      card.dataset.type = p.category;

      card.innerHTML = `
        <div class="project-image" style="background-image: url('${p.thumb}');"></div>
        <div class="project-details">
          <h2 class="project-title">${p.title}</h2>
          <div class="project-meta">
            <span class="project-filter">
              <span class="material-symbols-rounded icon">gradient</span>
            </span>
            <span class="project-date">2025</span>
          </div>
        </div>
      `;

      relatedContainer.appendChild(card);
    }
  });

});
