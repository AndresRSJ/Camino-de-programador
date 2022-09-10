//funcion reducer
/*
const reducer = ((acumulardor, valorActual) => nuevoAcumulador, valorInicialAcumulador)

const reducido = [].reduce ((acc, el) => acc + el, 0)  
*/

//Ejemplo 1:
//Función que sume los elementos de un arreglo con .reduce() método.
const arreglo=[1, 2, 3, 4, 5, 6];  //acc comienza en cero, luego se suma con el primer elemento del arreglo y adquiere ese valor.
const suma=arreglo.reduce((acc, el) => acc + el, 0);  //en la proxima pasada acumulador ya no vale uno, sino que vale la suma anterior.
console.log(suma);                                    //Se itera hasta el final del arreglo.

//Ejemplo 2:
//Función que reciba un array anidado y devuelva el  arreglo de forma plana (sin anidamiento).

const anidado=[1, [2, 3], 4, [5, 6, 7]];  //Arreglo de números anidado
const plano=anidado.reduce((acc, el) =>acc.concat(el), []);  //el accumulador comienza siendo un arreglo vacio al cual le vamos 
console.log(plano);                                          //concatenado los elementos a medida que los iteramos.
