import { productos } from "./productos.js";
import { carrito } from "./carrito.js";

function obtenerCantidadDeProductos() {
    const cantidadDeProductos = parseInt(prompt("¿Cuantos productos deseas calcular?"));

    if (isNaN(cantidadDeProductos) || cantidadDeProductos <= 0) {
        alert("Por favor ingrese una cantidad válida de productos.");
        return 0;
    }

    return cantidadDeProductos;
}

function obtenerPrecioProducto(indice) {
    const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${indice + 1}`));

    if (isNaN(precioProducto) || precioProducto <= 0) {
        alert(`El precio ingresado para el producto ${indice + 1} no es válido, inténtelo de nuevo.`);
        return 0;
    }

    return precioProducto;
}

function calcularCostoTotal() {
    const cantidadDeProductos = obtenerCantidadDeProductos();

    if (cantidadDeProductos === 0) {
        return;
    }

    for (let i = 0; i < cantidadDeProductos; i++) {
        const precioProducto = obtenerPrecioProducto(i);
        if (precioProducto === 0) {
        return;
        }

        carrito.agregarProducto(i, precioProducto);
    }

    alert(`El costo total de los productos es: ${carrito.calcularTotal().toFixed(2)}`);
}

calcularCostoTotal();


/* const usuario = {
    nombre: fran,
    edad: 27
};

const productosLS = localStorage.setItem("usuario", JSON.stringify(usuario));

console.log(usuario);
 */
