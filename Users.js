class User {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    return this.libros.map((el) => el.nombre);
  }
}

const usuario = new User("Ezequiel", "Nicolino", [], []);

usuario.addMascota("Danger");

usuario.addMascota("Firulais");

usuario.addBook("La rueda del tiempo", "James Oliver Rigney");

usuario.addBook("El Eternauta", "Héctor Germán Oesterheld");

console.log(`Mi nombre es ${usuario.getFullName()}
La cantidad de mascotas son ${usuario.countMascotas()}`);
console.log(usuario.getBookNames());
