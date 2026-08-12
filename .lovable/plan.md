# Contacto por WhatsApp, aviso por correo y página de agradecimiento

## 1. Sección de contacto: solo WhatsApp
- En el pie de página, dejar únicamente el enlace de WhatsApp (se quitan Instagram y Facebook).
- El número pasa a ser +56 9 9022 9732, abriendo el chat directo con un mensaje inicial sugerido.

## 2. Aviso por correo de cada formulario
- Cada vez que alguien envíe nombre, correo y WhatsApp, se guarda como hasta ahora y además se envía un aviso a contacto@caminoalinconsciente.cl con los datos y la página de origen.
- El correo se ve con tu marca (logo, colores del sitio) para que puedas hacer seguimiento de inmediato.
- Si el envío del aviso fallara, el registro igual se guarda: el visitante nunca ve un error.

Requisito previo: para enviar correos hace falta activar el dominio caminoalinconsciente.cl como remitente. Es un paso guiado (se agregan unos registros en tu proveedor de dominio) y la verificación puede tardar hasta unas horas. Hasta que esté verificado, los datos se siguen guardando y podrás verlos en el panel.

## 3. Página de agradecimiento post-compra
- Nueva página en /gracias, pensada para pegarla en Hotmart como URL de página de gracias tras la compra aprobada.
- Contenido: logo, mensaje de confirmación ("Tu compra fue aprobada"), pasos siguientes (revisar correo de Hotmart, escribir por WhatsApp para agendar día y hora), botón grande de WhatsApp y enlace de vuelta al inicio.
- Sin menú de venta ni botones de pago, para no confundir a quien ya compró.
- Marcada como no indexable en buscadores.

## Detalles técnicos
- `src/lib/site-config.ts`: `WHATSAPP_URL` con el número +56990229732.
- `src/components/landing/site-footer.tsx`: se eliminan los ítems de redes sociales.
- Plantilla de correo React Email en `src/lib/email-templates/` + registro, enviada desde `src/lib/contacto.functions.ts` tras el insert en `leads`, con clave de idempotencia por id de lead.
- Nueva ruta `src/routes/gracias.tsx` con `head()` propio (título, descripción, `robots: noindex`).
