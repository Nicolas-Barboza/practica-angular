---
name: frontend-bootstrap-creativa
description: >
  Crea interfaces frontend premium con Bootstrap 5+ que destacan por su diseño único,
  responsividad impecable y código limpio. Usá esta skill siempre que el usuario pida
  crear o mejorar páginas web, landing pages, dashboards, componentes o cualquier
  interfaz HTML/CSS usando Bootstrap. También activar cuando mencionen "responsive",
  "mobile-first", "Bootstrap", "layouts", "componentes web" o pidan estructuras
  ordenadas y mantenibles. Genera código de producción con arquitectura CSS en capas,
  variables personalizadas, micro-interacciones y patrones avanzados de Bootstrap —
  nunca soluciones genéricas o predecibles.
version: 3.0
author: Nico Barboza
category: frontend-design
priority: responsive-first
---

# 🎨 Frontend Bootstrap Creative Pro v3.0

## Flujo de Trabajo

Antes de escribir código, definí:
1. **Propósito**: ¿Qué problema resuelve? ¿Quién la usa?
2. **Dirección estética**: Elegí un estilo claro (minimal elegante, bold editorial, tech moderno, orgánico, etc.)
3. **Breakpoints críticos**: ¿En qué dispositivos importa más?
4. **Diferenciador**: ¿Qué hace memorable esta interfaz?

Luego implementá con la arquitectura descripta abajo.

---

## Principios de Diseño Fundamentales

### Responsive-First Design
- **Mobile-first obligatorio**: Todo comienza en 320px de ancho mínimo.
- **Breakpoints Bootstrap nativos + personalizados**:
  - `xs: 0-575px` | `sm: 576-767px` | `md: 768-991px` | `lg: 992-1199px` | `xl: 1200-1399px` | `xxl: 1400px+`
- **Grid system avanzado**: Combinar `container-fluid` con `g-0` para layouts full-width, y `container` para secciones contenidas.
- **Tipografía fluida**: Usar `clamp()` para tamaños responsivos sin media queries excesivas.
- **Imágenes**: `<img>` con `srcset` y `sizes`; `object-fit` para relaciones de aspecto consistentes.
- **Componentes adaptativos**: `flex-column flex-md-row`, `order-*`, utilidades de display de Bootstrap.

### Arquitectura CSS en Capas (obligatoria)

```css
/* ===== CAPA 1: VARIABLES GLOBALES ===== */
:root {
  /* Sistema de color HSL */
  --hue-primary: 220;
  --color-primary:       hsl(var(--hue-primary), 85%, 55%);
  --color-primary-dark:  hsl(var(--hue-primary), 85%, 40%);
  --color-primary-light: hsl(var(--hue-primary), 70%, 90%);
  --color-surface:       hsl(var(--hue-primary), 15%, 98%);
  --color-text:          hsl(var(--hue-primary), 20%, 15%);
  --color-muted:         hsl(var(--hue-primary), 10%, 55%);

  /* Tipografía fluida */
  --fs-xs:   clamp(0.75rem,  1.5vw, 0.875rem);
  --fs-sm:   clamp(0.875rem, 2vw,   1rem);
  --fs-base: clamp(1rem,     2.5vw, 1.125rem);
  --fs-lg:   clamp(1.125rem, 3vw,   1.5rem);
  --fs-xl:   clamp(1.5rem,   4vw,   2rem);
  --fs-2xl:  clamp(2rem,     5vw,   3rem);
  --fs-3xl:  clamp(2.5rem,   6vw,   4rem);

  /* Espaciado modular */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  1.5rem;
  --space-xl:  2.5rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;

  /* Sombras */
  --shadow-sm:  0 1px 3px hsl(var(--hue-primary), 30%, 20%, 0.08);
  --shadow-md:  0 4px 16px hsl(var(--hue-primary), 30%, 20%, 0.12);
  --shadow-lg:  0 8px 32px hsl(var(--hue-primary), 30%, 20%, 0.18);
  --shadow-glow: 0 0 24px hsl(var(--hue-primary), 85%, 55%, 0.35);

  /* Radios */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 2rem;
  --radius-pill: 9999px;

  /* Transiciones */
  --transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   600ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index stack */
  --z-below:    -1;
  --z-base:      0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-modal:    300;
  --z-tooltip:  400;
}

/* ===== CAPA 2: OVERRIDES DE BOOTSTRAP ===== */
/* Solo lo que realmente necesita cambiar */

/* ===== CAPA 3: COMPONENTES (nomenclatura BEM) ===== */
/* .bloque__elemento--modificador */

/* ===== CAPA 4: LAYOUTS Y SECCIONES ===== */
/* Contenedores, grids específicos de página */

/* ===== CAPA 5: UTILIDADES MÍNIMAS ===== */
/* Lo que Bootstrap no cubre, sin duplicar */
```

