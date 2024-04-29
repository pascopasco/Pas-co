function generatePage() 
{
    console.log("debug");
    console.log("selectedProject =" +selectedProject);
    $("#test").append(`<p> ${data.projects[selectedProject].description}</p>`);
    $("#pageName").append(data.projects[selectedProject].sousTitre);
    $("#descContent").append(`<p>${data.projects[selectedProject].titre}</p>`);
    $("#video").append(data.projects[selectedProject].lien_video);
    $("#text").append(data.projects[selectedProject].description);
    if (data.projects[selectedProject].materiel.length>0)
    {
        $("#material").append("<h4>MATÉRIEL</h4>");
        for (i=0;i<data.projects[selectedProject].materiel.length;i++)
        {
            $("#material").append((`<p><span>—</span>${data.projects[selectedProject].materiel[i]}</p>`));
        }
    }
    if (data.projects[selectedProject].equipe.length>0)
    {
        $("#team").append("<h4>ÉQUIPE</h4>");
        for (i=0;i<data.projects[selectedProject].equipe.length;i++)
        {
            $("#team").append((`<p><span>—</span>${data.projects[selectedProject].equipe[i]}</p>`));
        }
    }
}

let selectedProject = sessionStorage.getItem("selectedProject"); //récupère le projet sélectionné dans le portfolio

if (selectedProject) //si un projet a été sélectionné
{
    generatePage(); // on génère la page
}
else {
    window.location.href = "portfolio.html"; //sinon retour au portfolio
}

var pageName= document.getElementById("pageName");
var pageNameText= document.getElementById("pageName").innerText.length; //récupère la longueur du page name > 12
