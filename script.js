/* document.getElementById("demostracion").innerHTML =
  "Este texto esta en un archivo externog JS"; */
/* console.log("Este comentario va a salir en consola"); */
let numero= 25;
/* FUNCIÓN COMÚN/CLÁSICA */
function suma(numero){
  return 25 + 25;
}

console.log(`El valor a sumar es ${numero} el resultado de la suma es `, suma(numero));

/* FUNCIÓN FLECHA/ ARROW FUNCTION */

let sumaFlecha = (numero) => numero + 75;

console.log (`La función flecha sumando un valor como ${numero} de `,sumaFlecha(numero));