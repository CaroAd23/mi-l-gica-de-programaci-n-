/* Funciones y Alcance */

//funciones simples:

function saludo (){
    console.log("hola, como estás ")
}

saludo();

//Funciones con paramentros y retorno: 
function operaciones (a, b){
    let suma = (a+b);
    let resta = (a-b);
    let multip = (a*b);
    let div = (a/b);

    let lista =[
        "suma: ", suma, "resta: ", resta,
        "multiplicación: ", multip, "división: ", div
    ]
    return lista;
    
    
 


}

let prueba = operaciones(22, 11);
console.log(prueba);

/*Funciones con valores por defecto */

function saludar (nombre="vienvenido"){ /*Se especifica un valor por defecto
    para el parametro, o los parametros de entrada, en caso 
    de que no se defina uno al implementar la función. */
    console.log("hola, " + nombre);

}
saludar();

// Funciones con un numero variable de argumetos.
function saludos (...nombres){ //usando el operador de dispecion ... se puede/* definir que se pueden agragar varios parametros a 
//la funcion  */  
console.log("hola", nombres);

  
}
saludos("carolina", "Tatiana", "Camila");

//Funciones dentro de funciones: 

function calcular (number1, number2){

    function suma (number1, number2){ /* Se declara una función dentro de otra */
        let suma =(number1 +number2);
        return suma;
    }
    return suma(number1, number2); /*se llama a la funcion anidada y se debuelve su valor  */

}
let resultado= calcular(23, 34);
console.log(resultado);


// Variables locales y globales 

//varaibles globales: /*se puede acceder a ella desde cualquier lugar 
// del documento  */
var myName = "Carolina"; 
//vsriable local: /* solo se puede acceder desde el mismo contesto 
// en el que se declara */
let miNombre ="CarolinaAD";

//funciones propias del lenguaje: 

//Escritura por consola: 
console.log("escribiendo en la consola");

//identificador de tipos: 

console.log(typeof(myName)); //nos permite conocer que tipo de dato es un elemento dado.

/*Crear una función que resiva dos valores del tipo
cadena de texto, y retorne un nuemero, si el numero es mutiplo de 3
imprima el texto 1, si el numero es multiplo de 5, imprime el texto 2,
si el numero resulta ser multiplo de 3 y tambien de 5, retornar ambos 
textos concatenados, impormir tambien al final de la ejecucion, el total de numeros
escritos. */

function return_number (a, b){

    let cont = 0;
for( let i = 1; i<=100; i++){
   
    if(i%3 ==0 && i%5==0){
        console.log(a + b);
    }
     else if(i%3==0){
    console.log(a);
    } else if(i%5==0){
        console.log(b);
    }else{
        console.log(i);
        cont+=1;

      
    }
  
    }
console.log("total numeros escritos: " + cont);

}
return_number("fizz ", "buzz");
