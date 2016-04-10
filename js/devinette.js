/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essai = 1;
var nombre = Number(prompt("Devinez un nombre entre 1 et 100 (" + (7- essai) + " essais restants) :"));
while (nombre !== solution && essai < 6){
    if (nombre > solution) {
        console.log(nombre + " est trop grand");
    } else {
        console.log(nombre + " est trop petit");
    }
    essai++;
    nombre = nombre = Number(prompt("Devinez un nombre entre 1 et 100 (" + (7- essai) + " essais restants) :"));
}

if (nombre !== solution && essai === 6) {
    console.log("Perdu... La solution était " + solution);
} else {
    console.log("Bravo! La solution était " + nombre);
    console.log("Vous avez trouvé en " + essai + " essai(s)");    
}
