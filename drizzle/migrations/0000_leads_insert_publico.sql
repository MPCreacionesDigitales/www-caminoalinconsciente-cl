GRANT INSERT ON public.leads TO anon, authenticated;
CREATE POLICY "Visitantes pueden registrar contacto"
ON public.leads FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(nombre) BETWEEN 2 AND 100
  AND char_length(correo) BETWEEN 3 AND 255
  AND char_length(whatsapp) BETWEEN 6 AND 30
  AND (pagina_de_origen IS NULL OR char_length(pagina_de_origen) <= 500)
);