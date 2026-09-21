import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { Reveal } from "../Reveal";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../content";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

export const links = [
  { to: "/", label: "Início" },
  { to: "/para-voce", label: "Para você" },
  { to: "/para-empresas", label: "Para empresas" },
  { to: "/sistema-ori", label: "Sistema ORI" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
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
      className={`inline-flex max-w-full items-center justify-center whitespace-nowrap rounded-full px-6 sm:px-7 py-3.5 text-[13px] sm:text-[14px] tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`}
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
  as = "h2",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "ink" | "cream";
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const dark = tone === "ink";
  const Heading = as;
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-[760px]" : "max-w-[820px]"} ed-balanced ${className}`}
    >
      {kicker && (
        <Reveal>
          <span className={`ed-eyebrow ${dark ? "text-ed-ink/55" : "text-ed-forest"}`}>
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Heading
          className={`ed-title ${kicker ? "mt-5" : ""} ${dark ? "text-ed-ink" : "text-ed-cream"}`}
        >
          {title}
        </Heading>
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

/* ---------------- Organic editorial marks ---------------- */

export function EdAccent({
  children,
  circle = false,
}: {
  children: ReactNode;
  circle?: boolean;
}) {
  return (
    <span className="relative inline-block ed-accent px-1">
      {children}
      {circle && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-2 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)] overflow-visible text-ed-butter"
          viewBox="0 0 200 64"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            className="ed-hand-path"
            pathLength="1"
            d="M8 35C7 10 52 3 105 5c55 2 91 13 87 34-4 20-55 25-105 20C37 54 9 48 8 35Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}

export function EdLetterMark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex min-h-24 min-w-24 items-center justify-center">
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full rotate-[-4deg] text-ed-butter"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          className="ed-hand-path"
          pathLength="1"
          d="M11 52C9 25 27 10 52 9c26-1 43 16 40 43-3 25-21 40-46 38C20 88 12 74 11 52Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Seta estática, usada para indicar sequência (hero da home). */
export function EdStepArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-7 w-5 text-ed-olive ${className}`}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        className="ed-hand-path"
        pathLength="1"
        d="M22 4c7 11 8 22 2 35m0 0-7-8m7 8 8-8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EdFlowArrow({ direction }: { direction: "horizontal" | "vertical" }) {

  const horizontal = direction === "horizontal";
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 hidden text-ed-olive md:block ${
        horizontal
          ? "-right-7 top-20 h-10 w-8"
          : "-bottom-5 left-12 h-8 w-10"
      }`}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        className="ed-hand-path"
        pathLength="1"
        d={
          horizontal
            ? "M5 25c12-8 22-7 35-1m0 0-8-7m8 7-8 8"
            : "M22 4c7 11 8 22 2 35m0 0-7-8m7 8 8-8"
        }
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
          <p className="font-sans font-light text-ed-cream text-[20px] md:text-[24px] leading-relaxed">
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
  const navItem = (l: (typeof links)[number], mobile = false) => {
    const className = mobile
      ? "font-sans text-[20px] font-normal text-ed-ink"
      : `text-[13px] tracking-wide text-ed-ink transition-opacity ${pathname === l.to ? "opacity-100 underline underline-offset-8" : "opacity-60 hover:opacity-100"}`;

    return (
      <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-ed-cream/95 backdrop-blur border-b border-ed-ink/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center" aria-label="Casa Orí">
          <img
            src={logoAsset.url}
            alt="Casa Orí"
            width={44}
            height={44}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => navItem(l))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
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
          {links.map((l) => navItem(l, true))}
          <EdCTA href={WHATSAPP_URL} variant="ink" className="mt-2 self-start">
            Falar no WhatsApp
          </EdCTA>
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
