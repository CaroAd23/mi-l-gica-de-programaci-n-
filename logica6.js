/* 
Un corredor de maraton (distancia 42.195 km) 
ha recorrido la carrera en 2 horas 25 min.
se desea un algoritmo que cacule el tiempo medio en minutos 
por kilometro. 

 */

let horas = 2;
let minutos= 25;
let distancia= 42.195;
let tiempoMedio= 0;

function calcularTiempoMedio (a, b, c){
    let min= (a*60);
    let totalmin= (min + b);
    let promedio = (totalmin/c);
    return promedio; 
}

tiempoMedio= calcularTiempoMedio(horas, minutos, distancia);
console.log("EL tiempo medio es de: "+ Math.round(tiempoMedio)); 
/*La sentencia Math.round(); redondea valores decimales. */