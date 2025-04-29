async function obtenerUsuarios() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Usuarios desde la API:", data);
  }
  
  obtenerUsuarios();