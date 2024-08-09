// ejemplo y practica de declaracion de variables 
let edad 
edad = 18; 
//OBTENER EL VALOR DE UNA VARIABLE 
console.log("el valor de la variable es: " + edad);
console.log("el valor de la varible +1 es igual a: " + (edad + 1))
//REALIZAR ACCIONES CON VARIABLES 
let nombre = "caro 😁"
console.log("¡¡hola!! " + nombre); 
// SUMAR VARIABLES 
let Numero1 = 23;
let Numero2 = 22; 
console.log("la suma del numero 1 y el numero2 es: " + (Numero1 + Numero2));
//OPERADORES 

// OPERADORES ARITMETICOS 
//suma 
let a = 2;
let b = 3; 
let suma = (a+b);
console.log(suma);
//resta 
let dinero = 3000;
let gastos = 2000;
let cambio =(dinero - gastos);
console.log(cambio);
//multiplicacion
let producto = 10; 
let cantidad = 7;
let precio = (producto*cantidad); 
console.log(precio);
//division 
let herencia = 4000000;
let hijos = 2;
console.log(herencia/hijos); 
/*modulo: se utiliza para obtener el reciduo de una divicion,
es decir la cantidad restante que queda despues de hacer la divicion 
 */
let pizza = 8;
let hijo = 3;
let reparticion = (pizza%hijo);
console.log(reparticion);
//OPERADORES DE ASIGNACION 
//suma simplificada del mismo valor; 
let alumnos = 20;
alumnos += alumnos;
console.log(alumnos);

//OPERADORES DE COMPARACION
//es mayor que:
let edades=22;
let mayor =18;
let esmayor= (edades > mayor);
console.log(esmayor); 
//mayor o igual que:
edades =18;
mayor=18;
esmayor=(edades >= esmayor);
console.log(esmayor);

//OPERADORES LOGICOS
//comparacion de igualdad ==
//comparador logico y: &&

edad= 18;
let genero = "M";
let puedeentrar = (edad==18 && genero=="F");
console.log(puedeentrar); 

//comparador logico o:
edad=60 ;
genero = "M";
 puedeentrar = (edad >=50 || genero=="F");
console.log(puedeentrar); 

//condicionales:
let NumeroPar = 2;
if(NumeroPar=2 || 4){
    console.log("es par");

}
else{
    console.log("es impar");
}
/*la estructura condicional if, en js se utiliza para analizar una condicion dada,
y dependiendo de si esta es verdadera o falsa se ejecuta el bloque de codigo dentro del if, o el codigo dentro 
del else la estrucutra de la condicional if es la siguiente:  */
if("condicion"){
    //codigo que se ejecuta si la condicion es verdadera;
} else{
    //codigo que se ejecuta si la condicion es falsa; 
}

//condicionales multiples
edad = 67;
if (edad <=17){
    console.log("es menor de edad");

}
else if(edad>=18 && edad <60){
    console.log("es mayor de edad"); 

}
else if(edad >18 && edad >=60 && edad <120){
    console.log("es un adulto mayor");
} 
else{
    console.log("su edad no es valida");

}
/* la estructura condiconal else if, o condicon multiple permite evaluar multiples condiciones y 
ejecutar la primera de estas condiciones que encuentre verdadera; de la siguiente manera:*/
if("condicion"){
    //codigo ejecutable si es verdadera;

}
else if("segunda condicion"){
    //codigo que se ejecuta si la primera condicion no es verdadera;

}
else if("tersera condicion"){
    //codigo que se ejecuta si las dos condiciones anteriores son falsas;
}
else{
    //codigo que se ejecuta si todas las condiciones anteriores son falsas,(este es opcional).
}
//swich: la estructura condicional switch es propia de js y no muchos lenguajes la utilizan, se usa al igual que
//el else if para evaluar diferentes condiciones y ejecutar el codigo de la primara condicion verdadera, en este caso
//dependiendo del valor de la variable que se está evaluando. 

let descuento =0;
let pais="colombia";
switch(pais){
    case "argentina":
        descuento=10;
        break 
    case "bolivia":
        descuento=20;
        break
    case "colombia":
        descuento=50;
        break
}
console.log("el descuento para el pais es " + descuento + "%");

//CICLOS O ESTRUCTURAS ITERATIVAS 
/*FOR: el ciclo for nos permite repetir un bloque de codigo hasta que se cumpla con una condicion especifica; 
los ciclos son especialemente utiles en la programacion para simplificar y reducir el codigo. y poder llevar 
a cabo tareas que se repiten de manera extensa, haciendolas mas faciles de realizar. 
la estructura de un ciclo for es el siguiente:    */

 //for(variable; condicion"(hasta donde puede llegar la variable); incremento(en cuanto se incrementa el valor de la variable cada vez que el ciclo se repite)"{
    //codigo que se ejecuta iterativamente hasta que se cumpla con la condicion 
   // para definir que el valor de la variable se 
    //incrementa en 1 cada vez que el ciclo se repite usamos el operador ++; 
