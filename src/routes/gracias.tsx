import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, MessageCircle, Mail, CalendarCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";
import { SiteFooter } from "@/components/landing/site-footer";
import logoAsset from "@/assets/logo-mario-paredes.png.asset.json";

const title = "¡Bienvenido! Tu transformación empieza ahora | Mario Paredes";
const description =
  "Tu compra fue aprobada. Revisa tu correo, escríbeme por WhatsApp y prepárate para una sesión que puede cambiar tu mirada.";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://caminoalinconsciente-cl.lovable.app/gracias" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://caminoalinconsciente-cl.lovable.app/gracias" },
    ],
  }),
  component: Gracias,
});

const pasos = [
  {
    icon: Mail,
    title: "Revisa tu correo",
    text: "Hotmart te envió el comprobante de compra. Si no lo ves, revisa spam o promociones.",
  },
  {
    icon: MessageCircle,
    title: "Escríbeme por WhatsApp",
    text: "Envíame un mensaje para coordinar el día y la hora que mejor te acomode. Te respondo pronto.",
  },
  {
    icon: CalendarCheck,
    title: "Nos vemos en tu sesión",
    text: "Recibirás el enlace de la videollamada y una breve guía para que aproveches al máximo el encuentro.",
  },
];

function Gracias() {
  return (
    <>
      <header className="border-b border-border/60 bg-background">
        <div className="section-shell flex items-center justify-center py-8">
          <a href="/" className="inline-flex items-center" aria-label="Inicio">
            <img
              src={logoAsset.url}
              alt="Mario Paredes Biodescodificación"
              className="h-20 max-w-[24rem] object-contain"
              loading="eager"
            />
          </a>
        </div>
      </header>



      <main className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
        <div className="section-shell max-w-3xl text-center">
          <span className="inline-flex size-20 items-center justify-center rounded-full bg-gold/15 text-gold shadow-soft">
            <Sparkles className="size-10" aria-hidden="true" />
          </span>

          <h1 className="mt-8 text-3xl leading-tight font-medium tracking-tight sm:text-5xl">
            ¡Bienvenido a tu nueva mirada!
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Dar este paso ya dice mucho de ti. Ahora comienza un viaje hacia el encuentro contigo mismo: vas a
            descubrir que el cuerpo guarda historias y que sanarlas es posible.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground">
            <span className="size-2 rounded-full bg-sage" />
            Tu compra fue aprobada con éxito
          </div>

          <ol className="mt-14 grid gap-5 text-left sm:grid-cols-3">
            {pasos.map((paso, i) => (
              <li
                key={paso.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <paso.icon className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-4 text-sm font-medium">
                  {i + 1}. {paso.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{paso.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-primary px-10 text-base font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <MessageCircle className="size-5 text-primary-foreground" aria-hidden="true" />
              Agendar mi sesión por WhatsApp
            </a>
            <p className="max-w-md text-sm text-muted-foreground">
              Te escribo personalmente para coordinar. Si tienes dudas, cuéntame directamente.
            </p>
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}

export default Gracias;
