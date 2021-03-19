//Constructor de clase persona
class persona {
    constructor(DNI, nombre, apellido, mail){
        this.DNI = DNI;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
    }

}
//array de objetos persona
const personas = [];
//Variable para guardar en Storage

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

//Traer objetos guardados y declaralos


for (let i = 0; i < localStorage.length; i++) { 
        let clave = localStorage.key(i);
        let objeto = JSON.parse( localStorage.getItem(clave));

        personas.push(new persona(objeto.DNI, objeto.nombre, objeto.apellido, objeto.mail));
}



//Mostrar form segun se tenga que registrar o sacar turno
let formBusqueda = document.getElementById("formBusqueda");
let bienvenida = document.getElementById("mensajeBienvenida"); 
let titulo = document.createElement("h4");
formBusqueda.onsubmit = function(e){
    e.preventDefault();
    let dni = document.getElementById("DNIbusqueda").value;
    const encontrados = personas.find( elemento => elemento.DNI == dni )   
    //Si ya esta registrado puede sacar turno
    if (typeof encontrados == "object"){
         document.getElementById("formTurno").style.display="block"
        titulo.innerHTML = `Bienvenido ${encontrados.nombre} ${encontrados.apellido}`
        bienvenida.appendChild(titulo);
    //en caso contrario debe registrarse
    } else {
        $("#altaUsuario").append(`<h4> No se encontro su usuario, debe registrarse </h4>`)        

        $("#altaUsuario").append(`<div class="form-group">
                                <label for="DNI">DNI:</label>
                                <input class="form-control" type="number" id="DNI" name="DNI" placeholder="Ingrese su DNI">
                                 </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                 <label for="nombre">Nombre:</label>
                                   <input class="form-control" type="text" id="nombre" name="nombre" placeholder="Ingrese su Nombre">
                                  </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                  <label for="apellido">Apellido:</label>
                                 <input class="form-control" type="text" id="apellido" name="apellido" placeholder="Ingrese su Apellido">
                                  </div>`)

        $("#altaUsuario").append(`<div class="form-group">
                                 <label for="mail">Mail:</label>
                                 <input class="form-control" type= "email" name="mail" id="mail" placeholder="Ingrese su Mail">
                                  <input class="espacios" type="submit" value="Ingresar">
                                  </div>`)
    }
}

//Traer datos ingresados y crear un objeto usuario
let altaUsuario = document.getElementById("altaUsuario");
altaUsuario.onsubmit = function(e) {
    e.preventDefault();
    let usuarioDNI = document.getElementById("DNI").value;
    let usuarioNombre = document.getElementById("nombre").value;
    let usuarioApellido = document.getElementById("apellido").value;
    let usuarioMail = document.getElementById("mail").value;
    personas.push(new persona(usuarioDNI, usuarioNombre, usuarioApellido, usuarioMail) );
    guardarLocal( usuarioDNI, JSON.stringify(personas[personas.length -1]));
    document.getElementById("formTurno").style.display="block"
         let bienvenida = document.getElementById("mensajeBienvenida");
        let titulo = document.createElement("h4");
        titulo.innerHTML = `Bienvenido ${usuarioNombre} ${usuarioApellido}`
        bienvenida.appendChild(titulo);
}
//Cambiar color al veterianrio seleccionado


 let vetSeleccionado = document.getElementById("Ecivil")
 vetSeleccionado.onchange= function () {
    let  vetUno = document.getElementById("veterinario-1");
    let  vetDos = document.getElementById("veterinario-2");
    let  vetTres = document.getElementById("veterinario-3");
    let  vetCuatro = document.getElementById("veterinario-4");
     if (vetSeleccionado.value == "Veterinario-1") {
        
        vetUno.classList.remove('vetBorder');
        vetUno.classList.add("vetBorderSeleccionado");

        vetDos.classList.remove('vetBorderSeleccionado');
        vetTres.classList.remove('vetBorderSeleccionado');
        vetCuatro.classList.remove('vetBorderSeleccionado');
        vetDos.classList.add("vetBorder");
        vetTres.classList.add("vetBorder");
        vetCuatro.classList.add("vetBorder");
     } else if(vetSeleccionado.value == "Veterinario-2") {
       
        vetDos.classList.remove('vetBorder');
        vetDos.classList.add("vetBorderSeleccionado");

        vetUno.classList.remove('vetBorderSeleccionado');
        vetTres.classList.remove('vetBorderSeleccionado');
        vetCuatro.classList.remove('vetBorderSeleccionado');
        vetUno.classList.add("vetBorder");
        vetTres.classList.add("vetBorder");
        vetCuatro.classList.add("vetBorder");
     } else if (vetSeleccionado.value == "Veterinario-3") {
       
        vetTres.classList.remove('vetBorder');
        vetTres.classList.add("vetBorderSeleccionado");

        vetUno.classList.remove('vetBorderSeleccionado');
        vetDos.classList.remove('vetBorderSeleccionado');
        vetCuatro.classList.remove('vetBorderSeleccionado');
        vetDos.classList.add("vetBorder");
        vetUno.classList.add("vetBorder");
        vetCuatro.classList.add("vetBorder");
     } else if (vetSeleccionado.value == "Veterinario-4") {
      
        vetCuatro.classList.remove('vetBorder');
        vetCuatro.classList.add("vetBorderSeleccionado");

        vetUno.classList.remove('vetBorderSeleccionado');
        vetDos.classList.remove('vetBorderSeleccionado');
        vetTres.classList.remove('vetBorderSeleccionado');
        vetDos.classList.add("vetBorder");
        vetTres.classList.add("vetBorder");
        vetUno.classList.add("vetBorder");
     }
 };



