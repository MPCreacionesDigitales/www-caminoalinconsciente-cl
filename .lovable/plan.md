# Revisar y corregir el dominio de email de Lovable (notify.caminoalinconsciente.cl)

## Estado actual confirmado
- El dominio de correo `notify.caminoalinconsciente.cl` está marcado como **Drifted** en Lovable: la verificación DNS ya no pasa.
- Lovable espera que en Cloudflare existan los siguientes registros delegados:

| Tipo | Host | Valor esperado |
|------|------|----------------|
| TXT | `_lovable-email.caminoalinconsciente.cl` | `lovable_email_verify=82d789c71f5316654dba622fe1d654f14a1cb7616ec352606a636e990c22e94b` |
| NS | `notify.caminoalinconsciente.cl` | `ns3.lovable.cloud` |
| NS | `notify.caminoalinconsciente.cl` | `ns4.lovable.cloud` |

## Hallazgo del usuario
El usuario confirmó que en Cloudflare tiene:
- ✅ Los dos registros NS de `notify` hacia `ns3.lovable.cloud` y `ns4.lovable.cloud`.
- ❌ El TXT existente es `_lovable.caminoalinconsciente.cl` con valor `lovable_verify=...`. Este es el registro de **verificación del dominio del sitio web**, no del email.
- ⚠️ **Falta** el TXT `_lovable-email.caminoalinconsciente.cl` con valor `lovable_email_verify=...`.

## Plan

### 1. Agregar el TXT de verificación de email en Cloudflare
- Ir a Cloudflare → DNS → Records.
- Añadir un nuevo registro TXT:
  - **Name:** `_lovable-email.caminoalinconsciente.cl`
  - **Content:** `lovable_email_verify=82d789c71f5316654dba622fe1d654f14a1cb7616ec352606a636e990c22e94b`
  - **Proxy status:** DNS Only (gris).

### 2. No eliminar el TXT existente
- Mantener `_lovable.caminoalinconsciente.cl` con `lovable_verify=...` porque es necesario para la verificación del dominio del sitio web.

### 3. Esperar propagación
- Esperar 15-30 minutos para que el registro se propague.

### 4. Re-verificar en Lovable
- Ir a **Cloud → Emails → Manage Domains**.
- Presionar **Retry** en `notify.caminoalinconsciente.cl`.
- Confirmar que el estado pasa a **Active / Verificado**.

### 5. Probar el flujo de leads
- Enviar un lead de prueba desde el formulario de la landing.
- Confirmar que el registro se guarda en `public.leads`.
- Confirmar que el aviso llega a `contacto@caminoalinconsciente.cl`.

## Nota importante
Si después de agregar el TXT correcto y esperar propagación el estado sigue Drifted, el problema puede estar del lado de Lovable. En ese caso no se deben seguir modificando registros; hay que contactar a soporte de Lovable para que reprovisionen `notify.caminoalinconsciente.cl`.
