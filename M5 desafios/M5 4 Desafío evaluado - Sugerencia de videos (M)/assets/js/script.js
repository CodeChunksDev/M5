import { Multimedia } from "./Multimedia.js";
import { Reproductor } from "./Reproductor.js";

// INSTANCIAR CLASE REPRODUCTOR CON MÚSICA, PELICULAS Y SERIES
let musica = new Reproductor(
  "https://www.youtube.com/embed/4oStw0r33so?si=DW8SbZfDKXLlXb_d",
  "musica"
);

let pelicula = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);

let serie = new Reproductor(
  "https://www.youtube.com/embed/V-mugKDQDlg?si=2fG5C7C9olNptVvz",
  "series"
);

// INVOCAR MÉTODOS PLAYMULTIMEDIA DE CADA INSTANCIA
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// INVOCAR MÉTODO SETINICIO PARA UNO DE LAS INSTANCIAS
pelicula.setInicio(120);
