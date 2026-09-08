import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Instagram, MessageCircle, ArrowLeft } from "lucide-react";
import { Reveal } from "../Reveal";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../content";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

export const links = [
  { to: "/v2", label: "Início" },
  { to: "/v2/servicos", label: "Serviços" },
  { to: "/v2/sistema-ori", label: "Sistema ORI" },
  { to: "/v2/sobre", label: "Sobre" },
  { to: "/v2/contato", label: "Contato" },
] as const;

/* ---------------- CTA ---------------- */

type EdVariant = "ink" | "butter" | "outlineInk" | "outlineCream";

export function EdCTA({
  children,
  href,
  variant = "ink",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: EdVariant;
  className?: string;
}) {
  const styles: Record<EdVariant, string> = {
    ink: "bg-ed-ink text-ed-cream border border-ed-ink hover:bg-ed-olive",
    butter: "bg-ed-butter text-ed-ink border border-ed-butter hover:bg-ed-cream",
    outlineInk: "border border-ed-ink/40 text-ed-ink hover:bg-ed-ink hover:text-ed-cream",
    outlineCream:
      "border border-ed-cream/50 text-ed-cream hover:bg-ed-cream hover:text-ed-ink",
  };
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[14px] tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------------- Section ---------------- */

type EdBg = "cream" | "butter" | "ink" | "olive" | "white";

const edBg: Record<EdBg, string> = {
  cream: "bg-ed-cream text-ed-ink",
  butter: "bg-ed-butter text-ed-ink",
  ink: "bg-ed-ink text-ed-cream",
  olive: "bg-ed-olive text-ed-cream",
  white: "bg-white text-ed-ink",
};

export function EdSection({
  children,
  bg = "cream",
  id,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  bg?: EdBg;
  id?: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${edBg[bg]} px-5 sm:px-8 lg:px-12 py-16 md:py-24 ${className}`}
    >
      <div className={`${wide ? "max-w-[1440px]" : "max-w-[1180px]"} mx-auto`}>
        {children}
      </div>
    </section>
  );
}

export function EdHead({
  kicker,
  title,
  lead,
  tone = "ink",
  align = "left",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "ink" | "cream";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "ink";
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-[760px]" : "max-w-[820px]"} ${className}`}
    >
      {kicker && (
        <Reveal>
          <span className={`ed-eyebrow ${dark ? "text-ed-ink/55" : "text-ed-forest"}`}>
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`ed-title ${kicker ? "mt-5" : ""} ${dark ? "text-ed-ink" : "text-ed-cream"}`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p
            className={`mt-6 text-[16px] md:text-[17px] font-light leading-relaxed ${
              dark ? "text-ed-ink/70" : "text-ed-cream/80"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function EdCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white border border-ed-ink/10 rounded-[28px] p-8 md:p-10 shadow-[0_18px_40px_-32px_rgba(34,38,27,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

export function EdQuote({
  image,
  quote,
  autor,
  inicial,
}: {
  image: string;
  quote: string;
  autor?: string;
  inicial?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ed-ink/75" />
      <div className="relative px-6 py-24 md:py-36 max-w-[860px] mx-auto text-center">
        <Reveal>
          <p className="ed-display text-ed-cream text-[26px] md:text-[40px] leading-[1.15]">
            “{quote}”
          </p>
        </Reveal>
        {autor && (
          <Reveal delay={140}>
            <div className="mt-8 flex items-center justify-center gap-3">
              {inicial && (
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-ed-sand/20 border border-ed-sand/40 text-ed-sand ed-display text-[18px] flex items-center justify-center"
                >
                  {inicial}
                </span>
              )}
              <p className="ed-eyebrow text-ed-sand">{autor}</p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------------- Nav ---------------- */

export function EdNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-ed-cream/95 backdrop-blur border-b border-ed-ink/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link to="/v2" className="flex items-center" aria-label="Casa Orí">
          <img
            src={logoAsset.url}
            alt="Casa Orí"
            width={44}
            height={44}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] tracking-wide text-ed-ink transition-opacity ${
                pathname === l.to ? "opacity-100 underline underline-offset-8" : "opacity-60 hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-ed-ink/60 hover:text-ed-ink transition-colors"
          >
            <ArrowLeft size={14} /> Tema atual
          </Link>
          <EdCTA href={WHATSAPP_URL} variant="ink" className="px-5 py-2.5 text-[13px]">
            Falar no WhatsApp
          </EdCTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ed-ink p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ed-cream border-t border-ed-ink/10 px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="ed-display text-[26px] text-ed-ink"
            >
              {l.label}
            </Link>
          ))}
          <EdCTA href={WHATSAPP_URL} variant="ink" className="mt-2 self-start">
            Falar no WhatsApp
          </EdCTA>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-ed-ink/60"
          >
            <ArrowLeft size={14} /> Voltar ao tema atual
          </Link>
        </div>
      )}
    </header>
  );
}

/* ---------------- Footer ---------------- */

export function EdFooter() {
  return (
    <footer className="bg-ed-ink text-ed-cream px-5 sm:px-8 lg:px-12 pt-16 pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid gap-10 md:grid-cols-4 text-[14px] font-light">
          <div className="md:col-span-2">
            <img
              src={logoAsset.url}
              alt="Casa Orí"
              width={120}
              height={120}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
            <p className="mt-4 text-ed-cream/70 max-w-[320px] leading-relaxed">
              Terapia sistêmica, constelação familiar e desenvolvimento de equipes.
              Asa Sul, Brasília — e online para todo o Brasil.
            </p>
          </div>
          <div>
            <p className="ed-eyebrow text-ed-cream/50">Navegar</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ed-cream/75 hover:text-ed-butter">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ed-eyebrow text-ed-cream/50">Contato</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-ed-butter"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-ed-butter"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-ed-cream/60 hover:text-ed-butter"
            >
              <ArrowLeft size={14} /> Voltar ao tema atual
            </Link>
          </div>
        </div>

        <img
          src={logoAsset.url}
          alt="Casa Orí"
          width={160}
          height={160}
          className="w-24 h-24 md:w-32 md:h-32 mt-14 rounded-full object-cover opacity-90"
        />
        <p className="mt-6 text-[12px] tracking-wide text-ed-cream/50">
          Casa Orí © 2026 · Carol Milhomens · @suacasa.ori
        </p>
      </div>
    </footer>
  );
}
