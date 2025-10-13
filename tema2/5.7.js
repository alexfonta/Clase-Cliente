// Seleccionamos el párrafo con id n2
const n2 = document.getElementById('n2');

// Verificamos que exista
if (n2) {
  // Eliminamos n2 desde su elemento padre (#noticias)
  n2.parentNode.removeChild(n2);
}
