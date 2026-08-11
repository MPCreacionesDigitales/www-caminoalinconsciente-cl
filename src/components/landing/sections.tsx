import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { enviarContacto } from "@/lib/contacto.functions";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import {
  Activity,
  Brain,
  HeartHandshake,
  Repeat,
  Sparkles,
  Compass,
  ShieldCheck,
  Video,
  UserRound,
  Star,
  PlayCircle,
  Check,
} from "lucide-react";
import { CtaButton } from "./cta-button";
import { SITE } from "@/lib/site-config";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">{SITE.name}</p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-medium text-foreground sm:text-5xl lg:text-6xl">
            Descubre el origen emocional de lo que hoy limita tu vida
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Una sesión privada 1 a 1 donde te acompaño a encontrar la raíz emocional y biológica
            de aquello que te genera estrés, síntomas o situaciones que se repiten.
          </p>
          <div className="mt-9">
            <CtaButton size="xl">Quiero Agendar Mi Sesión</CtaButton>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              { icon: ShieldCheck, label: "Pago seguro" },
              { icon: Video, label: "Sesión online" },
              { icon: UserRound, label: "Atención personalizada" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 shrink-0 text-sage" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/50 blur-2xl" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Persona en calma durante una sesión online de biodescodificación"
            width={1280}
            height={1600}
            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Problema -------------------------------- */

const problemas = [
  "¿Has intentado mejorar pero siempre vuelves al mismo lugar?",
  "¿Sientes que algo se repite una y otra vez?",
  "¿Tu cuerpo te habla mediante síntomas?",
  "¿Las relaciones siempre terminan igual?",
  "¿El dinero nunca alcanza?",
  "¿Vives con ansiedad o estrés?",
];

export function Problema() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Quizás te suene familiar</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            A veces el problema no está donde creemos que está
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p) => (
            <li
              key={p}
              className="rounded-2xl border border-border bg-card p-6 text-base leading-relaxed text-card-foreground transition-shadow duration-300 hover:shadow-soft"
            >
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Cuando algo se repite, casi nunca es casualidad. Detrás suele haber una emoción no
          resuelta, una creencia aprendida o una historia familiar que sigue actuando sin que la
          veamos.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------- Solución -------------------------------- */

export function Solucion() {
  return (
    <section id="solucion" className="py-20 sm:py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">La solución</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            Sesión Online de Biodescodificación
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            En un encuentro privado por videollamada revisamos juntos tu historia para encontrar
            el conflicto que dio origen a lo que hoy vives. No trabajamos sobre el síntoma:
            trabajamos sobre su raíz.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Al finalizar obtienes claridad sobre el origen de tu situación y un protocolo práctico
            para comenzar un proceso de transformación consciente.
          </p>
        </div>
        <ul className="grid gap-4 self-center">
          {[
            "Identificamos la raíz emocional del conflicto",
            "Comprendemos la razón biológica del síntoma",
            "Reconocemos creencias y programas inconscientes",
            "Observamos conflictos familiares que se repiten",
            "Definimos un protocolo práctico para tu proceso",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl bg-accent/40 px-5 py-4">
              <Check className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
              <span className="text-base text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- Beneficios ------------------------------- */

const beneficios = [
  { icon: Compass, title: "Comprende el origen de tu conflicto", text: "Deja de dar vueltas sobre lo mismo y entiende dónde comenzó realmente." },
  { icon: Activity, title: "Descubre la razón biológica de tu síntoma", text: "Tu cuerpo no se equivoca: expresa aquello que aún no ha sido resuelto." },
  { icon: Brain, title: "Identifica creencias inconscientes", text: "Reconoce las ideas heredadas que hoy condicionan tus decisiones." },
  { icon: Repeat, title: "Rompe patrones repetitivos", text: "Comprende por qué ciertas historias vuelven una y otra vez a tu vida." },
  { icon: Sparkles, title: "Obtén claridad emocional", text: "Sal de la sesión con una lectura ordenada y comprensible de tu proceso." },
  { icon: HeartHandshake, title: "Comienza un cambio profundo", text: "Recibe herramientas concretas para avanzar desde el primer día." },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Lo que te llevas</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            No es solo una sesión. Es el inicio de una transformación
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <CtaButton>Quiero Agendar Mi Sesión</CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Cómo funciona ----------------------------- */

const pasos = [
  { n: "01", title: "Compra tu sesión", text: "Reserva de forma segura a través de Hotmart." },
  { n: "02", title: "Agenda el día", text: "Elige el horario que mejor se acomode a ti." },
  { n: "03", title: "Conéctate por videollamada", text: "Un espacio privado, tranquilo y confidencial." },
  { n: "04", title: "Comienza tu transformación", text: "Te llevas un protocolo práctico para aplicar." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            Cuatro pasos simples
          </h2>
        </div>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <li key={p.n} className="border-t border-border pt-6">
              <span className="font-display text-sm tracking-[0.2em] text-gold">{p.n}</span>
              <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------------- Sobre ---------------------------------- */

export function Sobre() {
  return (
    <section id="sobre-mi" className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <img
          src={aboutImage}
          alt="Retrato del acompañante en biodescodificación"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">Quién te acompaña</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            Un acompañamiento cercano y profesional
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              En mi constante búsqueda de sentido, sanar mis relaciones personales y problemas
              económicos, llegué a la biodescodificación.
            </p>
            <p>
              Dentro de todo lo que he estudiado y aprendido, creo que es el método más efectivo y
              directo para transformar la forma en que pensamos. Gracias a las herramientas que
              aporta, se pueden generar cambios desde el minuto 1.
            </p>
            <p>
              Este aprendizaje me ha motivado a querer apoyar a personas que están viviendo en
              estrés, y mi sueño es poder ser ese apoyo que necesitan a través de la
              biodescodificación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Testimonios ------------------------------ */

const testimonios = [
  { nombre: "María P.", ciudad: "Santiago, Chile", texto: "Llegué a la sesión sin entender por qué mi ansiedad siempre volvía. En menos de una hora logramos identificar el origen de un conflicto que llevaba años repitiéndose. Salí con una claridad que no había sentido nunca." },
  { nombre: "Carlos R.", ciudad: "Santiago, Chile", texto: "Tenía un dolor de espalda que ningún especialista lograba explicar. La sesión me ayudó a comprender el mensaje que mi cuerpo intentaba decirme. Hoy puedo decir que entiendo el verdadero origen de lo que vivía." },
  { nombre: "Daniela M.", ciudad: "Santiago, Chile", texto: "Mi relación de pareja siempre terminaba de la misma forma. En la sesión descubrimos el patrón familiar que se repetía sin que yo lo viera. Fue transformador tener una hoja de ruta clara para comenzar a cambiarlo." },
];

export function Testimonios() {
  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonios</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            Historias que comenzaron con una sola sesión
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex min-w-0 items-center gap-4">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"
                  aria-hidden="true"
                >
                  <UserRound className="size-5" />
                </span>
                <figcaption className="min-w-0">
                  <p className="truncate font-medium">{t.nombre}</p>
                  <p className="truncate text-sm text-muted-foreground">{t.ciudad}</p>
                </figcaption>
              </div>
              <div className="mt-5 flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
                {t.texto}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Video --------------------------------- */

export function VideoSection() {
  return (
    <section className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell max-w-3xl text-center">
        <p className="eyebrow">Presentación</p>
        <h2 className="mt-5 text-3xl leading-tight font-medium sm:text-4xl">
          Conoce cómo trabajamos en la sesión
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="aspect-video w-full">
            {SITE.youtubeEmbedUrl ? (
              <iframe
                src={SITE.youtubeEmbedUrl}
                title="Video de presentación"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="size-full"
              />
            ) : (
              <div className="flex size-full flex-col items-center justify-center gap-3 bg-accent/40 text-accent-foreground">
                <PlayCircle className="size-12" aria-hidden="true" />
                <p className="text-sm">Espacio reservado para el video de presentación</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Precio --------------------------------- */

export function Precio() {
  return (
    <section id="precio" className="py-20 sm:py-28">
      <div className="section-shell max-w-2xl">
        <div className="rounded-[1.75rem] border border-border bg-card p-9 text-center shadow-elevated sm:p-14">
          <p className="eyebrow">Tu inversión</p>
          <h2 className="mt-5 text-2xl font-medium sm:text-3xl">Sesión Online</h2>
          <p className="font-display mt-6 text-5xl font-medium text-primary sm:text-6xl">
            {SITE.price}
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Sesión privada 1 a 1 por videollamada, con protocolo práctico incluido.
          </p>
          <div className="mt-9">
            <CtaButton size="xl" className="w-full sm:w-auto">
              Reservar Mi Sesión
            </CtaButton>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-sage" aria-hidden="true" />
            Pago seguro mediante Hotmart
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  { q: "¿La sesión es online?", a: "Sí. Se realiza por videollamada, desde donde estés, solo necesitas conexión a internet y un lugar tranquilo." },
  { q: "¿Cuánto dura?", a: "La sesión es un encuentro privado 1 a 1 con el tiempo necesario para revisar tu historia y entregarte un protocolo práctico." },
  { q: "¿Necesito conocimientos previos?", a: "No. Yo te guío paso a paso con un lenguaje simple y cercano durante todo el proceso." },
  { q: "¿Qué ocurre después de comprar?", a: "Después del pago podrás agendar el día y la hora de tu sesión, y recibirás el enlace de la videollamada." },
  { q: "¿Sirve para cualquier conflicto?", a: "Se puede trabajar con síntomas físicos, ansiedad, estrés, relaciones, dinero, familia y patrones que se repiten." },
  { q: "¿Qué pasa si tengo dudas?", a: "Puedes escribirme antes de reservar mediante el formulario o WhatsApp y con gusto te oriento." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-20 sm:py-28">
      <div className="section-shell max-w-3xl">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
          Resolvamos tus dudas
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------------------- Formulario ------------------------------ */

const contactSchema = z.object({
  nombre: z.string().min(2, "Ingresa tu nombre").max(100, "Máximo 100 caracteres"),
  email: z.string().email("Ingresa un correo válido").max(255),
  whatsapp: z.string().min(6, "Ingresa un número válido").max(30),
});


export function Formulario() {
  const [values, setValues] = useState({ nombre: "", email: "", whatsapp: "" });
  const [website, setWebsite] = useState("");
  const [enviando, setEnviando] = useState(false);
  const enviar = useServerFn(enviarContacto);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (enviando) return;
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    if (website) return; // honeypot anti-spam
    setEnviando(true);
    try {
      await enviar({
        data: {
          ...result.data,
          paginaDeOrigen: typeof window !== "undefined" ? window.location.href : undefined,
        },
      });
      toast.success("¡Gracias! Hemos recibido tus datos. Me pondré en contacto contigo muy pronto.");
      setValues({ nombre: "", email: "", whatsapp: "" });
    } catch {
      toast.error(
        "No pudimos enviar tus datos. Por favor, intenta nuevamente o escríbeme directamente por WhatsApp.",
      );
    } finally {
      setEnviando(false);
    }
  }


  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">¿Aún tienes dudas?</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-medium sm:text-4xl">
            Escríbeme y te oriento antes de reservar
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Déjame tus datos y te contacto para responder todas tus preguntas sobre la sesión.
          </p>
        </div>
        <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9">
          <div className="grid gap-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              name="nombre"
              required
              autoComplete="name"
              maxLength={100}
              value={values.nombre}
              onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
              placeholder="Tu nombre"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Correo</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={255}
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              autoComplete="tel"
              maxLength={30}
              value={values.whatsapp}
              onChange={(e) => setValues((v) => ({ ...v, whatsapp: e.target.value }))}
              placeholder="+56 9 1234 5678"
            />
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">No completar</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={enviando}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
          >
            {enviando ? "Enviando…" : "Quiero más información"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* -------------------------------- CTA final ------------------------------- */

export function CtaFinal() {
  return (
    <section className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="section-shell max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-medium sm:text-5xl">
          Todo cambio comienza cuando decides mirar el origen de tu historia
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Tal vez llevas años intentando resolver el síntoma. Hoy puedes comenzar a comprender su
          verdadero origen.
        </p>
        <div className="mt-10">
          <CtaButton variant="gold" size="xl">
            Agendar Mi Sesión Ahora
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
