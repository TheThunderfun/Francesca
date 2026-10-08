---
name: Francesca
description: Fábrica de pastas frescas de Sarandí. Tricolore del logo a escala de página, fotos reales de pasta, rojo solo para actuar.
colors:
  verde-noche: "#0d2a16"
  verde-marca: "#007234"
  verde-onda: "#064f26"
  verde-pale: "#dff1e2"
  verde-bandera: "#008c45"
  rojo-bandera: "#cd212a"
  rojo-texto: "#b2001b"
  rojo-onda: "#920013"
  rojo-pale: "#ffe6e3"
  papel: "#f4f5f0"
  papel-2: "#eaeee7"
  superficie: "#ffffff"
  tinta: "#1c231c"
  tinta-2: "#505850"
  linea: "#d4dbd3"
  linea-fuerte: "#849083"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2.4rem, 8.5vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.3rem, 3vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 2vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  foto: "4px"
  pildora: "999px"
spacing:
  seccion: "clamp(3.5rem, 9vw, 7.5rem)"
  contenedor-margen: "1.25rem"
  gap-sm: "0.75rem"
  gap-md: "2rem"
  gap-lg: "clamp(3rem, 7vw, 6rem)"
components:
  button-accion:
    backgroundColor: "{colors.rojo-bandera}"
    textColor: "{colors.superficie}"
    rounded: "{rounded.pildora}"
    padding: "0.375rem 1.5rem"
    height: "48px"
  button-accion-hover:
    backgroundColor: "{colors.rojo-onda}"
  button-contorno:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pildora}"
    height: "48px"
  button-contorno-hover:
    backgroundColor: "{colors.verde-marca}"
    textColor: "{colors.superficie}"
  button-claro:
    backgroundColor: "transparent"
    textColor: "{colors.superficie}"
    rounded: "{rounded.pildora}"
    height: "48px"
  chip-gusto:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.verde-onda}"
    rounded: "{rounded.pildora}"
    padding: "0.4rem 0.95rem"
  banda-oscura:
    backgroundColor: "{colors.verde-noche}"
    textColor: "{colors.superficie}"
---

# Design System: Francesca

## Overview

**Creative North Star: "La mesada de la fábrica"**

La página es la mesada donde se hace la pasta: fotos reales y grandes sobre papel claro, interrumpidas por bandas de color a ancho completo. El tricolore del logo se reparte a escala de página y no como detalle: verde noche y verde marca ocupan secciones enteras, papel y blanco son la mesada, y el rojo bandera aparece solo donde hay que actuar. Es cálida por la comida y por Young Serif, no por fondos tintados ni texturas de utilería.

La densidad es baja y el ritmo vertical es único para todas las secciones. Cada banda es una sola idea (portada, pastas, historia, diferenciales, gustos, dónde, cierre) y no una grilla de tarjetas iguales. El diseño parte del celular y del pulgar; el escritorio reordena la misma composición en dos columnas.

La accesibilidad AA es piso del sistema: cada par de texto de la hoja de estilos documenta su contraste y ninguno de cuerpo baja de 4,5:1.

**Key Characteristics:**
- Bandas a ancho completo alternando verde noche, papel, blanco, papel-2, verde marca.
- Rojo reservado a la acción (CTA, teléfono, dirección).
- Títulos en serif redondeada de peso único, texto en grotesca humanista.
- Todo botón es píldora; toda foto tiene esquina casi recta (4px).
- Plano: sin sombras de decoración; la profundidad la dan las bandas de color.
- Una franja tricolore como firma.

## Colors

Tricolore italiano en dos registros: los valores exactos de bandera, solo donde son la bandera, y una rampa con luminosidad ajustada para todo lo que lleva texto.

### Primary
- **Verde Noche** (`{colors.verde-noche}`): portada, cierre y footer. Campo oscuro donde el texto va en blanco o verde pálido.
- **Verde Marca** (`{colors.verde-marca}`): el verde del logo. Títulos de pasta y de familia, banda de diferenciales, enlaces, selección, hover de contorno. Es identidad y estructura.
- **Verde Onda** (`{colors.verde-onda}`): hover y texto de chips.

