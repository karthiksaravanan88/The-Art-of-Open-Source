// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadContributors();
    setupEventListeners();
});

// Load projects data
function loadProjects() {
    const projects = [
        { title: 'Project 1', description: 'Building amazing open source software' },
        { title: 'Project 2', description: 'Collaborative development at its finest' },
        { title: 'Project 3', description: 'Community-driven innovation' }
    ];

    const gallery = document.getElementById('gallery');
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        gallery.appendChild(item);
    });
}

// Load contributors
function loadContributors() {
    const contributorList = document.getElementById('contributor-list');
    // Placeholder for fetching real contributor data from GitHub API
    const placeholder = document.createElement('p');
    placeholder.textContent = 'Loading contributors...';
    contributorList.appendChild(placeholder);
}

// Setup event listeners
function setupEventListeners() {
    const gateBtn = document.getElementById('gate-btn');
    if (gateBtn) {
        gateBtn.addEventListener('click', () => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
}
