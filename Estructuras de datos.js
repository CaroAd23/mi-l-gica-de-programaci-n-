// estructuras de datos lineales

//arrays 
let array1 = [];

let int = 1;
for(let i =0; i<100; i++){
    array1[i] = int;
    int = int + 1;
}

array1[5] = 10;
console.log(array1);

console.log("-------------------------------------------------------------------")


//pilas: LIFO (Last In, First Out), ultimo en entrar, primero en salir. 
let pila1 = [];
pila1.push(2);
pila1.push(4);
pila1.push(6);
console.log(pila1);

let ultimoElemento= pila1.pop();
console.log(ultimoElemento);
console.log(pila1);

console.log("-------------------------------------------------------------------")

//colas: FIFO (First In, First Out), primero en entrar, primero en salir. 
let cola1=[];

cola1.push(3);
cola1.push(5);
cola1.push(7);
console.log(cola1);

let primerElemento = cola1.shift();
console.log(primerElemento);
console.log(cola1);






