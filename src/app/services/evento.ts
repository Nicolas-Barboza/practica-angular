import { Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventos: Array<Evento>;

  constructor() {
    this.eventos = [];

    this.eventos.push(
      new Evento(
        'Yoga Sunset',
        'Relajación al atardecer frente al mar',
        'assets/img/eventos/yoga.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Tech Night',
        'Charlas de programación y networking',
        'assets/img/eventos/tech.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Music Fest',
        'Festival en vivo con bandas locales',
        'assets/img/eventos/music.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Fitness Bootcamp',
        'Entrenamiento intensivo al aire libre',
        'assets/img/eventos/fitnetss.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Gaming Arena',
        'Competencias de videojuegos',
        'assets/img/eventos/gaming.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Startup Meetup',
        'Encuentro de emprendedores',
        'assets/img/eventos/startup.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Food Truck Night',
        'Comida urbana y música',
        'assets/img/eventos/food.jpg'
      )
    );
  }

  getEventos(): Evento[] {
    return this.eventos;
  }
}
