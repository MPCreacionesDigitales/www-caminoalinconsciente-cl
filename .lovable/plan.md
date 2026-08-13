# Estado tras tu cambio de nameservers

Todavía no se ve la propagación. Desde internet el dominio sigue respondiendo con los nameservers de tecnoweb y con los registros viejos.

## Lo que veo ahora

| Registro | Estado | Comentario |
|---|---|---|
| Nameservers | `ns1..ns4.tecnoweb.net` | ❌ Aún no apuntan a Cloudflare |
| A `@` | 185.158.133.1 | ✅ correcto (registro viejo) |
| `www` | CNAME → caminoalinconsciente.cl | ⚠️ registro viejo de tecnoweb |
| TXT `_lovable` | presente | ✅ correcto |
| MX | smtp.google.com (10) | ✅ correcto |
| TXT SPF | **no existe** | ❌ agregado en Cloudflare, no publicado |
| TXT DKIM (`google._domainkey`) | **no existe** | ❌ agregado en Cloudflare, no publicado |
| NS `notify` | **no existe** | ❌ agregado en Cloudflare, no publicado |
| Dominios Lovable | `provisioning_failed` | ❌ aún no se puede emitir el certificado |

## ¿Cuánto esperar?

El cambio de nameservers puede demorar entre **minutos y 48 horas**, según el proveedor del dominio y el TTL que tenga en su zona. A esta hora debería ser normal que no se vea todavía.

## Cómo saber tú mismo que ya está listo

Desde Cloudflare, en el panel del dominio, cuando los nameservers se reconozcan aparecerá una banda o mensaje que dice **"Great news! Cloudflare is now protecting your site"** o **"Active"**. Hasta entonces, no activa.

También puedes comprobarlo con cualquier herramienta online de "DNS lookup" o en tu terminal con:

```text
dig NS caminoalinconsciente.cl
```

Cuando los dos nameservers digan `.ns.cloudflare.com` en lugar de `.tecnoweb.net`, ya estamos en Cloudflare.

## Advertencia importante sobre el correo de avisos

El dominio de email `notify.caminoalinconsciente.cl` ahora figura como verificado en Lovable, pero cuando los nameservers migren a Cloudflare, ese subdominio **solo seguirá funcionando si en Cloudflare creaste los dos registros NS**:

| Tipo | Nombre | Valor |
|---|---|---|
| NS | `notify` | `ns3.lovable.cloud` |
| NS | `notify` | `ns4.lovable.cloud` |

Si no los agregaste todavía, por favor añádelos en Cloudflare ahora mismo. Sin ellos, los avisos del formulario dejarán de enviarse cuando el DNS se mueva.

## Próximos pasos cuando la propagación termine

1. **Yo reviso el DNS** para confirmar que SPF, DKIM, NS notify y los dos A están correctos.
2. **En Google Workspace** vuelves a pulsar **Iniciar autenticación** del DKIM. Con Cloudflare activo suele verificar en pocos minutos.
3. **En Lovable**, Configuración del proyecto → Dominios, pulsamos **Retry** en ambos dominios para reemitir el certificado SSL.
4. **Definimos `www.caminoalinconsciente.cl` como dominio primario**.
5. **Probamos el envío del aviso del formulario** a `contacto@caminoalinconsciente.cl`.

## Si pasan 24 horas y no cambia nada

Es posible que tecnoweb no haya aplicado el cambio de nameservers. Escríbeles directamente pidiendo que actualicen los nameservers de `caminoalinconsciente.cl` a los dos de Cloudflare. Si no cooperan, avísame y vemos alternativas.

## Resumen

Por ahora: **esperar**. No hay nada más que yo pueda hacer de mi lado hasta que el DNS de internet refleje los nameservers de Cloudflare. Una vez eso ocurra, los certificados SSL y el resto se resuelven en minutos.

## Detalles técnicos
- No necesito tocar código del sitio; todo está listo.
- Recuerda: asegúrate de tener los NS `notify` en Cloudflare antes de que la propagación termine, para no perder el envío de correos de aviso.
