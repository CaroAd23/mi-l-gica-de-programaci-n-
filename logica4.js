
/*Ejercicio de búsqueda de números primos:
Implementa un algoritmo que verifique si un número dado es primo o no.
 Un número primo es aquel que solo es divisible por 1 
y por sí mismo. Por ejemplo, el número 7 es primo, pero el número 12 no lo es.*/

/* MI SOLUCIÓN:
 1. declarar las variables correspondientes para almecenar 
el valor del numero que se quiere verificar; almacenar el numero de ciclos
que se realizan y para almacenar el numero de divisiones exactas que se dieron
entre el numero dado y la variable de control del ciclo.
2. declarar un ciclo While (mientras), donde se indica que se repetirá el ciclo
mietras el valor de la variable ciclo sea menor o igual al del numero dado.
3. dentro del ciclo se define una condicion para determinar si la division entre el numeroDado 
y la variable de control fue exacta; si lo es este valor se guarda en la variable exactas,
y el valor de la variable ciclo se aumenta en uno para continuar con el bucle.
4. si el numero de divisiones exactas entre el numero dado y la variable ciclo 
es igual y solo igual a 2, entonces es un numero primo, se imprime este mensaje 
en la consola; de lo contrario el numero no es primo, se imprime este mensaje en la consola. */

let numeroDado= 20;
let ciclo=1;
let exactas=0;

while( ciclo<=numeroDado){
    if(numeroDado%ciclo==0){
        exactas= exactas+1
    }
    ciclo++
}
if(exactas==2){
    console.log("el numero " + numeroDado + " es primo");
}
else{
 console.log("el numero " + numeroDado + " no es primo");
}


