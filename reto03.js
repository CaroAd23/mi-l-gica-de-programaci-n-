//Estructuras de datos: 

//arrays o listas: 

let name_list = ["miguel", "carlos", "alejandro", "maria"];
console.log(name_list);

name_list.push("camila"); //insertar 
console.log(name_list);

name_list.unshift("marlon", "Elon", "Zukerberg"); // insertar varios elementos al inicio de la lista. 
console.log(name_list);

name_list.pop(); //eliminar el ultimo elemento de la lista.
console.log(name_list);

name_list.shift(); //elimina el primer elemento de la lista. 
console.log(name_list);

console.log(name_list[2]); // consultar los elementos de la lista con el indice. 

console.log(name_list[name_list.length - 1]); // consultar el ultimo elemento añadido al array. 

name_list[1] = "Fernando";
console.log(name_list); // actualizar el valor de un indice de la lista, 


//objetos: colecciones de pares clave valor, para agupar datos 
//relacionados.

let animales ={
    raza: "gato",
    edad: 5, 
    nonmbre: "buñuelo"
}
console.log(animales);

/*mapas (Map): similares a los objetos pero permiten claves de cualquier
tipo. */ 
let mapa = new Map();
mapa.set(23, "veintitres");
mapa.set(3.14, "numero PI");

console.log(mapa);
/*conjuntos(Set): una colección de valores unicos sin duplicados. */

let conjunto = new Set();
conjunto.add(2);
conjunto.add(2); //no se añadirá al conjunto dado que este valor ya existe.
conjunto.add(4);
conjunto.add(6);
conjunto.add(8);

console.log(conjunto);

/*Recorrer listas: el elemento forEach() ejecuta una funcion que se ejecuta para 
cada elemento de una lista u array*/

let my_list = ["papa", "zanahoria", "telas", "queso", "salsa"];

my_list.forEach(function(elemento){
    for(let num=1; num<=my_list.length; num++){
        console.log("elemento # " + num + ": " + elemento);
    }
})

/*transformar listas map(): crea un nuevo array con los resultados de aplicar 
una funciones a cada elemento del array original. */


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 11, 10, 11, 12, 13, 14];

let valor_doble = numeros.map(function(numero){

   return numero *2;
})

console.log(valor_doble);

/*Filtrar elementos filter(): crea un nuevo array con todos los elementos que pasen
una prueba establecida por una funcion.  */

let pares = numeros.filter(function(numero){

    return numero %2 ===0;
})

console.log("Valores pares de la lista: " + pares);

/*Reducir arrays:...  */

/*Buscar elementos: find() debuelbe el primer elemento que cumpla con una 
condición determinada. findIndex() devuelve el indice del primer elemento que cumpla con una prueba. */; 

let encontrar = numeros.find(function(numero){
    return numero < 2;
})

let encontrarIndex = numeros.findIndex(function(numero){
    return numero === 10;
})

console.log(encontrar);
console.log(encontrarIndex);

/*comprobar condiciones: some() comprueba si al menos un elemento cumple con 
una condicion.
every() comprueba si todos los elementos cumplen con una condicion */

let numbers = [2, 4, 6, 8, 10, 12];

let multiplos3 = numbers.some(function(number){
    return number % 3 == 0;
})
 console.log(multiplos3);

let multiplos2 = numbers.every(function(number){
    return number % 2 == 0;
})
console.log(multiplos2);

/*concatenar arrays: nos permite comvinar dos o más arrays */

let concatenar = numbers.concat([numeros]);
console.log(concatenar);

/*Ordenar elementos: nos permiten ordenar o invertir el orden
de los elementos de un array. */

let disperceNum = [6, 9, 2, 5, 3, 7,];

disperceNum.sort(); /*nos permite ordenar elementos deshordenados */
console.log(disperceNum);
disperceNum.reverse(); /*nos permite invertir el orden de ordenamiento. */
console.log(disperceNum);

