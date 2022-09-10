//Este programa separa los precios de una lista de productos y lo suma al final.

let productos =[ 'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];
let precios=[];
let sumaPrecios=0;
for(i=0; i<productos.length; i++){
  precios.push(productos[i].slice(productos[i].indexOf(':')+1));
  sumaPrecios+=Number.parseInt(precios[i], 10);
  let objetos= productos[i].slice(0, productos[i].indexOf(':')-1);
}
console.log(sumaPrecios);



