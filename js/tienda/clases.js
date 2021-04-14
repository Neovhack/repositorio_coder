//clase de productos
class Producto {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen
    }
  }
  class APProPlan {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen,
        this.cantidad = producto.cantidad
    }
  }
  class APRoyalCanin {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen,
        this.cantidad = producto.cantidad
    }
  }
  class APEukanuba {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen,
        this.cantidad = producto.cantidad
    }
  }
  class AGExcellent {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen,
        this.cantidad = producto.cantidad
    }
  }
  class AGCatChow {
    constructor (producto){
        this.id = producto.id;
        this.nombre = producto.nombre,
        this.precio = producto.precio,
        this.imagen = producto.imagen,
        this.cantidad = producto.cantidad
    }
  }
  class Carrito {
    constructor(seleccionado) {
        this.id = seleccionado.id,
        this.nombre = seleccionado.nombre,
        this.precio = seleccionado.precio,
        this.cantidad = seleccionado.cantidad,
        this.imagen = seleccionado.imagen
    }
    agregarProducto() {
        this.cantidad++;
    }
    descontarProducto() {
      this.cantidad--;
  }
    getTotal() {
        return (this.cantidad * this.precio);
    }
  
  }
  
//arrays
let arrProductos = [];
let arrProPlan = [];
let arrRoyalCanin = [];
let arrEukanuba = [];
let arrExcellent = [];
let arrCatChow = [];
let arrCarrito = [];
  
//guardar carrito en local
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

  
  //array de objetos productos

 



//traer data de json
//Productos

$.getJSON("js/tienda/json/Productos.json", function(respuesta, estado){
    if ( estado === "success"){
   
    for (const producto of respuesta) {
        arrProductos.push(new Producto(producto))
        $("#").append(`	<div class="col-sm-3">
        <div class="product-image-wrapper">
        <div class="single-products">
          <div class="productinfo text-center">
            <img src="${producto.imagen}" alt="" />
            <h2>$ ${producto.precio}</h2>
            <p>${producto.nombre}</p>
            <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-productos"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
          </div>
        </div>
      </div>
      </div>`);
    }
     //agregar Carrito
  $(".add-carrito-productos").click(function (e) { 
    let seleccionado = arrProductos.find(producto => producto.id == e.target.id);
    let agregar = arrCarrito.find(producto => producto.id == e.target.id);
    if( agregar != undefined) {
      agregar.agregarProducto();
    }else {
      arrCarrito.push(new Carrito(seleccionado));
    }
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
   guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
  });
    ;}});

//CatChow
$.getJSON("js/tienda/json/Cat Chow.json", function(respuesta, estado){
    if ( estado === "success"){
   
    for (const producto of respuesta) {
        arrCatChow.push(new AGCatChow(producto))
        $("#CatChow").append(`<div class="col-sm-4" id="${producto.id}">
        <div class="product-image-wrapper">
         <div class="single-products">
          <div class="productinfo text-center">
         <img src="${producto.imagen}" alt="${producto.nombre}" />
         <h2>$ ${producto.precio}</h2>
          <p>${producto.nombre}</p>
          <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-catChow"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
       </div>
    </div>
  </div>
</div>`);
    }
   //agregar Carrito
   $(".add-carrito-catChow").click(function (e) { 
    let seleccionado = arrCatChow.find(producto => producto.id == e.target.id);
    let agregar = arrCarrito.find(producto => producto.id == e.target.id);
    if( agregar != undefined) {
      agregar.agregarProducto();
    }else {
      arrCarrito.push(new Carrito(seleccionado));
    }
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
   guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
  });
    ;}});

