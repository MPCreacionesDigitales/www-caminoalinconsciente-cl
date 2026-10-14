# Aviso por correo: el formulario guarda, pero no llega el email

## Estado
- El formulario ya funciona y guarda los datos.
- SPF y DMARC están listos.
- Falta que llegue el aviso a contacto@caminoalinconsciente.cl. La página intenta enviarlo por Resend, y si Resend lo rechaza, igual muestra "se registraron los datos". Por eso no ves el error.

## Paso 1 — Revisar spam (30 segundos)
Busca en la carpeta **Spam** de contacto@caminoalinconsciente.cl un correo "Nuevo contacto: ...". Como DMARC está recién en quarantine, puede caer ahí.

## Paso 2 — Revisar Resend → Emails (o "Logs")
Entra a resend.com → menú **Emails** (o **Logs**) y fíjate si aparece un intento de envío a la hora de tu prueba:
- **No aparece nada:** la página no está usando tu llave. En Vercel → Environments → Production, revisa que exista `RESEND_API_KEY`, escrita exacta y sin espacios. Después haz un despliegue nuevo, porque las variables solo se aplican a despliegues hechos después de agregarlas.
- **Aparece con error (rojo):** mándame captura del mensaje. Lo más común es que el dominio no esté "Verified" en Resend → Domains, o que la llave no tenga permiso para ese dominio.
- **Aparece como "Delivered":** Resend lo entregó. Revisa spam y los filtros de Gmail.

## Paso 3 — Si sigue sin verse claro
En Vercel → tu proyecto → **Logs**, filtra por la hora de la prueba y busca el texto `aviso`. Mándame captura de lo que aparezca.

## Paso 4 — Corrección y prueba
Según lo que salga, te digo el ajuste exacto (en Vercel, Resend o el archivo del aviso). Después enviamos una prueba y confirmamos que el aviso llega.

## Notas
- No cambia nada visible de la página.
