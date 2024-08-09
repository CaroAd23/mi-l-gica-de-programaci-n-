
/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
/* Definir una funcion llamada invertir texto que resive un paramentro llamado texto.
2. usar el metodo splitt(); para separar la cadena de texto en subcadenas 
3. usar el metodo reverse para organizar las subcadenas al reves. 
4. usar el metodo join(); para unir nuevamente las subcadenas. 
5 retornar el resultado obtenido.  */

function InvertirTexto (texto) {
    texto= texto.split('');
    texto= texto.reverse();
    texto= texto.join();
    return texto;

    

}
let funcion=InvertirTexto("carolina");
console.log(funcion);









