/*Con este código podemos recorrer una matriz*/ 
const matriz=[[1, 2], [5, 6], [9, 10]];

for(i=0; i<matriz.length; i++){
    let text=" ";
    for(x=0; x<matriz[i].length; x++){
        text+=matriz[i][x] + "\t";
    }
    console.log(text);
}
