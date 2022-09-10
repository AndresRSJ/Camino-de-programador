/*Primer ejercicio:
//El ejercicio primero suma todos los elementos contenidos en un arreglo. 
const array=[1, 2, 3, 4, 5];
let numeros=array.length-1; //definimos numeros en la longitud de la matriz menos uno, ya que las matrices comienzan desde cero.
let suma=0;  
//funcion recursiva
function funcionSuma(array, numeros){ 
   if(numeros<0){   // detenemos cuando haya terminado de iterar todos los elementos del arreglo
    return(suma);   //retornamos la suma
   }
   suma=suma+array[numeros]   //se van sumando todos los números del arreglo
   return funcionSuma(array, numeros-1);  //llamamos nuevamente a la funcion pero restandole un indice al que tenia anteriormente
}
console.log (funcionSuma(array, numeros));   //llamamos a la funcion y le pasamos valores para que nos retorne la suma
*/

//----------------------------------------------------------------------------------------------------------------------------

/*Segundo ejercicio:
//La siguiente función pide al usuario suma los primeros n números de un arreglo (tomando como que el primer elemento tiene indice 1).
const array=[1, 2, 3, 4, 5];
let suma=0;

function sumaN(array, n){   
    n=n-1;     //Comenzamos restando 1 a n para respetar la estructura de los array (esto se va a seguir repitiendo n veces).
    if(n<0){    //cuando  n (el indice) sea menor a cero entonces se va a detener
        return suma;  //retornamos la suma
    }else{
        suma+=array[n];   //se van sumando los elementos del arreglo y almacenando en la variable suma
        return sumaN(array, n)  //llamamos nuevamente a la funcion sumaN.
    }
}
console.log (sumaN(array, 4));  //pasamos arametros a la funcion. El arreglo (array) y la cantidad de numeros a sumar (4).
*/

//----------------------------------------------------------------------------------------------------------------------------

/*Tercer ejercicio:
//Crear un programa que devuelva un array de numeros enteros comenzando por 1 hasta el número que haya ingresado el ususario.

let array=[];

function sumaN(n){
  if(n===0){
    return array;
  }else{
    array.unshift(n);
    return sumaN(n-1);
  }
}
console.log(sumaN(5));
*/

//----------------------------------------------------------------------------------------------------------------------------

/*Cuarto ejercicio:
//Función recursiva que haga lo mismo que el ejercicio anterior pero que devuelva un array no comanzo por 1, sino por el número dado. 

let array=[];

function sumaN(n){
  if(n===0){
    return array;
  }else{
    array.push(n);
    return sumaN(n-1);
  }
}
console.log(sumaN(10));
*/

/*Quinto ejercicio:*/
//Función recursiva que haga lo mismo que la anterior, pero si se ingresa el número menor a cero devulva un array vacio.

let array=[];

function sumaN(n){
  if(n<0){
    return [];
  }else if(n===0){
    return array;
  }else{
    array.push(n);
    return sumaN(n-1);
  }
}
console.log(sumaN(10));





