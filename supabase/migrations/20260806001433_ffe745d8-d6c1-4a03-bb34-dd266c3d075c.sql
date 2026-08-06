CREATE TABLE public.contactos (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  email text NOT NULL,
  whatsapp text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contactos TO anon, authenticated;
GRANT ALL ON public.contactos TO service_role;

ALTER TABLE public.contactos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar el formulario"
ON public.contactos FOR INSERT TO anon, authenticated
WITH CHECK (true);