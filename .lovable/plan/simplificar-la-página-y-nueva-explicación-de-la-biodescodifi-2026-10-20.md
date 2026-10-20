# Simplificar la página y nueva explicación de la Biodescodificación

## 1. Quitar secciones
Se eliminan las secciones que están entre "¿Qué es la Biodescodificación?" y "Cómo reservar":
- Problema ("¿Has intentado mejorar pero siempre vuelves al mismo lugar?"...)
- Solución
- Beneficios

Se mantiene la sección "¿Qué es la Biodescodificación?" (con el texto nuevo).

## 2. Mover "Cómo reservar"
"Cómo reservar · En sólo cuatro pasos" pasa a quedar justo después de la imagen "¿Cómo es una sesión?".

Nuevo orden:
```text
Inicio -> ¿Qué es la Biodescodificación? -> Quién te acompaña -> ¿Cómo es una sesión? (imagen) -> Cómo reservar -> Precio -> Preguntas frecuentes -> Formulario -> Cierre
```

## 3. Nuevo texto en "¿Qué es la Biodescodificación?"
Reemplazar los 3 párrafos actuales por el texto enviado, ordenado en bloques:
- Introducción: "comprender el síntoma desde una nueva perspectiva" (3 párrafos).
- "¿Cómo se aplica la biodescodificación?" con la lista de 5 puntos (Exploración del caso, Vivencias significativas, Análisis emocional, Estudio desde las 5 Leyes Biológicas, Integración y toma de conciencia), con el nombre de cada punto destacado en dorado.
- "Un espacio de exploración y aprendizaje" (2 párrafos).
- Nota final en letra más pequeña: no sustituye el diagnóstico ni el tratamiento médico.

Texto literal, sin cambios de redacción. Nada más de la página cambia (precio, enlaces, formulario, colores).

## Detalle técnico
- `src/components/landing/sections.tsx`: reescribir contenido de `QueEs`; borrar `Problema`, `Solucion`, `Beneficios` y sus datos si quedan sin uso.
- `src/routes/index.tsx`: quitar esas tres secciones y poner `<ComoFunciona />` después de `<VideoSection />`.
- Revisar que ningún enlace interno apunte a `#solucion` o `#beneficios`.
