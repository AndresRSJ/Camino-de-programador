/*Filter método: devuelve los elementos de un arreglo que cumplan con la condición dada (devuelva true). 
Devuelve un array completamente nuevo de manera que el array inicial se mantiene intacto*/

//Ejercicio 1: 
//Programa que devuelva un arreglo de n numeros.
const numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Es necesario crear una variable donde se almacene el nuevo arreglo.
const numerosFiltrados=numeros.filter(x => x > 5);  //Significa: devuelve números. Pero solo los numeros que sean mayores a 5
console.log(numerosFiltrados);

//-----------------------------------------------------------------------------------------------------------------------------

//Ejercicio 2:
//Tenemos un arreglo mascotas que contiene objetos mascota. Filtre en un arreglo los perros de raza caniche y devuelvalo.
const mascotas= [
      {nombre:"Otto", edad:7, raza:"Caniche"},
      {nombre: "Juana", edad: 6, raza:"Común"},
      {nombre: "Magui", edad: 5, raza:"Barbilla grande"},
      {nombre:"Moon", edad: 1, raza: "Gato"},
      {nombre: "Soni", edad: 7, raza: "Caniche"}
];

const caniches=mascotas.filter(x => x.raza=="Caniche");
console.log(caniches);


