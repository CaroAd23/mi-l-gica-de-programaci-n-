/*Ejercicio de suma de números pares:
Escribe un algoritmo que reciba un número entero positivo
 y calcule la suma de todos los números pares menores o iguales a ese número.
  Por ejemplo, si el número es 10, la suma sería 2 + 4 + 6 + 8 + 10 = 30*/

let numero=30;
let resultadoFinal =0;
for(let i=0; i<=numero; i++){
  var resultado=0;
  if(i%2==0){
    resultado += i; 
    console.log("Numero par: " + resultado);
   if(resultado%2==0){
    resultadoFinal +=resultado;
  
  }
  }
}
console.log("resultado de la suma: " + resultadoFinal);

