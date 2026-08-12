# Foto, logo y enlace de Hotmart

## 1. Nueva foto en "Sobre mí"
- Subir tu fotografía (MP1.jpeg) al CDN de assets y reemplazar la imagen actual de la sección "Sobre mí".
- Ajustar el encuadre para que se vea centrada en móvil y escritorio (formato vertical), manteniendo el marco redondeado actual.
- Eliminar la imagen de stock anterior del proyecto.

## 2. Logo de marca
- Subir el logo "Mario Paredes · Biodescodificación" al CDN.
- Colocarlo en el encabezado fijo, reemplazando el texto "Biodescodificación", con altura contenida para que el menú no crezca en móvil.
- Repetirlo en el pie de página, sobre la descripción.
- Generar el favicon del sitio a partir del logo (versión cuadrada) y reemplazar el ícono por defecto.

## 3. Enlace de Hotmart
- Definir `https://pay.hotmart.com/E107122530K` como URL de checkout en la configuración del sitio.
- Con eso, todos los botones de "Agendar" y llamados a la acción (hero, precio, CTA final, encabezado) apuntan automáticamente al pago, y el dato estructurado de precio/oferta del SEO usa la misma URL.

## 4. Nuevo precio: 45 USD
- Cambiar el precio mostrado de "$30.000 CLP" a "45 USD" en la sección de Precio y en cualquier otra mención del sitio (FAQ, CTA, herramienta de agente `info_sesion`).
- Actualizar el dato estructurado de SEO: precio 45, moneda USD.

## Detalles técnicos
- `src/lib/site-config.ts`: `CHECKOUT_URL` y `SITE.price` actualizados.
- `src/routes/index.tsx`: JSON-LD con `price: "45"` y `priceCurrency: "USD"`.
- `src/components/landing/sections.tsx`: import de la nueva foto en la sección `Sobre` y revisión de textos con el precio.
- `src/routes/index.tsx` (header) y `src/components/landing/site-footer.tsx`: logo con `alt` descriptivo.
- Imágenes vía `lovable-assets` (punteros `.asset.json`), excepto el favicon, que va como archivo en `public/` y se referencia desde `src/routes/__root.tsx`.

