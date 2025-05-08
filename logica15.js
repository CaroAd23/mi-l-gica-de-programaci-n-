/*Escribe un programa que encuentre todos los divisores de un número dado. */

function Divisores (numero){
  let divisores = [];
  for(let i=1; i<=numero; i++){
    if(numero%i===0){
        divisores.push(i);
    }
  }
  return divisores;
}
console.log(Divisores(30));

/*Escribe una función que ordene un arreglo de números en orden ascendente sin usar .sort(). */

let array=[1, 1, 5, 8, 3, 9, 2]

function ordenarArreglo(array){ /*declaramos la funcion. */
    for(let i=0; i<=array.length; i++){ /*declaramos un bucle que recorra los elementos del aaray en primera instacia. */
      for(let j= i+1; j<=array.length; j++){ /**anidamos otro bucle for para recorrer los elelemtos en segunda instacia
                                              para comparar los elelemtos entre si de forma efectiva. */
        if(array[i]>array[j]){ /* se comparan los elementos, si el elemento en la posicion i es mayor que el 
                                  elemento en la posicion j, quiere decir que los elementos estan en la posicion incorrecta */
          let temporal = array[i]; /* creamos una variable temporal para almacenar el valor de i */
          array[i]=array[j]; /*asignamos el valor de j a i */
          array[j]=temporal; /*asignamos el valor de j a la variable temporal */
        }
      }
    }
    return array; /*finalmente retornamos el array ordenado. */
}
console.log(ordenarArreglo(array));
/*Escribe un programa que sume por separado los números pares e impares en un arreglo. */

let arreglo=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function sumaSeparadas(array){
  let pares = 0; 
  let impares = 0;
 for( let numero of array){ /*usamos un bucle for of para recorrer todos los elementos del array.*/
  if(numero % 2 == 0){
    pares+= numero;
  }else{
    impares+= numero;
  }
 }
 return {pares, impares}; /*retornamos ambos resultados. */
}
console.log(sumaSeparadas(arreglo));