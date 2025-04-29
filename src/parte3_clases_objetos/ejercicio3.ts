import { Usuario } from "../parte2_interfaces_types/ejercicio1";

export class UsuarioClass implements Usuario {
    constructor(
      public id: number,
      public nombre: string,
      public edad: number,
      public email: string,
      public activo: boolean
    ) {}
  
    toggleActivo(): void {
      this.activo = !this.activo;
    }
  }
  
  const usuario1 = new UsuarioClass(1, "Pablo", 25, "pablo@mail.com", true);
  const usuario2 = new UsuarioClass(2, "Carla", 29, "carla@mail.com", false);
  
  console.log(usuario1);
  usuario1.toggleActivo();
  console.log("Estado cambiado:", usuario1);
  
  console.log(usuario2);
  usuario2.toggleActivo();
  console.log("Estado cambiado:", usuario2);
  
  