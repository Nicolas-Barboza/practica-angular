---
name: frontend-bootstrap-creative-pro
description: >
  Crea interfaces frontend premium con Bootstrap 5+ que destacan por su diseño único,
  responsividad impecable y código limpio y optimizado. Combina la solidez del framework
  con patrones creativos avanzados, micro-interacciones refinadas y una arquitectura 
  CSS mantenible y escalable, alejándose de soluciones genéricas o predecibles.
version: 3.0
author: Nico Barboza
category: frontend-design
priority: responsive-first
---

# 🎨 Frontend Bootstrap Creative Pro v3.0

## Principios de Diseño Fundamentales

### Responsive-First Design
- **Mobile-first obligatorio**: Todo diseño comienza en 320px de ancho mínimo.
- **Breakpoints estratégicos personalizados** además de los nativos de Bootstrap:
  - `xs: 0-575px` | `sm: 576-767px` | `md: 768-991px` | `lg: 992-1199px` | `xl: 1200-1399px` | `xxl: 1400px+`
- **Grid system avanzado**: Usar `container-fluid` con `g-0` para layouts full-width cuando sea necesario, combinando con `container` para secciones contenidas.
- **Tipografía fluida**: Implementar `clamp()` para tamaños de fuente responsivos sin media queries excesivas.
- **Imágenes y medios**: `<img>` con `srcset` y `sizes`, `object-fit` para relaciones de aspecto consistentes.
- **Componentes adaptativos**: Cambiar disposición de elementos con `flex-column flex-md-row`, `order-*` y utilidades de display.

### Estructura de Código Limpia y Mantenible
- **Arquitectura CSS en capas**:
  1. **Variables CSS personalizadas** en `:root` para la guía de estilos (colores, tipografía, espaciado, sombras).
  2. **Utilidades personalizadas mínimas** que extienden Bootstrap, no lo duplican.
  3. **Componentes modulares** con nomenclatura BEM estricta: `.bloque__elemento--modificador`.
  4. **Layouts separados** de los componentes (grid systems, secciones contenedoras).
- **Selectores de baja especificidad**: Evitar anidamiento profundo (máximo 3 niveles).
- **Clases semánticas**: Nombres que describan propósito, no apariencia (`.hero__title` no `.texto-grande-blanco`).
- **Comentarios solo donde aporten valor**: Explicar el "por qué", no el "qué". Secciones claras con banners tipo `/* ===== SECCIÓN HERO ===== */`.

### Optimización de Rendimiento en Diseño
- **CSS crítico inline** para above-the-fold en `<style>` del `<head>`.
- **Carga asíncrona de Bootstrap**: `media="print" onload="this.media='all'"` para CSS no crítico.
- **Animaciones GPU-accelerated**: Solo `transform` y `opacity`, usar `will-change` con moderación.
- **Complejidad de selectores reducida**: Favorecer clases sobre selectores de atributos complejos.
- **Zero pixel dependencies**: Todo escalable con `rem`/`em`, nunca `px` para dimensiones de layout.

## Sistema de Diseño Visual Premium

### Paleta de Colores y Tematización
- **Sistema de color HSL** con variables CSS para manipulación dinámica:
  ```css
  --hue-primary: 220;
  --color-primary: hsl(var(--hue-primary), 85%, 55%);
  --color-primary-light: hsl(var(--hue-primary), 70%, 90%);