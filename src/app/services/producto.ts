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
      'https://images.unsplash.com/photo-1698512475067-74ed7c956c8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&q=70&auto=format',
      15
    )
  );

  this.productos.push(
    new Producto(
      'Monitor LG',
      '24 pulgadas Full HD',
      180000,
      'https://images.unsplash.com/photo-1547658718-1cdaa0852790?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&q=70&auto=format',
      12
    )
  );

  this.productos.push(
    new Producto(
      'Teclado Mecánico',
      'RGB gamer',
      95000,
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&q=70&auto=format',
      20
    )
  );

  this.productos.push(
    new Producto(
      'Mouse Logitech',
      'Inalámbrico',
      45000,
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=70&auto=format',
      25
    )
  );

  this.productos.push(
    new Producto(
      'Auriculares HyperX',
      'Sonido envolvente 7.1',
      120000,
      'https://images.unsplash.com/photo-1566055972289-c52022ae23b7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&q=70&auto=format',
      18
    )
  );

  this.productos.push(
    new Producto(
      'Silla Gamer',
      'Ergonómica reclinable',
      320000,
      'https://images.unsplash.com/photo-1670946839270-cc4febd43b09?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=400&q=70&auto=format',
      10
    )
  );

  this.productos.push(
    new Producto(
      'Tablet Samsung',
      '64GB - Pantalla 10"',
      210000,
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&q=70&auto=format',
      14
    )
  );

  this.productos.push(
    new Producto(
      'Smartphone Xiaomi',
      '128GB - 6GB RAM',
      250000,
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=70&auto=format',
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