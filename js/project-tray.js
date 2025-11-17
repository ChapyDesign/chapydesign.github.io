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

// --- Auto-populate Related Projects ---
const currentType = document.body.dataset.type; // e.g., "design"
const relatedGrid = document.getElementById('related-projects-grid');

// Example project data (replace with your real projects)
const allProjects = [
  {
    title: 'Project 2',
    type: 'design',
    thumb: '/images/projects/project-2/thumb.jpg',
    url: '/project/project-2'
  },
  {
    title: 'Project 3',
    type: 'design',
    thumb: '/images/projects/project-3/thumb.jpg',
    url: '/project/project-3'
  },
  {
    title: 'Project 4',
    type: 'mml',
    thumb: '/images/projects/project-4/thumb.jpg',
    url: '/project/project-4'
  },
  {
    title: 'Project 5',
    type: 'art',
    thumb: '/images/projects/project-5/thumb.jpg',
    url: '/project/project-5'
  }
];

// Filter by current project type
const relatedProjects = allProjects.filter(p => p.type === currentType);

// Generate HTML
relatedProjects.forEach(p => {
  const card = document.createElement('a');
  card.href = p.url;
  card.className = 'project-card';
  card.dataset.type = p.type;
  card.innerHTML = `
    <div class="project-image" style="background-image: url('${p.thumb}');"></div>
    <div class="project-details">
      <h2 class="project-title">${p.title}</h2>
      <div class="project-meta">
        <span class="project-filter"><span class="material-symbols-rounded icon">gradient</span></span>
        <span class="project-date">2025</span>
      </div>
    </div>
  `;
  relatedGrid.appendChild(card);
});
