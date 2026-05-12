---
name: frontend-tailwind-creativa
description: >
  Crea interfaces frontend con Tailwind CSS que tengan identidad visual propia —
  sin CSS custom innecesario y sin caer en los patrones genéricos de Tailwind UI.
  Usá esta skill siempre que el usuario pida crear o mejorar páginas web, landing pages,
  dashboards, componentes o cualquier interfaz HTML/Tailwind. También activar cuando
  mencionen "diseño", "interfaz", "página", "responsive", "landing" o "componente web".
  El objetivo: código liviano, diseño con carácter.
---

# Frontend Tailwind Creativa

## El problema a evitar

Tailwind tiene un "look por defecto" muy reconocible: blobs con blur, botones pill azules, cards grises con `hover:shadow-md`, hero con grid de dos columnas simétricas. Es funcional pero genérico — se ve igual en miles de sitios.

Esta skill existe para evitar eso **sin agregar montones de CSS custom**.

La solución no es más CSS. Son mejores decisiones de diseño desde el inicio.

---

## Antes de escribir una sola clase

Tomá estas tres decisiones. Cada una cambia radicalmente el resultado:

### 1. Elegí una dirección estética real

No "moderno" o "limpio" — eso no significa nada. Elegí algo específico:

| Estética | Señales visuales | Cuándo usarla |
|----------|-----------------|---------------|
| **Editorial** | Serif display, mucho espacio, grilla asimétrica | Portfolios, agencias, cultura |
| **Técnico / Datos** | Monospace, bordes finos, densidad media, sin gradientes | SaaS, dev tools, dashboards |
| **Artesanal / Orgánico** | Colores tierra, formas irregulares | Food, wellness, marcas locales |
| **Brutalista** | Bordes gruesos, colores saturados, tipografía pesada, sin sombras | Startups audaces, creativos |
| **Corporate Lujo** | Negro + dorado/crema, espaciado generoso, todo en mayúsculas | Finanzas, real estate, moda |

### 2. Elegí UN color de acento real

No el azul de Tailwind (`blue-500`). Un color con personalidad, definido en config para no repetirlo nunca como hex:

```js
tailwind.config = {
  theme: {
    extend: {
      colors: {
        acento: '#E8440A',   // naranja quemado — energía sin ser genérico
        // '#1B4332'  → verde bosque oscuro
        // '#C9A84C'  → dorado terroso
        // '#0D0D0D'  → negro casi puro (para estilos minimalistas)
      }
    }
  }
}
```

### 3. Elegí tipografía que haga el trabajo

La fuente correcta hace que un diseño simple parezca premium. La incorrecta hace que uno complejo parezca genérico.

```html
<!-- Editorial: contraste serif/sans -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">

<!-- Técnico -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Bold moderno -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

```js
// En tailwind.config, junto a los colores
fontFamily: {
  display: ['"Playfair Display"', 'serif'],
  body:    ['"DM Sans"', 'sans-serif'],
}
```

---

## Setup base

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título]</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { acento: '#E8440A' },
          fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            body:    ['"DM Sans"', 'sans-serif'],
          },
        }
      }
    }
  </script>

  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">

  <style>
    /* CSS custom SOLO para lo que Tailwind no puede hacer:
       @keyframes, clip-path, writing-mode. Nada más. */
  </style>
</head>
<body class="font-body bg-white text-gray-900 antialiased">
```

---

## Cómo lograr diseño con carácter sin CSS extra

### Tipografía como elemento de diseño

```html
<!-- ❌ Genérico -->
<h1 class="text-5xl font-bold">Nuestro servicio</h1>

<!-- ✅ Con carácter: mixing de estilos, tracking, acento estratégico -->
<h1 class="font-display text-6xl font-black leading-none tracking-tighter">
  Diseño que <span class="italic text-acento">importa</span>
</h1>

<!-- ✅ Editorial: serif + sans en la misma línea -->
<h2 class="text-4xl">
  <span class="font-display italic">Lo que</span>
  <span class="font-body font-semibold"> hacemos bien</span>
</h2>
```

### Grillas que no son simétricas

```html
<!-- ❌ Genérico: grid-cols-2 perfectamente simétrico -->

<!-- ✅ Asimétrico con intención -->
<div class="grid grid-cols-12 gap-6">
  <div class="col-span-12 md:col-span-7"><!-- principal --></div>
  <div class="col-span-12 md:col-span-5 md:pt-20"><!-- offset vertical intencional --></div>
</div>

<!-- ✅ Items de alturas distintas con items-start -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
  <!-- Se acomodan naturalmente sin ser todos iguales -->
</div>
```

