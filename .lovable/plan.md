# Estado actual y pasos para dejar todo operativo

## Lo que revisé ahora (consulta DNS real)

| Elemento | Estado |
|---|---|
| A `caminoalinconsciente.cl` → 185.158.133.1 | OK |
| `www` → apunta al dominio raíz → 185.158.133.1 | OK |
| TXT `_lovable` (verificación) | OK, presente |
| Registros CAA que bloqueen el certificado | Ninguno (bien) |
| Nameservers activos | Siguen siendo `tecnoweb.net` (Cloudflare aún no toma control) |
| Dominio de correo `notify.caminoalinconsciente.cl` | **Verificado** en Lovable |
| Dominios en Lovable | `provisioning_failed` (falta reintentar) |
| Formulario de leads en la web | Quitado de la página, el código sigue existiendo |

Conclusión: los registros que Lovable necesita para el sitio ya están correctos y publicados, aunque sigan sirviéndose desde tecnoweb. El estado `provisioning_failed` quedó del intento anterior (cuando había registros A duplicados) y necesita un **reintento manual**.

## Lo que haces tú (2 minutos)

1. Abre **Configuración del proyecto → Dominios**.
2. En `caminoalinconsciente.cl` pulsa **Retry**, y luego lo mismo en `www.caminoalinconsciente.cl`.
3. Espera unos minutos: pasan por `Verifying` → `Setting up` → `Active`.
4. Cuando ambos estén `Active`, marca **`www.caminoalinconsciente.cl` como Primary**.

Si el retry vuelve a fallar, te lo diagnostico con el detalle del error.

Nota sobre Cloudflare: como los registros ya son correctos en tecnoweb, no es urgente terminar la migración. Si igual la completas más adelante, hay que replicar allí: A `@`, A `www` (DNS only, nube gris), TXT `_lovable`, SPF, DKIM de Google y los NS `notify` → `ns3.lovable.cloud` y `ns4.lovable.cloud`.

## Lo que hago yo en el sitio

**Volver a poner el formulario de contacto** para captar leads:

- Se reincorpora la sección "¿Aún tienes dudas?" con el formulario (nombre, correo, WhatsApp) justo antes del CTA final en la página de inicio.
- El envío sigue guardando en la base de datos y, como el dominio de correo ya está verificado, ahora sí enviará el aviso a **contacto@caminoalinconsciente.cl** con los datos del contacto y la página de origen.
- Se mantiene la protección anti-spam (campo trampa) y el mensaje de éxito/error para el visitante.

## Detalles técnicos
- `src/routes/index.tsx`: reimportar y renderizar `Formulario` antes de `CtaFinal`.
- `src/lib/contacto.functions.ts` y `src/lib/email-templates/nuevo-lead.tsx` ya están listos; no requieren cambios.
- Prueba posterior: envío real del formulario y verificación del correo recibido.
