# Camino al Inconsciente: grafito, vino y oro

## Objetivo
Dar a tu sitio más carácter, seguridad y presencia: una estética oscura y firme, pero acogedora y esperanzadora. Mantener la navegación sencilla.

## 1. Nueva identidad visual
- Aplicar la combinación que elegiste: grafito (#191819), vino (#843E53), oro (#D1AD68), superficies oscuras (#30292D) y texto claro (#F2EEEF).
- Usar grafito como base, vino en detalles y contrastes entre secciones, y oro para destacar la marca y las acciones principales. Evitar una página completamente negra y uniforme.
- Conservar Outfit y DM Sans, con títulos de mayor presencia, bordes más definidos y menos formas redondeadas y efectos difuminados.
- Renovar la presentación del inicio, manteniendo la foto de paisaje, el logo y los textos actuales. Dar protagonismo a la marca, sin oscurecer las fotos hasta perder sus detalles.
- Adaptar encabezado, beneficios, precio, preguntas, contacto y pie de página al mismo estilo. Extender la coherencia visual a agradecimiento y páginas legales.
- Revisar cómo se ve el logo sobre el nuevo fondo y conservar su diseño y legibilidad, sin inventar un logo nuevo.

## 2. Tu nueva fotografía
- Reemplazar tu foto en “Quién te acompaña” por `chaqueta_foto.jpeg`, que adjuntaste.
- Optimizar su peso y ajustar el encuadre para escritorio y celular, conservando tu apariencia y sin generar imágenes con IA.
- Mantener la foto de paisaje del inicio y la imagen del proceso de la sesión.

## 3. Quitar el video
- Retirar el video de presentación y su portada de YouTube.
- No dejar un reproductor vacío ni un aviso de “disponible pronto”.
- Conservar “¿Cómo es una sesión?” y la imagen del proceso, ajustando el espacio para que no quede un hueco.

## Qué no cambia
- Textos, orden de secciones, precio de $40.000 CLP y enlace de Hotmart.
- Botón de la mini app, WhatsApp, Instagram y correos de contacto.
- Guardado del formulario y avisos por Resend; no modificar el funcionamiento que ya confirmaste.
- DNS, configuración de Vercel y archivos de publicación antigua quedan fuera de este cambio.

## Detalles técnicos y comprobación
- Actualizar los colores semánticos en `src/styles.css` y las presentaciones en los componentes de la landing; retirar únicamente la parte del reproductor.
- Registrar la nueva foto como asset y comprobar que su dirección funciona también en Vercel, sin depender de una ruta exclusiva de Lovable. No migrar las imágenes existentes que ya funcionan.
- Revisar contraste, legibilidad del logo, encuadre de fotos, botones y ausencia de desbordamientos en escritorio y celular.
- Confirmar que no se carga YouTube, que los enlaces conservan sus destinos y que el formulario mantiene su comportamiento. No enviar registros de prueba sin necesidad.
- Comprobar el resultado tras la actualización en Vercel; no hace falta publicar el sitio en Lovable.
