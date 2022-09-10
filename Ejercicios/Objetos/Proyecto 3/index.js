//Objeto Producto.
let Producto={
    precio: 200,    //Propiedad precio
    porcentajeDeDescuento:0.20,  //Propiedad de descuento
}
//Función que calcula el descuento.
Producto.calcularPrecioDescuento = function (){  //se accede a el precio y descuento dentro de el objeto Producto.
    let precioConDescuento=Producto.precio-(Producto.precio*Producto.porcentajeDeDescuento);
    console.log(precioConDescuento);   //Se podria cambiar Producto por this.precio por ejemplo, ya que estamos dentro del objeto.
                                       //Solo haria falta referenciarlo.
  }
  //Invocamos  la función de descuento
  Producto.calcularPrecioDescuento();
 