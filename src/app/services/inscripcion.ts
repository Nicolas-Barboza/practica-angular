import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  inscripciones: Array<Inscripcion>;

  constructor() {

    this.inscripciones = Array<Inscripcion>();

    this.inscripciones.push(
      new Inscripcion(
        '42123456',
        120000,
        1,
        '2026-05-10',
        'nico@gmail.com',
        'Angular desde cero',
        78000
      )
    );

    this.inscripciones.push(
      new Inscripcion(
        '39888777',
        95000,
        2,
        '2026-05-11',
        'ana@gmail.com',
        'Desarrollo Frontend',
        47500
      )
    );

    this.inscripciones.push(
      new Inscripcion(
        '45111222',
        85000,
        3,
        '2026-05-12',
        'leo@gmail.com',
        'Programación Web',
        85000
      )
    );
  }

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  agregarInscripcion(inscripcion: Inscripcion): void {
    this.inscripciones.push(inscripcion);
  }

  eliminarInscripcion(index: number): void {
    this.inscripciones.splice(index, 1);
  }

  modificarInscripcion(index: number, inscripcion: Inscripcion): void {
    this.inscripciones[index] = inscripcion;
  }

  contarPorCategoria(categoria: number): number {
    return this.inscripciones.filter(i => i.categoriaAlumno === categoria).length;
  }

  totalGeneral(): number {
    let total = 0;

    this.inscripciones.forEach(i => {
      total += i.precioFinal;
    });

    return total;
  }
}