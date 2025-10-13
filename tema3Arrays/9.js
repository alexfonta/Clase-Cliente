let productos = [
{ nombre: "Laptop", categoria: "Electrónica", precio: 1500 },
{ nombre: "Silla", categoria: "Muebles", precio: 100 },
{ nombre: "Cargador", categoria: "Electrónica", precio: 50 }
];

productos.forEach(function (p) {
    if(p.nombre === nombreBuscado) {
        resultado = p;
    } else resultado = null;
});
console.log(resultado);