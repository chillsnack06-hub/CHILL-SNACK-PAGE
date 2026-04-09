function agregar(producto, precio, seccion) {

    let detalleTopping = "No";

    // SOLO PARA FRESAS
    if (seccion === "Fresas") {

        let topping = confirm("¿Quieres agregar topping extra? (+$15)");

        if (topping) {
            let opcion = prompt("Escribe el topping:");

            if (opcion) {
                detalleTopping = "Sí (" + opcion + ")";
            } else {
                detalleTopping = "Sí";
            }

            precio += 15;
        }
    }

    let item = seccion + " - " + producto + " ($" + precio + ") | Topping: " + detalleTopping;

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(item);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregado 🛒\n" + item);
}