# Verificar y corregir drift de DNS para email y dominio www

## Estado actual
- Dominio raíz `caminoalinconsciente.cl`: activo y funcionando como URL principal del sitio publicado.
- Subdominio de correo `notify.caminoalinconsciente.cl`: estado **Drifted** en Lovable — la verificación DNS falla.
- Subdominio `www.caminoalinconsciente.cl`: estado **Drifted** como dominio personalizado adicional.
- Cloudflare ya envió el "ok inicial" de activación, lo que indica que el tráfico está siendo proxyado pero la propagación de los registros DNS puede aún estar en curso.

## Pasos a seguir

### 1. Revisar registros en Cloudflare
Verificar que en Cloudflare existan exactamente los registros que Lovable espera para `notify.caminoalinconsciente.cl`:

| Tipo | Host | Valor esperado |
|------|------|----------------|
| TXT | `_lovable-email.caminoalinconsciente.cl` | `lovable_email_verify=82d789c71f5316654dba622fe1d654f14a1cb7616ec352606a636e990c22e94b` |
| NS | `notify.caminoalinconsciente.cl` | `ns3.lovable.cloud` |
| NS | `notify.caminoalinconsciente.cl` | `ns4.lovable.cloud` |

Para el sitio web (raíz y www):
- A `@` → `185.158.133.1` (modo DNS Only, no proxy)
- A `www` → `185.158.133.1` (modo DNS Only, no proxy)
- TXT `_lovable` con el valor de verificación que Lovable mostró al conectar el dominio.

### 2. Esperar propagación (si acabas de agregar o cambiar algo)
- DNS puede tardar hasta 72 horas, aunque con Cloudflare suele ser minutos.
- No re-verificar repetidamente; espera al menos 15-30 minutos antes de dar Retry.

### 3. Dar Retry en Lovable
- Para email: **Cloud → Emails → Manage Domains → Retry** sobre `notify.caminoalinconsciente.cl`.
- Para dominio: **Project Settings → Domains → Retry** sobre `www.caminoalinconsciente.cl`.

### 4. Verificar funcionamiento
- Confirmar que el formulario de la landing sigue enviando avisos a `contacto@caminoalinconsciente.cl`.
- Probar que `https://www.caminoalinconsciente.cl` redirige correctamente a `https://caminoalinconsciente.cl`.

## Nota importante
Si los registros en Cloudflare ya coinciden exactamente con los que Lovable espera y el estado sigue Drifted, el problema puede estar del lado de Lovable. En ese caso no hay que seguir modificando DNS; conviene contactar a soporte de Lovable para que reprovisionen el subdominio de correo.
