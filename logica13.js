/*REPASO ACTIVO*/

/*VARIABLES Y TIPOS DE DATOS: */
let numero = 3;
let texto="hola mundo";
let verdadero = true;
let falso= false;
let decimal= 1.345656;
let entero_grande= 233456789876543;

/*Crear un programa que convierta grados de celcius a farengeit */

let celsius = 20;
let Feherenheit= 0;
let convercion = (celsius*9)/5+32;

Feherenheit=convercion;
console.log(celsius + " grados Celsius equivalen a " + Feherenheit + " grados Faherenheit");


/*CONDICIONALES */
/*Crear un programa que determine si un numero dado es par o impar */
let number= 8;

if(number%2 ==0){
    console.log("es par");
}else{
    console.log("es impar");
}


/*CICLOS O BUCLES */
/*Crea un bucle que imprima los números del 1 al 10, y luego otro que sume todos los números en un arreglo. */
let list=[];
for(let i=1; i<=10; i++){
    console.log(i);
    list.push(i);
}
console.log(list);

/*FUNCIONES */
/*Crear una funcion que reciba un numero y devuelva su factorial */
function Factorial(num){
    let resultado=1; // declaramos el resultado en la sifra mas baja en la que se puede multiplicar el numero
    for(let i=1; i<=num; i++){// generamos un ciclo que genere los enteros menores hasta el numero ingresado
        resultado *=i; // multiplicamos y sumamos el resultado en la varialbe resultado hasta llegar a 1
    }
    return resultado; //retornamos el valor total acumulado en la variable resultado.
}

let prueba= Factorial(5);
console.log(prueba);

/*ARREGLOS Y OBJETOS */
/*Declara un objeto como "diccionario" y un arreglo, luego accede a elementos y realiza operaciones. */
let personaje ={
    raza: "humano",
    divicion: "guerrero",
    armas: "espada_escudo",
    puntos_vida: 200,
    resistencia: 350
}
console.log(personaje["divicion"]); //acceder a las los valores del diccionario.

personaje["armadura"]=267; //agregar o modifiacar claves y valores.
personaje["nombre"]="kelsier";
personaje.habilidad_especial = "atium"
console.log(personaje);

delete personaje["armas"]; //eliminar claves y valores.
console.log(personaje);

console.log("divicion" in personaje); //comprovar si una clave existe dentro del diccionario.
console.log(personaje.hasOwnProperty("resistencia")); // tambien comprueba la existencia de una clave en el diccionario.

for(let key in personaje){ //iterar sobre las claves de un diccionario.
    console.log(key, personaje[key]);
}

console.log(Object.keys(personaje)); // para ver solo las claves
console.log(Object.values(personaje)); //para ver solo los valores.

let array = Object.entries(personaje); // convertir el diccionario en un arreglo de pares clave valor.
console.log(array);

/*Calcula la suma de todos los números del 1 al 100 usando un bucle. */

let total_suma= 0;
for(let i=1; i<=100; i++){
    total_suma+=1;
    console.log(total_suma);

}
/*Escribe un programa que imprima la tabla de multiplicar del número que elijas (por ejemplo, del 5). */

let tabla = 5;
for(let i=1; i<=10; i++){
    tabla=(5*i);
    console.log("5 * " + i +"= " + tabla)
}
function tablasDeMultiplicar(a){
    let tabla = 0;
    for(let i =1; i<=10; i++){
        tabla = (a*i);
        console.log(a + "* " + i + "= " + tabla);
    
    }
}
let result= tablasDeMultiplicar(2);
console.log(result);

/*Declara un arreglo de números y usa un bucle para imprimir cada número en la consola. */

let numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i=0; i<=numeros.length; i++){
    console.log(numeros[i]);
}

/*Encuentra la suma de todos los números en un arreglo. */

function sumarArray (array){
    let suma=0;
    for(let i=0; i<array.length; i++){
        suma +=array[i];
    }
    return suma;
}
let arreglo =[4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(sumarArray(arreglo));

/*Escribe un programa que encuentre el número más grande en un arreglo. */

function numeroMayor(array){
    let mayor= arreglo[0];
    for(let i=1; i<arreglo.length; i++){
        if(arreglo[i]>mayor){
            mayor= arreglo[i];
        }
    }
    return mayor;
}
console.log(numeroMayor(arreglo));

/*Declara un objeto con pares clave-valor y usa un bucle for...in para imprimir cada clave y valor. */

let Violet ={
    nombre:"Violet",
    altura: "175cm",
    peso: "78kg",
    ciudad: "Zaun",
    habilidades: "combate cuerpo a cuerpo",
    armas: "guanteletes hextech",
    armadura: "perchera simple",
}
for(let claves in Violet){
    console.log(claves, Violet[claves]);

}

/*Escribe un programa que cuente cuántas claves tiene un objeto. */
let Caitliyn ={
    nombre: "caitlyn Kiramman",
    altura: "182cm",
    peso: "75kg",
    ciudad: "piltover",
    habilidades: "ataque a la larga distancia", 
    armas: "rifle hextech", 
    armadura: "coraza simple"
}
console.log("el objeto tiene: " + Object.keys(Caitliyn).length + " claves");

/*Usa un bucle para invertir un arreglo (sin usar métodos como .reverse()). */

let reversa= [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
function invertirArray(array){
    let arrayInvertido=[];
    for(let i= array.length-1; i>=0; i--){
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}
console.log(invertirArray(reversa));

/*Dado un arreglo de números, cuenta cuántas veces aparece un número específico. */

let num = [2, 3, 3, 5, 6, 6, 6, 6, 7];

function contarRepeticiones (array, a){
    let específico=0;
    for(let i=0; i<array.length; i++){
        if(array[i]== a){
            específico+=1;
        }
    }
    return específico;
}
console.log(contarRepeticiones(num, 6));


