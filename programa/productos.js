const productos = [
    { id: 1, stock: 3, nombre: "Gorra Rebook", precio: 4000 },
    { id: 2, stock: 2, nombre: "Short Adida Arg", precio: 8000 },
    { id: 3, stock: 6, nombre: "Remera Adidas Originals", precio: 8800 },
    { id: 4, stock: 2, nombre: "Medias Adidas", precio: 1800 }
];

const productosJSON = JSON.stringify(productos);
console.log(productosJSON);

localStorage.setItem('productos', productosJSON);

const productosRecuperadosJson = localStorage.getItem('productos');
const productosRecuperados = JSON.parse(productosRecuperadosJson);

console.log(productosRecuperados);

export { productos };