import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carta } from '../../../models/carta';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html'
})
export class Punto3 {
  constructor(private cdr: ChangeDetectorRef) {}

  cartas: Carta[] = [];
  seleccionadas: Carta[] = [];
  intentos: number = 10;
  juegoIniciado: boolean = false;
  bloqueado: boolean = false;
  aciertos: number = 0;

  iniciar(): void {
    this.juegoIniciado = true;
    this.intentos = 10;
    this.generarCartas();
    this.aciertos = 0;
    this.bloqueado = false;
  }

  reiniciar(): void {
    this.cartas = [];
    this.seleccionadas = [];
    this.intentos = 10;
    this.juegoIniciado = false;
    this.aciertos = 0;
    this.bloqueado = false;
  }

  generarCartas(): void {

    const base = [
      new Carta('A', 'img/cartas/carta-1.jpg'),
      new Carta('B', 'img/cartas/carta-2.jpg'),
      new Carta('C', 'img/cartas/carta-3.jpg'),
      new Carta('D', 'img/cartas/carta-4.jpg'),
      new Carta('E', 'img/cartas/carta-5.jpg'),
      new Carta('F', 'img/cartas/carta-6.jpg')
    ];

    this.cartas = [...base, ...base.map(c => new Carta(c.nombre, c.img))];

    this.cartas.sort(() => Math.random() - 0.5);
  }

  seleccionar(carta: Carta): void {
    if (!this.juegoIniciado || this.bloqueado) return;
    if (carta.descubierta || carta.encontrada) return;

    carta.descubierta = true;
    this.seleccionadas.push(carta);

    if (this.seleccionadas.length === 2) {
      this.bloqueado = true;

      setTimeout(() => {
        this.verificar();
        this.cdr.detectChanges();
      }, 1000);
    }
  }

 verificar(): void {
  const carta1 = this.seleccionadas[0];
  const carta2 = this.seleccionadas[1];

  if (!carta1 || !carta2) {
    this.bloqueado = false;
    return;
  }

  if (carta1.nombre === carta2.nombre) {
    carta1.encontrada = true;
    carta2.encontrada = true;
    this.aciertos++;
  } else {
    carta1.descubierta = false;
    carta2.descubierta = false;
    this.intentos--;
  }

  this.seleccionadas = [];
  this.bloqueado = false;
}

  get victoria(): boolean {
  return this.juegoIniciado && this.cartas.length > 0 && this.cartas.every(c => c.encontrada);
}

  get derrota(): boolean {
    return this.juegoIniciado && this.intentos <= 0 && !this.victoria;
  }
}
