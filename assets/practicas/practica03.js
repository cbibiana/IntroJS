/**
 * Un html vamos a tener los siguientes textoaa
 * nombre:
 * edad:
 * direccion:
 * telefon:
 * documento:
 * boton: (ingresar datos)
 * promt que nos pide la informacion
 * localstorage
 */

//DOM

let ingresarDatos = document.getElementById("btnIngresarDatos");

let nombreUsuario = document.getElementById("nombreUsuario");
let edadUser = document.getElementById("edad");
let direccionUser = document.getElementById("direccion");
let telefonoUser = document.getElementById("telefono");
let documentoUser = document.getElementById("documento");

const cambiarNombre = () => {
  let nombre = prompt(" Ingresa tu nombre");
  nombreUsuario.innerHTML = "Nombre : " + nombre;
  localStorage.setItem("nombre", nombre);
};

if (localStorage.getItem("nombre")) {
    nombreUsuario.innerHTML = "Nombre :  " + localStorage.getItem("nombre")
}


const cambiarEdad = () => {
  let edad = prompt(" Ingresa tu edad");
  edadUser.innerHTML = "Edad : " + edad;
  localStorage.setItem("edad", edad);
};

if (localStorage.getItem("edad")) {
   edadUser.innerHTML = " Edad :  " + localStorage.getItem("edad")
}

const cambiarDireccion = () => {
  let direccion = prompt(" Ingresa tu Dirección");
  direccionUser.innerHTML = "Dirección : " + direccion;
  localStorage.setItem("direccion", direccion);
};

if (localStorage.getItem("direccion")) {
    direccionUser.innerHTML = "Dirección  : " + localStorage.getItem("direccion")
 }

const cambiarTelefono = () => {
  let telefono = prompt("Ingresa su telefono");
  telefonoUser.innerHTML = "Telefono : " + telefono;
  localStorage.setItem("telefono", telefono);
};

if (localStorage.getItem("telefono")) {
    telefonoUser.innerHTML = " Telefono : " + localStorage.getItem("telefono");
 }

const cambiarDocumento = () => {
  let documento = prompt("Ingrese tu documento de identidad");
  documentoUser.innerHTML = "Documento : " + documento;
  localStorage.setItem("documento", documento)
};

if (localStorage.getItem("documento")) {
    documentoUser.innerHTML = "Documento : " + localStorage.getItem("documento");
    
}

//eventos
ingresarDatos.onclick = () => {
  cambiarNombre();
  cambiarEdad();
  cambiarDireccion();
  cambiarTelefono();
  cambiarDocumento();
};
