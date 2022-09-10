/*Funcíón constructora clásica js ES5*/
//Una función de un objeto constructor nos permite justamente construir un nuevo objeto con suma rapidez y facilidad.
//Teniendo predefinidas de antemano las propiedades del objeto "Persona" (por poner un ejemplo) podemos crear diferentes
//tipos de personas con sus respectivos nombres y valores para las propiedades.
//Notemos que se usa una notación al estilo CamelCasse y que luego de cada propiedad va un igual (=) y no un dos puntos (:)
//además se finaliza con punto y coma (;).
/*
var SpaceShuttle = function(targetPlanet, god, age, godof){
    this.targetPlanet = targetPlanet;
    this.god= god;
    this.age=age;
    this.godof=godof;
  }
  var zeus = new SpaceShuttle('Jupiter', "Dios del trueno", "Desconocido", "Dios de los griegos");
  console.log(zeus);*/

/*Sintáxis de objeto constructor js ES6*/
//Cabe señalar que la palabra clave de clase declara una nueva función, a la que se agrega un constructor. 
//Este constructor se invoca cuando se llama a new para crear un nuevo objeto.
//Nota: UpperCamelCase debe usarse por convención para los nombres de clase ES6, como en SpaceShuttle usado anteriormente.
//El método constructor es un método especial para crear e inicializar un objeto creado con una clase.

class SpaceShuttle {
  constructor (targetPlanet, god, age, godof){
    this.targetPlanet=targetPlanet;
    this.age=age;
    this.god=god;
    this.godof=godof;
  }
}

const zeuz=new SpaceShuttle ("Jupiter", "Dios del trueno", "Desconocido", "Dios de los griegos");
