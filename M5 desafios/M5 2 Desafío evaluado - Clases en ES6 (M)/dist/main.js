"use strict";

var _Cliente = require("./Cliente.js");
var _Impuesto = require("./Impuesto.js");
var formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var impuesto1 = new _Impuesto.Impuesto(formulario[1].value, formulario[2].value);
  var contribuyente1 = new _Cliente.Cliente(formulario[0].value, impuesto1);
  var impuestoCalculado = contribuyente1.calcularImpuesto();
  alert("".concat(contribuyente1.nombre, ": tu impuesto a pagar asciende a: ").concat(impuestoCalculado));
});