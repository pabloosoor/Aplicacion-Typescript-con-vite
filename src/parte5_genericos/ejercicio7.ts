function getRandomItem<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }
  
  const numeros = [1, 2, 3, 4];
  const strings = ["a", "b", "c"];
  const usuariosGenericos = [
    { id: 1, nombre: "Juan", edad: 20, email: "juan@mail.com", activo: true },
    { id: 2, nombre: "Lucia", edad: 22, email: "lucia@mail.com", activo: false },
  ];
  
  console.log("Número aleatorio:", getRandomItem(numeros));
  console.log("String aleatorio:", getRandomItem(strings));
  console.log("Usuario aleatorio:", getRandomItem(usuariosGenericos));