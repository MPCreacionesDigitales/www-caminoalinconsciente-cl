# Conectar dominio personalizado www.caminoalinconsciente.cl

## Objetivo
Configurar el proyecto publicado para que responda en **www.caminoalinconsciente.cl** y redirigir el dominio raíz **caminoalinconsciente.cl** al `www`.

## Plan

1. **Abrir el diálogo de dominios personalizados**
   - Ir a **Configuración del proyecto → Proyecto → Dominios** o usar el botón **Publicar → Agregar dominio personalizado**.

2. **Agregar ambos dominios por separado**
   - Lovable exige registrar el dominio raíz y el subdominio `www` como dos entradas distintas.
   - Primero: `caminoalinconsciente.cl` (raíz).
   - Segundo: `www.caminoalinconsciente.cl` (www).

3. **Configurar registros DNS en el proveedor del dominio (tecnoweb.net u otro)**
   - Para **@** (raíz):
     - Tipo: **A**
     - Nombre: `@`
     - Valor: `185.158.133.1`
   - Para **www**:
     - Tipo: **A**
     - Nombre: `www`
     - Valor: `185.158.133.1`
   - Registro TXT de verificación:
     - Tipo: **TXT**
     - Nombre: `_lovable`
     - Valor: el que entregue Lovable en el flujo de configuración (`lovable_verify=...`)

4. **Esperar propagación DNS y verificación**
   - El estado pasará por **Verificando** → **Configurando** → **Activo**.
   - Propagación puede tardar hasta 72 horas, aunque usualmente es más rápido.

5. **Definir dominio primario**
   - Una vez ambos estén activos, elegir **www.caminoalinconsciente.cl** como dominio primario para que el raíz redirija al `www`.

6. **(Opcional) Re-publicar**
   - El proyecto ya está publicado, pero si tras la activación del dominio no se ve reflejado el sitio, re-publicar para asegurar que la última versión se sirva en el dominio personalizado.

## Nota importante
No es necesario cambiar los servidores DNS completos del dominio. Solo se agregan los registros A y TXT que Lovable solicite. Si el proveedor actual no permite agregar múltiples registros A o subdominios, se evaluará migrar la gestión DNS a un proveedor con soporte completo (Cloudflare ofrece plan gratuito).
