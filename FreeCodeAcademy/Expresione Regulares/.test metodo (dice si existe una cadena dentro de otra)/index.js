/*Test método: Con el podemos saber si una cadena se encuentra dentro de otra. En caso de que la encuentre 
devulve true, sino devuelve false.*/
// /i : "ignore case" ignora la ortografia y sirve para hacer coincidir distintas variable de la misma cadena, ejem: perro, Perro, PERRO, etc.
// /g : es el objeto global y buscara si la palabra se encuentra contenida más de una vez en el string. 

/*Ejemplo 1: Encuentra el nombre del perro en la cadena "texto"*/ 

let texto="Hola, soy el perro juan";
let nombre= /juan/;
let extractoTexto=nombre.test(texto);

console.log(extractoTexto);

/*Ejemplo 2: Encuentra todas las veces que se repite la palabra "arbol" en la cadena arboles*/

let arboles="arbol lloron, Arbol crespón, ARBOL Jacarandá, etc";
let contiene= /arbol/gi;
let contieneArboles=contiene.test(arboles);

console.log(contieneArboles);