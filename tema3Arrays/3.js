let colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];

let nuevoColores = colores.slice(1, 5); 

console.log(nuevoColores);

colores.splice(3, 2, "negro", "blanco");

console.log(colores);