import { Usuario } from './ejercicio1' 

const usuarios: Usuario[] = [
  { id: 1, nombre: 'Pablo', edad: 25, email: 'pablo@mail.com', activo: true },
  { id: 2, nombre: 'Laura', edad: 30, email: 'laura@mail.com', activo: false },
  { id: 3, nombre: 'Carlos', edad: 28, email: 'carlos@mail.com', activo: true }
]

const activos = usuarios.filter(u => u.activo)
console.log("Usuarios activos:", activos)
