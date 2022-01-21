/**
 *
 */

//tolowerCase es para convertir todo lo q ingrese el usuario en minuscula

// Cuando las palabras llevan tilde , no existe funcion para las tildes, toca hacerlo manual

let dia = prompt("Ingrese un dia a la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "miércoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("El dia es entre semana");
} else {
  if (dia === "sabado" || dia === "sábado" || dia === "domingo") {
    alert("Este dia es un fin de semana");
  } else {
    alert("Favor ingrese dia de la semana ");
  }
}
