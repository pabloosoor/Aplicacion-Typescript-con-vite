// Ejercicio 1: Interfaces vs Types

export interface Usuario {
    id: number
    nombre: string
    edad: number
    email: string
    activo: boolean
  }
  

  type UsuarioType = {
    id: number
    nombre: string
    edad: number
    email: string
    activo: boolean
  }
  
  // Diferencia:
  // Las interfaces pueden extenderse o implementarse fácilmente en clases.
  // Los types son más flexibles (pueden usar | o &), pero no se pueden extender igual que interfaces.
  

  