# Quitar el aviso "sitio no seguro" en www.caminoalinconsciente.cl

## Qué pasó
Al poner el CNAME de `www` en "DNS only" (nube gris), el tráfico va directo a Vercel. Vercel emite el certificado SSL (el candado) automáticamente, pero tarda unos minutos. Mientras tanto el navegador muestra el aviso. No es un error tuyo ni de la página.

## Pasos

1. **Esperar 5-15 minutos** y recargar `https://www.caminoalinconsciente.cl` (probar también en una ventana de incógnito, porque el navegador a veces guarda el aviso viejo).

2. **Revisar en Vercel** → Settings → Domains:
   - `www.caminoalinconsciente.cl` debe salir sin errores (sin "Invalid Configuration").
   - Si sigue en error después de 15 minutos: quitar el dominio (Remove) y volver a agregarlo (Add) para forzar que Vercel emita el certificado de nuevo.

3. **Revisar en Cloudflare** → SSL/TLS:
   - El modo debe estar en **Full** (no "Flexible"). Con nube gris esto importa menos, pero conviene dejarlo en Full.

4. **Verificación final:**
   - `https://www.caminoalinconsciente.cl` carga con candado.
   - `https://caminoalinconsciente.cl` redirige a www con candado.
   - El formulario envía y llega el aviso por correo (Resend verificado + `RESEND_API_KEY` en Vercel + Redeploy).

## Notas
- No hay cambios de código en este plan; todo es configuración en Vercel y Cloudflare.
- No tocar los registros de correo (MX, SPF, DKIM, DMARC) ni el de Resend.