### Secondary
- **Rojo Bandera** (`{colors.rojo-bandera}`): fondo de botones de acción y tercio rojo del tricolore. Con blanco encima.
- **Rojo Texto** (`{colors.rojo-texto}`): teléfono y dirección como enlaces de dato, subrayados. **Rojo Onda** (`{colors.rojo-onda}`) en hover.

### Neutral
- **Papel** (`{colors.papel}`): canvas de la página, igual al Bright White oficial.
- **Papel 2** (`{colors.papel-2}`): banda de gustos, superficies secundarias.
- **Superficie** (`{colors.superficie}`): banda de historia, barra fija, tarjetas de control.
- **Tinta** (`{colors.tinta}`) y **Tinta 2** (`{colors.tinta-2}`): texto principal y secundario, con una pizca de verde.
- **Verde Pálido** (`{colors.verde-pale}`): bajada sobre verde, fila "hoy" y hover de navegación.
- **Línea** (`{colors.linea}`) decorativa; **Línea Fuerte** (`{colors.linea-fuerte}`) para bordes de control (3:1).
- **Verde Bandera** (`{colors.verde-bandera}`) y **Rojo Pálido** (`{colors.rojo-pale}`): el primero solo en el tricolore; el segundo está declarado y no se usa en las superficies muestreadas.

### Named Rules
**The Rojo Es Acción Rule.** El rojo significa "llamá, pedí, andá". Si un elemento no es una acción o un dato accionable, no es rojo. Para error real existe `danger`, que no es el rojo de marca.

**The Bandera Exacta Rule.** Los valores puros de bandera se usan solo en el separador tricolore y en el fondo de botones. Todo texto usa la rampa.

**The Dato Sobre Oscuro Rule.** Sobre verde noche el rojo no llega a 4,5:1: el dato accionable va en blanco, subrayado.

## Typography

**Display Font:** Young Serif (con Georgia, serif)
**Body Font:** Hanken Grotesk (con system-ui, sans-serif)

**Character:** Serif redondeada y cálida de cartel de barrio contra una grotesca humanista abierta, legible al sol por gente mayor. Young Serif existe solo en 400: nunca se pide negrita.

### Hierarchy
- **Display** (400, `clamp(2.4rem, 8.5vw, 4.4rem)`, 1.04): h1 de portada; cierre sube a `clamp(2.5rem, 8vw, 5rem)`.
- **Headline** (400, `clamp(2rem, 5vw, 3.5rem)`, 1.08): títulos de sección.
- **Title** (400, `clamp(1.3rem, 3vw, 1.7rem)`, 1.15): familias de gustos, pastas (1.2rem a 2rem), frases de diferenciales (hasta 2.1rem), dirección.
- **Body** (400, 1.0625rem, 1.6): texto corrido; bajadas a `clamp(1.05rem, 2vw, 1.2rem)` en `max-width: 56ch`.
- **Label** (700, 1rem, 1.2): botones y datos; navegación 600 a 0.98rem.

### Named Rules
**The Un Peso Rule.** Los títulos son siempre peso 400. El énfasis viene de tamaño y color, no de negrita.

**The Título Balanceado Rule.** Los encabezados llevan `text-wrap: balance` y `-0.015em`; los párrafos, `text-wrap: pretty`.

## Layout

Contenedor `min(100% - 2.5rem, 1180px)`. Todas las secciones comparten `padding-block: clamp(3.5rem, 9vw, 7.5rem)`. En celular una columna; desde 768px las pastas pasan a 12 columnas asimétricas (7/5, luego tres de 4) y desde 992px portada (6/7), historia (6/5), diferenciales (4/7), gustos (4/7) y dónde (5/6) se parten en dos con el título sticky (`top: 7rem`). La portada en celular pone la foto entera arriba (`clamp(160px, 26svh, 340px)`) y el texto debajo sobre verde noche; en escritorio el panel va a la izquierda y la foto a sangre a la derecha. Cierre y navegación respetan `scroll-padding-top: 76px`. En celular una barra inferior fija (Llamar / Hacé tu pedido) reserva 72px de `padding-bottom` en el body.

## Elevation & Depth

