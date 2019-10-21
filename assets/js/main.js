console.log("JS chargé");


/* MENU QUI SE RÉDUIT*/ 
$(window).scroll(function() {
  if ($(document).scrollTop() > 40) {
    $('nav').addClass('navbar-shrink');
    $('.add').hide();
  } else {
    $('nav').removeClass('navbar-shrink');
    $('.add').show(); }});


/* BOUTON FLÈCHE */

//NAVBAR+TOTOP
window.onscroll = function () { scrollFunction() };
var mybutton = document.querySelector(".fleche");

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      $(mybutton).fadeIn(600);
  } else {
      $(mybutton).fadeOut(200)
  }
};

mybutton.addEventListener('click', function topFunction() {
  $("html, body").animate({ scrollTop: 0 }, 900);
});

/* SMOOTH SCROLL */

$('a[href*=\\#]').on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
});

/* SCROLL REVEAL */

const sr = ScrollReveal ();

ScrollReveal().reveal('.dev', {
    duration: 1700,
    rotate: {
        x: 180,
        z: 0,
        duration: 2000,
        delay : 1000,
    }
});


sr.reveal('.accueil .pair',{ 
origin : 'left',
distance :'500px',
duration : 800,
delay: 800 });

sr.reveal('.accueil .impair',{ 
    origin : 'right',
    distance :'50px',
    duration : 800,
    delay: 1200 });

    ScrollReveal().reveal('.competences li', {
        duration: 1500,
        rotate: {
            x: 0,
            z: 180,
            duration: 2000,
            delay : 2000,
        }
    });

sr.reveal('.photo1',{ 
    delay: 400,});

    sr.reveal('.photo2',{ 
        delay: 500 });  

        sr.reveal('.photo3',{ 
            delay: 600 });

            sr.reveal('.photo4',{ 
                delay: 700 });
          
      /* FORMULAIRE DE CONTACT */

                // ICI ON VA AJOUTER DU CODE JS
                // ENVOYER LE FORMULAIRE EN AJAX
                // => AVANTAGE: 
                // ON NE CHANGE PAS DE PAGE QUAND ON ENVOIE LES INFOS DU FORMULAIRE
                // COOL POUR LE VISITEUR CAR PAS DE "FLASH" AVEC LA PAGE QUI SE RECHARGE
                // COOL POUR LE DEV: PLUS EFFICACE CAR ON NE DETRUIT PAS LA PAGE
                
                // ENSUITE:
                // QUAND ON VA RECEVOIR LE TEXTE JSON DU SERVEUR
                // => ON VA POUVOIR LE TRANSFORMER EN OBJET JS
                // => COOL PARCE QUE PHP ET JS PEUVENT COMMUNIQUER AVEC UNE API
                
                // ETAPE1: AJOUTER UNE CLASSE ajax SUR LES BALISES form QU'ON VEUT TRANSFORMER
                // ETAPE2: JE DOIS AJOUTER UN EVENT LISTENER 
                // SUR LES EVENEMENTS submit DE CES FORMULAIRES
                
                // je sélectionne les balises form qui ont la classe ajax
                var listeFormAjax = document.querySelectorAll("form ajax");
                // parcourir chaque balise pour ajouter un event listener
                listeFormAjax.forEach(function(balise){
                    // debug
                    console.log(balise);
                    // pour chaque balise, je rajoute un event listener 
                    // sur l'évenement submit
                    balise.addEventListener('submit', function (event){
                        // bloquer le formulaire classique
                        // avantage: on ne change plus de page
                        event.preventDefault();
                        console.log("formulaire bloqué");
                        console.log(this);  // this contient la balise form activée
                        // perdu: on n'envoie plus le formulaire
                        // solution: ajouter ajax pour envoyer le formulaire
                        // récupérer les infos du formulaire
                        // et ensuite, je vais les envoyer avec fetch
                        // https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
                        var formData = new FormData(this);
                
                        fetch("api-json.php", {
                            method: "POST",
                            body: formData
                        })
                        .then(function(reponseServeur){
                            // JE VEUX CONVERTIR LE TEXTE JSON EN OBJET JS
                            return reponseServeur.json();
                        })
                        .then(function(objetJS){
                            // debug
                            console.log(objetJS);
                
                            if (objetJS.confirmation)
                            {
                                // je vais changer le texte de la balise div.confirmation
                                // avec le texte envoyé par le serveur
                                console.log(balise);
                                // de balise, je vais chercher la le html div.confirmation
                                var baliseConfirmation = balise.querySelector(".confirmation");
                                baliseConfirmation.innerHTML = objetJS.confirmation;
                            }
                
                            if (objetJS.tabArticle)
                            {
                                // on va utiliser ce tableau pour construire du HTML
                                construireHtmlArticle(objetJS.tabArticle);
                            }
                        })
                        ;
                        // COOL, JE RESTE SUR LA MEME PAGE
                        // ET J'ENVOIE LES INFOS A api-json.php
                        // ET LE TRAITEMENT EST BIEN EFFECTUE
                
                    });
                })

      // MENU HAMBURGER 
      $(document).ready(function () {
        $(".menuNav").hide();
        $(function () {
            $(".menuHamb").on("click", function () {
                $(".menuNav").toggle(200);
            })
            $(".arrow-back").on('click', function () {
                $(".menuNav").toggle(200);
            })
        })
    })
