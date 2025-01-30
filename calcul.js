// Fonction pour tirer un nombre au hasard entre min et max
function tirageNombre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour écrire une valeur dans un champ d'entrée
function ecrireNombre(ID, valeur) {
    document.querySelector(ID).value = valeur;
}

// Fonction pour lire la valeur d'un champ d'entrée
function lireNombre(ID) {
    return Number(document.querySelector(ID).value);
}

// Fonction principale de réponse
let nbreBonneReponse = 0;
let nbreCoupJoue = 0;

function repondre() {
    nbreCoupJoue++;
    let resultatJuste = lireNombre("#nombreA") + lireNombre("#nombreB");
    let resultatUser = lireNombre("#reponse");

    // Vérification de la réponse et modification de la couleur
    if (resultatUser == resultatJuste) {
        document.querySelector("#reponse").style.backgroundColor = "#77FF00"; // Correct
        nbreBonneReponse++;
    } else {
        document.querySelector("#reponse").style.backgroundColor = "#FFAA00"; // Incorrect
    }

    // Mise à jour de la barre de progression
    reussite(nbreBonneReponse, nbreCoupJoue);

    // Rafraîchissement des nombres pour le prochain tirage
    ecrireNombre("#nombreA", tirageNombre(1, 50));
    ecrireNombre("#nombreB", tirageNombre(1, 50));
}

// Fonction pour gérer la réussite et la barre de progression
function reussite(bonne, coup) {
    let progression = Metro.getPlugin("#progression", "progress");
    progression.buff(100);
    progression.val((bonne / coup) * 100);
    document.querySelector("#reussite").innerHTML = "Réussite : " + bonne + " bonne(s) réponse(s) sur " + coup;
}

// Initialisation des premiers nombres
ecrireNombre("#nombreA", tirageNombre(1, 50));
ecrireNombre("#nombreB", tirageNombre(1, 50));
