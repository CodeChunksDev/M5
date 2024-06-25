export class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._direccion = direccion;
  }

  datosPropietario() {
    return `Los datos del propietario son: nombre: ${this._nombre}, telefono: ${this._telefono}, direccion: ${this._direccion}`;
  }
}
