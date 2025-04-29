 import { productos } from "./ejercicio5";
 import { Producto } from "./ejercicio5";
 
productos.sort((a, b) => a.precio - b.precio);
console.log("Ordenados por precio:", productos);

const nuevoProducto: Producto = { id: 4, nombre: "Monitor", precio: 300, stock: 2 };
productos.push(nuevoProducto);
console.log("Agregado nuevo producto:", productos);

productos.pop();
console.log("Después de eliminar el último:", productos);
