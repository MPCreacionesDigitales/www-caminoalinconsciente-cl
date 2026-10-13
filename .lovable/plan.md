# Publicar caminoalinconsciente.cl en Vercel

## Dónde estás ahora
Vercel ya importó tu repositorio de GitHub y detectó "TanStack Start" automáticamente. Eso está correcto: **no cambies nada de esa pantalla** (ni Build Command, ni Output Directory, ni Install Command). Los valores que muestra son los correctos.

## Paso 1 — Variables de entorno
Ojo: la pantalla "Environments" (con el botón "Create Environment") NO es donde se agregan. La pantalla correcta es **Settings → Environment Variables** (menú lateral del proyecto).

Ahí se agrega cada variable con un campo **Key** (nombre) y **Value** (valor), marcando los tres ambientes (Production, Preview, Development) y presionando Save. Las tres variables, tal cual:

- `VITE_SUPABASE_URL` = `https://cfvuysclonhaevconnfq.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` = `sb_publishable_dH8zg067Rw55Ti3WRMN45A_k55QnjGs`
- `VITE_SUPABASE_PROJECT_ID` = `cfvuysclonhaevconnfq`

Si el proyecto ya se desplegó sin las variables, ir a **Deployments → Redeploy** después de guardarlas. Sin estas variables, el formulario de contacto no funcionará en el sitio publicado.

## Paso 2 — Deploy
Presiona el botón **Deploy**. Vercel construirá la página (tarda 1-3 minutos). Si termina en verde, el sitio queda publicado en una dirección temporal tipo `tu-proyecto.vercel.app`. Ábrela y revisa que se vea igual que antes.

## Paso 3 — Conectar tu dominio
En Vercel: **Settings → Domains → Add**, agrega:
- `caminoalinconsciente.cl`
- `www.caminoalinconsciente.cl`

Vercel te mostrará los registros DNS que espera.

## Paso 4 — DNS en Cloudflare
En Cloudflare, zona de caminoalinconsciente.cl, sección DNS:

1. **Borra** los registros viejos que apuntan a Lovable (los A con valor `185.158.133.1` y cualquier CNAME a `lovable.app`).
2. **Agrega** los que Vercel indique, normalmente:
   - Tipo **A**, nombre `@`, valor `76.76.21.21` — nube gris (DNS only, sin proxy)
   - Tipo **CNAME**, nombre `www`, valor `cname.vercel-dns.com` — nube gris
3. Mantén intactos los registros de correo (MX, SPF, DKIM de Gmail) y el de `notify` si existe.

Importante: la nube debe estar **gris** (DNS only), no naranja, para que el certificado HTTPS de Vercel se emita sin problemas.

## Paso 5 — Verificación final
Espera unos minutos (hasta 1 hora) y abre `https://caminoalinconsciente.cl`. Verificar:
- La página carga con todas las imágenes y el video
- Los botones de Hotmart y la mini app funcionan
- El formulario de contacto envía y guarda los datos

## Nota sobre el correo de aviso de nuevos contactos
El aviso automático a tu correo depende del servicio de correo de Lovable. En Vercel ese aviso puede dejar de llegar, aunque los datos del formulario sí se guardan. Si quieres recuperar el aviso por correo, lo migramos a un servicio gratuito (Resend) en un paso posterior.

## Qué NO se toca
- Ningún texto, precio, enlace, imagen ni el orden de las secciones de la página.
- El código del sitio ya quedó listo para Vercel en el paso anterior; no requiere más cambios.
