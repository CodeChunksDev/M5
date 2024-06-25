export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  get montoBrutoAnual() {
    return this._montoBrutoAnual.get();
  }
  get deducciones() {
    return this._deducciones;
  }
  set montoBrutoAnual(valor) {
    this._montoBrutoAnual = valor;
  }
  set deducciones(monto) {
    this._deducciones = monto;
  }
}
