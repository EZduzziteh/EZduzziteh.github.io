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
