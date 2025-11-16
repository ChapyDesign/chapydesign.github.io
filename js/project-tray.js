// Close tray logo behavior
const trayCloseBtn = document.querySelector('.tray-close');
if (trayCloseBtn) {
  trayCloseBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- RELATED PROJECTS DYNAMIC LOAD ---
// Example project data
const projects = [
  { title: "Deadwood Tree Camo", folder: "deadwood-tree-camo", category: "pattern", thumb: "/images/projects/deadwood-tree-camo/thumb.jpg" },
  { title: "Example 1", folder: "example-1", category: "pattern", thumb: "/images/projects/example-1/thumb.jpg" },
  { title: "Example 2", folder: "example-2", category: "pattern", thumb: "/images/projects/example-2/thumb.jpg" },
  { title: "MML Project", folder: "mml-project", category: "mml", thumb: "/images/projects/mml-project/thumb.jpg" },
  { title: "Art Project", folder: "art-project", category: "art", thumb: "/images/projects/art-project/thumb.jpg" },
];

// Get category of current project from HTML
const currentCategory = document.querySelector('.project-info div:nth-child(2)').textContent.split(':')[1].trim();

const relatedContainer = document.getElementById('related-projects-grid');

projects.forEach(p => {
  if (p.category === currentCategory) {
    // Skip current project
    if (!document.querySelector('.project-title h1').textContent.includes(p.title)) {
      const a = document.createElement('a');
      a.href = `/project/${p.folder}`;
      a.className = "project-card";
      a.dataset.category = p.category;
      a.innerHTML = `
        <img src="${p.thumb}" alt="${p.title}">
        <h3>${p.title}</h3>
      `;
      relatedContainer.appendChild(a);
    }
  }
});
