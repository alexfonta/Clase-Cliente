let preciosProductos = document.querySelectorAll("#productos span.precio");

for(let i = 0; i < preciosProductos.length; i++) {
    preciosProductos[i].textContent = (+preciosProductos[i].textContent+0.10);
}