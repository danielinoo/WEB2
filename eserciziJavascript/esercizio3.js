var n = 2;
var mol = 1;
var ao = ""; 

for (var x = 1; x <= 10; x++){
    mol = n * x;
    ao = ao + `${n} x ${x} = ${mol}<br>`;  
}

document.getElementById("1").innerHTML = ao; 


//2-------------------------------------------------
console.log("Con il ciclo for:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Con il ciclo while:");
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}




//3-------------------------------------------------
console.log("Con il ciclo for:");
for (let i = 5; i <= 15; i++) {
    console.log(i);
}


console.log("Con il ciclo while:");
let ii = 5;
while (ii <= 15) {
    console.log(ii);
    ii++;
}


//4---------------------------------------------
console.log("esercizio 4: ")
console.log("Con il ciclo for:");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}


console.log("Con il ciclo while:");
let w = 0;
while (w<= 20) {
    console.log(w);
    w+=2;
}

//5----------------------------------------------------
console.log("esercizio 5: ")
console.log("Con il ciclo for:");
for (let i = 0; i <= 40; i += 4) {
    console.log(i);
}


console.log("Con il ciclo while:");
let wi = 0;
while (wi<= 40) {
    console.log(wi);
    wi+=4;
}



//6-----------------------------------------------

let numeri = [5, 8, 12, 3, 7];
let somma = 0;
let media;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i]; // Somma i valori dell'array
}

media = somma / numeri.length;

document.getElementById("6").innerHTML = "somma: " + somma+ " ,media: " + media ;



//7--------------------------------------------

let npg = [5, 8, 12, 3, 7,30,80];
var ris = 0;

for (let i = 1; i < npg.length; i++) {
    if (npg[i] > ris) {
        ris = npg[i]; 
    }
}

document.getElementById("7").innerHTML = "numero più grande dell' array di 7 elemnti: " + ris;


//8-------------------------------------
aaa = [1,2,3,4,5,6,7,8,9,10];
var pari = 0;
var dispari = 0;

let lesgo = aaa.map ((e1) => {
    if(e1 %2 === 0){
    pari ++;
    }
    else{
        dispari++;
        }
})



document.getElementById("8").innerHTML = "numeri pari: " + pari + " numeri dispari: " + pari;


