import { Cliente } from "./Cliente.js";
import { Impuesto } from "./Impuesto.js";

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let impuesto1 = new Impuesto(formulario[1].value, formulario[2].value);
  let contribuyente1 = new Cliente(formulario[0].value, impuesto1);
  let impuestoCalculado = contribuyente1.calcularImpuesto();

  alert(
    `${contribuyente1.nombre}: tu impuesto a pagar asciende a: ${impuestoCalculado}`
  );
});
