export class Carta {

  nombre: string;
  img: string;
  descubierta: boolean;
  encontrada: boolean;

  constructor(nombre: string, img: string) {
    this.nombre = nombre;
    this.img = img;
    this.descubierta = false;
    this.encontrada = false;
  }
}