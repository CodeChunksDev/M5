import { Propietario } from "./Propietario.js";

export class Animal extends Propietario {
  constructor(tipo) {
    super();
    this._tipo = tipo;
  }

  get tipo() {
    return `El tipo del animal es: ${this._tipo}`;
  }
}
