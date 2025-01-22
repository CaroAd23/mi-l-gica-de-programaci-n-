/*
 * Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).
 * ¿De cuántas maneras eres capaz de hacerlo?
 * Crea el código para cada una de ellas.
 */

//1: 
console.log("----------------------------------------------- 1");

for(let i=1; i<=100; i++){
    console.log(i);
}
console.log("----------------------------------------------- 2");

//2:
let numero=0;
while(numero<101){
    console.log(numero);
    numero ++;
}
console.log("----------------------------------------------- 3");

//3: 
function iterationMaster (num){
while(num<100){
    console.log(num);
    num++;
}

return num;
}
let numer = iterationMaster(0);
console.log(numer);

console.log("----------------------------------------------- 4");

//4: 
let Num=0; 
if(Num==0){
    for(Num=0; Num<=100; Num++){
        console.log(Num);
    }
}else{
    console.log("la cuenta debe empezar en cero: 0 ");
}