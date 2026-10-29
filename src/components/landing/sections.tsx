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
  Play,
} from "lucide-react";
import { CtaButton } from "./cta-button";
import { SITE, youtubeId } from "@/lib/site-config";
import heroImage from "@/assets/hero-mujer.jpg";
import aboutAsset from "@/assets/mario-chaqueta.webp.asset.json";
import { Button } from "@/components/ui/button";
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
          <h1 className="mt-5 max-w-xl text-4xl leading-[1.12] font-semibold text-foreground sm:text-5xl lg:text-6xl">
            Descubre el origen emocional de lo que hoy limita tu vida
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/85">
            Para que puedas sanar cualquier tipo de conflicto, el primer gran paso que puedes dar, es encontrar la raíz emocional y biológica de aquello que te genera estrés, síntomas fisicos o patrones inconscientes que te hacen revivir esa situación TODOS LOS DÍAS y limitan tu verdadero potencial
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------- ¿Qué es la Biodescodificación? ------------------------ */

const aplicacion = [
  { t: "Exploración del caso", d: "conocer el síntoma o diagnóstico, su contexto y los antecedentes relevantes de la persona." },
  { t: "Identificación de vivencias significativas", d: "explorar acontecimientos, relaciones y experiencias emocionales que puedan tener relevancia para la persona." },
  { t: "Análisis emocional", d: "reconocer emociones, patrones de comportamiento y creencias que influyen en su manera de interpretar y afrontar determinadas situaciones." },
  { t: "Estudio desde las 5 Leyes Biológicas", d: "revisar, dentro de este modelo, el órgano o tejido implicado, la capa embrionaria, las fases descritas y el sentido biológico propuesto para el caso." },
  { t: "Integración y toma de conciencia", d: "relacionar los elementos explorados para favorecer una mayor comprensión de la propia historia y de las formas de afrontar los conflictos personales." },
];

