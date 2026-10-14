# Verificación final del formulario en producción

## Estado actual
- Los archivos corregidos (`aviso-resend.ts` y `contacto.functions.ts`) ya están en GitHub y Vercel los desplegó con éxito (estado Ready / Production).
- La versión nueva del formulario ya debería estar en vivo en caminoalinconsciente.cl.

## Qué hacer ahora (prueba real)

1. Abrir https://www.caminoalinconsciente.cl en una ventana de incógnito (para asegurar que carga la versión nueva, no una copia en caché).
2. Llenar el formulario de contacto con datos de prueba reales:
   - Nombre de prueba (ej. "Prueba Mario")
   - Un correo con formato válido (ej. tu propio Gmail)
   - Un mensaje corto
3. Enviar y confirmar que aparece el mensaje "se registraron los datos".
4. Revisar el correo contacto@caminoalinconsciente.cl (bandeja de entrada y Spam): debería llegar el aviso con los datos del lead en 1-2 minutos.

## Si el correo no llega

- Revisar en Resend → Emails/Logs el último intento:
  - Si aparece con estado "Delivered" → el correo llegó, revisar Spam/promociones en Gmail.
  - Si aparece un error (4xx/5xx) → enviarme captura del error exacto para ajustar el código.
  - Si no aparece ningún registro nuevo → la variable `RESEND_API_KEY` no está llegando a producción; verificar en Vercel → Settings → Environment Variables que existe y está marcada para Production, luego Redeploy.

## Nota técnica

La versión nueva reintenta el envío sin la cabecera `reply_to` si Resend la rechaza, por lo que el aviso debería llegar incluso si el visitante escribe un correo con formato extraño. El registro del lead en la base de datos nunca se pierde, falle o no el correo.
