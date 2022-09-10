//Ejercicio 1:
//Función que reciba dos numeros y devuelva su suma. En caso de que solo reciba un número le sumara 1 y lo retornará.

const suma=(num1, num2=1)=> num1+num2;  //Tenemos que num2 adquiere el valor de 1 en caso de que no se pase ningún parámetro.

console.log(suma(1)); //2