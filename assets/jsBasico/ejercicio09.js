/**
 * Se utiliza en casos muy espeficicos 
 */

let ciudad = prompt("Ingresa tu ciudad");

switch (ciudad) {
  case "bogota":
    alert("Clima frio");
    break;
  case "medellin":
    alert("Clima templado");
    break;
  default:
    alert("No ingreso una ciudad valida");
    break;
}

if (ciudad === "bogota" || ciudad ==="pasto") {
    alert("clima frio");
} else {
    if (ciudad === "armenia" || ciudad === "medellin") {
        alert("Clima templado");
    } else {
        alert("No ingreso una ciudad valida");
    }
}