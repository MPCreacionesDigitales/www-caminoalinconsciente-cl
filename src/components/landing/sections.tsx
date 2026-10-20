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
  Check,
} from "lucide-react";
import { CtaButton } from "./cta-button";
import { SITE } from "@/lib/site-config";
import heroImage from "@/assets/hero-mujer.jpg";
import aboutAsset from "@/assets/mario-chaqueta.webp.asset.json";
import { Button } from "@/components/ui/button";
import procesoAsset from "@/assets/proceso-sesion.jpg";
import logoAsset from "@/assets/logo-camino-inconsciente-nuevo.png";



const aboutImage = new URL(aboutAsset.url, "https://www-caminoalinconsciente-cl.lovable.app").href;

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background">
      <img
        src={heroImage}
        alt="Mujer de espaldas con los brazos abiertos frente a un amplio paisaje, símbolo de liberación emocional"
        width={1600}
        height={1067}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_40%]"
      />
      <div className="portada-sombra absolute inset-0 -z-10" aria-hidden="true" />
      <div className="section-shell py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <img
            src={logoAsset}
            alt="Camino al Inconsciente · Biodescodificación"
            className="mb-6 h-40 w-auto object-contain drop-shadow-[0_10px_40px_rgba(209,173,104,0.35)] sm:h-60"
            loading="eager"
          />
          <p className="eyebrow">{SITE.name}</p>
          <h1 className="mt-5 max-w-xl text-4xl leading-[1.12] font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Descubre el origen emocional de lo que hoy limita tu vida
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/85">
            Una sesión privada 1 a 1 para explorar tu historia, comprender cómo vives tus emociones
            y reconocer patrones que quieres cambiar. Un espacio para escucharte y elegir tu siguiente paso.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- ¿Qué es la Biodescodificación? ------------------------ */

