# Video de presentación en "¿Cómo es una sesión?"

## Enlace recibido
`https://youtu.be/dDWakpv4T8o` — asegúrate de que en YouTube esté como **Público** u **Oculto / No listado** (no "Privado").

La persona lo verá **directamente en tu sitio**, dentro del marco que ya está listo, sin salir de caminoalinconsciente.cl.

## Qué haré yo
- Pegar tu enlace en la configuración del sitio.
- Cambiar el marco para que cargue de forma **ligera**: al abrir la página solo se muestra la portada de tu video con el botón de play (una imagen liviana). El reproductor de YouTube se carga recién cuando la persona presiona play. Así la página abre igual de rápido que hoy.
- Usar el modo de YouTube con mayor privacidad (sin cookies hasta reproducir) y ocultar videos sugeridos de otros canales al final, en lo posible.
- Revisar que se vea bien en celular y computador.

No se tocan textos, precios, enlaces ni el orden de las secciones.

## Detalles técnicos
- `src/lib/site-config.ts`: `youtubeEmbedUrl` con el enlace; añadir helper para obtener el ID.
- `VideoSection` en `src/components/landing/sections.tsx`: patrón "facade" — `<button>` con miniatura `https://i.ytimg.com/vi/{id}/hqdefault.jpg` (lazy) + icono Play; al clic, se monta `<iframe src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0">`. Placeholder actual se mantiene si el enlace está vacío.
