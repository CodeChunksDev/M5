import { Propietario } from "./Propietario.js";
import { Animal } from "./Animal.js";
import { Mascota } from "./Mascota.js";

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombrePropietario = formulario[0].value;
  let telefono = formulario[1].value;
  let direccion = formulario[2].value;
  let nombreMascota = formulario[3].value;
  let tipoAnimal = formulario[4].value;
  let consulta = formulario[5].value;

  let propietarioRegistro = new Propietario(
    nombrePropietario,
    direccion,
    telefono
  );

  if (tipoAnimal == "Perro") {
    let perro = new Mascota(tipoAnimal, nombreMascota);
    renderizarRespuesta(propietarioRegistro, perro, consulta);
  } else if (tipoAnimal == "Gato") {
    let gato = new Mascota(tipoAnimal, nombreMascota);
    renderizarRespuesta(propietarioRegistro, gato, consulta);
  } else {
    let conejo = new Mascota(tipoAnimal, nombreMascota);
    renderizarRespuesta(propietarioRegistro, conejo, consulta);
  }
});

const renderizarRespuesta = (propie, mascot, consul) => {
  console.log(propie);
  console.log(mascot);
  let contenedor = document.querySelector("#resultado ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  li1.textContent = `${propie.datosPropietario()}`;
  li2.textContent = `${mascot.tipo}, mientras que el nombre de la mascota es ${mascot.nombre} y la enfermedad es ${consul}`;
  contenedor.appendChild(li1).appendChild(li2);
};
