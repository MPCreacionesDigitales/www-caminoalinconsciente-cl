# Revisar y corregir el dominio de email de Lovable (notify.caminoalinconsciente.cl)

## Estado actual confirmado
- El dominio de correo `notify.caminoalinconsciente.cl` está marcado como **Drifted** en Lovable: la verificación DNS ya no pasa.
- Lovable espera que en Cloudflare existan los siguientes registros delegados:

| Tipo | Host | Valor esperado |
|------|------|----------------|
| TXT | `_lovable-email.caminoalinconsciente.cl` | `lovable_email_verify=82d789c71f5316654dba622fe1d654f14a1cb7616ec352606a636e990c22e94b` |
| NS | `notify.caminoalinconsciente.cl` | `ns3.lovable.cloud` |
| NS | `notify.caminoalinconsciente.cl` | `ns4.lovable.cloud` |

- La configuración de SPF, DKIM y DMARC que el usuario está haciendo para Gmail corresponde al dominio raíz y **no afecta** el subdominio delegado de Lovable. Lovable gestiona SPF/DKIM/MX dentro de la subzona `notify.caminoalinconsciente.cl`.

## Plan

### 1. Verificar Cloudflare
Ir a Cloudflare → DNS → Records y confirmar que existen exactamente los registros anteriores. No deben faltar ni sobrar registros NS en `notify`.

### 2. Corregir o completar registros si es necesario
- Si falta el TXT de verificación, agregarlo.
- Si falta algún NS (`ns3.lovable.cloud` o `ns4.lovable.cloud`), agregarlo.
- Si hay registros extra (A, CNAME, TXT, MX) directamente en `notify.caminoalinconsciente.cl`, eliminarlos; solo deben existir los dos NS.

### 3. Esperar propagación
- Aunque Cloudflare suele ser rápido, esperar 15-30 minutos para evitar re-verificar antes de tiempo.

### 4. Re-verificar en Lovable
- Ir a **Cloud → Emails → Manage Domains**.
- Presionar **Retry** en `notify.caminoalinconsciente.cl`.
- Confirmar que el estado pasa a **Active / Verificado**.

### 5. Probar el flujo de leads
- Enviar un lead de prueba desde el formulario de la landing.
- Confirmar que el registro se guarda en `public.leads`.
- Confirmar que el aviso llega a `contacto@caminoalinconsciente.cl`.

## Nota importante
Si los registros en Cloudflare ya coinciden exactamente con los que Lovable espera y el estado sigue Drifted, el problema está del lado de Lovable. En ese caso no se deben seguir modificando registros; hay que contactar a soporte de Lovable para que reprovisionen `notify.caminoalinconsciente.cl`.
