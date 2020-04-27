function generatePage() {
    let selectedProject = localStorage.getItem("selectedProject");
    $("#test").append(`<p> ${data.projects[selectedProject].description}</p>`);
    $("#pageName").append(data.projects[selectedProject].sousTitre);
    $("#descContent").append(data.projects[selectedProject].titre);
    $("#video").append(data.projects[selectedProject].lien_video);
    $("#text").append(data.projects[selectedProject].description);
    if (data.projects[selectedProject].materiel.length>0)
    {
        $("#material").append("<h4>Matériel</h4>");
        for (i=0;i<data.projects[selectedProject].materiel.length;i++)
        {
            $("#material").append((`<p><span>—</span>${data.projects[selectedProject].materiel[i]}</p>`));
        }
    }
    if (data.projects[selectedProject].equipe.length>0)
    {
        $("#team").append("<h4>Équipe</h4>");
        for (i=0;i<data.projects[selectedProject].equipe.length;i++)
        {
            $("#team").append((`<p><span>—</span>${data.projects[selectedProject].equipe[i]}</p>`));
        }
    }


}

generatePage();