### Color de acento con intención

```html
<!-- ❌ Genérico: todo azul por defecto -->

<!-- ✅ El acento toma protagonismo en 1-2 momentos clave -->
<section class="bg-acento text-white py-20">
  <h2 class="font-display text-5xl font-black">Trabajemos juntos</h2>
  <a href="#" class="mt-8 inline-block bg-white text-acento font-bold px-8 py-4
                     hover:bg-gray-100 transition-colors">
    Contactar
  </a>
</section>

<!-- ✅ O: acento solo como detalle tipográfico -->
<h3 class="text-2xl font-semibold">
  <span class="font-mono text-acento">03.</span> Desarrollo
</h3>
```

### Bordes como elemento visual (sin shadows genéricas)

```html
<!-- ❌ La card típica de Tailwind: border + rounded-xl + shadow-md + hover:shadow-lg -->

<!-- ✅ Línea simple con peso editorial -->
<article class="border-t-2 border-gray-900 pt-6 pb-10">
  <p class="text-sm font-mono text-gray-400 mb-2">Categoría</p>
  <h3 class="font-display text-2xl font-bold">Título del item</h3>
</article>

<!-- ✅ Border lateral como acento -->
<blockquote class="border-l-4 border-acento pl-6 py-2">
  <p class="font-display text-2xl italic">"La cita va aquí"</p>
</blockquote>
```

### Espaciado como jerarquía

```html
<!-- El espaciado desigual crea ritmo — no todo tiene que ser py-8 -->
<section class="pt-32 pb-12">  <!-- más arriba que abajo = fluye al siguiente -->
  <p class="text-sm font-mono uppercase tracking-widest text-gray-400 mb-2">Sección</p>
  <h2 class="font-display text-6xl font-black leading-none mb-16"> <!-- gap grande = jerarquía -->
    Título principal
  </h2>
  <div class="grid grid-cols-2 gap-x-20 gap-y-6"> <!-- gap-x grande = columnas de periódico -->
  </div>
</section>
```

---

## CSS custom: solo estas tres situaciones

```html
<style>
  /* 1. Animación de scroll (fadeInUp — Tailwind no la tiene) */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .anim-up { animation: fadeUp 0.5s ease forwards; }
  .delay-1 { animation-delay: 100ms; }
  .delay-2 { animation-delay: 200ms; }
  .delay-3 { animation-delay: 300ms; }

  /* 2. Formas con clip-path específico */
  .diagonal { clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%); }

  /* 3. Texto vertical */
  .vertical { writing-mode: vertical-rl; text-orientation: mixed; }
</style>
```

Todo lo demás — colores, spacing, tipografía, flex, grid, hover, responsive — va en clases Tailwind.

---

## JS mínimo (siempre el mismo)

```html
<script>
  // Mobile menu
  document.getElementById('menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });

  // Animaciones al hacer scroll
  const io = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('anim-up'); io.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('[data-anim]').forEach(el => io.observe(el));
</script>
```

---

## Checklist antes de entregar

**Diseño — lo más importante**
- [ ] ¿Tiene una dirección estética definida y consistente?
- [ ] ¿El acento aparece con intención, no en cada botón y link?
- [ ] ¿La tipografía tiene carácter propio?
- [ ] ¿Hay algo que rompa la simetría perfecta? (offset, tamaños distintos, etc.)
- [ ] ¿Podría ser confundido con un template de Tailwind UI? Si sí: cambiar algo.

**Código**
- [ ] ¿El `<style>` tiene menos de 20 líneas?
- [ ] ¿Hay colores hardcodeados en `style=""` que deberían estar en config?
- [ ] ¿Hay media queries manuales para breakpoints que Tailwind ya cubre?

**Nunca hacer**
- ❌ Blob con `blur-3xl` como decoración de fondo — cliché agotado
- ❌ Cards idénticas en grid de 3 con `hover:shadow-md` — el look Tailwind UI genérico
- ❌ Gradiente purple-to-pink o blue-to-cyan — cliché absoluto
- ❌ CSS custom para margin, padding, color o font-size — Tailwind lo tiene
- ❌ Variables en `:root` para valores que van en `tailwind.config`
- ❌ `!important` bajo ninguna circunstancia
