const gitHub = document.getElementById("gitHub");
const linkedin = document.getElementById("linkedin");
const boutonNavResponsive = document.getElementById("navResponsive");
let g = 0;

var chaine = "Développeur Web"; 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
    texte[i] = txt+tableau[i];
    var txt = texte[i];
}
actual_texte = 0;


function changeMessage(){
    document.getElementById("spanDev").innerHTML = texte[actual_texte];
    actual_texte++;
    if(actual_texte >= texte.length)
    actual_texte = nb_msg;
}

setInterval("changeMessage()",250);


function ouvrirNav(){
    if (g >= 0){
        document.getElementById("header").className = "headerOn";
        g = g-1;
    }
    else{
        document.getElementById("header").className = "header-main";
        g++;
    }
};
