console.log("chargement")
let tasAllumettes = 50
let playersNumber = 0
let joueurCourant = 1

//Demander le nombre de joueurs en début de partie
function lancement() {
    playersNumber = parseInt(prompt("Combien de joueurs vont s'affronter lors de la partie ?"))
    console.log(playersNumber + " joueurs s'affrontent dans cette partie.")
    document.getElementById("joueurs").innerHTML = playersNumber + " joueurs s'affrontent dans cette partie"
    let lancementBtn = document.getElementById("lancement")
    lancementBtn.style.visibility = "hidden"
    return playersNumber
}

//Ecouteur d'événement : chargement du HTML
document.addEventListener("DOMContentLoaded", ready);
function ready() {
    //Ecouteur d'événement : éviter le rechargement de la page à chaque submit
    document.getElementById("allumettesForm").addEventListener("submit", myFunction);
    function myFunction(event) {
        event.preventDefault()
        gamePlay()
    }
}

//Fonction de jeu
function gamePlay() {
    let xAllumettes = 0
    let nbJoueurs = playersNumber

    //un tour de jeu
    //retirer le nombre d'allumettes entré dans le formulaire html
    xAllumettes = parseInt(document.getElementById("Allumettes").value)
    console.log("nb =", xAllumettes)


    //vérifier que cette entrée respecte les règles du jeu
    if ((xAllumettes >= 1) && (xAllumettes <= 6)) {
        // on verifie qu'on peut retirer xAllumettes du tasAllumettes
        if (tasAllumettes >= xAllumettes) {
            //on enlève xAllumettes de tasAllumettes
            console.log("tas 1 =", tasAllumettes)
            tasAllumettes = tasAllumettes - xAllumettes
            console.log("tas 2 =", tasAllumettes)
            // Le joueur courant a joué, je peux modifier la valeur de la variable joueurCourant
            //passage au joueur suivant si pas gagné
            joueurCourant++
            if (joueurCourant > nbJoueurs) {
                joueurCourant = 1

            }
            if (tasAllumettes == 0) {
                alert("Bravo, joueur " + joueurCourant + ", tu as gagné !")

            }
        } else {
            alert("Pas assez d'allumettes restantes !")
        }
    } else {
        alert("Le nombre doit être compris entre 1 et 6")
    }
    document.getElementById("caption2").innerHTML = "Il reste " + tasAllumettes + " dans le tas d'allumettes."
    document.getElementById("caption3").innerHTML = "Le joueur " + joueurCourant + " peut jouer."

}
