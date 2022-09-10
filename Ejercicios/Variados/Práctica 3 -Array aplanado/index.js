//Aplanamos un arreglo de varios nivele de profundidad usando .flat()
// .flat ("profundida") aplana el arreglo. Le debemos pasar la profudidad hasya la que debe aplanar.

const a=[1, 2,["Andres",["Otto"], "Magui"], 3,[4, 5] ];

const a_flat=a.flat(2); //Guardamos el array aplanado en a_flat.
console.log(a_flat);      
for(i=0; i<a_flat.length; i++){  //Recorremos a_flat (array aplanado).
console.log (a_flat[i]);  //Lo mostramos uno por uno para comprobar que se aplano correctamente.
}