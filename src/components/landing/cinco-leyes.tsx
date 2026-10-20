import { ArrowDown, BookOpen, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const leyes = [
  {
    numero: "01",
    titulo: "El impacto inesperado",
    nombre: "La llamada «ley férrea»",
    propuesta: "Hamer postuló que las enfermedades se originan en un choque emocional inesperado, vivido en soledad, y que este afecta simultáneamente a la psique, el cerebro y un órgano. Esta relación causal no está demostrada científicamente.",
    exploracion: "En el acompañamiento podemos conversar sobre una experiencia que te marcó: qué ocurrió, cómo la viviste y qué apoyo te faltó. No se usa ese relato para explicar el origen de una enfermedad.",
    pregunta: "¿Qué situación sigo viviendo con dolor o sin poder expresar?",
  },
  {
    numero: "02",
    titulo: "Las dos fases",
    nombre: "Conflicto activo y supuesta reparación",
    propuesta: "La segunda propuesta divide el proceso en una fase de conflicto activo y otra de reparación, si el conflicto se resuelve. No es una descripción médica validada del curso de las enfermedades.",
    exploracion: "Observamos cuándo sientes tensión, cuándo encuentras calma y qué hábitos o apoyos te ayudan. La aparición de dolor, fiebre o cansancio no se interpreta como prueba de sanación: requiere valoración sanitaria cuando corresponda.",
    pregunta: "¿Qué me mantiene en alerta y qué me ayuda a recuperar calma?",
  },
  {
    numero: "03",
    titulo: "Tejidos, cerebro y desarrollo embrionario",
    nombre: "El llamado sistema ontogenético",
    propuesta: "Esta propuesta relaciona las capas embrionarias de los tejidos con zonas del cerebro, tipos de conflicto y cambios celulares. Aunque el desarrollo embrionario es un hecho científico, el mapa de conflictos de Hamer no está validado.",
    exploracion: "Exploramos tu historia y el significado personal de lo vivido, sin asignar un conflicto a un órgano ni usar un diccionario de enfermedades como diagnóstico. Dos personas pueden vivir situaciones similares de formas muy diferentes.",
    pregunta: "¿Qué significó esta experiencia para mí, más allá de cualquier etiqueta?",
  },
  {
    numero: "04",
    titulo: "El papel de los microorganismos",
    nombre: "La hipótesis sobre microbios y reparación",
    propuesta: "Hamer atribuyó a los microorganismos una función dirigida de reparación de los tejidos. Esta explicación no está respaldada por la evidencia: los microorganismos también pueden causar infecciones que necesitan tratamiento.",
    exploracion: "El trabajo emocional no determina si una infección es peligrosa ni si necesitas medicamentos. Puedes hablar de tus preocupaciones y recursos de apoyo mientras sigues las indicaciones de tu equipo de salud.",
    pregunta: "¿Qué apoyo necesito para atravesar esta preocupación sin descuidar mi salud?",
  },
  {
    numero: "05",
    titulo: "El supuesto sentido biológico",
    nombre: "La enfermedad como programa adaptativo",
    propuesta: "La quinta propuesta presenta la enfermedad como un programa biológico con un propósito adaptativo. No es una explicación científica aceptada y no significa que una enfermedad sea beneficiosa o que deba dejarse sin tratar.",
    exploracion: "Buscamos un sentido personal a tu experiencia y nuevas posibilidades de acción. No necesitas encontrar una «lección» en una enfermedad, ni eres culpable de enfermar por lo que pensaste o sentiste.",
    pregunta: "¿Qué quiero cuidar o cambiar en mi vida a partir de lo que estoy viviendo?",
  },
];

export function CincoLeyes() {
  return (
    <section id="cinco-leyes" aria-labelledby="titulo-cinco-leyes" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <BookOpen className="size-8 text-gold" aria-hidden="true" />
            <p className="eyebrow mt-5">Conocer antes de decidir</p>
            <h2 id="titulo-cinco-leyes" className="rule-gold mt-5 text-3xl font-semibold leading-tight sm:text-4xl">Las 5 leyes biológicas: qué proponen y cuáles son sus límites</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Son cinco postulados de Ryke Geerd Hamer, asociados a la llamada Nueva Medicina Germánica y retomados por algunas corrientes de biodescodificación. Se llaman «leyes» dentro de ese marco; no son leyes científicas reconocidas.</p>
            <div className="mt-8 border-l-2 border-gold pl-5">
              <div className="flex items-center gap-2 font-medium"><ShieldCheck className="size-5 shrink-0 text-gold" aria-hidden="true" />Tu salud, primero</div>
              <p className="mt-3 leading-relaxed text-muted-foreground">No hay evidencia científica sólida que valide este sistema como explicación o tratamiento de enfermedades. Una sesión no diagnostica, no promete curación y no sustituye atención médica ni psicológica. No suspendas tratamientos por estas ideas.</p>
            </div>
          </div>
          <Accordion type="single" collapsible defaultValue="01" className="min-w-0 border-t border-border">
            {leyes.map((ley) => (
              <AccordionItem key={ley.numero} value={ley.numero}>
                <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline">
                  <span className="flex min-w-0 items-start gap-4">
                    <span className="font-display text-xl text-gold">{ley.numero}</span>
                    <span><span className="block text-lg font-medium">{ley.titulo}</span><span className="mt-1 block text-sm font-normal text-muted-foreground">{ley.nombre}</span></span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="space-y-5 pb-7 text-base leading-relaxed">
                  <div><h3 className="font-medium text-foreground">Qué propone este marco</h3><p className="mt-2 text-muted-foreground">{ley.propuesta}</p></div>
                  <div><h3 className="font-medium text-foreground">Cómo lo abordamos en la sesión</h3><p className="mt-2 text-muted-foreground">{ley.exploracion}</p></div>
                  <p className="border-l border-gold pl-4 font-medium text-gold">{ley.pregunta}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Para contrastar este enfoque: <a className="underline underline-offset-4 hover:text-foreground" href="https://www.krebsgesellschaft.de/media/positionen/alle-wissenschaftlichen-stellungnahmen/neue-germanische-medizin-2" target="_blank" rel="noopener noreferrer">información de la Sociedad Alemana del Cáncer sobre Hamer</a>.</p>
          <Button variant="outline" asChild className="h-auto min-h-11 whitespace-normal py-3">
            <a href="#solucion">Del conocimiento a tu sesión<ArrowDown className="size-4 shrink-0" aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}