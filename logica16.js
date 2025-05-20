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

/*1️⃣ Suma de números: Crea una función que reciba un número n 
y devuelva la suma de todos los números del 1 hasta n usando un ciclo for.
 */

function suma (numero){
    let result = 0;
    for(let i=1; i<=numero; i++){
        result+=i;
    }
    return result;
}
console.log(suma(10));
/*2️⃣ Factorial de un número: Escribe una función que calcule el factorial de un número (n!),
 usando un ciclo while.
 */
function factorial (num){
    let j=1;
    let result = 1;
    while(j<=num){
        result*=j;
        j++
    }
    return result;
}
console.log(factorial(12));

/*3️⃣ Número primo: Crea una función que determine si un número es primo,
 iterando con un ciclo for para verificar sus divisores
 */

 function primos (numero){
    let a=0;
    let b=0;
    for(let i=1; i<=numero; i++){
        if(numero%i==0){
            a+=1;
        }else{
            b+=1;
        }
    }
      if(a==2){
            return true;
        }else{
            return false;
        }
 }
 console.log(primos(12));

 /*4️⃣ Inversión de cadena: Escribe una función que reciba un texto y lo
  devuelva invertido ("hola" → "aloh") usando un bucle.
 */
function cadenaInversa(string){
  return  string.split("").reverse().join("");
}
/*split(): convierte el texto en un arreglo
reverse(): invierte el orden 
join(): vuelve a unir los elementos */
console.log(cadenaInversa("carolina alcaraz"));

/*5️⃣ Contador de vocales: Diseña una función que reciba una cadena y
 cuente cuántas vocales tiene ("programación" → 5).
 */
function bocales (word){
    let neWord = word.split("");
    let cont =0;
    for(let i=0; i<=neWord.length; i++){
        if(neWord[i]=== "a" || "e" || "i" || "u"){
            cont+=1;
        }
    }
    return cont;
}
console.log(bocales("programacion"));