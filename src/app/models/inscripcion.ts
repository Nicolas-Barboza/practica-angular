export class Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: number;
  fechaInscripcion: string;
  email: string;
  curso: string;
  precioFinal: number;

  constructor(
    dni: string,
    precio: number,
    categoriaAlumno: number,
    fechaInscripcion: string,
    email: string,
    curso: string,
    precioFinal: number
  ) {
    this.dni = dni;
    this.precio = precio;
    this.categoriaAlumno = categoriaAlumno;
    this.fechaInscripcion = fechaInscripcion;
    this.email = email;
    this.curso = curso;
    this.precioFinal = precioFinal;
  }
}