# Estado actual y próximos pasos

## 1. Dominio caminoalinconsciente.cl — bloqueado por DNS duplicado

Estado en Lovable: `caminoalinconsciente.cl` y `www.caminoalinconsciente.cl` están en **provisioning_failed** (no se pudo emitir el certificado SSL).

Causa detectada al consultar el DNS público:

```text
caminoalinconsciente.cl      A  185.158.133.1   (Lovable, correcto)
caminoalinconsciente.cl      A  179.61.12.61    (hosting antiguo, sobra)
www.caminoalinconsciente.cl  A  185.158.133.1   (Lovable, correcto)
www.caminoalinconsciente.cl  A  179.61.12.61    (hosting antiguo, sobra)
TXT _lovable                 = lovable_verify=... (correcto)
```

La verificación de propiedad (TXT) está bien. El problema es que cada dominio tiene **dos registros A**: la mitad del tráfico llega al hosting viejo y por eso falla la emisión del certificado.

Qué hacer (en tecnoweb.net):
1. Eliminar el registro A de `@` con valor `179.61.12.61`.
2. Eliminar el registro A de `www` con valor `179.61.12.61`.
3. Dejar únicamente `185.158.133.1` en ambos y no tocar el TXT `_lovable`.
4. Esperar la propagación (normalmente 1–4 horas).
5. Avisarme: verifico el DNS y pulsamos **Retry** en Configuración del proyecto → Dominios para reintentar el SSL.
6. Con ambos activos, dejar `www.caminoalinconsciente.cl` como dominio primario.

Mientras tanto el sitio funciona en https://www-caminoalinconsciente-cl.lovable.app

## 2. Correo de avisos — ya está verificado

`notify.caminoalinconsciente.cl` figura como **verificado**: la delegación NS quedó operativa. Es decir, ya se puede salir del standby y activar el envío del aviso de cada formulario a `contacto@caminoalinconsciente.cl`.

Trabajo pendiente cuando lo autorices:
- Reactivar el envío del correo tras guardar el lead en la base de datos.
- Probar con un envío real desde el formulario y confirmar la recepción.

## 3. Sitio — todo lo pedido está implementado

- Logo tipo banner en la parte superior de inicio, test y páginas legales, adaptado a móvil y escritorio.
- Sección "¿Qué es la Biodescodificación?" al inicio, seguida del hero y del primer botón de agendar.
- Imagen del proceso de 5 pasos en "Conoce cómo trabajamos en la sesión".
- Formulario y bloque "¿Aún tienes dudas?" eliminados de la portada.
- Contacto: solo WhatsApp (+56 9 9022 9732) y mparedes@caminoalinconsciente.cl.
- Aviso legal sin la sección de Titularidad.
- Precio 45 USD y botones apuntando al checkout de Hotmart.
- Página `/gracias` con logo grande, mensaje entusiasta y `noindex`.

## Detalles técnicos
- Sin cambios de código requeridos para el dominio: es solo limpieza de registros A en el proveedor DNS.
- Para el correo: reactivar el envío en `src/lib/contacto.functions.ts` usando la plantilla existente `src/lib/email-templates/nuevo-lead.tsx`, manteniendo el guardado del lead aunque el correo falle.
