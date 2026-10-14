# Formulario: Vercel está publicando una versión antigua del sitio

## Qué encontré
Envié una prueba en https://www.caminoalinconsciente.cl. El formulario responde con un error que pertenece a la **versión antigua** del sitio (la que dependía de Lovable). La versión actual del proyecto ya no tiene ese problema: guarda el contacto con la llave pública y avisa por Resend.

Conclusión: Vercel no está tomando los últimos cambios. Las causas más probables:
- **"Redeploy" vuelve a publicar el mismo código viejo**: repite la versión de ese despliegue y no trae cambios nuevos de GitHub.
- El repositorio de GitHub que usa Vercel no está recibiendo los cambios de este proyecto (por ejemplo, si es un repositorio distinto al conectado aquí).

La llave de Resend y la configuración de correo no son el problema: el error ocurre antes de llegar a esa parte.

## Pasos

1. **Revisar GitHub**: abre tu repositorio y mira el archivo `src/lib/aviso-resend.ts`.
   - Si **existe**: el código está bien en GitHub, sigue al paso 2.
   - Si **no existe**: GitHub no recibe los cambios. En este editor, ve a GitHub (arriba a la derecha) y confirma que está conectado a **ese mismo repositorio** que importaste en Vercel. Si es otro, dime el nombre de cada uno y te guío.

2. **Publicar la versión nueva en Vercel** (no usar "Redeploy" sobre un despliegue viejo):
   - Vercel → tu proyecto → **Deployments**. El despliegue de arriba debe mostrar el último cambio (commit) de GitHub, con fecha de hoy.
   - Si no aparece uno nuevo, ve a **Settings → Git** y revisa que la rama de producción sea `main` (o la rama que usa tu repositorio).
   - Para forzar una publicación nueva: en el último despliegue → ⋯ → **Redeploy** y **desmarca "Use existing Build Cache"**. Revisa también que el commit que muestra sea el más reciente.

3. **Revisar variables en Vercel** (Environments → Production): deben estar estas 4:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
   - `RESEND_API_KEY`

4. **Probar**: cuando el despliegue nuevo termine en verde, envía el formulario. Debe mostrar el mensaje de éxito y llegar el aviso a contacto@caminoalinconsciente.cl. Yo puedo repetir la prueba para confirmarlo.

## DMARC en quarantine (pendiente del mensaje anterior)
Cloudflare → DNS → Add record:
- Type: `TXT`
- Name: `_dmarc`
- Content: `v=DMARC1; p=quarantine; rua=mailto:contacto@caminoalinconsciente.cl`
Si ya existe un `_dmarc`, edítalo en vez de crear otro (solo puede haber uno).

## Notas
- No hay cambios de código: el proyecto ya está listo. Todo se arregla en GitHub y Vercel.
- Mi envío de prueba no quedó guardado (falló antes de guardarse).
