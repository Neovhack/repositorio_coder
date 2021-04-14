
//traer datos carrito de localStorage
let datosCarrito = JSON.parse(localStorage.getItem("datosCarrito"));


for (const producto of datosCarrito) {
  arrCarrito.push(new Carrito(producto));
}

for (const producto of arrCarrito) {
  $("#listadoCarrito").append(` <tr>
  <td class="cart_product">
    <img src="${producto.imagen}" class="tienda__imagenes2" alt="${producto.nombre}">
  </td>
  <td class="cart_description">
    <h4>${producto.nombre}</h4>
    <p>ID: ${producto.id}</p>
  </td>
  <td class="cart_price">
    <p>$${producto.precio}</p>
  </td>
  <td class="cart_quantity">
    <div class="cart_quantity_button"  id="${producto.id}">
      <a class="cart_quantity_up sumar"> + </a>
      <input class="cart_quantity_input" type="text" name="quantity" value="${producto.cantidad}" autocomplete="off" size="2">
      <a class="cart_quantity_down restar"> - </a>
    </div>
  </td>
  <td class="cart_total">
    <p class="cart_total_price">$${producto.getTotal()}</p>
  </td>
  <td class="cart_delete">
    <a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
  </td>
</tr>`)
    
}
 

$(".sumar").click(function (e) { 
  e.preventDefault();
  let padre = $(this).parent().attr('id');
  let producto = arrCarrito.find(elemento => elemento.id == padre);
  producto.agregarProducto();
  $("#"+producto.id+ " .cart_quantity_input").val(producto.cantidad);
  guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
});

$(".restar").click(function (e) { 
  e.preventDefault();
  let padre = $(this).parent().attr('id');
  let producto = arrCarrito.find(elemento => elemento.id == padre);
  producto.descontarProducto();
  $("#"+producto.id+ " .cart_quantity_input").val(producto.cantidad);
  guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));

});


 
/*
$(".sumar").click(function (e) { 
  e.preventDefault();
  
  let producto = arrCarrito.find(elemento => elemento.id == e.target.id);
  producto.agregarProducto();
  document.getElementById(producto.id).value = producto.precio;
  
});

*/