//Eukanuba data
$.getJSON("js/tienda/json/Eukanuba.json", function(respuesta, estado){
    if ( estado === "success"){
   
    for (const producto of respuesta) {
        arrEukanuba.push(new APEukanuba(producto))
        $("#Eukanuba").append(`<div class="col-sm-4" id="${producto.id}">
        <div class="product-image-wrapper">
         <div class="single-products">
          <div class="productinfo text-center">
         <img src="${producto.imagen}" alt="${producto.nombre}" />
         <h2>$ ${producto.precio}</h2>
          <p>${producto.nombre}</p>
          <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-eukanuba"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
       </div>
    </div>
  </div>
</div>`);
    }
  //agregar Carrito
  $(".add-carrito-eukanuba").click(function (e) { 
    let seleccionado = arrEukanuba.find(producto => producto.id == e.target.id);
    let agregar = arrCarrito.find(producto => producto.id == e.target.id);
    if( agregar != undefined) {
      agregar.agregarProducto();
    }else {
      arrCarrito.push(new Carrito(seleccionado));
    }
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
   guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
  });
    ;}});

//ExcellentData
$.getJSON("js/tienda/json/Excellent.json", function(respuesta, estado){
    if ( estado === "success"){
   
    for (const producto of respuesta) {
        arrExcellent.push(new AGExcellent(producto))
        $("#Excellent").append(`<div class="col-sm-4" id="${producto.id}">
        <div class="product-image-wrapper">
         <div class="single-products">
          <div class="productinfo text-center">
         <img src="${producto.imagen}" alt="${producto.nombre}" />
         <h2>$ ${producto.precio}</h2>
          <p>${producto.nombre}</p>
          <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-excellent"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
       </div>
    </div>
  </div>
</div>`);
    }
   //agregar Carrito
   $(".add-carrito-excellent").click(function (e) { 
    let seleccionado = arrExcellent.find(producto => producto.id == e.target.id);
    let agregar = arrCarrito.find(producto => producto.id == e.target.id);
    if( agregar != undefined) {
      agregar.agregarProducto();
    }else {
      arrCarrito.push(new Carrito(seleccionado));
    }
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
   guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
  });
    ;}});

//Proplan data
$.getJSON("js/tienda/json/ProPlan.json", function(respuesta, estado){
    if ( estado === "success"){
        
    for (const producto of respuesta) {
        arrProPlan.push(new APProPlan(producto))
        $("#ProPlan").append(`<div class="col-sm-4" id="${producto.id}">
        <div class="product-image-wrapper">
          <div class="single-products">
            <div class="productinfo text-center">
             <img src="${producto.imagen}" alt="${producto.nombre}" />
             <h2>$ ${producto.precio}</h2>
             <p>${producto.nombre}</p>
             <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-proPlan"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
           </div>
         </div>
        </div>
      </div>`);
    }
    //agregar Carrito
    $(".add-carrito-proPlan").click(function (e) { 
      let seleccionado = arrProPlan.find(producto => producto.id == e.target.id);
      let agregar = arrCarrito.find(producto => producto.id == e.target.id);
      if( agregar != undefined) {
        agregar.agregarProducto();
      }else {
        arrCarrito.push(new Carrito(seleccionado));
      };
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
    guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
    });
  
    ;}});

//Royal canin data
$.getJSON("js/tienda/json/Royal Canin.json", function(respuesta, estado){
    if ( estado === "success"){
   
    for (const producto of respuesta) {
        arrRoyalCanin.push(new APRoyalCanin(producto))
        $("#RoyalCanin").append(`<div class="col-sm-4" id="${producto.id}">
        <div class="product-image-wrapper">
         <div class="single-products">
           <div class="productinfo text-center">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
           <h2>$ ${producto.precio}</h2>
           <p>${producto.nombre}</p>
           <button type="button" id="${producto.id}" class="btn btn-default add-to-cart add-carrito-royalCanin"><i class="fa fa-shopping-cart"></i>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>`);
  }
  //agregar Carrito
  $(".add-carrito-royalCanin").click(function (e) { 
    let seleccionado = arrRoyalCanin.find(producto => producto.id == e.target.id);
    let agregar = arrCarrito.find(producto => producto.id == e.target.id);
    if( agregar != undefined) {
      agregar.agregarProducto();
    }else {
      arrCarrito.push(new Carrito(seleccionado));
    }
    $("#imagenCarrito").empty();
    $("#imagenCarrito").append(`<img src="imagenes/tienda/carritoComprasNotificacion.png" alt="carrito">`)
   guardarLocal("datosCarrito",  JSON.stringify(arrCarrito));
  });
    ;}});

