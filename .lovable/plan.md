# Quitar la explicación de los 5 pasos

En la sección "¿Cómo es una sesión?", eliminar las 5 tarjetas numeradas (01 a 05) que aparecen debajo de la imagen del proceso.

- Se mantiene: el video, la imagen de los 5 pasos y los títulos de la sección.
- No se cambia nada más de la página.

## Detalle técnico
En `src/components/landing/sections.tsx`, dentro de `VideoSection`, borrar el bloque `<ol>` (líneas 387-406) que está después de la imagen `procesoAsset`.