//} 
for(let num=1; num<=10; num++){
    let tabla=5;
    let resultado = (tabla*num); 

    console.log(tabla + "x" + num +"=" + resultado);
    
}
//ANIDAR CICLOS: se conoce como anidar, a poner ciclos dentro de otros. 
for(tabla =1; tabla<=10; tabla++){
    for(let num=1; num<=10; num++){
    let resultado =  tabla + "x" + num +"=" + (tabla*num)
    
        console.log(resultado);
        
    } 
}
/*ejemplo anidando condiciones: con este bloque de codigo podemos hacer que se impriman 
en la consola solamente los numeros pares o impares; esto gracias a la condicion del if
(n %2==0) que nos dice que si el residuo de la multiplicacion del valor de n entre 2
es igual a cero, esto significa que el numero es par, y luego se muestra en la consola
mediante console.log.*/

for(n=0; n<10; n++){
    if(n %2==0){
        console.log("par");

    }
    else{
        console.log(n);
    }
}
/*ciclo while: el ciclo while funcina de manera muy similar al for ya que este permite
iterar un determinado bloque de codigo, con la diferencia de que aqui, no se indica el 
numero de iteraciones que dará el ciclo, si no que el ciclo se detiene cuando la condicion
declarada deja de ser verdadera. la estructura de un ciclo while es la siguiente:  */

/*while(condicion){
    //codigo que se ejecuta;
    incremento++; (este es muy importante, para que el ciclo pueda tener una puerta 
    de escape, y no se ejecute infinitas veses. )

}*/
let w=0;
while(w<=18){
    console.log("eres un niño");
    w++;
}
console.log("eres un adulto💼");

/*ejercicio tablero de ajedrez: en este ejercicio, podemos ver el codigo que nos permite
programar un tablero de ajedrez; 
1. se inicializa un ciclo for que define el limite de especios de cada linea del tablero
2. se declara una variable linea, para almacenar el valor de cada casilla de las filas del
tablero. 
3. se inicia un ciclo for para determinar el color de cada casilla de las lineas, el valor 
del color de cada casilla se va almacenando dentro de la variable linea en conjunto con los 
limites de espacios definidos por los ciclos for.
4. se declaran dentro del ciclo for que define las casillar las condicionales para determinar 
el color de cada casilla y que de esta manera se intercalen correctamente.
5. por ultimo se inprime en la consola la variable linea con todos los valores acumulados.
NOTA: el operador !=; significa diferente de;*/



for(let lin=1; lin<=8; lin++){
    let linea="";
    for(let casilla=0; casilla<8; casilla++){
        if(casilla % 2==0 && lin % 2==0){
            linea=linea + "🔳";
        } 
        if(casilla % 2==0 && lin % 2!=0){
            linea=linea +"🔲";
        }
         if(casilla % 2!=0 && lin %2 ==0){
            linea=linea +"🔲";
            
        }
         if(casilla % 2!=0 && lin % 2!=0){
            linea=linea +"🔳";
            
        }
    }
    console.log(linea);
}
//ESTRUCTURAS DE DATOS:
/*Listas: las listas son estructuras de datos como variables, en las cuales podemos almecenar 
nuchos valores, la declaracion de una lista es la siguiente:*/

let lista =["beliver", "riptade", "soldier,poet,king"];
//es importente entender que los elementos de las listas estan numerados con un indice que 
//comienza en 0, en este caso "beliver" apezar de ser el primer elemento de la lista
//en el indice de la lista es el elemento 0. 

//para acceder a un elemento especifico de una lista hacemos lo siguiente:
console.log(lista[1]);

//cuando se trabaja con listas de valores muy extensos es nesesario poder saber la cantidad 
//de dichos elementos, para acceder al tamaño de la lista hacemos lo siguiente:
console.log(lista.length);

//para acceder al ultimo elemento de una lista hacemos lo siguiente:
console.log(lista[lista.length-1]);

//AGREGAR ELEMENTOS A UNA LISTA:
//para agregar elementos a una lista usamos la propiedad .push, para indicar 
//que queremos "enpujar " un elemento a la lista.
console.log(lista);
lista.push("OH HEY!");
console.log(lista);

//modificar los elementos de una lista: 
//para cambiar el valor de un elemento de una lista usamos:
lista[2]="Constelations";
console.log(lista);

//es importante tener en cuenta, como buena practica no mezclar tipos de datos 
//en una lista, aunque el lenguaje nos lo permita, lo ideal es mantener las listas 
//con un solo tipo de datos. 

//ELIMINAR ELEMENTOS DE UNA LISTA:
//para eliminar el primer indice de la lista usamos:
lista.shift();
console.log(lista);

//para eliminar el ultimo indice de la lista usamos:
lista.pop();
console.log(lista);

//es importante reconocer que la mayoria de los lenguajes no cuanta con una propiadad 
//especifica para eliminar elementos de una lista. por lo cual, si queremos eliminar un elemento
//que está en el medio de la lista, no al inicio ni al final, es un poco complicado, y lo ideal es 
//filtar la lista y crear una nueva.

