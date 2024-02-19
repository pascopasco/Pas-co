//gestion des clicks menu mobile

$("#bars").on("click",function () {
    $("menu").toggleClass("display");
    $("#bars").toggleClass("displayMobile");
    $("#bars").toggleClass("notDisplay");
    $("#cross").toggleClass("displayMobile");
    $("#cross").toggleClass("notDisplay");
})
$("#cross").on("click",function () {
    $("menu").toggleClass("display");
    $("#bars").toggleClass("displayMobile");
    $("#bars").toggleClass("notDisplay");
    $("#cross").toggleClass("displayMobile");
    $("#cross").toggleClass("notDisplay");
    $("#bars").css({ top: 60 }); //s'assure que les bars sont re là quand on ferme le menu
})

// désolé on repasse en JS pur car bon Jquery quoi
// on va gérer tout ce qui concerne le défilement ici
var bars = document.getElementById("bars");
var initialPosition = bars.offsetTop;
var minimumPosition = -(bars.clientHeight+60); //dépend de la taille de bars+ sont offset top qui est fixe
var maximumPosition = initialPosition;
var newPosition;

var startContactY;

const mediaQueryMobile = window.matchMedia('(max-width: 980px)'); //correspond à la largeur mobile dans le css
//défilement desktop


window.addEventListener("wheel", function(event) {
    if (mediaQueryMobile.matches) //si la media query mobile est active
    {
        bars.style.transition = "top 0.5s ease"; // ajoute de la transition sur bars
        // La propriété deltaY indique la direction du défilement
        if (event.deltaY > 0) {
            bars.style.top = -(bars.clientHeight+60)+"px";
        } else {
            bars.style.top = "60px";
        }

        setTimeout(function()
        {
            bars.style.transition = ""; // enlève la transition pour ne pas interférer avec la version mobile
        }, 500);
    }
});

//défilement mobile

window.addEventListener("touchstart", function(event) { 
    
    startContactY = event.touches[0].clientY; // Enregistre la position Y au début du touché
    
});

window.addEventListener("touchmove", function(event) {

    

    var deltaY = event.touches[0].clientY - startContactY; // Calculez la variation de position Y pendant le mouvement
    console.log("startContactY = " + startContactY);
    console.log("event.touches[0].clientY = " + event.touches[0].clientY);
    console.log(deltaY);

    newPosition= bars.offsetTop - deltaY ;
    newPosition = Math.min(maximumPosition, Math.max(minimumPosition, newPosition)); //1) s'assure que la newPosition ne peut être plus petite que minPos, puis s'assure que NewPos n'est pas plus grande que maxPos
    bars.style.top = newPosition+ "px"; // on affecte la valeur top au menu
    
    // Mettez à jour la position Y pour la prochaine itération
    startContactY = event.touches[0].clientY;
});

window.addEventListener("touchend", function(event) 
{
    initialPosition = newPosition; //pour éviter de repartir de 60px au prochain touché
})



