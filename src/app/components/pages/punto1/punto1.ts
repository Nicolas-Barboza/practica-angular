import { Component } from '@angular/core';
import { Evento } from '../../../models/evento.model';
import { EventoService } from '../../../services/evento';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.html'
})
export class Punto1 {

  eventos: Evento[];
  indiceActual: number;

  constructor(private eventoService: EventoService) {
    this.eventos = this.eventoService.getEventos();
    this.indiceActual = 0;
  }

  siguiente(): void {
    if (this.indiceActual < this.eventos.length - 1) {
      this.indiceActual++;
    } else {
      this.indiceActual = 0;
    }
  }

  anterior(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
    } else {
      this.indiceActual = this.eventos.length - 1;
    }
  }
}
