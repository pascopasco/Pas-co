function generatePage() {
    let selectedProject = localStorage.getItem("selectedProject");
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

generatePage();
let body = $("body");

$(document).ready(function() 
{
    var body = document.getElementById("body");
    var TailleBody = document.getElementById("body").offsetHeight; // récupère la hauteur du body
    var footer = document.getElementById("footer");
    var HauteurFooter = document.getElementById("footer").offsetTop; //récupère l'offsetTop du footer

    // console.log($("body")); //affiche noeud body
    // console.log($("footer")); //affiche noeud footer
    

    console.log("TailleBody = "+TailleBody);
    console.log("HauteurFooter = "+HauteurFooter);
    if (body.offsetWidth<981)
    {
        console.log("version mobile détectée")
        console.log("TailleBody-HauteurFooter = "+(TailleBody-HauteurFooter))
        if(TailleBody-HauteurFooter>60)
            {
                footer.style.position="absolute";
                footer.style.bottom="1.5vh";
                footer.style.padding="0";
                footer.style.margin="0";
                console.log("changement style footer");
            }
    }
        

})
