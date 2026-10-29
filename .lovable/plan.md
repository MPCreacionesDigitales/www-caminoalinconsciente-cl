# Arreglar la publicación en Vercel para que aparezca el video

## Qué pasó
Tu captura lo muestra claro: el video está bien; lo que falla es la "armada" del sitio en Vercel. Una pieza interna de herramientas (la que arma los correos de aviso) busca un archivo con un nombre que Vercel no encuentra, porque un ajuste antiguo del proyecto la redirige a un lugar equivocado. En la vista previa no falla, pero en Vercel sí, y por eso nada nuevo se publica (ni el video ni otros cambios recientes).

## Qué haré
- Corregir ese ajuste para que solo afecte a los nombres exactos que lo necesitan y deje pasar los demás (como el que falla en tu captura).
- No toco textos, video, precio, formulario ni avisos por correo.

## Después
- El arreglo se sube solo a GitHub y Vercel vuelve a intentar la publicación.
- Reviso caminoalinconsciente.cl hasta confirmar que el video aparece antes de "Cómo reservar". Si Vercel muestra otro error, te pediré una nueva captura.

## Detalle técnico
En `vite.config.ts`, el alias `entities: path.resolve(node_modules/entities)` también captura subrutas como `entities/decode` (exportadas por la versión de `entities` que instala npm en Vercel) y las apunta a una carpeta inexistente. Cambiarlo a `{ find: /^entities$/, replacement: ... }` (manteniendo los alias exactos de `entities/lib/decode.js` y `entities/lib/encode.js`), o quitarlo si el build local sigue OK sin él.
