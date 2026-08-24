# Cambiar el logo del sitio

Reemplazar el logo actual por el nuevo archivo subido ("Camino al Inconsciente – Biodescodificación") en todas las apariciones del sitio.

## Qué cambia

- Nuevo logo visible en:
  - Barra superior (todas las páginas)
  - Sección principal del inicio (logo grande)
  - Pie de página
  - Página de agradecimiento (/gracias)
- Favicon regenerado a partir del nuevo logo.
- Se elimina el logo anterior una vez que ya no se use.

No se cambian textos, secciones, precios ni enlaces.

## Detalles técnicos

- Subir el archivo con `lovable-assets create` y guardar el puntero en `src/assets/logo-camino-inconsciente.png.asset.json`.
- Actualizar los imports en `src/components/landing/site-header.tsx`, `src/components/landing/site-footer.tsx`, `src/components/landing/sections.tsx` y `src/routes/gracias.tsx`.
- Regenerar `public/favicon.png` desde el nuevo logo.
- Borrar el puntero antiguo `logo-mario-paredes-v2.png.asset.json` con `lovable-assets delete`.
- Verificar build y vista previa.
