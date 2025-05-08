//Estructuras de datos: 


/*------------------------------------------------------------------ */

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
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */

//objetos: colecciones de pares clave valor, para agupar datos 
//relacionados.

let animales ={
    raza: "gato",
    edad: 5, 
    nonmbre: "buñuelo"
}
console.log(animales);
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */


/*mapas (Map): similares a los objetos pero permiten claves de cualquier
tipo. */ 
let mapa = new Map();
mapa.set(23, "veintitres");
mapa.set(3.14, "numero PI");

console.log(mapa);
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */

/*conjuntos(Set): una colección de valores unicos sin duplicados. */

let conjunto = new Set();
conjunto.add(2);
conjunto.add(2); //no se añadirá al conjunto dado que este valor ya existe.
conjunto.add(4);
conjunto.add(6);
conjunto.add(8);

console.log(conjunto);
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */

/*Recorrer listas: el elemento forEach() ejecuta una funcion que se ejecuta para 
cada elemento de una lista u array*/

let my_list = ["papa", "zanahoria", "telas", "queso", "salsa"];

my_list.forEach(function(elemento){
    for(let num=1; num<=my_list.length; num++){
        console.log("elemento # " + num + ": " + elemento);
    }
})

/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */


/*transformar listas map(): crea un nuevo array con los resultados de aplicar 
una funciones a cada elemento del array original. */


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 11, 10, 11, 12, 13, 14];

let valor_doble = numeros.map(function(numero){

   return numero *2;
})

console.log(valor_doble);
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */


/*Filtrar elementos filter(): crea un nuevo array con todos los elementos que pasen
una prueba establecida por una funcion.  */

let pares = numeros.filter(function(numero){

    return numero %2 ===0;
})

console.log("Valores pares de la lista: " + pares);
/*------------------------------------------------------------------ */


/*Reducir arrays:...  */

/*------------------------------------------------------------------ */
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
/*------------------------------------------------------------------ */

/*------------------------------------------------------------------ */

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
/*------------------------------------------------------------------ */


/*------------------------------------------------------------------ */
/*concatenar arrays: nos permite comvinar dos o más arrays */

let concatenar = numbers.concat([numeros]);
console.log(concatenar);
/*------------------------------------------------------------------ */


/*------------------------------------------------------------------ */
/*Ordenar elementos: nos permiten ordenar o invertir el orden
de los elementos de un array. */

let disperceNum = [6, 9, 2, 5, 3, 7,];

disperceNum.sort(); /*nos permite ordenar elementos deshordenados */
console.log(disperceNum);
disperceNum.reverse(); /*nos permite invertir el orden de ordenamiento. */
console.log(disperceNum);
/*------------------------------------------------------------------ */


/*------------------------------------------------------------------ */
/*Tuplas: No existen por defecto en js
pero se pueden crear combinando elementos del lenguaje */

let tuplaInmutable = Object.freeze(["Carolina", "caro@gmail.com", 18]);
tuplaInmutable[0]= "marcos"; /*el valor no se actualiza
dado que es inmutable */

console.log(tuplaInmutable);
/*------------------------------------------------------------------ */


/*DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.*/

function agenda (){
    let contactos = new Map()
    let opciones = prompt("elige las acciones a ejecutar: 1:buscar, 2:crear, 3:actualizar, 4:eliminar, 5:salir ")

    switch(opciones){
        case 1: 

        case 2:
            let name = prompt("introduce el nombre: ");
            let phone =prompt("introduce el telefono:");

            if(name !=String){
                alert("el nombre no debe contener caracteres especiales"); 

            }else{
                contactos.set(nonmbre, name);
            }
            if(phone !=number){
                alert("el numero de telefono solo puede contener numeros enteros");

            }else if(phone.length>11){
                alert("el numero de telefono no puede superar los 11 digitos");
            }else{
                contactos.set(telefono, phone); 
            }
        case 3:
        case 4:
        case 5:
        alert("saliendo de la ejecucion del programa");
    }

}

/*Diccionarios en js: JavaScript no cuenta con una estructura de datos especifica 
que pueda denominarce como diccionario; sin embargo; se pueden usar otras estructuras 
como los objetos y mapas, y modificar siertas cualidades para; que hagan a modo de diccionario. */

let programador={
    nombre:"carolina",
    lenguaje:"JavaScript",
    ciudad: "medellin", 
    estado: "pruebas"
}
console.log(programador["lenguaje"]); //ver los valores de los elementos del diccionario
console.log(programador["nombre"]);

programador["pais"] = "Colombia"; //modificar o añadir elementos al diccionario
console.log(programador);

 let programar = new Map(); //crear un mapa

 programar.set("dificultad","alta"); //agregar claves y valores
 programar.set("como_aprender","Practicando");
 programar.set("Cuanto_tardo","depende de ti");

 programar.get("dificultad"); //obtener valores a travez de las claves
 programar.get("como_aprender");
 programar.get("cuanto_tardo");

 console.log(programar);








