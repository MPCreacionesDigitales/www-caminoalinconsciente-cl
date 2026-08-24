# Reordenar inicio, logo protagonista y 3 CTA

## 1. Nuevo orden de secciones
- "Descubre el origen emocional de lo que hoy limita tu vida" (Hero) pasa a ser lo primero de la página.
- "¿Qué es la Biodescodificación?" (Definición) queda inmediatamente debajo del Hero.
- El resto del orden se mantiene igual.

## 2. Logo nuevo y más grande
- Subir el logo adjunto (versión nueva) al CDN y reemplazar el actual en todo el sitio (encabezado, pie, página de gracias, favicon).
- Punto estratégico: el logo grande se muestra centrado al inicio del Hero, sobre el titular, con buen tamaño (aprox. 120–170 px de alto según pantalla) para que impacte al entrar.
- En la barra superior fija el logo queda en versión compacta y discreta (solo marca de navegación), para no competir con el logo grande del Hero.

## 3. Solo 3 botones CTA
Se conservan únicamente:
1. El de la barra superior fija, junto a "Test de Preparación".
2. El de la sección Precio.
3. El final, después de "Todo cambio comienza cuando…".

Se eliminan los CTA del Hero y de la sección Beneficios (el texto de esas secciones se mantiene).

## 4. Textos en "Quién te acompaña"
- Título: "Mario Paredes, acompañante en biodescodificación".
- "creo que es el método más efectivo…" pasa a "siento que es el método más efectivo…".

## Detalles técnicos
- `src/routes/index.tsx`: `Hero` antes de `QueEs`.
- `src/components/landing/sections.tsx`: quitar `CtaButton` en `Hero` y `Beneficios`; logo grande en `Hero`; textos de `Sobre`.
- Nuevo puntero `lovable-assets` para el logo; actualizar `site-header.tsx`, `site-footer.tsx`, `gracias.tsx` y `public/favicon.png` (copia cuadrada) + `src/routes/__root.tsx`.
