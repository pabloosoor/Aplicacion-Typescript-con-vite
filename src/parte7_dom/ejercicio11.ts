interface UsuarioDOM {
    nombre: string;
    email: string;
  }
  
  export function renderizarUsuarios(usuarios: UsuarioDOM[]) {
    const lista = document.getElementById("lista-usuarios");
    if (lista) {
      lista.innerHTML = usuarios
        .map((u) => `<li>${u.nombre} - ${u.email}</li>`) 
        .join("");
    }
  }