Plano por defecto: la profundidad la dan las bandas de color y el contraste de superficies. Las únicas sombras son funcionales: la barra superior gana `0 6px 20px rgba(13,42,22,0.1)` al hacer scroll, el menú móvil desplegado y la barra inferior móvil llevan una sombra suave teñida de verde noche. El tricolore lleva un filete interior de 1px.

### Named Rules
**The Sombra Verde Rule.** Si hay sombra, es difusa y teñida de verde noche (`rgba(13,42,22,…)`), nunca negra ni desplazada.

## Shapes

Dos formas: la píldora (999px) para botones, chips, enlaces de navegación y etiquetas, como el logo; y la esquina casi recta (4px) para fotos, mapa y fila "hoy". Los controles circulares (menú, más/menos de familias) son círculos de 48px y 2.25rem. Nada intermedio: no hay radios de 8 a 16px.

La **franja tricolore** (`regla-tricolore`, 12px: verde bandera, blanco puro, rojo bandera en tercios) es la firma. Aparece pocas veces, deliberadamente, eco de la masa rayada de la foto de portada.

## Components

### Buttons
- **Shape:** píldora (999px), mínimo 48px de alto (56px en `lg`), peso 700, ícono y texto con gap de 0.55rem.
- **Primary (accion):** rojo bandera con texto blanco; hover rojo onda.
- **Contorno:** transparente, borde `linea-fuerte`; hover verde marca con texto blanco.
- **Claro:** contorno blanco sobre superficies verdes; hover invierte a blanco con texto verde noche.
- **Hover / Focus:** sube 2px con salida exponencial; foco con anillo de 3px rojo (blanco sobre oscuro).

### Navegación
Barra fija blanca al 96% con borde inferior; marca en Young Serif verde. En escritorio enlaces píldora con hover verde pálido y CTA rojo; en celular botón circular de 48px y menú desplegable con enlaces separados por filetes y CTA al pie.

### Chips de gusto
Píldora blanca, borde verde marca de 1px, texto verde onda. Son enlaces: cada gusto abre un pedido por WhatsApp con el producto precargado. Alto mínimo de 44px; hover y foco en verde marca con texto blanco.

### Lista de familias
Acordeón tipográfico: filete superior de 2px verde marca, nombre en Young Serif verde, cuenta en tinta 2 y círculo con `+` que gira 45° al abrir.

### Lista tipográfica de diferenciales
Sobre verde marca, cada hecho es una frase grande en Young Serif blanca con una línea de apoyo, separados por filetes blancos al 35%. Reemplaza las tarjetas icono/título/párrafo.

### Fotos de pasta
Figuras con esquina 4px; la primera es la más grande. Enlace "Ver" en píldora blanca que aparece en hover y siempre en táctil. Zoom suave de 1.05 en hover.

### Estado del local
Punto de 0.65rem más texto ("abierto ahora"); el texto lleva el estado, no solo el color.

### Motion
Una sola curva `cubic-bezier(0.16, 1, 0.3, 1)`. Dos entradas: el texto sube 24px con fade, la foto se destapa con `clip-path: inset(0 100% 0 0)` a 1000ms; escalonado de 90ms por elemento (`--i`). El contenido es visible sin JS. Todo se apaga con `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** usar solo los roles de `:root` (`--it-*`) en componentes, nunca hex.
- **Do** poner cada banda de página a ancho completo, alternando campo oscuro y papel.
- **Do** mostrar teléfono y dirección como enlaces rojos subrayados (blancos subrayados sobre verde noche).
- **Do** mantener botones de 48px o más y pastillas con 999px.
- **Do** sumar `prefers-reduced-motion` a cada animación nueva.

### Don't:
- **Don't** usar rojo para decoración, énfasis o error de marca.
- **Don't** usar `btn-danger`, `text-danger`, `bg-light` ni la paleta por defecto de Bootstrap.
- **Don't** poner texto sobre la foto de pasta; el texto va sobre verde noche.
- **Don't** responder a una sección con una grilla de tarjetas idénticas icono/título/párrafo.
- **Don't** usar negrita en títulos Young Serif.
- **Don't** agregar sombras negras o desplazadas.
