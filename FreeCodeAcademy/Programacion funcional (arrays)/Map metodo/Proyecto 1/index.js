/*El metodo .map sirve para todos los arreglos. Lo que hace es que devuelve un arreglo de la misma longitud
que el original. Nos permite aplicar funciones a los elementos. Por ejemplo: multiplicar, sumar, hacer parejas, etc.*/

//Ejercicio 1:
//Programa con .map un código que multiplique por tres todos los elementos del arreglo numeros.
/*const numeros=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicados=numeros.map(x => x*3);
console.log(multiplicados);

//Ejercicio 2:
//Del siguiente arreglo de juegos devuelve las edades a partir de la que se permite jugar todos ellos. 
const games=[{game: "Counter Strike Global Offensive",  tipo: "Competitivo-Acción", edad: 18, compania: "Valve"},
             {game: "Dragon Ball Z - Kakarot", tipo: "Anime-Acción", edad: 13, compania: "Bandai Namco"},
             {game: "Minecraft", tipo: "Rol- Mundo abierto", edad: 13, compania: "Mojang Studios"}];

const edades=games.map(x => x.edad); //de los distintos objetos devuelve solo la edad a partir de la que se puede jugar.
console.log(edades);               //muestra las edades.*/

const num=5;
let factorial=1;
for(let i=0; i<5; i--){
    factorial=factorial*i;
}
console.log(factorial);

console.log(num.length); 