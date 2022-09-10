/*Invertir los caracteres de un string proporcionado*/

let stringInvertido=" ";
function reverse(cadena){
  for(let i=cadena.length-1; i>=cadena.length-3; i--){
  stringInvertido=stringInvertido+cadena[i];
}
console.log(stringInvertido);

}
reverse("andres");





 