### Reglas de Código Limpio
- **Selectores**: máximo 3 niveles de anidamiento.
- **BEM estricto**: `.hero__title`, no `.texto-grande-blanco`.
- **Comentarios**: solo el "por qué", no el "qué". Banners de sección tipo `/* ===== HERO ===== */`.
- **Unidades**: siempre `rem`/`em`; nunca `px` para layout.
- **GPU-only animations**: solo `transform` y `opacity`.

---

## Sistema Visual Premium

### Tipografía
```css
/* Importar desde Google Fonts — elegir según la estética */
/* Editorial/Luxury: Playfair Display + DM Sans */
/* Tech Moderno: Space Grotesk + IBM Plex Mono */
/* Minimal: Instrument Serif + Geist */
/* Bold: Cabinet Grotesk + Satoshi */

body {
  font-family: var(--font-body);
  font-size: var(--fs-base);
  line-height: 1.65;
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3 { font-family: var(--font-display); line-height: 1.1; }
```

### Componentes Bootstrap Mejorados

```css
/* Botón premium */
.btn-primary {
  background: var(--color-primary);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: var(--radius-pill);
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
  background: var(--color-primary-dark);
}

.btn-primary:active {
  transform: translateY(0);
  transition: all var(--transition-fast);
}

/* Card premium */
.card-premium {
  border: 1px solid hsl(var(--hue-primary), 20%, 92%);
  border-radius: var(--radius-lg);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  overflow: hidden;
}

.card-premium:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Animaciones (GPU-only)

```css
/* Animación de entrada */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.animate-in {
  animation: fadeInUp 0.6s ease forwards;
}

/* Staggered children */
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }

/* Loading skeleton */
@keyframes shimmer {
  from { background-position: -200% 0; }
  to   { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg,
    hsl(var(--hue-primary), 15%, 92%) 25%,
    hsl(var(--hue-primary), 15%, 98%) 50%,
    hsl(var(--hue-primary), 15%, 92%) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}
```

---

## Estructura HTML Base

```html
<!DOCTYPE html>
<html lang="es" data-bs-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título descriptivo]</title>

  <!-- CSS crítico inline para above-the-fold -->
  <style>
    /* Variables + reset mínimo + estilos de loading */
    :root { /* variables aquí */ }
    body { opacity: 0; transition: opacity 0.3s; }
    body.loaded { opacity: 1; }
  </style>

  <!-- Bootstrap CSS — carga diferida para no crítico -->
  <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style"
        onload="this.onload=null;this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  </noscript>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="[URL-FONTS]" rel="stylesheet">

  <!-- Estilos del proyecto -->
  <style>
    /* CAPAS 1–5 aquí */
  </style>
</head>
<body>

  <!-- ===== NAVBAR ===== -->
  <nav class="navbar navbar-expand-lg navbar__main sticky-top">
    <!-- ... -->
  </nav>

  <!-- ===== HERO ===== -->
  <section class="hero">
    <div class="container">
      <!-- ... -->
    </div>
  </section>

  <!-- ===== SECCIONES ===== -->
  <!-- Cada sección en su propio bloque comentado -->

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
  <script>
    // Activar página después de carga
    document.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('loaded');
    });

    // Scroll animations con IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  </script>