export function QueEs() {
  return (
    <section id="que-es" className="border-y border-border bg-card py-20 sm:py-28">
      <div className="section-shell max-w-3xl">
          <p className="eyebrow">Definición</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            ¿Qué es la Biodescodificación?
          </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p className="font-display text-xl text-foreground">
            Biodescodificación: comprender el conflicto desde una nueva perspectiva
          </p>
          <p>
            La Biodescodificación es un entrenamiento mental que te permite comprender desde un nuevo paradigma la situación que te mantiene en estrés, ya sea una enfermedad, una relación o tu situación económica.
            <br /><br />
            Cada síntoma, diagnóstico o experiencia personal la exploramos a profundiad, relacionando tus emociones, tu historia y la manera en que has experimentado determinadas situaciones.
          </p>
          <p>
            A través de este enfoque, trabajamos directamente con el conflicto que te genera malestar y a partir de ahí, vamos desbloqueando lo que realmente está oculto y limitando tus resultados.
          </p>
          <p>
            Para compreder las enfermedades, el proceso incorpora el estudio del órgano o tejido implicado desde el marco de las 5 Leyes Biológicas. Es requisito contar con diagnóstico médico.
          </p>
        </div>

        <h3 className="mt-14 text-2xl font-semibold">¿Cómo se aplica la biodescodificación?</h3>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            El trabajo se desarrolla a partir de los casos, síntomas, diagnósticos o situaciones que cada persona presenta. Mediante un Protocolo de Biodescodificación, se busca comprender los distintos elementos que forman parte de su experiencia.
          </p>
          <p>Durante el proceso se trabaja en:</p>
          <ul className="space-y-4">
            {aplicacion.map((a) => (
              <li key={a.t} className="border-l-2 border-gold/60 pl-4">
                <span className="font-medium text-gold">{a.t}:</span> {a.d}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-14 text-2xl font-semibold">Un espacio de exploración y aprendizaje</h3>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Este proceso está dirigido a personas que desean profundizar en la comprensión de sus experiencias, así como a terapeutas, acompañantes y estudiantes interesados en conocer la aplicación de la biodescodificación al análisis de casos.
          </p>
          <p>
            El objetivo es ofrecer una metodología de exploración que permita abordar cada caso con estructura, profundidad y atención a sus particularidades, facilitando la identificación de patrones emocionales y nuevas perspectivas para afrontar la vida cotidiana.
          </p>
        </div>
        <p className="mt-10 text-sm leading-relaxed text-muted-foreground/80">
          La biodescodificación se plantea como un enfoque complementario de exploración personal y no sustituye el diagnóstico, el tratamiento ni el seguimiento de los profesionales de la salud.
        </p>
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
              Desde niño tuve una infancía que me dolio mucho. Crecí en un entorno en donde afortunadamente tuve todo lo material, pero emocionalmente fue dura . Vi violencia física y psicológica, alcoholismo,  situaciones de rechazo, de no sentirme suficiente para ser querido, lo que me impactó en todo mi crecimiento hasta casi los 30 años, que fue cuando comprendí que tenía muchos asuntos sin resolver con mi familia y eran para mi los causantes de mis mayores fracazos.
            </p>
            <p>
              Durante años estuve en distintos tratamientos. Probé nuevas terapias, pagué cursos de coaching y todo lo que encontré, hasta finalmente llegue a la biodescodificación en 2023, que fue lo que realmente me cambio la vida.
            </p>
            <p>
              Comencé a ver la vida a partir del perdón. A ver la vida con inocencia Fue gracias a esta experiencia que decidí llevar mi vida al siguiente nivel. Cambié mi identidad, me enfoqué en crecer, en expandirme y en tener la valentiía de decidir según mis propias reglas lo que quería en mi vida, y no en las malinterpretaciones que hice de mi pasado, el que sostuve por muchos años sin siquiera darme cuenta, limitando mi potencial. 


              <span>{"Fue este gran cambio de consciencia, lo que me llevó a decidir convertirme en biodescodificador y entregarme de lleno a apoyar a los demás en su propio proceso de sanación y crecimiento."}</span>
            </p>
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

/* ------------------------- ¿Cómo es una sesión? (video) ------------------------ */

export function VideoSection() {
  const id = youtubeId(SITE.youtubeEmbedUrl);
  const [reproduciendo, setReproduciendo] = useState(false);
  const [portada, setPortada] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
  );

  if (!id) return null;

  return (
    <section id="video" className="border-y border-border bg-card py-20 sm:py-28">
      <div className="section-shell max-w-4xl">
        <div className="max-w-2xl">
          <p className="eyebrow">¿Cómo es una sesión?</p>
          <h2 className="rule-gold mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Míralo antes de reservar
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Antes de reservar, mira cómo es el encuentro: un espacio privado por videollamada
            donde revisamos tu historia para encontrar el origen de lo que hoy te limita.
          </p>
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-lg border border-gold/30 shadow-elevated">
          {reproduciendo ? (
            <iframe
              className="absolute inset-0 size-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
              title="¿Cómo es una Sesión de Biodescodificación?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setReproduciendo(true)}
              aria-label="Reproducir el video: ¿Cómo es una Sesión de Biodescodificación?"
              className="group absolute inset-0 size-full cursor-pointer"
            >
              <img
                src={portada}
                alt="Portada del video: ¿Cómo es una Sesión de Biodescodificación?"
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                onError={() => setPortada(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span
                className="absolute inset-0 bg-background/45 transition-colors duration-300 group-hover:bg-background/25"
                aria-hidden="true"
              />
              <span
                className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform duration-300 group-hover:scale-110 sm:size-20"
                aria-hidden="true"
              >
                <Play className="size-6 fill-current sm:size-8" />
              </span>
            </button>
          )}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          ¿No se reproduce?{" "}
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline underline-offset-4 hover:opacity-80"
          >
            Míralo directo en YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
