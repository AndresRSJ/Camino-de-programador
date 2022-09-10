//Este programa reescribe de forma correcta los nombres de las siguiente ciudades.

var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(k=0; k<cities.length; k++){
    let nuevaPalabra=cities[k].toLowerCase();
    nuevaPalabra=nuevaPalabra[0].toUpperCase() + nuevaPalabra.slice(1);
    console.log (nuevaPalabra);
  }