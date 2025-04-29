import { renderizarUsuarios } from "./ejercicio11";

const btn = document.getElementById("btn-cargar");

btn?.addEventListener("click", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const usuariosFormateados = data.map((usuario: any) => ({
    nombre: usuario.name,
    email: usuario.email,
  }));

  renderizarUsuarios(usuariosFormateados);
});
