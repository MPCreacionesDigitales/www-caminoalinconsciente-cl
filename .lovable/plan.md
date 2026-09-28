# Video de presentación + botón de tu mini app

## 1. Video en "¿Cómo es una sesión?"
Enlace recibido: `https://youtu.be/dDWakpv4T8o` (en YouTube debe estar como Público u Oculto/No listado, no "Privado").

- Tu video se verá directamente en tu sitio, dentro del marco que ya está listo.
- Carga ligera: al abrir la página solo aparece la portada del video con el botón de play. El reproductor de YouTube se carga recién al presionar play, así la página abre igual de rápido que hoy.
- Modo de mayor privacidad de YouTube y sin videos sugeridos de otros canales al final, en lo posible.

## 2. Botón "Test y Diccionario de Enfermedades"
- En la barra superior, al lado de "Agendar".
- Abre https://caminoalinconsciente.netlify.app/ en una pestaña nueva.
- Estilo con borde (secundario) para que "Agendar" siga siendo el botón principal. En celular ambos caben en la barra; si no hay espacio, bajan a una segunda línea ordenada.

No se tocan textos, precios ni el orden de las secciones.

## Detalles técnicos
- `src/lib/site-config.ts`: `youtubeEmbedUrl = "https://youtu.be/dDWakpv4T8o"`, añadir `MINI_APP_URL`.
- `VideoSection` (`sections.tsx`): facade — botón con miniatura `i.ytimg.com/vi/{id}/hqdefault.jpg` (lazy) + Play; al clic monta iframe `youtube-nocookie.com/embed/{id}?autoplay=1&rel=0`.
- `site-header.tsx`: `CtaButton variant="outline" size="md" href={MINI_APP_URL}` antes de "Agendar" (ya abre en pestaña nueva).
- Verificar en escritorio y móvil.
