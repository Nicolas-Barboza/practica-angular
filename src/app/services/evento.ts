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
        'img/eventos/yoga.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Tech Night',
        'Charlas de programación y networking',
        'img/eventos/tech.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Music Fest',
        'Festival en vivo con bandas locales',
        'img/eventos/music.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Fitness Bootcamp',
        'Entrenamiento intensivo al aire libre',
        'img/eventos/fitnetss.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Gaming Arena',
        'Competencias de videojuegos',
        'img/eventos/gaming.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Startup Meetup',
        'Encuentro de emprendedores',
        'img/eventos/startup.jpg'
      )
    );

    this.eventos.push(
      new Evento(
        'Food Truck Night',
        'Comida urbana y música',
        'img/eventos/food.jpg'
      )
    );
  }

  getEventos(): Evento[] {
    return this.eventos;
  }
}
