# Darle vida a la página: imágenes, video y movimiento sutil

Mejorar el aspecto visual del inicio sin cambiar textos, estructura de secciones, precios ni enlaces. La página de la competencia es solo texto; aquí la diferenciaremos con video e imágenes.

## 1. Video (sección "¿Cómo es una sesión?")

- Dejar la sección lista para el video que Mario grabará pronto.
- En `site-config.ts` ya existe `youtubeEmbedUrl` (vacío): cuando se complete con el enlace de YouTube, la sección mostrará el video incrustado automáticamente.
- Mientras esté vacío, se muestra un marco elegante de reproductor (imagen de portada + botón de play) con un texto para Mario tipo "Aquí irá el video de presentación", que se reemplaza solo al publicar el enlace.

## 2. Nuevas imágenes (generadas con IA, estilo del sitio)

Generar 3 imágenes coherentes con la paleta actual (blanco, azul petróleo, verde suave, dorado) e integrarlas donde hoy solo hay texto:

- **Solución** — imagen de apoyo junto a la lista de situaciones (persona en calma en videollamada).
- **Problema** — imagen de fondo o lateral que acompañe las tarjetas ("¿te suena familiar?").
- **Formulario** — imagen cálida al lado del formulario de contacto para que el cierre no quede plano.

Las fotos reales de Mario (hero, sobre mí, proceso) no se tocan.

## 3. Movimiento sutil al bajar por la página

- Componente `Reveal` reutilizable: los bloques aparecen con un desvanecido suave hacia arriba la primera vez que entran en pantalla, con un pequeño retardo escalonado.
- Aplicarlo en todas las secciones del inicio (títulos, tarjetas, imágenes, precios, FAQ).
- Respeta la preferencia de "reducir movimiento" del sistema del visitante (ya configurada en el sitio).

## 4. Detalles de acabado

- Hover más pulido en tarjetas y botones (sombra suave consistente con el diseño actual).

## Detalles técnicos

- Imágenes: generar con imagegen hacia `src/assets/` (mismo tratamiento que las actuales).
- `src/components/landing/sections.tsx`: nuevos imports de imágenes, `VideoSection` con iframe condicional según `SITE.youtubeEmbedUrl`, envolver bloques con `Reveal`.
- Nuevo `src/components/landing/reveal.tsx` (IntersectionObserver, sin librerías nuevas).
- `src/lib/site-config.ts`: comentario actualizado en `youtubeEmbedUrl` para que Mario sepa dónde pegar su enlace.
- Verificar build y vista previa en escritorio y móvil.
