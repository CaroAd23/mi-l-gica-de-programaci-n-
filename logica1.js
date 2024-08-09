/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
 /*MY SOLUCION:
1. declarar un ciclo for que permita, evaluar e imprimir los 
numeros del 1 al 100
2. declarar condicionales dentro del for para determinar si el numero 
es multiplo de tres imprimir "fizz" en la consola;
si es multiplo de 5 imprimir "buzz" en la consola;
y si es multiplo de 5 y de 3 a la ves imprimir "fizzbuzz"
3. si el numero no cumple con ninguno de los parametros anteriores, 
simplemente se imprime en valor de la varialbe fizz.  */

for(let fizz=0; fizz<100; fizz++){
    if(fizz%3==0){
        console.log("fizz");
    }
     else if(fizz%5==0){
        console.log("buzz");
    }
    else if(fizz%3==0 && fizz%5==0){
        console.log("fizzbuzz");
    }
    else{
        console.log(fizz);
    }
}