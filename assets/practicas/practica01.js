/**
 * 1- Por medio de un boton pedimos al usuario el nombre 
 * 2- Despues del promt del nombre aparecen mas pormt
 * 3- edad, direccion, documento, telefono
 * 4- en un alert concatenado el siguiente mensaje
 * 5- hola + nombre + tu edad es: + tu direccion es : +  tu numero telefonico es : + telefono + y tu documento es + documento
 */


 const nombreUsuario = () => {
    let nombreUsuario = prompt("ingrese su nombre");
    let edad = prompt("Ingresa tu edad");
    let direccion = prompt("Ingresa tu Dirección");
    const documento = prompt("Ingresa tu Documento de identidad");
    let telefono = prompt ("Ingresa tu número de Telefono");
    alert("Hola tu nombre es : " + nombreUsuario + " , " + "tu edad es de : " + edad + " años, " + " la dirección de tu casa es : " +direccion+ " , " + " su documento de identidad es : " + documento + " y tu telefono es : " + telefono + " . ");
 
}