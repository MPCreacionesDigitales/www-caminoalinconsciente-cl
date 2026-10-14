# Formulario: GitHub dejó de recibir los cambios, y Vercel publica la versión antigua

## Qué encontré
- Envié una prueba en https://www.caminoalinconsciente.cl. El formulario da un error que solo existe en la **versión antigua** del sitio.
- Tu captura de GitHub lo confirma: el último cambio es de hace 5 horas y la carpeta `src/lib` es de hace 2 semanas. **Faltan unos 30 cambios** de hoy, entre ellos el arreglo del formulario y el aviso por Resend.
- Causa más probable: en GitHub quedó el archivo `.github/workflows/deploy.yml` (la publicación automática antigua en GitHub Pages). Aquí lo borré, pero GitHub no deja que Lovable modifique esa carpeta especial sin un permiso extra. Por eso la sincronización se trabó y no subió nada más.

La llave de Resend y las variables de Vercel no son el problema.

## Pasos

1. **Borrar el archivo en GitHub** (destraba la sincronización):
   - En tu repositorio `www-caminoalinconsciente-cl` entra a `.github` → `workflows` → `deploy.yml`.
   - Arriba a la derecha, menú **⋯** → **Delete file** → **Commit changes**.

2. **Revisar la conexión con GitHub en Lovable**: menú **+** (abajo a la izquierda del chat) → **GitHub**. Debe decir que está conectado a `www-caminoalinconsciente-cl`. Si pide reconectar o dar permisos, acéptalo.

3. **Confirmar que llegaron los cambios** (espera 1-3 minutos): en GitHub debe aparecer `src/lib/aviso-resend.ts` y los últimos cambios con fecha de hoy.

4. **Vercel publica solo**: al llegar los cambios a GitHub, Vercel crea un despliegue nuevo automáticamente (Deployments). Espera a que termine en verde. No uses "Redeploy" sobre un despliegue viejo, porque repite el código antiguo.

5. **Probar**: envía el formulario. Debe mostrar el mensaje de éxito y llegar el aviso a contacto@caminoalinconsciente.cl. Puedo repetir la prueba para confirmarlo.

**Plan B (si el paso 3 no funciona):** te paso los 4 archivos que necesita el formulario. Los subes a mano en GitHub con **Add file → Upload files**, en la misma carpeta, y Vercel se actualiza solo.

## DMARC en quarantine (pendiente)
Cloudflare → DNS → Add record:
- Type: `TXT` · Name: `_dmarc`
- Content: `v=DMARC1; p=quarantine; rua=mailto:contacto@caminoalinconsciente.cl`
Si ya existe un `_dmarc`, edítalo en lugar de crear otro (solo puede haber uno).

## Notas
- No hay cambios de código: el proyecto ya está listo y solo falta que llegue a GitHub y a Vercel.
- Mi envío de prueba no quedó guardado, porque falló antes de guardarse.
