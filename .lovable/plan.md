# Estado actual: dominios activos

## Lo que ya pasó

Tú ya le diste **Retry** a los dominios y ahora ambos están activos:

- `https://caminoalinconsciente.cl`
- `https://www.caminoalinconsciente.cl`

## Lo que falta para dejar todo operativo

### 1. Definir el dominio primario

En **Configuración del proyecto → Dominios**, marca **`www.caminoalinconsciente.cl` como Primary** para que el otro redirija a él.

### 2. Volver a poner el formulario de leads en la página de inicio

Yo me encargo de reincorporar la sección "¿Aún tienes dudas?" con el formulario (nombre, correo, WhatsApp) justo antes del CTA final.

- El formulario sigue guardando en la base de datos y, como el dominio de correo `notify.caminoalinconsciente.cl` ya está verificado, ahora enviará el aviso a **contacto@caminoalinconsciente.cl** con los datos del contacto y la página de origen.
- Se mantiene la protección anti-spam (campo trampa) y el mensaje de éxito/error para el visitante.

### 3. Probar el flujo completo

Después de reincorporar el formulario, haré un envío de prueba para confirmar que el correo llega a **contacto@caminoalinconsciente.cl**.

## Detalles técnicos
- `src/routes/index.tsx`: importar y renderizar `Formulario` antes de `CtaFinal`.
- `src/lib/contacto.functions.ts` y `src/lib/email-templates/nuevo-lead.tsx` ya están listos; no requieren cambios.
