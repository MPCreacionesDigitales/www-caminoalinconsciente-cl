# Formulario funcionando + SPF (explicado simple)

## Por qué el formulario no funciona
Tu página en Vercel se arma con lo que hay en GitHub, y a GitHub le faltan los arreglos del formulario. Hay que subirlos ahí. La forma más simple es subir 2 archivos a mano. Tarda 2 minutos.

## Parte 1: subir los 2 archivos a GitHub

1. Descarga los 2 archivos que te dejé en el mensaje anterior: `aviso-resend.ts` y `contacto.functions.ts`. Guárdalos en tu computador, por ejemplo en Descargas.
2. Abre tu repositorio en GitHub (`www-caminoalinconsciente-cl`).
3. Haz clic en la carpeta **src** y después en la carpeta **lib**.
4. Arriba a la derecha, presiona **Add file → Upload files**.
5. Arrastra los 2 archivos a la página.
6. Abajo, presiona el botón verde **Commit changes**.
7. Entra a Vercel → **Deployments**. Aparecerá solo un despliegue nuevo. Espera 1-3 minutos a que quede en verde.
8. Avísame y yo pruebo el formulario por ti.

## Parte 2: SPF en Cloudflare
SPF le dice al mundo quién puede enviar correos con tu dominio. Solo puede haber **un** registro SPF en `caminoalinconsciente.cl`.

1. Cloudflare → **DNS → Records**.
2. Busca un registro **TXT** cuyo nombre sea `caminoalinconsciente.cl` (o `@`) y que empiece con `v=spf1`.
   - **Si existe:** presiona Edit y deja el contenido así.
   - **Si no existe:** presiona Add record y créalo con estos datos.
   - Type: `TXT`
   - Name: `@`
   - Content: `v=spf1 include:_spf.google.com ~all`
3. Save.

El valor anterior autoriza a Gmail. Resend no necesita nada más en ese registro: usa su propio registro (`send`) que ya agregaste al verificar tu dominio en Resend.

## Notas
- No hay cambios en la página: textos, precios, enlaces y diseño quedan iguales.
- DMARC en quarantine ya está listo (lo hiciste tú).
