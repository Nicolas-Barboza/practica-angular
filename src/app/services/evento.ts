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
        'https://images.unsplash.com/photo-1552196563-55cd4e45efb3'
      )
    );

    this.eventos.push(
      new Evento(
        'Tech Night',
        'Charlas de programación y networking',
        'https://images.unsplash.com/photo-1518770660439-4636190af475'
      )
    );

    this.eventos.push(
      new Evento(
        'Music Fest',
        'Festival en vivo con bandas locales',
        'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2'
      )
    );

    this.eventos.push(
      new Evento(
        'Fitness Bootcamp',
        'Entrenamiento intensivo al aire libre',
        'https://images.unsplash.com/photo-1554284126-aa88f22d8b74'
      )
    );

    this.eventos.push(
      new Evento(
        'Gaming Arena',
        'Competencias de videojuegos',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e'
      )
    );

    this.eventos.push(
      new Evento(
        'Startup Meetup',
        'Encuentro de emprendedores',
        'https://images.unsplash.com/photo-1556761175-4b46a572b786'
      )
    );

    this.eventos.push(
      new Evento(
        'Food Truck Night',
        'Comida urbana y música',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
      )
    );
  }

  getEventos(): Evento[] {
    return this.eventos;
  }
}