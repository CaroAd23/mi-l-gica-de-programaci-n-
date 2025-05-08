/*Escribe una función que encuentre los elementos duplicados en un arreglo. */
let arreglo=[2, 4, 4, 5, 6, 6, 6, 7, 8, 9, 9 ,9];

function Duplicados(array){ /*declaramos la funcion */
    let repeat =[]; /*inicializamos un array que almacene los valores repetidos */
    let cont ={}; /*incializamos un objeto contador que almacene y analice si un valor se repite */
    for(let duplicados of array){ /*bucle for of para recorrer cada elemento del array */
        cont[duplicados] = (cont[duplicados] || 0) +1; /*comparamos los valores, si el valor es nulo se inicia en cero y se agrega 1 cada que se encuentre un diplicado. */
        if(cont[duplicados] ===2){ /*si el contador es igual a dos, significa que un valor fue encontrado por segunda vez */
            repeat.push(duplicados); /*este valor es guardado en el arreglo */
        }
    }
    return repeat; /*se retorna el arreglo con los valores que se encontraron 2 veces o mas. */
}
console.log(Duplicados(arreglo));

/*Escribe una función que determine cuántas veces aparece una palabra específica en una cadena. */

function palabrasRepetidas(string){
    
}