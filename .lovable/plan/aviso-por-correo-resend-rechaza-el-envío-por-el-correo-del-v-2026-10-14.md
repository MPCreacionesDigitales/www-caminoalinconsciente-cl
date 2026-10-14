# Aviso por correo: Resend rechaza el envío por el correo del visitante

## Qué encontré
Tu captura de Resend muestra el error: **"Invalid reply_to"**. El aviso usa el correo que escribe el visitante como "responder a", para que puedas contestarle directo. En tu prueba ese correo no tenía un formato válido completo (por ejemplo `algo@` o con espacios). El formulario lo aceptó porque solo revisaba que tuviera "@", y entonces Resend rechazó todo el aviso.

Tu llave, tu dominio, SPF y DMARC están bien: Resend recibió el pedido y lo identificó con tu llave "API Formulario".

## Cambios (yo)
1. **Formulario más estricto:** se aceptan correos personales (Gmail, Hotmail, Outlook, Yahoo, etc.) y corporativos. Solo se rechazan correos mal escritos, como `juan@`, `juan@gmail` o con espacios; en ese caso aparece "Ingresa un correo válido" antes de enviar.
2. **El aviso nunca se pierde:** si por cualquier motivo el correo del visitante no sirve como "responder a", el aviso se envía igual a contacto@caminoalinconsciente.cl, solo que sin esa opción.
3. Te dejo los 2 archivos actualizados (`aviso-resend.ts` y `contacto.functions.ts`) listos para descargar.

## Pasos (tú) — igual que la vez anterior
1. Descarga los 2 archivos nuevos.
2. GitHub → `src` → `lib` → **Add file → Upload files** → arrastra los 2 → **Commit changes** (reemplazan a los anteriores).
3. Espera a que Vercel quede en verde (Deployments).
4. Envía el formulario con un correo real tuyo. Debe llegarte el aviso a contacto@caminoalinconsciente.cl. Puedes confirmarlo en Resend → Logs: debe salir **200** en vez de 422.

## Notas
- No cambia nada visible de la página, salvo el mensaje de "correo no válido" cuando corresponda.
