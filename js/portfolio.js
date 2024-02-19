

function generatePortfolio () 
{

    for(i=0; i<data.projects.length; i++) //pour toute la longueur du tableau, insert les projets dans gridContainer
    {
        $("#gridContainer").append(`<div id="${i}" class="gridItem visible" onclick="changePage(${i})">
                                       <section style="background-image: url(${data.projects[i].image})"></section>
                                       <section class="description">
                                            <h3>${data.projects[i].titre}</h3>
                                            <p>${data.projects[i].sousTitre}</p>
                                       </section>
                                    </div>`)
    }
}

function changePage(projectNumber) 
{
    console.log(projectNumber);
    sessionStorage.setItem("selectedProject", projectNumber); //stock la valeur dans le navigateur pour changer de page
    let selectedProject = sessionStorage.getItem("selectedProject");
    console.log(selectedProject);
    window.location.href = "project.html";
}



function mobileMovement (gridContainer, gridItems, gridItemsVisible)
{
    let nbVisible = 0;
    //ça serait bien de créer une fonction retract et expand; ou au moins alléger cette fonction là en plusieurs fonctions
    for (let i = 0; i < gridItems.length; i++)
    {

        //gridItems[i].style.top = -(projectsHeight*(i-nbVisible))-5*vw+"px";

        gridItems[i].style.top = - ( ((i)-nbVisible)*(23+5) )+"vw"; // -nbVisible permet de ne pas ajouter de décalage si l'élément précédent est visible, 23vw c'est la projectsHeight, 5vw c'est grid column gap, les borders sont dans les 23vw  
        if (gridItems[i].classList.contains("visible"))
        {
            nbVisible++;
        } 
    }

    // gridContainer.style.height = gridContainer.clientHeight + (gridItemsVisible[0].clientHeight * (variationElementsVisibles))+"px"; //modification de la hauteur pour ne pas avoir les crédits trop bas
    console.log("gridItemsVisible.length ="+ gridItemsVisible.length)
    gridContainer.style.height = (23+5)*(gridItemsVisible.length)-5+"vw"; //23+5 c'est projectHeight+gap, le -5 c'est pour enlever le gap du dernier élément
    console.log("gridContainer height après modif ="+gridContainer.clientHeight);
}

function desktopMovement(filter)
{
    console.log("horizontalMovement");
    $("#gridContainer").empty();
    console.log(filter);
    if (filter) // si il y a un filtre
    {
        for(i=0; i<data.projects.length; i++) //pour toute la longueur du tableau, insert les projets dans gridContainer
        {
            console.log("c'est le fort");
            
            
            for (let j =0; j < data.projects[i].filtres.length; j++)
                {
                    if (data.projects[i].filtres[j] == filter) // si et seulement si ils ont le bon filtre
                    {
                        $("#gridContainer").append(`<div id="${i}" class="gridItem visible" onclick="changePage(${i})">
                                                <section style="background-image: url(${data.projects[i].image})"></section>
                                                <section class="description">
                                                        <h3>${data.projects[i].titre}</h3>
                                                        <p>${data.projects[i].sousTitre}</p>
                                                </section>
                                                </div>`)
                    }
                };
        }
    }
    else // si il y en a pas, donc si c'est le filtre "tout"
    {
        generatePortfolio();
    }
        
}

function changeActiveFilter(nButton) {
    console.log("la fonction fonctionne");
    console.log(nButton);
    var buttons = document.getElementsByTagName("button");
    console.log(buttons);
    Array.from(buttons).forEach(function (button,index,buttons)
        {
            console.log(index);
            if (nButton == index)
            {
                button.classList.remove("nonActiveFilter");
                button.classList.add("activeFilter");
            }
            else
            {
                button.classList.remove("activeFilter");
                button.classList.add("nonActiveFilter");
            }
            
        });
}

function animatedSorting(nButton, filter)
    {
        // définition des variables utiles
        let gridContainer = document.getElementById("gridContainer");
        var gridItems = document.getElementsByClassName("gridItem"); //récupère le nombre d'éléments à trier
        var gridItemsVisible = document.getElementsByClassName("gridItem visible"); //récupère uniquement les éléments visible pour la fonction sorting
        let variationElementsVisibles = 0; //definition et reset de la variable pour les calculs plus tard
         
        const mediaQueryMobile = window.matchMedia('(max-width: 980px)');

        console.log(" gridItems : "+gridItems);
        console.log(" gridItemsVisible : "+gridItemsVisible);
        console.log(gridContainer.clientHeight);

        console.log("nButton = ", nButton);
        //change l'apparence des boutons filtres
        changeActiveFilter(nButton); //call permet d'utiliser this 
        //partie Sorting

        if (gridItemsVisible.length > 0) //vérification que gridItems n'est pas vide
        {
            console.log("Nombre d'éléments visibles détectés : "+gridItemsVisible.length);
        }
        else
        {
            console.log("Aucun élément trouvé avec gridItem et visible.");
        }

        console.log(filter);
        console.log("gridContainer height avant modif ="+gridContainer.clientHeight);

        if (filter) //le filtre "tout" renvoi une valeur nulle, c'est ce test qu'on fait ici
        {
            for (let i = 0; i < data.projects.length; i++)
            {
                for (let j =0; j < data.projects[i].filtres.length; j++)
                {
                    if (data.projects[i].filtres[j] == filter)
                    {
                        //console.log("projet n°" + i + " est visible");
                        $("#" + i).show(0);
                        $("#" + i).addClass("visible");
                        $("#" + i).removeClass("hidden");
                        variationElementsVisibles ++;
                    }
                    else
                    {
                        //console.log("projet n°" + i + " est caché");
                        $("#" + i).addClass("hidden");
                        $("#" + i).removeClass("visible");
                        variationElementsVisibles -- ;
                    }
                }
                    
            }
        }
        else //donc si la variable filter est null, soit le filtre tout
        {
            console.log("tous les projets sont visibles");
            gridContainer.style.height=""; //reset la valeur ajouté dans verticalMovement
            for (let i = 0; i < data.projects.length; i++)
            {
                    $("#" + i).addClass("visible");
                    $("#" + i).removeClass("hidden");
                    visibleEnPlus = data.projects.length;
                    hiddenEnPlus = 0;
            }
        }

        //partie animation de la taille de gridItemsVisible
        console.log("partie animation");
        console.log("gridContainer height avant modif ="+gridContainer.clientHeight);
        //console.log("gridItems height = "+ gridItemsVisible[0].clientHeight);
        console.log("variationElementsVisibles = "+variationElementsVisibles);

        if (mediaQueryMobile.matches) //si la media query mobile est active
        {
            console.log("mode mobile");
            mobileMovement(gridContainer, gridItems, gridItemsVisible);
        }
        else
        {
            console.log("mode desktop");
            desktopMovement(filter);
        }

    }

//event listener sur changement de largeur fenêtre déjà dans mobileMenu.js
//const mediaQueryMobile = window.matchMedia('(max-width: 980px)'); //correspond à la largeur mobile dans le css 

mediaQueryMobile.addListener(debugSorting); //si la variable mediaQueryMobile change, on exécute la fonction debugSorting

function debugSorting() //simule l'appel de la fonction de sorting avec le filtre tout
{
    animatedSorting(0);
}
generatePortfolio(); //génère le portfolio la première fois


