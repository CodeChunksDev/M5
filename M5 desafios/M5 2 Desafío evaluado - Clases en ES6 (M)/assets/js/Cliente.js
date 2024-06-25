export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(name) {
    this._nombre = name;
  }

  calcularImpuesto() {
    const { _montoBrutoAnual, _deducciones } = this._impuesto;
    const tasaImpuesto = 0.21;
    return (_montoBrutoAnual - _deducciones) * tasaImpuesto;
  }
}
