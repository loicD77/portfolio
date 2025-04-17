function filterProjects() {
    const category = document.getElementById("category").value;
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
