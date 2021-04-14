
//agregar nuevos productos al html

function nuevoProducto(pId, pNombre, pPrecio) { 
    
    let encontrados = productos.find ( elemento => elemento.id == pId);
    while (typeof(encontrados) == "object" ) {
        alert("El id ingresado ya existe, el ultimo id registrado es " + productos[productos.length -1].id)
        let idDuplicado = parseInt(prompt("ingrese nuevamente el id"));
        encontrados = productos.find ( elemento => elemento.id == idDuplicado);
    }
     productos.push(new producto(pId, pNombre, pPrecio));

    $("#carrusel").append(`<div class="carousel-item col-md-4" id="${pId}">
                            <img  src="imagenes/tienda1.jpg" class="img-fluid mx-auto d-block tienda__imagenes1">
                             <div class="carousel-caption d-none d-md-block"> 
                              <p class="margenTexto"><strong>${pNombre}</strong></p>
                              <p >$ ${pPrecio}</p>
                             </div>
                             </div>`);

 }
//Boton ingresar producto
$("#ingresoProducto").click(function () { 
    nuevoProducto(parseInt(prompt("ingrese el id")),prompt("ingrese el nombre"),parseInt(prompt("ingrese el precio")))
    
});
