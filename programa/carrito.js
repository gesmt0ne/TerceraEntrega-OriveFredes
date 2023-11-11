import { productos } from "./productos.js";

const carrito = {
    items: [],

    agregarProducto: function (id, cantidad) {
        const producto = productos.find(item => item.id === `${id}`);

        if (!producto) {
            throw new Error(`El producto con ID ${id} no existe.`);
        }

        if (producto.stock >= cantidad) {
            const carritoItem = {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad
            };
            this.items.push(carritoItem);
            producto.stock -= cantidad;
            alert(`${cantidad} ${producto.nombre}(s) agregado(s) al carrito.`);
        } else {
            alert("No hay suficiente stock para este producto.");
        }
    },
    
    calcularTotal: function () {
        return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
    }
    
}

export { carrito };
