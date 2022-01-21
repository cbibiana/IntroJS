/**
 * DOM  Nos permite modificar el html desde javaScript
 */

 let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
    let nombre = prompt (" Ingresa tu nombre");
    alert ("Tu nombre es:" + nombre);
};

//Por mejor seguridad no usar este formato de functio , usar la de flechita
// function saakskajs() {
    
// }

// Los eventos se recomiendan que sean al final
ejecutar.onclick = () => {
    cambiarNombre();
}

// ejecutar.onclick = function() {
//     cambiarNombre();
// }
