//Se extraen las primeras tres letras del código de trenes y se adjunta con su estación.
//Descartamos el código de en medio que no es legible por humanos.

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(i=0; i<stations.length; i++){
    let letras= stations[i].slice(0, 3);
    let comas=stations[i].indexOf(";");
    let nombres=stations[i].slice(comas+1);
    
    console.log (letras+": "+nombres );
}                