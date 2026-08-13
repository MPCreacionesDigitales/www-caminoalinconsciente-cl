# Activar DKIM en Gmail/Google Workspace para caminoalinconsciente.cl

El DKIM es una firma digital que le dice a los servidores de correo (Gmail, Outlook, etc.) que el mensaje realmente viene de tu dominio y no de un impostor. Con él, tus correos llegan mejor a la bandeja de entrada y no a spam.

## Antes de empezar: ¿qué tipo de Gmail tienes?

Hay dos posibilidades y la ruta cambia un poco. Mira cuál es la tuya:

**A) Gmail con tu dominio propio usando Google Workspace** (la versión de pago, con usuarios tipo `tú@caminoalinconsciente.cl`).

**B) Gmail personal gratuito** (`@gmail.com`) al que reenvías correos de `contacto@caminoalinconsciente.cl` o `mparedes@caminoalinconsciente.cl` desde tu proveedor de hosting/correo.

Si es la opción **B**, DKIM no se configura directamente en Gmail porque Gmail personal no permite dominios propios. En ese caso, el DKIM se configura en el servicio que envía el correo (Google Workspace, Zoho, Cloudflare Email Routing, o tu hosting). Si me dices cuál es tu servicio de correo real, te indico exactamente.

A continuación asumo que tienes **Google Workspace** (la opción más común para usar Gmail con dominio propio).

## Paso 1: Entrar al panel de administración de Google Workspace

1. Ve a https://admin.google.com/ (con tu cuenta de administrador de Google Workspace).
2. Inicia sesión con tu correo de `caminoalinconsciente.cl` (por ejemplo, `mparedes@caminoalinconsciente.cl`).

## Paso 2: Abrir la sección de DKIM

1. En el panel de administración, haz clic en el menú (☰) arriba a la izquierda.
2. Ve a **Aplicaciones → Google Workspace → Gmail**.
3. Haz clic en **Autenticar correo** (o en inglés, **Authenticate email**).

## Paso 3: Generar el registro DKIM

1. Selecciona el dominio: `caminoalinconsciente.cl`.
2. Presiona el botón **Generar nuevo registro** (Generate new record).
3. Te aparecerá una ventana con dos cosas:
   - **Nombre del selector** (por ejemplo, `google`). Puedes dejar `google`.
   - **Valor del registro TXT** (un texto largo que empieza con `v=DKIM1;`).
4. Copia exactamente ese texto largo.

## Paso 4: Crear el registro en Cloudflare

1. Entra a Cloudflare, selecciona el dominio `caminoalinconsciente.cl`.
2. Ve a la pestaña **DNS** → **Records**.
3. Presiona **Add record**.
4. Completa así:

| Campo | Valor |
|---|---|
| Tipo | TXT |
| Nombre | `google._domainkey` |
| Contenido | Pega aquí el texto largo que copiaste de Google Workspace |
| TTL | Auto |
| Proxy status | DNS only |

5. Guarda el registro.

> Si el selector de Google Workspace fue distinto a `google`, cambia `google` por el que te aparezca. El nombre del registro siempre es `<selector>._domainkey`.

## Paso 5: Volver a Google Workspace y activar DKIM

1. Regresa a la misma ventana de Google Workspace donde generaste el registro.
2. Presiona **Iniciar autenticación** (Start authentication).
3. Google revisará si el registro TXT está presente. Si Cloudflare ya está activo como DNS del dominio, la verificación es casi inmediata.
4. Cuando aparezca verde/activo, el DKIM queda funcionando.

## Paso 6: Verificar desde fuera (opcional)

Una vez activo, puedes confirmar que el registro existe con este comando:

```text
dig TXT google._domainkey.caminoalinconsciente.cl
```

Debe aparecer una respuesta que empiece con `v=DKIM1;`.

## Resumen de lo que ya debería tener en Cloudflare

```text
A     @        185.158.133.1        DNS only
A     www      185.158.133.1        DNS only
TXT   _lovable lovable_verify=...   DNS only
TXT   @        v=spf1 include:_spf.google.com ~all
TXT   _dmarc   v=DMARC1; p=none;
MX    @        smtp.google.com (10)
NS    notify   ns3.lovable.cloud
NS    notify   ns4.lovable.cloud
TXT   google._domainkey   <texto de Google Workspace>
(borrados: CNAME ftp, CNAME mail, CNAME www)
```

## ¿No tienes Google Workspace y solo usas Gmail personal?

Si tu correo es `contacto@caminoalinconsciente.cl` pero llega a una bandeja de Gmail personal, necesito saber qué servicio realmente administra ese correo (¿Zoho, el hosting de tecnoweb, Cloudflare Email Routing, etc.?). Ahí es donde se genera el DKIM. Avísame y te lo explico.

## Detalles técnicos
- DKIM solo se configura en el servicio que envía correos con tu dominio. Gmail personal no envía como `@caminoalinconsciente.cl`, por eso no tiene DKIM propio para dominios ajenos.
- No necesitas tocar nada en Lovable para esto; el DKIM es solo para el proveedor de correo del dominio.
- El registro de Cloudflare debe quedar en DNS only, no en proxied.
