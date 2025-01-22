/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */
/*
1. Contar los dígitos: Primero, determina cuántos dígitos tiene el número.
 Esto se puede hacer dividiendo el número repetidamente por 10 hasta que el resultado sea 0,
  contando cuántas veces realizas la división.
2. Separar los dígitos: Extrae cada dígito del número. Esto se puede hacer utilizando el operador de módulo (%)
 para obtener el último dígito y luego dividiendo el número por 10 para eliminar ese dígito.
3. Elevar los dígitos a la potencia: Eleva cada dígito a la potencia del número total de dígitos
 que tiene el número original.
4. Sumar los resultados: Suma todos los valores obtenidos en el paso anterior.
5. Comparar con el número original: Compara la suma obtenida con el número original.
 Si son iguales, el número es un número de Armstrong; de lo contrario, no lo es.


*/ 
function numeroArmstrong(numero){
/*convertir el numero a una cadena para obtener cada digito por separado*/ 
  const digitos = numero.toString().split('');
  const numDigitos= digitos.length;

  /*realizar la suma para elebar todos los digitos al numero de los digitos del numero */
  let suma= 0; 
  for(let digito of digitos){
    suma+= Math.pow(parseInt(digito), numDigitos);
  }

  /*comparar la suma con el numero ingresado */
  return suma === numero;
}

