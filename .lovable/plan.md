# Dejar el formulario funcionando (Resend) y configurar DMARC en quarantine

## 1. Formulario de contacto con Resend

El código del sitio ya envía el aviso por Resend cuando existe la llave `RESEND_API_KEY`. Falta la configuración:

1. **Verificar el dominio en Resend**: en resend.com → Domains, `caminoalinconsciente.cl` debe salir **Verified**. Si sale Pending, agregar en Cloudflare los registros que Resend muestra (nube gris) y presionar Verify.
2. **Crear la API Key**: Resend → API Keys → Create API Key → copiar la llave (empieza con `re_`).
3. **Agregarla en Vercel**: proyecto → Environments → Production → Add:
   - Type: Secret
   - Key: `RESEND_API_KEY`
   - Value: la llave copiada
   - Marcar Production, Preview y Development → Save
4. **Redeploy**: Deployments → ⋯ del último despliegue → Redeploy.
5. **Probar**: enviar el formulario desde https://www.caminoalinconsciente.cl con datos reales y confirmar que llega el aviso a contacto@caminoalinconsciente.cl.

## 2. DMARC en quarantine (Cloudflare)

Agregar un registro TXT en Cloudflare → DNS:

- Type: `TXT`
- Name: `_dmarc`
- Content: `v=DMARC1; p=quarantine; rua=mailto:contacto@caminoalinconsciente.cl`
- TTL: Auto

Esto indica a los correos destinatarios que envíen a cuarentena (spam) los mensajes que fallen las verificaciones, y te manda reportes a tu correo. No afecta el envío de Gmail ni de Resend ya configurados (SPF y DKIM siguen igual).

## Verificación final

- Formulario envía, guarda el registro y llega el aviso por correo.
- `https://www.caminoalinconsciente.cl` carga con candado y `caminoalinconsciente.cl` redirige a www.
- DMARC visible con una herramienta como dnschecker.org buscando TXT `_dmarc.caminoalinconsciente.cl`.

## Notas
- No hay cambios de código; el sitio ya quedó listo para Resend. Todo es configuración en Resend, Vercel y Cloudflare.
- No tocar los registros MX, SPF ni DKIM de Gmail.