//RECORRER UNA LISTA: 
//en JS existen diversas formas de recorrer un array o una lista:

//con un ciclo for: con el ciclo for declaramos una variable, para contar los ciclos que debe hacer el for.
// luego añadimos la condicion de que le ciclo se repita hasta que la variable i sea menor al numero de elementos
//dentro de la lista, y posteriormente inprimimos el valor de lista en el orden de i; 
for(let i=0; i<lista.length; i++){
    console.log(lista[i]);

}

//con un while:
let i=0;
while(i<lista.length){
    console.log(lista[i]);
    i++;

}

//con la propiedad Foreach: La propiedad foreach significa "para cada" o para cada elemento,
//entonces aqui definimos que para cada elemento de la lista, vamos a cambiar el indice a cancion
// y vamos a imprimir cada elemento, (el elemento => es conocido como funcion flecha).
lista.forEach(cancion => console.log(cancion));

//con la propiedad map: la propiedad map hace exactamente lo mismo que foreach:
lista.map(cancion => console.log(cancion));


//LAS FUNCIONES:
/* las funciones son bloques de codigo que realizan una tarea u subrutina dentro del bloque de codigo, 
estas son especialmente utiles ya que se pueden reutilizar, y hacen que el codigo tenga una mayor modularidad 
haciendo mas facil el mantenimiento. */

//ESTRUCTURA DE UNA FUNCION:

/* function: NombredeLaFuncion (parametrosdeEtrada,) {
    rutina o tarea que la funcion realiza.
    return (resultado que la funcion debe retornar,)
} 

algunos de estos parametros, como los paramentros de entrada, y el return son obsionales
pero comunmente  son utilizados. y muy importantes.*/

//funcion con parametros:
function Saludar (name) {
    console.log("Hola! " + name +" como estas!");

}
Saludar("caro");

//funcion sin paramentros:
function hello (){
    console.log("hola pendejos");
}
hello();

//funcion que devuelva valores:
function sumar (a,b){
    return a+b;
}
 let respuesta = sumar(3,4);
 console.log(respuesta);
 //es una buena practica almacenar el resultado que retorna la funcion dentro de una variable, 
 //antes de realizar alguna otra funcion con este valor.

 //funcion: Encontrar el numero mayor entre 3 numeros; 

 function comparar (x,y){
    if(x>y){
        return x;
    }
    return y;
 }
 let reslt1= comparar(20,30);
 let reslt2= comparar(23,reslt1);
 let reslt3=comparar(10,reslt2);
 console.log(reslt3);


 //ultimo ejercico: Optimizacion de cajero automatico: 
/*let saldo=1000;
function consignar(valor){
    saldo +=valor;
    return true;

}

function retirar(valor){
    if(valor>saldo){
        return false
    }
    saldo -=valor
}

function  realizarAccion (Accion){
    if(Accion=="1"){
        let valor= parseInt(prompt("digite el valor a congsignar: "));
        return consignar(valor);
   
    }
    if(Accion=="2"){
        let valor= parseInt(prompt("digite el valor a retirar: "));
        return retirar(valor);
   
    }

    return false;
 
}

function main () {
    while (true){
        let accion = promt("digite la accio nque desea realizar: 1(consignar) 2(retirar) 3(salir)")
        if(accion=="3"){
            alert("hasta luego");
            break
        }
        let resultado = realizarAccion(accion);
        if (resultado==false){
            alert("no se pudo realizar la accion");
        }else{
            alert("accion realizada correctamente, el nuevo saldo es: " + saldo);
        }
    }

}

main();*/

//METODOS: 

//Metodo Split();
/*Un hecho interesante acerca de las cadenas de caracteres en JavaScript
 es que podemos acceder a los caracteres individuales de una cadena usando su índice.
  El índice del primer carácter es 0, de modo que para acceder al siguiente carácter basta con incrementar
   este índice de uno en uno. Por lo tanto,
 nosotros podemos acceder a cada uno de los caracteres de un string de la siguiente manera: */
let string ="hola";

console.log (string[0]);
console.log (string[1]);
console.log (string[2]);
console.log (string[3]);

/*El metodo split(); divide o fragmenta un string en dos o mas sub cadenas 
usando un separador (divisor). El separador puede ser un solo caracter,
otra cadena, o una exprecion regular en este caso 
el separador es '' espacio. */
let mensaje = "hola"; 
let array= mensaje.split('');
console.log(array);

/*Tras terminar la divicion de la cadena de texto 
split retorna un arreglo con la nueva cadena dividida o las sub cadenas 
. */

/*
 El metodo reverse(); invierte el orden de los elementos de un arreglo.
 */

 let reversa= array.reverse();
 console.log(reversa);

 /* El metodo join(); une los elementos del arreglo en una cadena nuevamente.
   */

 let ordenar= reversa.join(); 
console.log(ordenar);
