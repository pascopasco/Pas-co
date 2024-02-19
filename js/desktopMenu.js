//Ici je n'utilise pas jQuery juste pour m'entraîner sans

const linksInMenu = document.querySelectorAll('header menu>ul>li>a'); //pas besoin d'être aussi précis mais je copie le sélecteur du fichier style.css
const activePage = document.querySelector('.activePage'); //pour garder qui était la active page



//place des event listeners sur les Links sauf active page
linksInMenu.forEach(link => {

    let isActivePage = false;

    for (let i=0; i<link.classList.length; i++) //on regarde si le link est la active page
    {
        if (link.classList[i]=="activePage")
        {
            isActivePage = true;
        }
    }
    if (isActivePage==false)
    {
        link.addEventListener('mouseenter', () => { //event sur arrivée de la souris au survol
    
            linksInMenu.forEach(link => {
                link.classList.remove('activePage'); // on retire la active page
            })
            link.classList.add('activePage'); // on affecte temporairement la classe à l'élément survolé
        })

        link.addEventListener('mouseleave', () => { //event sur départ de la souris au survol
    
            
            link.classList.remove('activePage'); // on retire la active page de l'élément quitté
            
            activePage.classList.add('activePage'); // on rend la classe à la page sur laquelle on est

        })
    }
})

