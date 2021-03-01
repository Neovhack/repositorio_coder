let consulta = parseInt(prompt("Ingrese el numero de su consulta: 1-Clinica / 2-Cirugia / 3-Laboratorio / 4-Peluqueria")) ;
let consulta2 = 0;
let consulta3 = 0;
let precioClinica = 600;
let precioCastracion = 5000;
let precioCirugia = 4000;
let precioLaboratorio = 700;
let precioBaño = 500;
let precioCortePelo = 800;
let precioCorteUñas = 200;
const iva = x => x * 0.21;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;


switch (consulta) {
    case 1:
        alert("Su turno a sido guardado, el precio total es de: " + suma(precioClinica, iva(precioClinica)));
        break;
    case 2 : 
        consulta2 = parseInt(prompt("1-Cirugia Programada / 2-Castraciones"))
        switch (consulta2) {
            case 1:
                alert("Su turno a sido guardado, el precio base es de: " + suma(precioCirugia, iva(precioCirugia)));
                break;
            case 2:
                alert("Su turno a sido guardado, el precio total es de: " + suma(precioCastracion, iva(precioCastracion)));
                break;
            default:
                alert("No se reconocio el numero");    
        }
        break;
    case 3:
        alert("Su turno a sido guardado, el precio total es de: " + suma(precioLaboratorio, iva(precioLaboratorio)));
        break;  
    case 4:
        consulta3 = parseInt(prompt("1-Baños / 2-Corte de Pelo / 3-Corte de uñas"))
        switch (consulta3) {
            case 1:
                alert("Su turno a sido guardado, el precio total es de: " + suma(precioBaño, iva(precioBaño)));
                break;
            case 2:
                alert("Su turno a sido guardado, el precio total es de: " + suma(precioCortePelo, iva(precioCortePelo)));
                break;
            case 3:
                alert("Su turno a sido guardado, el precio total es de: " + suma(precioCorteUñas, iva(precioCorteUñas)));
                break;    
            default:
                alert("No se reconocio el numero");    
        } 
        break;
    default:
        alert ("No se reconocio el numero ingresado");       
 
}