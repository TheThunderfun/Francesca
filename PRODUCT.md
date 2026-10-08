# Product

## Register

brand

## Users

Vecinos y familias de Sarandí y alrededores (Avellaneda, zona sur del GBA) que
buscan pasta fresca artesanal. Llegan casi siempre desde el celular, muchas
veces por el link de Instagram, y en un momento de decisión corta: están
resolviendo la comida de hoy o del fin de semana. El rango de edad es amplio,
de veinteañeros a jubilados, por lo que el sitio no puede asumir destreza
digital ni buena vista.

El trabajo a resolver: confirmar rápido que este lugar es confiable, ver qué
variedades hay, y conseguir el dato accionable — teléfono, dirección, horario.

## Product Purpose

Vidriera digital de Francesca, fábrica de pastas familiar con más de 15 años en
Sarandí. No vende online: convierte visitas en llamadas telefónicas y visitas
al local.

El éxito se mide en tres cosas, en orden:
1. El visitante consigue teléfono, dirección y horario sin fricción.
2. El visitante entiende el catálogo de productos y sus gustos.
3. El visitante confía en la marca: oficio real, no revendedor.

## Brand Personality

Familiar, artesanal, tradicional. La voz es la de un negocio de barrio que
conoce a sus clientes por el nombre: directa, cálida, sin marketing inflado ni
lenguaje corporativo. Habla de recetas y de manos, no de "experiencias" ni de
"soluciones gastronómicas".

Lo que debe evocar: la confianza de comprar donde compraba tu familia. Cercanía
antes que aspiración; oficio antes que lujo.

## Anti-references

- **Plantilla de Bootstrap con la paleta por defecto.** El estado actual es
  exactamente esto: `btn-danger`, `text-danger`, `bg-light`, `card` y
  `bi-*` sin criterio propio. El rojo de Bootstrap no es el rojo de Francesca.
- **Cadena gastronómica corporativa.** Nada de fotos de stock sonrientes,
  claims genéricos ni tono de franquicia.
- **Rusticidad de utilería.** Texturas de papel, pizarrones y tipografías
  "hechas a mano" usadas como disfraz en vez de identidad.
- **Grilla infinita de tarjetas idénticas** (icono + título + párrafo) como
  respuesta a cada sección.

## Design Principles

1. **El dato accionable es el producto.** Teléfono, dirección y horario nunca
   deben estar a más de un gesto de distancia, y jamás escondidos detrás de un
   modal que hay que descubrir.
2. **Mobile no es una adaptación, es el caso base.** Se diseña para el pulgar
   en la vereda, y recién después para el escritorio.
3. **Que se vea la pasta.** La calidez viene de la comida y la tipografía, no
   de fondos tintados ni de adjetivos.
4. **Legible para todos.** WCAG AA como piso, no como aspiración: el público
   incluye gente mayor leyendo al sol.
5. **Identidad propia sobre framework.** Bootstrap puede quedarse como grilla y
   utilidades, pero el color, la tipografía y el ritmo son de Francesca.

## Accessibility & Inclusion

Objetivo **WCAG 2.1 nivel AA**. Requisitos concretos:

- Contraste ≥4.5:1 en texto de cuerpo, ≥3:1 en texto grande. El uso actual de
  `text-muted` sobre fondos claros es la primera deuda a pagar.
- Navegación completa por teclado, con foco visible; los overlays de contacto y
  ubicación necesitan manejo de foco y cierre con `Escape`.
- Semántica real: un solo `h1` por página, jerarquía de encabezados correcta,
  `alt` descriptivo, y estados que no dependan solo del color.
- Alternativa para `prefers-reduced-motion: reduce` en toda animación.
- Objetivos táctiles ≥44×44 px.
