# Formulario funcionando en Vercel + dominio www.caminoalinconsciente.cl

## Por qué falla
El formulario guarda los datos usando una llave privada que solo existe dentro de Lovable. Vercel no la tiene (y no se puede copiar), así que el guardado falla. El aviso por correo también depende de Lovable.

## Qué cambio yo (código)
1. **Guardado del formulario sin llave privada:** el formulario pasará a guardar con la llave pública (la que ya tienes en Vercel). Agrego un permiso en la base de datos que permite a los visitantes **solo agregar** un registro nuevo, nunca leer ni borrar los existentes. Tus datos siguen protegidos. Se mantienen las validaciones y el anti-spam.
2. **Aviso por correo con Resend (gratis hasta 3.000 correos/mes):** cambio el envío del aviso para que use Resend en vez del servicio de Lovable. Si Resend no está configurado, el formulario igual guarda los datos (el correo nunca bloquea el registro).
3. No toco textos, precios, enlaces, imágenes ni orden de secciones.

## Qué haces tú
**A. Subir cambios:** se suben solos a GitHub; Vercel vuelve a publicar automáticamente.

**B. Resend (para recibir el aviso en tu correo):**
1. Crear cuenta en resend.com con tu Gmail.
2. Domains → Add Domain → `caminoalinconsciente.cl`. Te dará 3-4 registros (TXT/MX en `send` y `resend._domainkey`); agrégalos en Cloudflare con nube gris. No tocan tus registros de Gmail.
3. API Keys → Create → copia la llave (empieza con `re_`).
4. En Vercel → Environments → Production → Add: Type **Secret**, Key `RESEND_API_KEY`, Value la llave. Save y Redeploy.

**C. Conectar tu dominio en Vercel:** Settings → Domains → Add `caminoalinconsciente.cl` y `www.caminoalinconsciente.cl`. Deja `www.caminoalinconsciente.cl` como principal (el otro redirige a él).

**D. Cloudflare → DNS (todo con nube gris, "DNS only"):**
- Borrar: A `@` → 185.158.133.1, A `www` → 185.158.133.1, TXT `_lovable`, TXT `_lovable.www`, TXT `_lovable-email`, y el NS de `notify` (ya no se usa).
- Agregar: A `@` → `76.76.21.21` y CNAME `www` → `cname.vercel-dns.com`.
- No borrar: MX, SPF, `google._domainkey`, DMARC (tu Gmail).
- SSL/TLS → modo **Full**.

**E. Probar:** en 10-60 minutos abre https://www.caminoalinconsciente.cl, envía el formulario con tus datos y confirma que llega el aviso a contacto@caminoalinconsciente.cl.

## Cómo ver los registros (leads)
Los registros se siguen guardando en la misma base de datos de siempre; los puedes ver como hasta ahora. Si más adelante quieres una forma de verlos sin Lovable, lo vemos aparte.

## Detalle técnico
- Migración: `GRANT INSERT ON public.leads TO anon;` + política `FOR INSERT TO anon WITH CHECK (true)` con límites de largo en columnas. Sin SELECT para anon.
- `enviarContacto`: crear cliente publicable dentro del handler (`SUPABASE_URL`/`VITE_SUPABASE_URL` + publishable key, shim `apikey` para claves `sb_`), `insert` sin `.select()`; idempotencia con email+timestamp.
- Nuevo `src/lib/aviso-resend.ts`: `fetch("https://api.resend.com/emails")` con `RESEND_API_KEY`, remitente `avisos@caminoalinconsciente.cl`, HTML simple con los datos del lead. Se omite si falta la llave.
- Herramientas MCP de leads (usan llave privada) dejarán de funcionar fuera de Lovable; se dejan sin cambios.
- Registrar en AGENTS.md: el formulario no depende de credenciales exclusivas de Lovable (hosting en Vercel).
