// --- RELATED PROJECTS DYNAMIC LOAD ---

// Example project data
const projects = [
  { title: "Deadwood Tree Camo", folder: "deadwood-tree-camo", type: "design", thumb: "/img/project/design/deadwood/project-tray-image.jpg" },
  { title: "Spring Mountain", folder: "spring-mountain", type: "design", thumb: "/img/project/design/spring-mountain/Project-Tray-Image.jpg" },
  { title: "Immurement", folder: "immurement", type: "mml", thumb: "/img/project/mml/immurement/Project-Tray-Image.jpg" },
  { title: "Hooters", folder: "hooters", type: "design", thumb: "/img/project/design/hooters/Project-Tray-Image.jpg" }
];

// --- GET CURRENT PROJECT TITLE ---
const currentProjectTitleEl = document.querySelector('.project-description h1');
const currentProjectTitle = currentProjectTitleEl
  ? currentProjectTitleEl.textContent.trim()
  : "";

// --- GET CURRENT PROJECT TYPE ---
const currentProjectType = document.body.dataset.type?.toLowerCase() || "";

// --- GET CONTAINER ---
const relatedContainer = document.getElementById('related-projects-grid');

if (!relatedContainer) {
  console.warn("Related projects container not found.");
} else {

  // Filter by matching type and excluding current project
  const relatedProjects = projects.filter(p =>
    p.type.toLowerCase() === currentProjectType &&
    p.title !== currentProjectTitle
  );

  // Create cards
  relatedProjects.forEach(p => {
    const card = document.createElement('a');
    card.href = `/projects/${p.folder}`;
    card.className = 'project-card';
    card.dataset.type = p.type;

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
  });

  if (relatedProjects.length === 0) {
    relatedContainer.innerHTML = `<p>No related projects found.</p>`;
  }
}
