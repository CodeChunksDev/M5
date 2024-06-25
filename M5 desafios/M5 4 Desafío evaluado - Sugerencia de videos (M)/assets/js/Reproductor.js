import { Multimedia } from "./Multimedia.js";
import { agregaData } from "./agregaData.js";

export class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }

  playMultimedia() {
    agregaData.renderizaVideo(this._url, this._id);
  }
  setInicio(tiempo) {
    let iframe = document.getElementById(this._id);
    iframe.setAttribute("src", `${this._url}?start=${tiempo}`);
  }
}
