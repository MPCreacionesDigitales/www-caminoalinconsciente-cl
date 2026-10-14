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
import logoAsset from "@/assets/logo-camino-inconsciente.png";



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
            alt="Mario Paredes · Biodescodificación"
            className="marca-sello mb-6 size-28 object-contain sm:size-32"
            loading="eager"
          />
          <p className="eyebrow">{SITE.name}</p>
          <h1 className="mt-5 max-w-xl text-4xl leading-[1.12] font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Descubre el origen emocional de lo que hoy limita tu vida
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/85">
            Una sesión privada 1 a 1 donde te acompaño a encontrar la raíz emocional y biológica
            de aquello que te genera estrés, síntomas o patrones inconscientes repetidos.
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
            La Biodescodificación es un proceso de acompañamiento y entrenamiento mental profundo
            orientado a explorar y comprender el origen emocional, biológico y psicológico que una
            persona asocia con determinados síntomas y conflictos en sus relaciones, ya sea de
            pareja, familiares, amigos, laborales, entre otros.
          </p>
          <p>
            Parte de una mirada integrativa: además de observar qué te está ocurriendo, busca
            profundizar cuáles son las experiencias, emociones, creencias y aprendizajes
            inconscientes que se están repitiendo, generando estrés y un mal vivir.
          </p>
          <p>
            Desde esta perspectiva, aquello que hoy experimentas puede convertirse en una puerta
            de entrada para conocerte con mayor profundidad.
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
  "¿Tu cuerpo te habla mediante síntomas?",
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
          Cuando algo se repite, nunca es casualidad. Detrás siempre hay al menos una emoción no
          resuelta y una creencia limitante que opera en tu insconsicente, generando los mismos
          resultados una y otra vez
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
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Una nueva lectura de tu propia historia
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            En un encuentro privado por videollamada revisamos juntos tu historia para encontrar
            el conflicto que dio origen a lo que hoy vives. No trabajamos sobre el síntoma:
            trabajamos directamente en la causa.
          </p>
        </div>
        <div className="self-center">
          <h3 className="text-lg font-medium">Situaciones con las que se puede trabajar</h3>
          <ul className="mt-5 grid gap-4">
            {[
              "Ansiedad, depresión, angustia y estrés sostenido",
              "Malestares fisicos",
              "Relaciones tóxicas",
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
  { icon: Sparkles, title: "Claridad sobre lo que te ocurre", text: "Sales con una lectura ordenada y comprensible de tu propia historia." },
  { icon: Compass, title: "Un protocolo concreto", text: "Herramientas prácticas para aplicar desde el mismo día de la sesión." },
  { icon: Activity, title: "Otra relación con tu cuerpo", text: "Dejas de pelear con el síntoma y empiezas a escuchar lo que expresa." },
  { icon: Brain, title: "Decisiones más libres", text: "Al ver las creencias heredadas, dejas de decidir en piloto automático." },
  { icon: Repeat, title: "El ciclo deja de repetirse", text: "Reconoces la señal a tiempo y puedes elegir una respuesta distinta." },
  { icon: HeartHandshake, title: "Un espacio seguro y sin juicio", text: "Un encuentro confidencial donde puedes hablar con total libertad." },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-secondary/50 py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Lo que te llevas</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            No es solo una sesión. Es el inicio de una transformación
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
              Dentro de todo lo que he estudiado y aprendido, siento que es el método más efectivo y
              directo para transformar la forma en que pensamos. Gracias a las herramientas que
              aporta, se pueden generar cambios desde el minuto 1.
            </p>
            <p>
              Este aprendizaje me ha motivado a querer apoyar a personas que están viviendo en
              sufrimiento y mi sueño es poder participe de esa transformación que les permitirá
              vivir en plenitud.
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
        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-card shadow-soft">
          <img
            src={procesoAsset}
            alt="Proceso de la sesión en 5 pasos: identificación de la situación de estrés, sentimiento y emoción oculta, creencia limitante, reimpronta y seguimiento post sesión"
            width={1600}
            height={912}
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
            Sesión privada 1 a 1 por videollamada, con protocolo práctico incluido.
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
  { q: "¿Sirve para cualquier conflicto?", a: "Si. Sólo se necesita que el consultante esté consciente y bajo ninguna influencia que afecte su capacidad de responder a las preguntas que se hacen en la sesión." },
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
