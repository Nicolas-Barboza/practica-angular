import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { ItemCarrito } from '../models/item-carrito';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Array<Producto>;
  carrito: Array<ItemCarrito>;

  constructor() {
  this.productos = Array<Producto>();
  this.carrito = Array<ItemCarrito>();

  this.productos.push(
    new Producto(
      'Notebook ASUS',
      '16GB RAM - SSD 512GB',
      450000,
      'assets/img/productos/notebook-asus.jpg',
      15
    )
  );

  this.productos.push(
    new Producto(
      'Monitor LG',
      '24 pulgadas Full HD',
      180000,
      'assets/img/productos/monitor.jpg',
      12
    )
  );

  this.productos.push(
    new Producto(
      'Teclado Mecánico',
      'RGB gamer',
      95000,
      'assets/img/productos/teclado.jpg',
      20
    )
  );

  this.productos.push(
    new Producto(
      'Mouse Logitech',
      'Inalámbrico',
      45000,
      'assets/img/productos/mouse.jpg',
      25
    )
  );

  this.productos.push(
    new Producto(
      'Auriculares HyperX',
      'Sonido envolvente 7.1',
      120000,
      'assets/img/productos/auricular.jpg',
      18
    )
  );

  this.productos.push(
    new Producto(
      'Silla Gamer',
      'Ergonómica reclinable',
      320000,
      'assets/img/productos/silla-gamer.jpg',
      10
    )
  );

  this.productos.push(
    new Producto(
      'Tablet Samsung',
      '64GB - Pantalla 10"',
      210000,
      'assets/img/productos/tablet.jpg',
      14
    )
  );

  this.productos.push(
    new Producto(
      'Smartphone Xiaomi',
      '128GB - 6GB RAM',
      250000,
      'assets/img/productos/smartphone.jpg',
      22
    )
  );
}

  getProductos(): Producto[] {
    return this.productos;
  }

  getCarrito(): ItemCarrito[] {
    return this.carrito;
  }

  agregarAlCarrito(producto: Producto): void {
    if (producto.stock > 0) {
      let itemEncontrado = this.carrito.find(item => item.producto.nombre === producto.nombre);

      if (itemEncontrado) {
        itemEncontrado.cantidad++;
      } else {
        this.carrito.push(new ItemCarrito(producto, 1));
      }

      producto.stock--;
    }
  }

  aumentarCantidad(item: ItemCarrito): void {
    if (item.producto.stock > 0) {
      item.cantidad++;
      item.producto.stock--;
    }
  }

  disminuirCantidad(item: ItemCarrito): void {
    item.cantidad--;
    item.producto.stock++;

    if (item.cantidad === 0) {
      let posicion = this.carrito.indexOf(item);
      this.carrito.splice(posicion, 1);
    }
  }

  getTotal(): number {
    let total = 0;

    this.carrito.forEach(item => {
      total += item.getSubtotal();
    });

    return total;
  }
}