export function QueEs() {
  return (
    <section id="que-es" className="border-y border-border bg-card py-20 sm:py-28">
      <div className="section-shell max-w-3xl">
          <p className="eyebrow">Definición</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            ¿Qué es la Biodescodificación?
          </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            La biodescodificación propone explorar la relación que una persona percibe entre su historia, sus emociones y lo que vive hoy. En mi sesión, el foco está en escucharte, reconocer creencias y revisar patrones en tus relaciones, tu trabajo y tu vida cotidiana.
          </p>
          <p>
            Algunas corrientes utilizan las llamadas 5 leyes biológicas como marco de interpretación. Aquí puedes conocer qué proponen y distinguir esas hipótesis de lo que sí hacemos en el acompañamiento: conversar sobre tu experiencia, sin imponer una explicación ni atribuir enfermedades a conflictos emocionales.
          </p>
          <p>
            Tu salud y tus circunstancias dependen de muchos factores, no solo de tus emociones. Este espacio de reflexión no es un tratamiento sanitario ni promete curación; puede ayudarte a poner en palabras lo que sientes y definir cambios personales que deseas intentar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Problema -------------------------------- */

const problemas = [
  "¿Has intentado mejorar pero siempre vuelves al mismo lugar?",
  "¿Sientes que algo se repite una y otra vez?",
  "¿Una preocupación por tu salud te genera miedo?",
  "¿Las relaciones siempre terminan igual?",
  "¿El dinero nunca alcanza?",
  "¿Vives con ansiedad o estrés?",
];

export function Problema() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Quizás te suene familiar</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            A veces el problema no está donde creemos que está
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemas.map((p) => (
            <li
              key={p}
              className="rounded-lg border border-border bg-card p-6 text-base leading-relaxed text-card-foreground transition-shadow duration-300 hover:shadow-soft"
            >
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Cuando algo se repite, vale la pena detenerse a observarlo. Explorar tus emociones,
          tu contexto y tus creencias puede abrir nuevas preguntas, sin reducir todo lo que
          vives a una única causa ni culparte por ello.
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
          <p className="eyebrow">Del conocimiento a tu experiencia</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Una nueva lectura de tu propia historia
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            En un encuentro privado por videollamada partimos de una situación concreta que quieras explorar. Revisamos cómo la viviste, qué emociones aparecen y qué creencias reconoces. No buscamos culpables ni un conflicto que explique un diagnóstico: buscamos claridad sobre tu experiencia y un siguiente paso que tenga sentido para ti.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">No necesitas estudiar las cinco leyes ni aceptar sus postulados para participar. Las preguntas se adaptan a tu relato; no asignamos significados fijos a órganos o síntomas.</p>
        </div>
        <div className="self-center">
          <h3 className="text-lg font-medium">Lo que puedes traer a la conversación</h3>
          <ul className="mt-5 grid gap-4">
            {[
              "Una situación de estrés que te cuesta poner en palabras",
              "Las emociones que acompañan una preocupación por tu salud",
              "Patrones que quieres revisar en tus relaciones",
              "Dificultades y bloqueos con el dinero",
              "Historias familiares que se repiten y causan daño",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-md bg-accent/40 px-5 py-4">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span className="text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Beneficios ------------------------------- */

const beneficios = [
  { icon: Sparkles, title: "Poner tu historia en palabras", text: "Un espacio para ordenar lo vivido y reconocer qué te gustaría explorar." },
  { icon: Compass, title: "Un protocolo concreto", text: "Herramientas prácticas para aplicar desde el mismo día de la sesión." },
  { icon: Activity, title: "Más atención a tu bienestar", text: "Exploras cómo te sientes sin convertir tus síntomas en un diagnóstico emocional." },
  { icon: Brain, title: "Revisar tus creencias", text: "Identificas ideas que influyen en tus decisiones y que deseas cuestionar." },
  { icon: Repeat, title: "Reconocer lo que se repite", text: "Observas tus respuestas habituales y consideras alternativas para tu día a día." },
  { icon: HeartHandshake, title: "Un espacio seguro y sin juicio", text: "Un encuentro confidencial donde puedes hablar y expresarte con total libertad." },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Lo que te llevas</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Claridad, reflexión y un siguiente paso
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
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
          <p className="eyebrow">Cómo reservar</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            En sólo cuatro pasos
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
    <section id="sobre-mi" className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <img
          src={aboutImage}
          alt="Mario Paredes, acompañante en biodescodificación en Santiago de Chile"
          loading="lazy"
          width={972}
          height={1296}
          className="aspect-[3/4] w-full max-w-md rounded-lg border border-gold/35 object-cover object-top shadow-elevated"
        />
        <div>
          <p className="eyebrow">Quién te acompaña</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Mario Paredes, acompañante en biodescodificación
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              En mi constante búsqueda de sentido, sanar mis relaciones personales y problemas
              económicos, llegué a la biodescodificación.
            </p>
            <p>
              Luego de años de tratamientos, terapias y cursos de coaching, encontré en la biodescodificación una forma de reflexionar sobre mi historia. Esa experiencia personal me inspira a acompañar a otros; no es una prueba de eficacia médica ni una promesa de que todos vivirán el mismo proceso.
            </p>
            <p>
              Es por esta experiencia que decidí transformar mi vida. Resolver mis mayores conflictos, atravesar mis miedos para finalmente dedicarme 100% a mi sueño, que es ser ese apoyo que muchas personas que están viviendo en sufrimiento necesitan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Video --------------------------------- */

export function VideoSection() {
  return (
    <section className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell max-w-3xl text-center">
        <p className="eyebrow">EL PROTOCOLO</p>
        <h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
          ¿Cómo es una sesión?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Partimos de lo que te preocupa hoy y avanzamos hacia tus emociones, creencias y alternativas. La imagen resume el recorrido de reflexión; no son las cinco leyes ni un protocolo médico.</p>
        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <img
            src={procesoAsset}
            alt="Proceso de la sesión en 5 pasos: identificación de la situación de estrés, sentimiento y emoción oculta, creencia limitante, reimpronta y seguimiento post sesión"
            width={1024}
            height={572}
            loading="lazy"
            className="w-full"
          />
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
        <div className="border-y border-gold/40 py-10 text-center sm:py-14">
          <p className="eyebrow">Tu inversión</p>
          <h2 className="mt-5 text-2xl font-medium sm:text-3xl">Sesión Online</h2>
          <p className="font-display mt-6 text-5xl font-medium text-primary sm:text-6xl">
            {SITE.price}
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Entre 25 y 40 minutos, en privado y por videollamada. Incluye herramientas prácticas para continuar tu reflexión personal.
          </p>
          <div className="mt-9">
            <CtaButton size="xl" className="w-full sm:w-auto">
              Reservar Mi Sesión
            </CtaButton>
          </div>
          <ul className="mt-5 inline-flex flex-col items-start gap-2 text-sm text-muted-foreground">
            {[
              { icon: ShieldCheck, label: "Pago seguro mediante Hotmart" },
              { icon: Check, label: "Pagos en moneda local" },
              { icon: Check, label: "Garantía 15 días" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-sage" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

export const faqs: { q: string; a: string }[] = [
  { q: "¿La sesión es online?", a: "Sí. Se realiza por videollamada, desde donde estés, solo necesitas conexión a internet y un lugar tranquilo. Sesiones presensiales dentro de Chile tienen costo adicional y se coordinan por whatsapp o correo." },
  { q: "¿Cuánto dura?", a: "La sesión dura entre 25 y 40 minutos, dependiendo de lo que esté experimentando el consultante. Es un encuentro privado 1 a 1 con el tiempo necesario para revisar tu historia y entregarte un protocolo práctico." },
  { q: "¿Necesito conocimientos previos?", a: "No. Yo te guío paso a paso con un lenguaje simple y cercano durante todo el proceso." },
  { q: "¿Qué ocurre después de comprar?", a: "Después de comprar a través de Hotmart recibirás un enlace a mi calendario para agendar tu sesión. Tienes 15 días desde la compra para solicitar reembolso si lo necesitas." },
  { q: "¿Se puede trabajar cualquier situación?", a: "Podemos explorar experiencias y patrones personales, pero no todas las necesidades corresponden a este espacio. Si necesitas diagnóstico, tratamiento de un trastorno o apoyo ante una crisis, acude a un profesional de la salud. La sesión no garantiza resolver un conflicto." },
  { q: "¿Las 5 leyes biológicas están demostradas científicamente?", a: "No. Son postulados asociados a Ryke Geerd Hamer y la Nueva Medicina Germánica, no leyes científicas reconocidas. Aquí se explican con sus límites; no se utilizan para diagnosticar, atribuir enfermedades a emociones ni indicar tratamientos." },
  { q: "¿La sesión es un curso sobre las cinco leyes?", a: "No. Es un encuentro individual de acompañamiento emocional. La explicación de esta página es introductoria; en la sesión nos centramos en tu experiencia y en preguntas personales, no en analizar órganos, tejidos o fases de una enfermedad." },
  { q: "¿Desde qué países puedo tomar la sesión?", a: "Cualquier país. Al ser una sesión online, la ubicación geográfica no es limitante." },
  { q: "¿La biodescodificación reemplaza un tratamiento médico o psicológico?", a: "No. Es un acompañamiento emocional complementario y no sustituye diagnóstico, tratamiento ni indicación de un profesional de la salud." },
  { q: "¿Qué pasa si tengo dudas?", a: "Si tienes dudas antes de reservar, completa el formulario con tus datos y me pondré en contacto contigo para orientarte." },
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell max-w-3xl">
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
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

function validateContact(data: { nombre: string; email: string; whatsapp: string }) {
  const nombre = data.nombre.trim();
  const email = data.email.trim();
  const whatsapp = data.whatsapp.trim();
  if (nombre.length < 2) return { ok: false, error: "Ingresa tu nombre" as const };
  if (nombre.length > 100) return { ok: false, error: "Máximo 100 caracteres" as const };
  if (!email.includes("@") || email.length > 255) return { ok: false, error: "Ingresa un correo válido" as const };
  if (whatsapp.length < 6) return { ok: false, error: "Ingresa un número válido" as const };
  if (whatsapp.length > 30) return { ok: false, error: "Ingresa un número válido" as const };
  return { ok: true, data: { nombre, email, whatsapp } } as const;
}


export function Formulario() {
  const [values, setValues] = useState({ nombre: "", email: "", whatsapp: "" });
  const [website, setWebsite] = useState("");
  const [enviando, setEnviando] = useState(false);
  const enviar = useServerFn(enviarContacto);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (enviando) return;
    const validated = validateContact(values);
    if (!validated.ok) {
      toast.error(validated.error);
      return;
    }
    if (website) return; // honeypot anti-spam
    setEnviando(true);
    try {
      await enviar({
        data: {
          ...validated.data,
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
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Escríbeme y te oriento antes de reservar
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Déjame tus datos y te contacto para responder todas tus preguntas sobre la sesión.
          </p>
        </div>
        <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-lg border border-border bg-card p-7 shadow-soft sm:p-9">
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
          <Button
            type="submit"
            disabled={enviando}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
          >
            {enviando ? "Enviando…" : "Quiero más información"}
          </Button>
        </form>
      </div>
    </section>
  );
}

/* -------------------------------- CTA final ------------------------------- */

export function CtaFinal() {
  return (
    <section className="banda-vino border-y border-gold/30 py-24 text-foreground sm:py-32">
      <div className="section-shell max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-medium sm:text-5xl">
          Todo cambio comienza cuando decides mirar el origen de tu historia
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
          No necesitas tener todas las respuestas para empezar. Podemos explorar juntos lo que
          estás viviendo, sin juicios y sin promesas de curación.
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
