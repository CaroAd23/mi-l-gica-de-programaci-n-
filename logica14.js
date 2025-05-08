/*Escribe un programa que determine si un número dado es primo. Recuerda que un número primo solo es divisible por 1 y por sí mismo. */

function numerosPrimos(numero){
    if(numero <=1){ /*si el numero es menor o igual a 1 no es un numero primo, dado que los primos son mayores a 1 */
        return false;
    }
    for(let i =2; i<numero; i++){ /*inicializamos un bucle que cuente desde 2(el minimo divisor posible) hasta que la variable se un numero 
        menor al numero ingresado */
        if(numero%i===0){ /*se establece una condicion, donde numero es dividido por todos los enteros menores a este desde dos hasta 
            un numero menor al mismo */
            return false /*si se encuentra un divisor se devuelve false, dado que los primos solo se dividen por 1 y por si mismos */
        }
    }
    return true /*en caso de terminar la ejecucion y no encontrar ningun otro divisor para el numero se devuelve true */
}
console.log(numerosPrimos(7));

/*Crea una función que genere los primeros n números de la secuencia de Fibonacci. */

function Fibonacci (numero){ //declaramos la funcion.
    let susecion=[0, 1]; //se declara un arreglo que contiene los dos primeros numeros de la secuencia de Fibonacci
    for(let i=2; i<numero; i++){ /*declaramos un bucle, inicializado en 2, el tercer 
                                    numero de la secuencia, hasta que i< al numero dado */
        susecion.push(susecion[i-1] + susecion[i-2]); /* guardamos en el arreglo la suma del ultimo
                                                        y penultimo indice del mismo para dar resultado al siguiente valor. */
    }
    return susecion;/* retornamos los valores almacenados en el arreglo, que conrresponde a la susecion. */
}
console.log(Fibonacci(30));

/*Escribe una función que cuente cuántas vocales hay en una palabra o frase. */

function contarVocales (string){/* se define la fucnion contarVocales */
    let vocales = "aeiouAEIOU"; /*se define una variable para guardar todas las vocales posibles. */
    let contador =0; /*se inicializa un contador en cero. */
  for(let letra of string){ /*se utiliza un bucle for of para iterar sobre cada caracter del string */
    if(vocales.includes(letra)){ /* se compara si la variable coincide al menos un valor de la variable Vocales */
        contador++; /*si la respeuesta es true el contador aumenta en 1 */
    }
  }
  return contador; /*retornamos el valor acumulado en contador */
}
console.log(contarVocales("Carolina alcaraz david"));