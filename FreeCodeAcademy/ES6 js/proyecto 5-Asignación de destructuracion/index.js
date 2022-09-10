/*Desectrucutrar una matriz nos permite asignarle los valores que queramos a distintas variables.*/
/*Ejemplo 1:*/
//Usando destructración declare una matriz de seis números y luego asignele a 
//unas variables "a" y "b" el valore del primer y segundo indice.
/*
const numeros=[24, 3, 60, 15, 1];

let [a, b]=numeros;

console.log(a, b); //24, 3*/
/*
//Ejemplo 1-v2:
let [a, b]=[24, 3, 60, 15, 1];
console.log(a, b); //24, 3
*/

/*Ejemplo 2:*/
//Con destructuración declare un arreglo de objeto random y luego asigneles a "a" y "b" el primer y ultimo elemento respectivamente.
/*
const random=["auto", "pared", "messi", 3455, "arbol"];
let [a,,,, b]=random; //usamos las comas (la primera no cuenta) para movernos dentro del arreglo y llegar a la posicion deseada.
console.log(a, b);  //"auto", "arbol"
*/

/*Ejemplo 3:*/ 
//Use destructuración y asine a dos variables los 2 primeros elemementos de un arreglo de números de 10 elementos,- 
//el resto guardelo en una variable resto.
const numeros=[2, 5, 32, 56, 7, 1, 10, 23, 90, 0];

const [a, b, ...resto]=numeros;
console.log(a, b); //2, 5
console.log(resto); //32, 56, 7, 1, 10, 23, 90, 0
