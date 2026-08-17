# Reconectar www.caminoalinconsciente.cl

## Situación actual (verificada ahora)

- `caminoalinconsciente.cl` → apunta correctamente a `185.158.133.1` y está **activo**.
- `www.caminoalinconsciente.cl` → también apunta a `185.158.133.1`, y su TXT de verificación `_lovable.www` ya está publicado.
- Los nameservers del dominio ya son de Cloudflare (`aida.ns.cloudflare.com`, `devin.ns.cloudflare.com`).
- En el panel de Lovable, `www.caminoalinconsciente.cl` sigue marcado como **drifted** (desconectado), que es el origen del mensaje que te aparece.

Es decir: el DNS ya está correcto; lo único que falta es que Lovable vuelva a verificarlo.

## Qué hacer

1. En Lovable: **Project Settings → Domains**, buscar `www.caminoalinconsciente.cl` y presionar **Recover** (o **Retry**).
2. Esperar unos segundos a que pase a **Active / Live**.
3. Si vuelve a fallar: en Cloudflare, revisar que los registros A de `@` y `www` estén en modo **DNS only** (nube gris, sin proxy naranjo). El proxy de Cloudflare impide que Lovable emita el certificado SSL y provoca justamente el estado "drifted".
4. Volver a presionar **Recover** tras desactivar el proxy.

## Verificación

Una vez presionado Recover, confirmo desde mi lado que:
- `www.caminoalinconsciente.cl` figura como dominio activo.
- Ambas URLs sirven la versión publicada del sitio.

## Nota

No se requiere ningún cambio de código para esto; es solo configuración de dominio.
