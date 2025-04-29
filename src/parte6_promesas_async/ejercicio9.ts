async function obtenerDatos(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["dato1", "dato2", "dato3"]);
      }, 3000);
    });
  }
  
  async function mostrarDatos() {
    const datos = await obtenerDatos();
    console.log("Datos obtenidos:", datos);
  }
  
  mostrarDatos();
  