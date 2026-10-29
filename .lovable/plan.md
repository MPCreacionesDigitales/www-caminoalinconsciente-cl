# Por qué no aparece el video en caminoalinconsciente.cl

## Lo que encontré
- YouTube no es el problema: tu video funciona.
- El cambio sí llegó a GitHub (hoy 17:55 hora Chile).
- **Vercel intentó publicarlo y falló** ("Deployment has failed"). Por eso tu sitio sigue mostrando la versión anterior, sin el video.
- Aquí en la vista previa el sitio funciona bien con el video, así que la falla es algo propio de Vercel que no puedo ver desde aquí.

## Lo que necesito de ti (2 minutos)
1. Entra a vercel.com → tu proyecto → **Deployments**.
2. Abre el más reciente (marcado en rojo, "Error").
3. Envíame una captura de la parte **Build Logs**, sobre todo las últimas líneas en rojo.

## Lo que haré después
- Leer el error y corregirlo aquí; el arreglo se sube solo a GitHub y Vercel vuelve a publicar.
- Comprobar en caminoalinconsciente.cl que el video aparece antes de "Cómo reservar" y se reproduce al hacer clic.
- No cambio textos, precio, formulario ni nada más.

Atajo opcional: en ese mismo despliegue fallido, el botón **Redeploy** a veces lo resuelve si fue una falla pasajera de Vercel. Si lo pruebas y queda en verde ("Ready"), avísame y lo verifico.
