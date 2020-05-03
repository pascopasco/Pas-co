
function generateProject () {
    /*let allProjects = "";
    for(i=0; i<data.projets.length; i++) {
        if (mydata.projets[i]) {
            /!* affichage des projets sur la page portfolio *!/
            allProjects += `<div class="grid-item" onclick="changePage(` + i +`)" style="background-image: url(` + mydata.projets[i].image + `)">
                        <div class="background_hover_travaux">
                            <h3 class="titre_travaux">` + mydata.projets[i].nom + `</h3>
                            <div class="ligne_works"></div>
                            <h4 class="sousTitre_travaux">` + mydata.projets[i].sousTitre + `</h4>
                        </div>
                    </div>`
        }
    }
    console.log(allProjects);
    document.getElementById('grid-container').innerHTML = allProjects;*/

    for(i=0; i<data.projects.length-1; i++) {
        $("#gridContainer").append(`<div class="gridItem" onclick="changePage(${i})">
                                       <section style="background-image: url(${data.projects[i].image})"></section>
                                       <section class="description">
                                            <h3>${data.projects[i].titre}</h3>
                                            <p>${data.projects[i].sousTitre}</p>
                                       </section>
                                    </div>`)
        /*$("#grid-container").append(`<div class="grid-item" onclick="changePage(` + i +`)" style="background-image: url('${data.projects[i].image}')">a</div>`)*/
    }
}

function changePage(projectNumber) {
    localStorage.setItem("selectedProject", projectNumber);
    window.location.href = "project.html";
}


generateProject();
