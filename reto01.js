
/*operadores y estructuras de control */

// Operadores aritmeticos:
let int1= 10;
let int2= 23; 

let suma = (int1 + int2);
let resta = (int1 - int2);
let multiplicación = ( int1 * int2);
let división = (int1 / int2); 
let modulo = ( int1 % int2); // calcula el residuo de una división; 
let potencia = (int1 ** int2); //...

console.log(modulo);

//operadores de comparación
let menorQ = int1<int2;
let mayorQ = int1>int2;
let igualQ = int1 = int2;
let MaIgualQ = int1 >= int2;
let MeIgualQ = int1 <= int2;
let diferente = int1 != int2;

console.log(mayorQ);

//comparaciones logicos 

let and = int1 + int2 && 10 + 10 == 20;
let or =  int1 + int2 || 5 + 20 == 33;
let not = !true; //se utiliza para negar una exprecion logica, inviete el valor de la misma. 

//operadores de asignación 
 
let num = 22;
 
let sumayAsignación = num += 1; 
let restayAsignación = num -= 2; 
let mulpiplicaciónyAsignación = num *= 5; 
let divisiónyAsignación = num /= 4;
let moduloyAsignación = num %= 3; 

console.log(mulpiplicaciónyAsignación);

//operadores de identidad 
//igualdad estricta: 
let n = 5;
let m = 5; 
let igualdadEstricta = m === n; // compara si dos valores son estrictamente iguales. 
console.log(igualdadEstricta);

//desigualdad estricta: 
let desigualdadEstricta = m !== n; //compara si dos valores son totalmente diferentes.
console.log(desigualdadEstricta);

//operadores de pertenencia 

//in:
let vect = { nombre: "carolina", edad: 18};
console.log(vect);
console.log('apellido' in vect); // objeto
/*Utilizados para comprobar si un 
elemento existe dentro de otro conjunto, principalmente objetos;
 */

//instanceof: 
class person {
    constructor(nombre){
        this.nombre = nombre;
    }
}
let persona = new person("carolina");
console.log(persona instanceof person);//permite verificar si un objeto es una instancia de una clase especifica.


 //operadores de bit...

 //estrcuturas de control 

 //condicionales: 
 let n1 = 2.5;
 let n2 = 2.5;
 if(n1 != n2){
    console.log("los numeros no coinsiden");

 }else{
    console.log("los numeros son iguales")

 }

 if(n1 < n2){
    console.log("n1 es menor o igual a n2");

 }
 else if(n1 > n2){
    console.log("n1 es mayor o igual a n2");

 }
 else if(n1 == n2){
    console.log("n1 es igual a n2");
 }

 switch(n2){
    case 1: 
    console.log("n2 es menor a 2.5");
    break
    case 2.5: 
    console.log("n2 es " + n2);
 }

 //iterativas

 for(i= 0; i<=100; i++){
   console.log(i);
 }

 let numr = 19;
 while(numr<20){
   console.log("el numero es menor a 20");
numr += 1;
 }

 //manejo de exepciones 
try {
   //codigo que puede arrojar exepciones
   let exepcion = 10/0;
   console.log(exepcion);
}catch{
   //codigo que se ejecuta en caso de error
   console.log("ocurrio un error");

}finally{
   //codigo que siempre se ejecuta independientemente de si se presentaron errores
   console.log("se terminó el manejo de exepciones;");
}

/*Crea un programa que imprima todos los numeros 
comprendidos entre 10 y 55 incluyendo solo los pares, 
a exepcion del 16 */

for(let numeros = 10; numeros<=55; numeros++){
   if(numeros % 2 ==0 && numeros !=16 && numeros % 3 != 0){
      console.log(numeros);

   }
}
