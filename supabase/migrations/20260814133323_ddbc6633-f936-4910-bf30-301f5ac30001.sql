DELETE FROM public.leads
WHERE nombre ILIKE 'Prueba Lovable%'
   OR correo ILIKE 'test+%@example.com';