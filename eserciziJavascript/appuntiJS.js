numeri = [1,2,3,4,5,6,7,8,9,10];

for (let x = 0; x >10 ; x ++){
 console.log(x);
}


for (let z in numeri){
    console.log(numeri[z])

}

for (let a of numeri){
    console.log(a)

}

let variabile1 = numeri.forEach((e1) => {
    console.log(e1)
    return e1 +1;
});

let variabile2 = numeri.map ((e1) => {
    console.log(e1)
    return e1+2;
})


//funzioni-------------------------------

