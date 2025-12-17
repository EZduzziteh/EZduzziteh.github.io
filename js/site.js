const tabs = document.querySelectorAll("nav a");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});



// site.js

// A reusable function to render a list of project cards
function renderProjects(projects, containerSelector) {
  const container = document.querySelector(containerSelector);
  container.innerHTML = ""; // clear old content

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.img}" alt="${project.alt}" />
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(gameProjects, ".project-grid");
});
