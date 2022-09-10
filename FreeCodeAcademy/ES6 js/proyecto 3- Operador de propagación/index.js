//El operador de propagración (...operador) es aquel que nos permite expandir una matriz o una serie de valores dados.
//Por ejemplo: si tenemos una matriz que suma los argumentos que le son pasados, pero no sabemos la cantidad de argumentos
//que se van a pasar entonces es útil usar este operador.

/*Ejercicio 1:*/
//Función que sume los números que le son pasados.
/*
const suma = (...numeros) => numeros.reduce((acc, el) => acc+el, 0); //...numeros recibe todos los parámetros que le son pasados. 
                                                                     //.reduce suma todos esos parámetros y los retorna a la llamada de la función.
console.log(suma(1, 2, 3, 4, 5)); //15

/*Ejercicio 2:*/
//Desarmar la matriz arreglo y devolver los números sueltos. 
const arreglo=[1, 2, 3, 4, 5];
console.log(...arreglo);  // 1 2 3 4 5 (Usamos operador de propagación).

/*Ejercicio 3:*/
//Máximo número de un arreglo con Math.max y operador de propagación.
//Esta función devuelve el máximo valor encotrado en el arreglo, sin necesidad de saber el tamaño del mismo.

const numerosArray=[1, 25, 68, 4, 47];   //La función máximo recibe un arreglo de números y saca el máximo con Math.max
const maximo = (numeros) => Math.max(...numeros); //Es necesario usar esta sitaxis ya que Math.max recibe operadores separados por comas, no una matriz.
                                                  //Al usar ...numeros le brindamos los números sueltos para que los pueda usar.(Ejemplo abajo).
console.log(maximo(numerosArray));


/*Ejercicio 4:*/
//Copie tódo el contenido de un arreglo y guardelo en otro.
let dias=["Lunes", "Martes", "Miercoles,", "Jueves", "Viernes"];
let dias2;
dias2=[...dias];   //Pasamos a dias2 todo el contenido de dias.

console.log(dias2); //["Lunes", "Martes", "Miercoles,", "Jueves", "Viernes"]