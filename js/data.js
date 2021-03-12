/*<a class='lien_int' href='https://www.youtube.com/embed/c4KTlnSLx8Q' target='_blank'>J'ai viré</a>*/ 


let class_target = `class='colab_style' target='_blank'`;
let icone = `<i  class="icone_external_link fas fa-external-link-alt"> </i>`;

let data = {
   "projects":[
               {
                   "titre": "Soirée crêpes",
                   "sousTitre": "Clip Vidéo",
                   "image": "./img/icones_videos/crepes.jpg",
                   "description" : "Cette production est le résultat d'un défi technique : filmer caméra portée avec uniquement des mouvement fait à la main. Le but était dans un premier temps d’offrir une immersion au cœur de l’action de ce qui se passe à travers cette « soirée crêpes » que s’offre quelques amis. Mais le projet s’est vu évoluer vers une volonté de capturer plus simplement une esthétique et une poésie de l’image. J'avais vraiment l'envie de mettre en avant la qualité visuelle, la beauté de l'image. Une ambiance qui passe du chaleureux avec la bougie et qui évolue vers un inquiétante étrangeté de ces personnages marqués par un sourire angoissant. Un projet que j'ai écrit, réalisé, filmé et monté. J'ai eu la chance de travailler avec <a class='lien_int' href='https://gabcamposmusic.wixsite.com/gabrielcampos' target='_blank'>Gabriel CAMPOS</a>, un compositeur qui a construit une superbe musique pour mon projet.",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Sigma 18-35mm F1.8", "Éclairage LED Aputure LS C120D", "Aputure Light Dome II"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/385282303" frameborder="0" allow="fullscreen" allowfullscreen></iframe>`,
                   "equipe" : []
               },
               {
                   "titre": `Soirée Déréliction`,
                   "sousTitre": "Clip vidéo",
                   "image": "./img/icones_videos/dereliction_soiree.jpg",
                   "description" : "Je ne voulais pas laisser mourir des images que j'appréciais d'un tournage servant le clip de <a class='lien_int' title='Déréliction' href='https://vimeo.com/471897548' target='_blank'>Déréliction</a> tourné en décembre 2019. J'ai donc repris les rushes que j’avais tourné et en ait fait un montage basé sur la même protagoniste de Déréliction. J’ai travaillé le montage afin de changer l’ambiance du précédent projet. On peut le voir comme une suite, avec ce personnage principal qui évolue de manière inquiétante, comme touché par une magie noire. Libre à vous de saisir le propos de l’histoire. Le personnage devient une sorte de malfaisante shamanique qui ne restera pas les bras croisés pendant cette soirée étrange dans laquelle se sont embarqué les invités insouciants…",
                   "materiel" : ["Camescope Canon C200", "Objectif Canon EF 100mm f/2.8L Macro IS USM", "Éclairage LED Aputure LS C120D II", "Aputure Light Dome 2"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471895090" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://elisasibert.myportfolio.com/home'>Elisa SIBERT ${icone}</a>`, "Anais VERRIER", `<a ${class_target} href='https://claraguyot.myportfolio.com/'>Clara GUYOT ${icone}</a>`]
               },
               {
                   "titre": "Quelques battements d'ailes",
                   "sousTitre": "Projet Esthétique",
                   "image": "./img/icones_videos/quelques_battements_L2.png",
                   "description" : "Entres les herbes, le long d'un cerisier tout blanc, sillonnant au travers d'un envoûtante glycine, le vent caresse les fleurs fraîchement sorties de leurs cocons. Les insectes viennent alors participer au maintient en vie des plantes.</br></br>Mon objectif premier était d'arriver à filmer un papillon de dos en plein vol. Un défi qui s'est révélé à ce jour trop compliqué. Ca m'a permis d'apprendre le mot erratique - la manière dont mon père défini le vol du papillon - et de capturer ces douces images.",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/484622343" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : []
               },
               {
                   "titre": "Combustion",
                   "sousTitre": "Court-métrage",
                   "image": "./img/icones_videos/combustion.jpg",
                   "description" : "Combustion est un projet réalisé en 48h dans le cadre du KINO, une expérience cinématographique que met en place un professeur lors de son temps libre chaque année. C’est mon premier projet en noir et blanc que l’on a écris, tourné et monté dans le rush en 48h. Ces projets réalisés en quelques jours voir un seul sont des exercices très formateurs car ils apprennent à travailler en équipe l’efficacité et l’organisation en obligeant à donner le maximum pendant un temps limité. Très plaisant et gratifiant, j’ai hâte d’en refaire. </br>Dans celui-ci, deux personnes font un pari sur un homme d’apparence très mystérieuse…",
                   "materiel" : ["Camescope Canon C200", "Objectif Rokinon 35mm T1.5", "Rokinon 85mm T1.5", "Objectif Canon EF 70-200mm f/2.8 IS II USM", "Ecran SmallHD"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471892988" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://www.jacquetlourealisation.com/films'>Lou JACQUET ${icone}</a>`, "Remi LAMOUR",`<a ${class_target} href='https://www.behance.net/charlottecottin?tracking_source=search_users_recommended%7Ccharlotte%20cottin'>Charlotte COTTIN ${icone}</a>`]
               },
               {
                   "titre": "Le Voisin",
                   "sousTitre": "Court-métrage",
                   "image": "./img/icones_videos/voisin.jpg",
                   "description" : "Le voisin est un drame psychologique sur l’aspect dangereux des troubles mentaux dont sont victimes de nombreuses personnes. Tourné caméra épaule en lumière naturelle et comme équipe technique moi seul car le confinement obligeait. Un court métrage qui rappelle que n’importe qui pourrait faire des actions dangereuses sans pour autant en être totalement conscient. N'importe qui, même votre voisin !",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6", "RONIN S"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/424711197" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : ["Julien FABRE", `<a ${class_target} href='http://laurenbelecmusic.com/'>Lauren BÉLEC ${icone}</a>`]
               },
               {
                   "titre": "J’ai viré – Deuzel",
                   "sousTitre": "Clip vidéo",
                   "image": "./img/icones_videos/jai_vire.jpg",
                   "description" : "Voici mon premier clip vidéo réalisé pour le groupe <a class='lien_int' title='Deuzel' href='https://www.youtube.com/channel/UCsqMk2CX_FfdmogZE0tOclQ' target='_blank'>Deuzel</a>. Un projet qui m'a donné beaucoup d'espoir car le résultat fut très satisfaisant pour une première. Une danseuse professionnelle s’est offerte à ma caméra devant un grand château. Une première qui m’a donné goût au cadrage en action. Depuis, la danse est un art que j’apprécie à filmer car il incite à tenter des mouvements de caméras très satisfaisants.",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6", "RONIN S"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471897334" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://www.youtube.com/channel/UCRv_lc9UU5Mh1w2rHmMPIvQ'>Martin BOUVET ${icone}</a>`, "Mathis CHANIOL"]
               },
               {
                   "titre": "Pain et Compagnie",
                   "sousTitre": "Projet Esthétique",
                   "image": "./img/icones_videos/pain_et_compagnie.jpg",
                   "description" : "Pain et compagnie est un projet qui part d’une envie soudaine de prendre des images d’un instant que j’ai voulu immortaliser : Du pain au levain fraîchement sorti du four. C’était aussi l’occasion de d’exploiter le potentiel du 180 FPS du GH5. Alors, venez déguster du bon pain frais avec sa noisette de beurre et sa pincée de sel !",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471894515" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : []
               },
               {
                   "titre": "Déréliction",
                   "sousTitre": "Clip vidéo",
                   "image": "./img/icones_videos/dereliction.jpg",
                   "description" : "Déréliction est un Clip vidéo mettant en scène une fille chamboulée par son quotidien dans lequel elle s'isole malgré elle. Ce « sentiment d’abandon et de solitude morale » - tel que le défini le titre du projet - que vit la protagoniste met le projecteur sur ces zones d’ombres si importantes que beaucoup de personnes intériorisent. Le projet tente de s’inclure dans le mouvement de la postmo dernité et utilise des procédés de la métalepse narrative. <br/>Encore une fois, on retiendra plus les expériences uniques de contextes de tournages comme les lames de couteaux du vent arctique glacial au bord du lac qui viennent fouetter nos visages et une neige abondante apportant un décor absolument extraordinaire. Des ambiances féériques et fabuleuses qui permettent de rajouter de la magie à ces projets très formateurs durant cette année canadienne.",
                   "materiel" : ["Camescope Canon C200","Stabilisateur Glidecam X-22 (avec veste et bras)", "Ecran SmallHD", "Caméra Canon 6D Mark II", "Objectif Sigma 18-35mm F1.8", "Objectif Canon EF 100mm f/2.8L Macro IS USM", "Éclairage LED Aputure LS C120D II", "Éclairage LED Amaran", "Aputure Light Dome 2", "Microphone omnidirectionnel Sennheiser ME62-K6", "Enregistreur audio Zoom H4n et Zoom H6", "Panasonic Lumix GH5","Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471897548" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://elisasibert.myportfolio.com/home'>Élisa SIBERT ${icone}</a>`, "Anaïs VERRIER", "Clara GUYOT"]
               },
               {
                   "titre": "La main sur le cœur – Deuzel",
                   "sousTitre": "Clip Vidéo",
                   "image": "./img/icones_videos/La_main_sur_le_coeur.jpg",
                   "description" : "La main sur le cœur est le titre qui reflète parfaitement l'image du groupe d'<a class='lien_int' title='Deuzel' href='https://www.youtube.com/channel/UCsqMk2CX_FfdmogZE0tOclQ' target='_blank'>artiste</a> des deux jeunes chanteurs qui m’ont proposé de réaliser le deuxième clip de leur EP fraîchement élaboré. Une production qui suit la bonne ambiance du premier clip de <a class='lien_int' href='https://www.youtube.com/embed/c4KTlnSLx8Q' target='_blank'>J'ai viré</a> que j'ai eu la chance de faire avec eux. La main sur le coeur est une déambulation à travers les endroits que Martin aime tout particulièrement. Bonne balade à vous !",
                   "materiel" : ["Panasonic Lumix GH5", "Objectif Hybride Panasonic Lumix G Vario 12-60 mm f/3.5-5.6", "RONIN-S"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471897764" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://www.youtube.com/channel/UCRv_lc9UU5Mh1w2rHmMPIvQ'>Martin BOUVET ${icone}</a>`, "Mathis CHANIOL"]
               },
               {
                   "titre": "Apocalypse Snow",
                   "sousTitre": "Bande annonce",
                   "image": "./img/icones_videos/apocalypse_snow.jpg",
                   "description" : "Apocalypse Snow est une bande annonce d'un ''western dans la neige''. Si le froid canadien a probablement été la plus grosse difficulté pendant le tournage (-30° au quotidien), le plaisir de s’aventurer en équipe réduite sur un immense lac gelé, dans une forêt fraîchement recouverte de quelques mètres de neige, de faire un feu sur la neige de nuit et finalement de côtoyer la flore unique des paysages nordique de cet immense pays ont marqué au fer rouge des souvenirs de tournages fantastiques… <br/>Le montage qui vous est présenté ci-dessus est une première version longue de la bande annonce. L’objectif serait d’obtenir une format de moins de 2 min, plus rythmé. Le projet est à retravailler en terme de design sonore et de montage mais les images sont là. J’ai eu la chance de cadrer les 90% du projet à main nue avec la merveilleuse Canon C200 !",
                   "materiel" : ["Camescope Sony PXW-FS7", "Objectif Rokinon 35mm T1.5", "Objectif Rokinon 85mm T1.5", "Éclairage LED Aputure C120D II", "Éclairage LED Amaran", "Trépied Manfrotto Combi-boom 420B", "Aputure Light Dome 2", "Ecran SmallHD", "Microphone omnidirectionnel Sennheiser ME62-K6", "Enregistreur audio Zoom H6"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471898287" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='https://kronosvevo.wixsite.com/website/videos'>Titouan POUDENS ${icone}</a>`, `<a ${class_target} href='https://www.nathanael-rovere.fr/index.html'>Nathanaël ROVERE ${icone}</a>`, `<a ${class_target} href='http://julianbruxelle.fr/about'>Julian BRUXELLE ${icone}</a>`]
               },
               {
                   "titre": "Interphobe",
                   "sousTitre": "72h du Cinéma",
                   "image": "./img/icones_videos/interphobe.jpg",
                   "description" : "Voici un huis-clos réalisé dans le cadre du 72h du Cinéma du Téléthon 2019. Le but était de réaliser un court métrage de maximum 3 minutes dans lequel on voulait sensibiliser les gens au handicap en général. Tout le propos est basé sur le dialogue qui s’opère entre deux passants qui se retrouvent dans un SAS. L’un des deux aimerait rentrer dans le bâtiment mais il semble incapable de toucher l’interphone...",
                   "materiel" : ["Sony PXW-FS7 II, Objectif Rokinon 85mm T1.5", "Éclairage LED Aputure LS C120D II, Reflecteur/Diffuseur MultiDisc", "Aputure Light Dome 2", "Enregistreur audio Zoom H6", "Microphone Sennheiser ME66-K6 + Zeppelin", "Perche Audio pour Shotgun"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471898582" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : [`<a ${class_target} href='http://thibaultguichard21.free.fr/'>Thibault GUICHARD ${icone}</a>`, "Tristan GROSSETTI", `<a ${class_target} href='https://www.nathanael-rovere.fr/index.html'>Nathanaël ROVERE ${icone}</a>`, "Mathilde WILDMAN", `<a ${class_target} href='https://antoineballand.com/'>Antoine BALLAND ${icone}</a>`]
               },
               {
                   "titre": "Festival du cinéma </br> OJO LOCO",
                   "sousTitre": "Aftermovie",
                   "image": "./img/icones_videos/ojo_loco.jpg",
                   "description" : "J'ai eu la chance d'être stagiaire dans la 7ème édition du festival du cinéma ibérique et latino-américain. J'ai réalisé plusieurs vidéos visant à promouvoir le festival dont cet Aftermovie. Un projet dans lequel j’étais très libre ce qui m’a amené à monter le projet en gardant un esprit humoristique mettant en scène mon assistant caméra.",
                   "materiel" : ["Canon EOS 77D"],
                   "lien_video" : `<iframe src="https://player.vimeo.com/video/471899464" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
                   "equipe" : ["Zackaria ROMANI"]
               },
    ]}
