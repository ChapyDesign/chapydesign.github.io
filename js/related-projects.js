// --- RELATED PROJECTS DYNAMIC LOAD ---

// Example project data
const projects = [
  { title: "Deadwood Tree Camo", folder: "deadwood-tree-camo", type: "design", thumb: "/images/projects/deadwood-tree-camo/thumb.jpg" },
  { title: "Example 1", folder: "example-1", type: "design", thumb: "/images/projects/example-1/thumb.jpg" },
  { title: "Example 2", folder: "example-2", type: "design", thumb: "/images/projects/example-2/thumb.jpg" },
  { title: "MML Project", folder: "mml-project", type: "mml", thumb: "/images/projects/mml-project/thumb.jpg" },
  { title: "Art Project", folder: "art-project", type: "art", thumb: "/images/projects/art-project/thumb.jpg" }
];

// Get the current project title and type from the page
const currentProjectTitle = document.querySelector('.project-title h1').textContent.trim();
const currentProjectType = document.body.dataset.type || 
  document.querySelector('.project-info div:nth-child(2)').textContent.trim().toLowerCase();

// Container to append related projects
const relatedContainer = document.getElementById('related-projects-grid');
if (!relatedContainer) {
  console.warn('No related projects container found on this page.');
} else {
  // Filter projects by type and exclude the current project
  const relatedProjects = projects.filter(p => 
    p.type.toLowerCase() === currentProjectType.toLowerCase() &&
    p.title !== currentProjectTitle
  );

  // Generate HTML for each related project
  relatedProjects.forEach(p => {
    const card = document.createElement('a');
    card.href = `/project/${p.folder}`;
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
    relatedContainer.innerHTML = '<p>No related projects found.</p>';
  }
}
