# Reconectar www.caminoalinconsciente.cl

El mensaje "Offline" solo afecta al subdominio `www`. El dominio principal `caminoalinconsciente.cl` sigue **Live** y funcionando normalmente.

## Qué revisé

- `caminoalinconsciente.cl` → apunta correctamente a `185.158.133.1`
- `www.caminoalinconsciente.cl` → también apunta correctamente a `185.158.133.1`
- TXT `_lovable.www.caminoalinconsciente.cl` → **no existe**

Ese TXT de verificación es lo único que falta. Sin él, Lovable no puede confirmar la propiedad del subdominio y lo marca como Offline.

## Pasos a seguir (los haces tú en Cloudflare)

1. En Cloudflare → DNS → Add record:
   - Tipo: **TXT**
   - Nombre: `_lovable.www`
   - Contenido: el valor completo `lovable_verify=4f4a868fa83999d51646508cccb5ae568e853…` que aparece en el panel de Lovable (cópialo con el botón de copiar, está truncado en pantalla)
   - TTL: Auto
2. Confirmar que el registro A de `www` → `185.158.133.1` está en modo **DNS only** (nube gris), no proxied.
3. Esperar 10–30 minutos de propagación.
4. Volver al panel de dominios de Lovable y presionar **Recover** en `www.caminoalinconsciente.cl`.

## Después

Cuando me digas que ya lo agregaste, verifico la propagación del TXT desde mi lado y te confirmo si ya puedes darle Recover.

No hay cambios de código involucrados: esto es únicamente configuración DNS.
