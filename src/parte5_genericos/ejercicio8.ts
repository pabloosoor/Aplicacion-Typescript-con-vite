interface Caja<T> {
    contenido: T;
  }
  
  class CajaClass<T> implements Caja<T> {
    constructor(public contenido: T) {}
  }
  
  const caja1 = new CajaClass<number>(123);
  const caja2 = new CajaClass<string>("texto");
  const caja3 = new CajaClass<{ id: number; nombre: string }>({ id: 1, nombre: "Ana" });
  
  console.log("Caja con número:", caja1);
  console.log("Caja con string:", caja2);
  console.log("Caja con objeto:", caja3);