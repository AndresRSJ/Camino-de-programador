/*Este programa creo una plantilla de cursos*/ 
class cursos{
   constructor(titulo, dificultad, docente){
    this.titulo=titulo;
    this.dificultad = dificultad;
    this.docente = docente;
    this.lecciones=[];
   }

  agregarLecciones (leccion){
    return this.lecciones.push(leccion);
   } 
   borrarLecciones (){
    return this.lecciones.pop();
   }
}
const cursoMatematicas=new cursos("Analisis Matemático", 7.5, "Retamar Andres");

const cursoLenguaje=new cursos("Ingles intermedio", 7, "Martina Puentes");

cursoMatematicas.agregarLecciones("Clase 1- Fundamentos del analisis Matematico");
cursoLenguaje.agregarLecciones("Clase 1-Verbo To be");

