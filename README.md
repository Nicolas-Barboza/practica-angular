# Practica Angular

Aplicacion web desarrollada con Angular 21 y Bootstrap para la materia Programacion y Servicios Web. El proyecto presenta una interfaz moderna, responsive y orientada a la practica de componentes, servicios, formularios, navegacion y manejo de estado dentro de una SPA.

## Descripcion general

La aplicacion presenta cuatro ejercicios o secciones:

1. `Punto 1`: carrusel de eventos con navegacion manual, imagen destacada y descripcion.
2. `Punto 2`: catalogo de productos con carrito de compras, control de stock y calculo de total.
3. `Punto 3`: juego de memoria con intentos limitados, cartas emparejadas y estados de victoria o derrota.
4. `Punto 4`: panel de inscripcion a cursos con formulario validado, descuentos por categoria y resumen de registros.

## Tecnologias utilizadas

- Angular 21
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- HTML y CSS

## Funcionalidades

### Punto 1 - Carrusel de eventos

- Muestra una coleccion de eventos cargados desde `EventoService`.
- Permite avanzar y retroceder entre eventos.
- Presenta cada evento con una estetica visual atractiva y dinamica.

### Punto 2 - Tienda con carrito

- Lista productos obtenidos desde `ProductoService`.
- Permite agregar productos al carrito.
- Actualiza cantidades desde un modal.
- Descuenta y repone stock en tiempo real.
- Calcula el total de la compra de forma automatica.

### Punto 3 - Juego de memoria

- Genera un tablero con pares de cartas mezcladas aleatoriamente.
- Controla intentos disponibles.
- Detecta aciertos y errores.
- Informa si el jugador gana o pierde.

### Punto 4 - Inscripcion a cursos

- Permite registrar alumnos mediante un formulario con validaciones.
- Completa automaticamente el precio segun el curso seleccionado.
- Calcula el precio final aplicando descuentos por categoria.
- Muestra un resumen con cantidad de inscriptos por tipo de alumno.
- Lista las inscripciones registradas y permite eliminarlas.
- Calcula el total general acumulado de las inscripciones.

## Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm install
```

2. Levantar el servidor de desarrollo:

```bash
ng serve
```

3. Abrir en el navegador:

```text
http://localhost:4200
```

## Scripts disponibles

- `npm start`: inicia la aplicacion en modo desarrollo.
- `npm run build`: genera el build de produccion.
- `npm run watch`: recompila en modo desarrollo ante cambios.
- `npm test`: ejecuta las pruebas unitarias.

## Capturas del proyecto

![Preview mobile de AngularLab](public/img/preview-pages.png)

## Notas

- El proyecto usa componentes y servicios separados para mantener la logica organizada.
- Bootstrap se carga desde `angular.json`.
- La navegacion principal permite acceder a los cuatro puntos desde una misma SPA.
- La aplicacion fue pensada para combinar funcionalidad, navegacion y una presentacion visual clara.
