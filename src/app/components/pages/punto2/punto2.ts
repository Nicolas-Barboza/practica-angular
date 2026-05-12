import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../../models/producto.model';
import { ItemCarrito } from '../../../models/item-carrito';
import { ProductoService } from '../../../services/producto';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html'
})
export class Punto2 {
  productos: Producto[] = [];
  carrito: ItemCarrito[] = [];
  isCartOpen = false;

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.getProductos();
    this.carrito = this.productoService.getCarrito();
  }

  agregar(producto: Producto): void {
    this.productoService.agregarAlCarrito(producto);
  }

  aumentar(item: ItemCarrito): void {
    this.productoService.aumentarCantidad(item);
  }

  disminuir(item: ItemCarrito): void {
    this.productoService.disminuirCantidad(item);
  }

  getTotal(): number {
    return this.productoService.getTotal();
  }

  getCantidadCarrito(): number {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  }

  formatPrice(precio: number): string {
    return new Intl.NumberFormat('es-AR').format(precio);
  }

  openCart(): void {
    this.isCartOpen = true;
  }

  closeCart(): void {
    this.isCartOpen = false;
  }
}
