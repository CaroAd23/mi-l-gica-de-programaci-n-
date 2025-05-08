/*CUADRADO Y TRIANGULO 2D: 
Crea un programa que dibuje un cuadrado o un triangulo con asteriscos
indicaremos el tamaño del lado, y si la figura a dibujar es una u otra. */

/*
datos de entrada: tamaño del lado y tipo de figura a dibujar; 

datos de salida: la figura seleccionanada con el tamaño requerido.

procesos nesesarios: 
* definir figura como string. 
* definir Trazo como array.
* si figura = "cuadrado" hacer ( para i = 1; hasta que 1 <= lado*lado; i++) hacer 
trazo.push("*");

 */

 let trazo = [];

function figura2d( figura, lado){
  switch(figura){
    case "cuadrado": 
    for(let i=0; i<= lado*lado; i++){
        trazo.push("*");
        
    }
    console.log(trazo);
    break;
    case "triangulo":
        for(let i= 0; i <= (lado*lado)/2; i++){
            trazo.push("*");
            console.log(trazo);
        }

  }
}

let test = figura2d("triangulo", 7 );
console.log(test);

