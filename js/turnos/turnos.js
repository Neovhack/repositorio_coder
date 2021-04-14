


//Mostrar form segun se tenga que registrar o sacar turno
let formBusqueda = document.getElementById("formBusqueda");
let reFormBusqueda = document.getElementById("reBuscarPorDNI");
let bienvenida = $("#mensajeBienvenida");
//bandera
let bandera = true;
formBusqueda.onsubmit = function(e){
    e.preventDefault();
    let dni = document.getElementById("DNIbusqueda").value;
    const encontrados = personas.find( elemento => elemento.DNI == dni )   
    //Si ya esta registrado puede sacar turno
    if (typeof encontrados == "object" && bandera){
         document.getElementById("formTurno").style.display="block"
        bienvenida.empty();
        bienvenida.append(`<h4>Bienvenido ${encontrados.nombre} ${encontrados.apellido}</h4>`)
        bandera = false;
    //en caso contrario debe registrarse
    } else if (bandera){
        $("#altaUsuario").append(`<h4> No se encontro su usuario, debe registrarse </h4>`)        

        $("#altaUsuario").append(`<div class="form-group">
                                <label for="DNI">DNI:</label>
                                <input class="form-control" type="number" id="DNI" name="DNI" placeholder="Ingrese su DNI" required />
                                 </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                 <label for="nombre">Nombre:</label>
                                   <input class="form-control" type="text" id="nombre" name="nombre" placeholder="Ingrese su Nombre" required>
                                  </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                  <label for="apellido">Apellido:</label>
                                 <input class="form-control" type="text" id="apellido" name="apellido" placeholder="Ingrese su Apellido" required>
                                  </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                 <label for="mail">Mail:</label>
                                 <input class="form-control" type= "email" name="mail" id="mail" placeholder="Ingrese su Mail" required>
                                  <input class="espacios" type="submit" value="Ingresar">
                                  </div>`)
        bandera = false;
    }
}
reFormBusqueda.onclick = function(e){
    e.preventDefault();
    document.getElementById("DNIbusqueda").value = "";
    document.getElementById("formTurno").style.display="none";
    $("#altaUsuario").empty();
    bandera = true;
}

//Traer datos ingresados y crear un objeto usuario
let altaUsuario = document.getElementById("altaUsuario");
altaUsuario.onsubmit = function(e) {
    e.preventDefault();
    let usuarioDNI = document.getElementById("DNI").value;
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioMail = document.getElementById("mail").value;
    personas.push(new Persona(usuarioDNI, usuarioNombre, usuarioApellido, usuarioMail) );
    guardarLocal( "localPersonas", JSON.stringify(personas));
    document.getElementById("formTurno").style.display="block"
    altaUsuario.style.display="none";    
    bienvenida.empty();
    bienvenida.append(`<h4>Bienvenido ${usuarioNombre} ${usuarioApellido}</h4>`);
    bandera = true;
}
//Cambiar color al veterianrio seleccionado
let seleccionado  = $("select[name=Ecivil]");

$("#Ecivil").change(function (e) { 
   let  vetUno = $("#veterinario-1");
    let  vetDos = $("#veterinario-2");
    let  vetTres = $("#veterinario-3");
    let  vetCuatro = $("#veterinario-4");
  if (seleccionado.val() == "Veterinario-1") {
     vetUno.css( "border", "1px solid red");
     vetDos.css( "border", "1px solid #eee");
     vetTres.css( "border", "1px solid #eee");
     vetCuatro.css( "border", "1px solid #eee");
  } else if (seleccionado.val() == "Veterinario-2") {
   vetDos.css( "border", "1px solid red");
   vetUno.css( "border", "1px solid #eee");
   vetTres.css( "border", "1px solid #eee");
   vetCuatro.css( "border", "1px solid #eee");
  }  else if (seleccionado.val() == "Veterinario-3") {
   vetTres.css( "border", "1px solid red");
   vetUno.css( "border", "1px solid #eee");
   vetDos.css( "border", "1px solid #eee");
   vetCuatro.css( "border", "1px solid #eee");
  } else if (seleccionado.val() == "Veterinario-4") {
   vetCuatro.css( "border", "1px solid red");
   vetDos.css( "border", " 1px solid #eee");
   vetTres.css( "border", "1px solid #eee");
   vetUno.css( "border", "1px solid #eee");
  }
   
});


let cargaTurno = document.getElementById("cargaTurno");
cargaTurno.onsubmit = function (e) { 
    e.preventDefault();
    $("#avisoTurnoCargado").append(`<label for="message">Su turno ha sido cargado exitosamente!</label>      `);
 }

