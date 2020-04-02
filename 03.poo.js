function Personne(prenom, nom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() {
        return this.nom + " " + this.prenom + " " + this.pseudo;
    }
    this.getInitiales = function() {
        return this.nom.charAt(0) + this.prenom.charAt(0);
    }
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

function afficherPersonne(p) {
    return "Nom : " + p.nom +
        " Prenom : " + p.prenom +
        " Pseudo : " + p.pseudo +
        " Nom complet : " + p.getNomComplet();
}

console.log(afficherPersonne(jules));
console.log(afficherPersonne(paul));

jules.pseudo = "jules44";
console.log(jules.getNomComplet())

console.log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

console.log(jules.getInitiales(0));

var robert = new Object();
robert.prenom = "Robert";
robert.nom = "LEPREFET";
robert.pseudo = "robert77";
robert.getNomComplet = function() {
    return this.nom + " " + this.prenom + " " + this.pseudo;
}

console.log(afficherPersonne(robert));

function Client(prenom, nom, pseudo, numeroClient) {
    Personne.call(this, prenom, nom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function() {
        return this.numeroClient + " " + this.nom + " " + this.prenom;
    }
}

var steve = new Client("Steve", "LUCAS", "steve44", "A01");
console.log(afficherPersonne(steve));
console.log(steve.numeroClient);
console.log(steve.getInfos());

fetch("https://loisirs-web-backend.cleverapps.io/users")
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch(error => alert("Erreur : " + error));