/*Número Par o Impar
Escribe una función que reciba un número como parámetro y use una estructura condicional
 (if-else) para determinar si es par o impar.
 */
function Pares (numero){
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(Pares(10));

/*Calculadora de Notas
Pide al usuario que ingrese una calificación del 0 al 100 y usa if-else o switch
 para devolver una calificación en letra (A, B, C, etc.).
 */

 function calculadoraDeNotas (nota){
    if(nota >100 || nota <0){
        return false;
    }
    if(nota<10){
        return "C";
    }
    else if(nota>10 && nota<70){
        return "B";
    }
    else if(nota>70){
        return "A"
    }
  
 }
 console.log(calculadoraDeNotas());

 /*Iteración con for y while
Crea una función que imprima los números del 1 al 50. Usa un bucle for para los números impares
 y un bucle while para los números pares.
 */

 function Iteracion(){
    let i=0;
    let numero=1;
    while(numero<=50){
        if(numero%2==0){
            while(i<=numero){
                console.log(i);
                i++;
            }
        }else{
            for(i=0; i<=numero; i++){
                console.log(i)
            }
        }
        numero++;
    }
    
 }
 console.log(Iteracion());