/*1. **Contador de caracteres**:
    - **Descripción**: Escribe una función que cuente el número de caracteres en una cadena de texto.
    - **Ejemplo**: `contarCaracteres("Hola Mundo"); // Devuelve 10`*/

let caracteres="hola mundo este es un contador de caracteres "; 

function contadorCaracteres(caracteres){
    let totalCaracteres= caracteres.length; 
    return totalCaracteres;
}

let contandor= contadorCaracteres(caracteres);
console.log(contandor);