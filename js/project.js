function generatePage() {
    let selectedProject = localStorage.getItem("selectedProject");
    $("#test").append(`<p> ${data.projects[selectedProject].description}</p>`);
}

generatePage();
