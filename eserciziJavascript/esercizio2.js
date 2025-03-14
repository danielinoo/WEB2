let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let somma = n1 + n2 + n3 + n4+ n5;
let media = somma / 5;

document.getElementById("1").innerHTML = "somma: " + somma  +" , media: " + media ;

//2-----------------------------------------------------------

let ac = 2025;
let an = 2004;
let eta = ac - an;
let pe100anni = 100 - eta;
document.getElementById("2").innerHTML = "eta: " + eta  +" , per arrivare ai 100: " + pe100anni;


//3--------------------------------------------------------------

let n = prompt("inserisci un numero di secondi");
let restanti = n % 3600;
let ore = Math.floor(n / 3600);
let minuti= Math.floor(restanti / 60);
let secondi = minuti % 60;
document.getElementById("2").innerHTML =  + ore  +" ore, " + minuti + " minuti, " + secondi + " secondi";


//4------------------------------------------------

let num1 = prompt("inserisci il primo numero");
let num2 = prompt("inserisci il secondo numero");

n1 = Number(num1);
n2 = Number(num2);
console.log(n1 + n2);

//5-------------------------------

let a = 1, b = 1;
let c = ++a;  // ?
let d = b++;  // ?
document.getElementById("5").innerHTML = "valore a: " + a+ " valore b: " + b ;


//6-------------------------------------------------------------

let a1 = 2;
let x = 1 + (a1 *= 2);
document.getElementById("6").innerHTML = "valore a: " + a1+ " valore x: " + x ;
