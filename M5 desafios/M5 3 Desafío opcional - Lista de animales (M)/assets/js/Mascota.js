import { Animal } from "./Animal.js";

export class Mascota extends Animal {
  constructor(tipo, nombre) {
    super(tipo);
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(name) {
    this._nombre = name;
  }
}
