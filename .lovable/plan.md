# Salir del error del campo "Key" en Vercel

## Buena noticia
Lo más probable es que **no necesites agregar esas 3 variables**. Tu proyecto ya trae guardados esos mismos datos de conexión, y ese archivo se sube a GitHub junto con el resto del sitio. Vercel los lee solo al publicar.

## Qué hacer ahora (tú)
1. Cierra el formulario "Add Environment Variable" sin guardar nada.
2. Ve a **Deployments**, abre el menú **⋯** del último despliegue y presiona **Redeploy**.
3. Cuando termine en verde, abre la dirección `.vercel.app` y revisa:
   - que se vean las imágenes, el video y los botones;
   - que el formulario de contacto diga que el mensaje se envió.
4. Si todo funciona, seguimos con el dominio y Cloudflare (los pasos ya acordados).

## Solo si el formulario NO funciona
Vuelve a "Add Environment Variable" y agrega **una variable a la vez**:
- **Type:** cambia de "Secret" a **Config** (lo más probable es que el error venga de ahí, porque Vercel no permite marcar como "Secret" variables que empiezan con `VITE_`).
- **Key:** solo el nombre, sin espacios ni el signo `=` (por ejemplo `VITE_SUPABASE_URL`).
- **Value:** solo el valor.
- Save, y repetir con las otras dos. Luego Redeploy.

Si aun así aparece error, mándame una captura donde se lea el mensaje rojo completo.

## Lo que no se toca
No cambio nada del sitio: textos, precios, enlaces, imágenes y orden de secciones quedan iguales.

## Detalle técnico
- `.env` no está en `.gitignore`, así que va en el repositorio; Vite lo carga en el build de Vercel y reemplaza `import.meta.env.VITE_SUPABASE_*` en el cliente. `vite.config.ts` además carga `.env` en `process.env` para el servidor.
- Los valores son claves publicables, no secretos, por lo que tenerlos en el repositorio es seguro.
- No se requieren cambios de código en este plan.
