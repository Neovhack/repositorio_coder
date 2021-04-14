
//Variable para guardar en Storage

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

//Traer objetos guardados y declaralos
let datosPersonas = JSON.parse(localStorage.getItem("localPersonas"));

for (const persona of datosPersonas) {
        personas.push(new Persona(persona.DNI, persona.nombre, persona.apellido, persona.mail));
}

