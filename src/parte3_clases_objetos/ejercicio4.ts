import { UsuarioClass } from "./ejercicio3";

class AdminUsuario extends UsuarioClass {
  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean,
    public permisos: string[]
  ) {
    super(id, nombre, edad, email, activo);
  }
}

const admin = new AdminUsuario(100, "Admin", 35, "admin@mail.com", true, ["crear", "editar", "borrar"]);
console.log("Administrador:", admin);