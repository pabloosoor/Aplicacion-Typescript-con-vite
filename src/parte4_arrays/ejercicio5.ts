 export type Producto = {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
  };
  
  export const productos: Producto[] = [
    { id: 1, nombre: "Laptop", precio: 1500, stock: 3 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 0 },
    { id: 3, nombre: "Teclado", precio: 100, stock: 5 },
  ];
  
  const nombres = productos.map((productos) => productos.nombre);
  console.log("Nombres de productos:", nombres);
  
  const conStock = productos.filter((productos) => productos.stock > 0);
  console.log("Productos con stock:", conStock);