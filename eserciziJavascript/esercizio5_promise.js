

//resolve == per risolvere la promise (dove dentro ce sta la roba che ritorno)
//reject == non necessario ma usato se ci sono errori


function job() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("////////////////////////////////////////")
        console.log("------esercizio1-------");
        
            resolve("ciao mondo");  // La Promise si risolve dopo 2 secondi
        }, 5000); // 2000 millisecondi = 2 secondi
    
    
    });
}

// Chiamata della funzione job()
job().then((mes) => {
    console.log(mes);  // Stamperà "ciao mondo" dopo 2 secondi
});



//2-------------------------
function job2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("////////////////////////////////////////")
        console.log("------esercizio2-------");
           if(isNaN(data)){

            reject("errore");

            }else{
                if(data % 2 === 0){
                    setTimeout(() => {
                        resolve("pari");
    
                    },2000);
                }else{
                    setTimeout(() => {
                        resolve("dispari");
    
                    },1000);
                } 
    

            }
              
        }, 5000); 
        
    });
}

// Chiamata della funzione job2
let d = 2;
job2(d).then((risultato) => {
    console.log(risultato);  
});

//3------------------------------------------------
console.log("///////////////////////////////////////////////////////////")
console.log("--------esercizio3---------")

function fun1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("risultato job1");
        }, 1000);

    });
}

function fun2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("risultato job2");
        }, 2000);

    });
}


function helloWorld(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("hello wolrd");
        }, 1500);

    });
}

fun1().then((risultato1) => {
    console.log(risultato1);
    return helloWorld();
}).then((risultato2) =>{
    console.log(risultato2);
    return fun2();
}).then((risultato3) => {
    console.log(risultato3);

})
