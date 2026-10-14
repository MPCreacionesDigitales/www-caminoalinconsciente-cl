# Nuevo logo corporativo: Camino al Inconsciente

Reemplazar el logo actual por el archivo subido ("Camino al Inconsciente – Rompe tus límites"), sin fondo, y ajustar su presentación según lo pedido.

## Qué cambia

- **Encabezado**: se elimina el logo de la esquina superior izquierda. La barra superior queda solo con los dos botones ("Test y Diccionario de Enfermedades" y "Agendar").
- **Inicio (Hero)**: el logo que aparece sobre "Sesión online de biodescodificación" se muestra más grande y llamativo (aprox. 160 px de alto en celular y 240 px en escritorio, antes medía la mitad), manteniendo su posición actual y los textos tal como están.
- **Pie de página** y **página de agradecimiento (/gracias)**: mismo logo nuevo, sin el recorte circular, con tamaño moderado.
- **Favicon**: se regenera a partir del emblema del nuevo logo (recorte cuadrado), manteniendo la ruta `public/favicon.png` para no tocar la configuración.

No se cambian textos, secciones, precios ni enlaces.

## Detalles técnicos

- Quitar el fondo del logo subido con una edición de imagen (fondo transparente) y guardarlo en `src/assets/logo-camino-inconsciente-nuevo.png`. Verificar que la figura dorada y los textos queden intactos; si el recorte daña detalles, reintentar una vez.
- Actualizar imports: `src/components/landing/site-header.tsx` (se quita la imagen), `src/components/landing/sections.tsx` (Hero, más grande), `src/components/landing/site-footer.tsx` y `src/routes/gracias.tsx`. Quitar la clase circular (`marca-sello`) de esas imágenes y actualizar el texto alternativo a "Camino al Inconsciente · Biodescodificación".
- Generar `public/favicon.png` recortando el emblema central del logo nuevo (sin texto).
- Borrar el archivo del logo antiguo (`src/assets/logo-camino-inconsciente.png`) cuando ya no lo use nadie.
- Verificar build y vista previa: encabezado sin logo, logo grande en el inicio, pie y /gracias con el logo nuevo, favicon correcto, sin desbordes en celular.
- Los cambios se sincronizan a GitHub y Vercel los publica; no hace falta publicar en Lovable.
