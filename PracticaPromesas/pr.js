function procesarPago(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (producto.trim() !== "") {
                resolve(`Pago procesado correctamente para "${producto}"`);
            } else {
                reject("No se puede procesar el pago sin producto");
            }
        }, 1500);
    });
}

function enviarPedido(direccion) {
    return new Promise((resolve, reject) => {
        if (direccion.trim() === "") {
            reject("Dirección de envío no válida");
            return;
        }
        setTimeout(() => {
            const errorAleatorio = Math.random() < 0.2;
            if (errorAleatorio) {
                reject("Error durante el envío, intente de nuevo.");
            } else {
                resolve(`Pedido enviado correctamente a "${direccion}"`);
            }
        }, 2000);
    });
}

document.getElementById("btnComprar").addEventListener("click", async () => {
    const producto = document.getElementById("producto").value;
    const direccion = document.getElementById("direccion").value;
    const resultado = document.getElementById("resultado");

    resultado.textContent = "Procesando compra...";
    resultado.style.color = "black";

    try {
        const mensajePago = await procesarPago(producto);
        resultado.textContent = mensajePago + " | Enviando pedido...";
        const mensajeEnvio = await enviarPedido(direccion);
        resultado.textContent = mensajeEnvio;
        resultado.style.color = "green";
    } catch (error) {
        resultado.textContent = error;
        resultado.style.color = "red";
    }
});
