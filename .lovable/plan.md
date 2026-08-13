# Resumen DNS: qué borrar y qué dejar para validar caminoalinconsciente.cl

## Estado actual que estoy viendo desde internet

El dominio ya tiene la verificación de Lovable (TXT `_lovable`), pero hay **registros A duplicados** que rompen la emisión del certificado SSL:

```text
caminoalinconsciente.cl      A  185.158.133.1   (correcto, Lovable)
caminoalinconsciente.cl      A  179.61.12.61    (incorrecto, hosting antiguo)
www.caminoalinconsciente.cl  A  185.158.133.1   (correcto, Lovable)
www.caminoalinconsciente.cl  A  179.61.12.61    (incorrecto, hosting antiguo)
```

## Qué debes dejar exactamente

Solo estos tres registros:

| Tipo | Nombre | Valor | ¿Qué hace? |
|------|--------|-------|------------|
| A | @ | 185.158.133.1 | Apunta la raíz a Lovable |
| A | www | 185.158.133.1 | Apunta www a Lovable |
| TXT | _lovable | lovable_verify=e7bfcea5d7ead22abf823cc73e00e32aba93f90e1f39825c784f1b02089451ec | Verifica propiedad para Lovable |

## Qué debes borrar

Borra **todos** los registros que coincidan con esto:

| Tipo | Nombre | Valor | Motivo |
|------|--------|-------|--------|
| A | @ | 179.61.12.61 | Duplicado: manda tráfico a otro servidor |
| A | www | 179.61.12.61 | Duplicado: manda tráfico a otro servidor |

Si tuvieras CNAME, ALIAS o redirecciones para `@` o `www` apuntando a otro lugar, también debes quitarlos; solo deben existir los dos A de arriba y el TXT.

## Si tecnoweb.net no te deja borrar los viejos

Pasa a menudo. La causa más común es que el panel antiguo del hosting tenga un registro predefinido. Estas son las opciones:

1. **Contactar a soporte de tecnoweb.net** y pedirles que eliminen los registros A duplicados:  
   - `179.61.12.61` en `@`  
   - `179.61.12.61` en `www`  
   Diles que ya no usas ese hosting y que el dominio debe apuntar solo a `185.158.133.1`.

2. **Migrar el DNS a Cloudflare** (gratuito y más flexible):  
   - Creas una cuenta en Cloudflare, agregas `caminoalinconsciente.cl`.
   - Cloudflare importa los registros; tú borras los duplicados y dejas solo los tres de arriba.
   - Cambias los nameservers del dominio en tecnoweb.net a los que te dé Cloudflare.
   - Esperas propagación (generalmente minutos/horas, máximo 24h).
   - Esta opción resuelve de una vez el límite que tenías con los NS records para correo también.

3. **Si el dominio aún está apuntado a hosting antiguo**, tecnoweb a veces requiere que primero canceles o migres el servicio web para soltar los A. Si es tu caso, confirma con ellos que el dominio está "liberado".

## Después de limpiar el DNS

1. Vuelve a consultar el estado en Configuración del proyecto → Dominios.
2. El dominio pasará a: **Verificando → Configurando → Activo**.
3. Cuando ambos estén activos, define **www.caminoalinconsciente.cl** como dominio primario para que `caminoalinconsciente.cl` redirija automáticamente.

## Correo: ya está verificado

`notify.caminoalinconsciente.cl` ya está verificado, así que no hay que tocar nada de DNS de correo ahora.

## En una sola frase

Debes tener **solo dos A y un TXT**: nada más; los dos A que apuntan a `179.61.12.61` son los que deben desaparecer.
