# Dejar caminoalinconsciente.cl operativo con Cloudflare (web + Gmail)

Ya creaste la cuenta en Cloudflare y ahí aparecen los registros importados desde tecnoweb. Cloudflare te permite borrar lo que en tecnoweb no podías, así que este es el camino correcto.

## Paso 0 — Activar Cloudflare (imprescindible)

Cloudflare solo controla tu DNS cuando cambias los **nameservers** en tecnoweb (donde tienes registrado el dominio):

1. En Cloudflare, panel del dominio → verás dos nameservers tipo `algo.ns.cloudflare.com`.
2. En tecnoweb, reemplaza los cuatro `ns1..ns4.tecnoweb.net` por los dos de Cloudflare.
3. Cloudflare pasará a estado "Active" (suele tardar de minutos a algunas horas).

Mientras los nameservers sigan en tecnoweb, lo que edites en Cloudflare no tiene efecto.

## Paso 1 — Arreglar los registros de la web

En la tabla que me mostraste hay que hacer estos cambios:

| Registro actual | Acción |
|---|---|
| A `caminoalinconsciente.cl` → 185.158.133.1 (Proxied) | **Dejar**, pero cambiar Proxy status a **DNS only** (nube gris) |
| CNAME `www` → caminoalinconsciente.cl (Proxied) | **Borrar** y reemplazar por: A · `www` · `185.158.133.1` · **DNS only** |
| CNAME `ftp` | **Borrar** (apunta al hosting antiguo, ya no se usa) |
| CNAME `mail` | **Borrar** (Gmail no lo necesita; el correo funciona con el MX) |
| MX `smtp.google.com` (prioridad 10) | **Dejar tal cual** |
| TXT `_dmarc` | **Dejar tal cual** |

Además, agregar el registro de verificación de Lovable (hoy no está en Cloudflare, estaba en tecnoweb):

| Tipo | Nombre | Contenido | Proxy |
|---|---|---|---|
| TXT | `_lovable` | `lovable_verify=e7bfcea5d7ead22abf823cc73e00e32aba93f90e1f39825c784f1b02089451ec` | DNS only |

Importante sobre el **proxy naranja**: la conexión con Lovable se hace en modo directo. Si dejas la nube naranja activa en `@` y `www`, el certificado puede volver a fallar. Deja ambos en **DNS only**.

## Paso 2 — Correo Gmail: agregar lo que falta

Hoy tu dominio tiene el MX de Google y el DMARC, pero **no tiene registro SPF**, lo que hace que tus correos puedan caer en spam. Agrega en Cloudflare:

| Tipo | Nombre | Contenido | Proxy |
|---|---|---|---|
| TXT | `@` | `v=spf1 include:_spf.google.com ~all` | DNS only |

Y, opcionalmente pero recomendado, activa **DKIM** en Google Workspace (Apps → Google Workspace → Gmail → Autenticar correo): Google te dará un registro TXT con nombre `google._domainkey` que agregas también en Cloudflare.

Si usas Gmail gratuito con reenvío (no Google Workspace), avísame y ajustamos: en ese caso el SPF puede variar.

## Paso 3 — Correo de avisos del formulario (Lovable)

El subdominio `notify.caminoalinconsciente.cl` estaba delegado a Lovable con registros NS. Al mover el DNS a Cloudflare hay que volver a crearlos allí:

| Tipo | Nombre | Contenido |
|---|---|---|
| NS | `notify` | `ns3.lovable.cloud` |
| NS | `notify` | `ns4.lovable.cloud` |

Cloudflare sí permite dos NS para un subdominio (era justo el problema que tenías en tecnoweb). Esto no interfiere con Gmail: solo afecta al subdominio `notify`, no al dominio principal.

## Paso 4 — Reintentar el dominio en Lovable

Cuando Cloudflare esté activo y los registros estén como arriba:

1. Yo verifico el DNS desde fuera y te confirmo que está limpio.
2. En Configuración del proyecto → Dominios, pulsamos **Retry** en `caminoalinconsciente.cl` y `www.caminoalinconsciente.cl`.
3. El estado pasará a **Setting up** → **Active**.
4. Dejamos `www.caminoalinconsciente.cl` como dominio primario, y la raíz redirigirá al `www`.

## Resumen del estado final esperado

```text
A     @        185.158.133.1        DNS only
A     www      185.158.133.1        DNS only
TXT   _lovable lovable_verify=...   DNS only
TXT   @        v=spf1 include:_spf.google.com ~all
TXT   _dmarc   v=DMARC1; p=none;
MX    @        smtp.google.com (10)
NS    notify   ns3.lovable.cloud
NS    notify   ns4.lovable.cloud
(borrados: CNAME ftp, CNAME mail, CNAME www)
```

## Detalles técnicos
- No requiere cambios de código: todo es configuración DNS más el reintento de aprovisionamiento del certificado.
- Si prefirieras mantener el proxy naranja de Cloudflare, habría que reconectar el dominio en Lovable marcando la opción "el dominio usa Cloudflare o proxy similar" (usa verificación por CNAME en lugar de A). Recomiendo la vía simple: DNS only.
- Con el correo verificado, después podemos reactivar el aviso automático de cada formulario a contacto@caminoalinconsciente.cl.
