import { Producto } from './producto.model';

export class ItemCarrito {
  producto: Producto;
  cantidad: number;

  constructor(producto: Producto, cantidad: number) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  getSubtotal(): number {
    return this.producto.precio * this.cantidad;
  }
}