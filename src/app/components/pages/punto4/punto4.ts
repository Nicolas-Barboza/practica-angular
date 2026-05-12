import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Inscripcion } from '../../../models/inscripcion';
import { InscripcionService } from '../../../services/inscripcion';

@Component({
  selector: 'app-punto4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto4.html',
  styleUrl: './punto4.css'
})
export class Punto4 {

  inscripcion: Inscripcion;
  inscripciones: Inscripcion[];

  precioFinal: number = 0;
  mostrarPrecioFinal: boolean = false;

  categorias = [
    { id: 1, nombre: 'Estudiante', descuento: 35 },
    { id: 2, nombre: 'Egresado', descuento: 50 },
    { id: 3, nombre: 'Particular', descuento: 0 }
  ];

  cursos = [
  { nombre: 'Angular desde cero', precio: 120000 },
  { nombre: 'Desarrollo Frontend', precio: 95000 },
  { nombre: 'Programación Web', precio: 85000 },
  { nombre: 'TypeScript práctico', precio: 78000 }
];

  constructor(private inscripcionService: InscripcionService) {
    this.inscripcion = new Inscripcion('', 0, 0, '', '', '', 0);
    this.inscripciones = this.inscripcionService.getInscripciones();
  }

  calcularPrecioFinal(): void {
    if (this.inscripcion.precio > 0 && this.inscripcion.categoriaAlumno > 0) {
      let descuento = 0;

      if (this.inscripcion.categoriaAlumno === 1) {
        descuento = 35;
      } else if (this.inscripcion.categoriaAlumno === 2) {
        descuento = 50;
      } else {
        descuento = 0;
      }

      this.precioFinal = this.inscripcion.precio - (this.inscripcion.precio * descuento / 100);
      this.inscripcion.precioFinal = this.precioFinal;
      this.mostrarPrecioFinal = true;
    } else {
      this.precioFinal = 0;
      this.inscripcion.precioFinal = 0;
      this.mostrarPrecioFinal = false;
    }
  }

  registrar(formInscripcion: NgForm): void {
    this.calcularPrecioFinal();

    const nuevaInscripcion = new Inscripcion(
      this.inscripcion.dni,
      this.inscripcion.precio,
      Number(this.inscripcion.categoriaAlumno),
      this.inscripcion.fechaInscripcion,
      this.inscripcion.email,
      this.inscripcion.curso,
      this.precioFinal
    );

    this.inscripcionService.agregarInscripcion(nuevaInscripcion);

    formInscripcion.resetForm();
    this.inscripcion = new Inscripcion('', 0, 0, '', '', '', 0);
    this.precioFinal = 0;
    this.mostrarPrecioFinal = false;
  }

  eliminar(index: number): void {
    this.inscripcionService.eliminarInscripcion(index);
  }

  obtenerCategoriaTexto(categoria: number): string {
    if (categoria === 1) return 'Estudiante';
    if (categoria === 2) return 'Egresado';
    return 'Particular';
  }

  seleccionarCurso(): void {

    const cursoSeleccionado = this.cursos.find(
      c => c.nombre === this.inscripcion.curso
    );

    if (cursoSeleccionado) {
      this.inscripcion.precio = cursoSeleccionado.precio;
    } else {
      this.inscripcion.precio = 0;
    }

    this.calcularPrecioFinal();
  }
  contarEstudiantes(): number {
    return this.inscripcionService.contarPorCategoria(1);
  }

  contarEgresados(): number {
    return this.inscripcionService.contarPorCategoria(2);
  }

  contarParticulares(): number {
    return this.inscripcionService.contarPorCategoria(3);
  }

  totalGeneral(): number {
    return this.inscripcionService.totalGeneral();
  }
}
