var mario = "mario"; 
var ciao = "ciao ";
console.log(ciao + mario);

document.getElementById("1").innerHTML = ciao + mario;

//2---------------------------------------------

var n = 100;

document.getElementById("2.1").innerHTML = "Valore iniziale: " + n;

var n = 20;
document.getElementById("2.2").innerHTML = "Valore finale: " + n;


//3---------------------------------------

let x = 10;
let y = x;
let persona = "francesco";

document.getElementById("3").innerHTML = "Valore x " + x  + " valore y: " + y + " valore persona: " + persona;


//4----------------------


var stringa = '50';
document.getElementById("4").innerHTML = "Valore variabile: " + stringa + " " + typeof(stringa);


document.getElementById("4.1").innerHTML = isNaN(stringa);

var stringa = 50;
document.getElementById("4.2").innerHTML = "Valore variabile: " + stringa + " " + typeof(stringa);


//5--------------------------------------------
let giorniSettimana = "Lunedì,Martedì,Mercoledì,Giovedì,Venerdì,Sabato,Domenica";


console.log("Giorni separati da virgola:");
console.log(giorniSettimana);

giorniSettimana = giorniSettimana.replaceAll(",", "\n");
console.log(giorniSettimana);