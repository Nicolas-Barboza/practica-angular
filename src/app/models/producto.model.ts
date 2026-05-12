export class Producto {
  nombre: string;
  descripcion: string;
  precio: number;
  img: string;
  stock: number;

  constructor(nombre: string, descripcion: string, precio: number, img: string, stock: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.img = img;
    this.stock = stock;
  }
}