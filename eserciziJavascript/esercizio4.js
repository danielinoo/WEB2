//1-----------------------

let uguaglianza = (arg1, arg2) => {
    
    if (arg1 === arg2) {
        return true;
    } else {
        return false;
    }
}


console.log(uguaglianza(5, 5));
console.log(uguaglianza(5, '5')); 
console.log(uguaglianza('ciao', 'ciao'));
console.log(uguaglianza(5, 3));

//2--------------------------------------------


const verificaNumero = (numero)  =>{
    if (numero >= 1 && numero <= 7) {
        return true; 
    } else {
        return false; 
    }
}
let visualizzaGiorno = (numero) => {
    if (verificaNumero(numero)) {
        switch (numero) {
            case 1:
                console.log("Lunedì");
                break;
            case 2:
                console.log("Martedì");
                break;
            case 3:
                console.log("Mercoledì");
                break;
            case 4:
                console.log("Giovedì");
                break;
            case 5:
                console.log("Venerdì");
                break;
            case 6:
                console.log("Sabato");
                break;
            case 7:
                console.log("Domenica");
                break;
            default:
                console.log("Errore: numero fuori dal range");
                break;
        }
    } else {
        console.log("errore");
    }
}


visualizzaGiorno(3);  
visualizzaGiorno(5);  
visualizzaGiorno(10); 


//3-------------------------------------------------------

    var cont = 0;
    var numeroSegreto = Math.floor(Math.random() * 101);
    console.log("Numero segreto:", numeroSegreto);  //per il controllo
    


const indovinaNumero = ()  =>{

    let risultato = document.getElementById("risultato");
    let input = document.getElementById("tentativo");
    let c = document.getElementById("num");

    inputUtente = parseInt(input.value);

    cont++;

    if (inputUtente < numeroSegreto) {
        risultato.textContent = "Il numero che hai inserito è troppo piccolo. Riprova!";
    } else if (inputUtente > numeroSegreto) {
        risultato.textContent = "Il numero che hai inserito è troppo grande. Riprova!";
    } else if (inputUtente === numeroSegreto){
        risultato.textContent = "Congratulazioni! Hai indovinato il numero!";
    }
    c.textContent = cont ;
    input.value = "";
}


const resetta = () => {
    cont = 0;  
    numeroSegreto = Math.floor(Math.random() * 101);  
    document.getElementById("risultato").textContent = "";  
    document.getElementById("tentativo").value = ""; 
    document.getElementById("num").value = 0; 
}