</body>
</html>
```

---

## Checklist de Calidad

Antes de entregar cualquier interfaz, verificar:

**Responsive**
- [ ] Funciona bien en 320px, 375px, 768px, 1024px, 1440px
- [ ] No hay overflow horizontal en ningún breakpoint
- [ ] Imágenes no se distorsionan
- [ ] Textos no se cortan ni superponen

**Código**
- [ ] Variables CSS en `:root` para todos los valores repetidos
- [ ] BEM aplicado en clases personalizadas
- [ ] Máximo 3 niveles de especificidad
- [ ] Solo `transform`/`opacity` para animaciones
- [ ] Sin `px` en layout (usar `rem`/`em`)
- [ ] Comentarios de sección en bloques `/* ===== NOMBRE ===== */`

**Visual**
- [ ] Tipografía con carácter propio (no Inter/Roboto/Arial por defecto)
- [ ] Paleta coherente basada en variables HSL
- [ ] Contraste accesible (mínimo AA: 4.5:1)
- [ ] Microinteracciones en hover/focus
- [ ] Al menos un elemento que haga memorable el diseño

**Performance**
- [ ] Bootstrap CSS cargado de forma asíncrona (no crítico)
- [ ] CSS crítico inline en `<style>` del `<head>`
- [ ] JS con `defer` o al final del `<body>`
- [ ] IntersectionObserver para animaciones de scroll

---

## Patrones de Layout Frecuentes

### Hero de Impacto
```html
<section class="hero min-vh-100 d-flex align-items-center position-relative overflow-hidden">
  <!-- Fondo decorativo -->
  <div class="hero__bg-decoration" aria-hidden="true"></div>
  
  <div class="container position-relative z-1">
    <div class="row align-items-center g-5">
      <div class="col-lg-6" data-animate>
        <span class="hero__badge badge mb-3">Tagline corto</span>
        <h1 class="hero__title" style="font-size: var(--fs-3xl)">
          Título que <em>impacta</em>
        </h1>
        <p class="hero__description" style="font-size: var(--fs-lg); color: var(--color-muted)">
          Descripción clara y concisa del valor.
        </p>
        <div class="hero__cta d-flex flex-wrap gap-3 mt-4">
          <a href="#" class="btn btn-primary btn-lg">Acción Principal</a>
          <a href="#" class="btn btn-outline-secondary btn-lg">Ver más</a>
        </div>
      </div>
      <div class="col-lg-6" data-animate>
        <!-- Visual: imagen, ilustración, mockup, etc. -->
      </div>
    </div>
  </div>
</section>
```

### Grid de Cards
```html
<section class="py-5 py-xl-7">
  <div class="container">
    <div class="row g-4">
      <!-- Repetir para cada card -->
      <div class="col-sm-6 col-lg-4" data-animate>
        <article class="card-premium h-100 p-4">
          <div class="card-premium__icon mb-3"><!-- icono --></div>
          <h3 class="card-premium__title h5">Título</h3>
          <p class="card-premium__body text-muted">Descripción.</p>
        </article>
      </div>
    </div>
  </div>
</section>
```

---

## Lo que NUNCA hacer

- ❌ Usar Bootstrap "as-is" sin ninguna personalización visual
- ❌ Paletas genéricas sin variables CSS (colores hardcodeados)
- ❌ Tipografía del sistema sin criterio (Arial, sans-serif por defecto)
- ❌ Animaciones con `left`/`top`/`width` (usar `transform`)
- ❌ `px` en layout (solo para bordes y sombras máximo)
- ❌ Clases descriptivas de apariencia (`.texto-grande-azul`)
- ❌ Anidamiento de selectores > 3 niveles
- ❌ `!important` para resolver conflictos de especificidad
- ❌ Gradientes morados sobre blanco (el cliché por excelencia)
- ❌ Resultado igual al template por defecto de Bootstrap
