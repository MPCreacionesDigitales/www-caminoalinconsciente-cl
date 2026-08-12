Crear /gracias con mensaje optimista, logo visible y energía alineada al trabajo

## Alcance
Diseñar y construir la página de agradecimiento post-compra (`/gracias`) que sirva como URL de gracias en Hotmart. Dejar la integración de correo en standby.

## Requisitos de contenido
- Mensaje principal entusiasta y optimista: celebrar el paso que el usuario acaba de dar, usando un tono cálido y alineado con el espíritu de acompañamiento y biodescodificación.
- Logo de Mario Paredes Biodescodificación visible y en buen tamaño (más prominente que el diseño actual), centrado en la parte superior del hero de la página.
- Pasos siguientes claros: revisar correo de Hotmart, escribir por WhatsApp para agendar, recibir enlace de videollamada.
- CTA principal: botón grande de WhatsApp con el número +56 9 9022 9732.
- Sin menú de venta ni botones de pago (ya compró).
- Marcada como noindex para buscadores.

## Requisitos visuales
- Fondo limpio, colores del sistema de diseño actual (blanco, gris claro, verde suave, azul petróleo, dorado).
- Logo en tamaño grande, con buen espaciado alrededor.
- Tipografía sans-serif elegante (Outfit / DM Sans).
- Iconos de celebración y de pasos: check, WhatsApp, correo, calendario.
- Diseño premium, centrado y mobile-first.

## Archivos a modificar
- `src/routes/gracias.tsx`: reescribir componente y metadatos.
- `src/lib/site-config.ts`: asegurar que `WHATSAPP_URL` apunte a +56 9 9022 9732 con mensaje de agendamiento.
- Posiblemente `src/styles.css` si se necesita un ajuste de color/tono menor.

## Validación
- Verificar que la ruta `/gracias` cargue correctamente en preview.
- Confirmar que el logo se vea claro y bien dimensionado.
- Revisar metadatos `robots: noindex` y `head()` correctos.
