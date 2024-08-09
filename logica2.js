/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
/* MI SOLUCION:
1. declarar la funcion con el nombre "calcular" y definir los paramentros.
2. declarar condicionales para evaluar el valor de el parametro definido,
si el valor es "1" equivale a triangulo, si es "2" el valor es "rectangulo", 
si el valor es "3" equivale a "cuadrado". 
3. declarar variables que correspondan a los valores de cada poligono.y ponerlos 
dentro de las condicionales correspondientes.
4. declarar las operaciones a realizar con las variables segun sea el caso, 
1,2 o 3.
5. declarar un "return" dentro de cada condicion para que se retorne es resultado
de las operaciones.
6. declarar un "else" por si el valor ingresado como parametro de la funcion 
no coninside con los valores que deben ser evaluados.  */

function calcular(a){
    
    if(a==1){
        let base=3;
        let altura=4;
        let areaTotal= (base*altura)/2;
        return areaTotal;
    }
    if(a==2){
        let base=13;
        let altura=5;
         areaTotal= (base*altura);
        return areaTotal;
    }
    if(a==3){
        let lado=2;
        areaTotal= (lado*lado);
        return areaTotal;
    }
    else{ console.log("valor no valido")}

}
let area= calcular(2);
console.log(area);