function generatePage() {
    let selectedProject = localStorage.getItem("selectedProject");
    $("#test").append(`<p> ${data.projects[selectedProject].description}</p>`);
    $("#pageName").append(data.projects[selectedProject].sousTitre);
    $("#descContent").append(data.projects[selectedProject].titre);
    $("#video").append(data.projects[selectedProject].lien_video);
    $("#text").append(data.projects[selectedProject].description);
}

generatePage();
