import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Instagram, MessageCircle, ArrowLeft, ArrowDown, RotateCcw } from "lucide-react";
import { Reveal } from "../Reveal";
import {
  INSTAGRAM_URL,
  WHATSAPP_URL,
  CTA_PRINCIPAL,
  LABEL_CPF,
  LABEL_CNPJ,
  CICLO,
  AVALIACAO,
  CTA_FINAL,
  QUIZ_CPF_URL,
  QUIZ_CNPJ_URL,
} from "./copy";

export const links = [
  { to: "/v2", label: "Início" },
  { to: "/v2/servicos", label: "Serviços" },
  { to: "/v2/sistema-ori", label: "Sistema ORI" },
  { to: "/v2/sobre", label: "Sobre" },
  { to: "/v2/contato", label: "Contato" },
] as const;

/* ---------------- CTA ---------------- */

type EdVariant = "areia" | "areiaDark" | "green" | "outlineAreia" | "outlineGreen";

export function EdCTA({
  children,
  href,
  variant = "green",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: EdVariant;
  className?: string;
}) {
  const styles: Record<EdVariant, string> = {
    areia: "bg-ed-areia text-ed-green border border-ed-areia hover:bg-ed-light",
    areiaDark: "bg-ed-areia text-ed-dark border border-ed-areia hover:bg-ed-light",
    green: "bg-ed-green text-ed-white border border-ed-green hover:bg-ed-dark",
    outlineAreia:
      "border border-ed-areia text-ed-areia hover:bg-ed-areia hover:text-ed-green",
    outlineGreen:
      "border border-ed-green/50 text-ed-green hover:bg-ed-green hover:text-ed-white",
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

type EdBg = "dark" | "green" | "soft" | "white";

const edBg: Record<EdBg, string> = {
  dark: "bg-ed-dark text-ed-white",
  green: "bg-ed-green text-ed-white",
  soft: "bg-ed-soft text-ed-green",
  white: "bg-ed-white text-ed-text",
};

export function EdSection({
  children,
  bg = "white",
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
      className={`${edBg[bg]} px-5 sm:px-8 lg:px-12 py-16 md:py-24 scroll-mt-20 ${className}`}
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
  tone = "dark",
  align = "left",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-[760px]" : "max-w-[820px]"} ${className}`}
    >
      {kicker && (
        <Reveal>
          <span className={`ed-eyebrow ${light ? "text-ed-areia" : "text-ed-green/60"}`}>
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`ed-title ${kicker ? "mt-5" : ""} ${light ? "text-ed-white" : "text-ed-green"}`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p
            className={`mt-6 text-[16px] md:text-[17px] font-light leading-relaxed ${
              light ? "text-ed-white/85" : "text-ed-green/80"
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
      className={`bg-ed-white border border-ed-green/12 rounded-[28px] p-8 md:p-10 shadow-[0_18px_40px_-32px_rgba(33,93,27,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

export function EdLabel({
  children,
  tone = "areia",
}: {
  children: ReactNode;
  tone?: "areia" | "green";
}) {
  return (
    <span
      className={`ed-eyebrow uppercase ${tone === "areia" ? "text-ed-areia" : "text-ed-green/60"}`}
    >
      {children}
    </span>
  );
}

export function EdRule({ tone = "areia", width = 60 }: { tone?: "areia" | "soft"; width?: number }) {
  return (
    <span
      style={{ width }}
      className={`block h-px mx-auto ${tone === "areia" ? "bg-ed-areia" : "bg-ed-soft"}`}
    />
  );
}

export function EdQuote({
  image,
  titulo,
  quote,
  autor,
}: {
  image: string;
  titulo?: string;
  quote: string;
  autor?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ed-dark/80" />
      <div className="relative px-6 py-24 md:py-36 max-w-[860px] mx-auto text-center">
        {titulo && (
          <Reveal>
            <p className="ed-eyebrow text-ed-areia mb-8">{titulo}</p>
          </Reveal>
        )}
        <Reveal>
          <p className="ed-display text-ed-white text-[26px] md:text-[40px] leading-[1.15]">
            “{quote}”
          </p>
        </Reveal>
        {autor && (
          <Reveal delay={140}>
            <p className="mt-8 ed-eyebrow text-ed-areia">{autor}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------------- Lista de dores / serviços ---------------- */

export function EdListaTracos({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-7 space-y-5">
      {itens.map((t) => (
        <li
          key={t}
          className="border-l-[3px] border-ed-areia pl-4 text-[15px] font-light leading-relaxed text-ed-white/90"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------------- Ciclo do hero ---------------- */

export function CicloHero() {
  return (
    <div className="mx-auto max-w-[320px]">
      <div className="flex flex-col items-center">
        {CICLO.map((etapa, i) => (
          <div key={etapa} className="w-full flex flex-col items-center">
            <div className="w-full rounded-2xl border border-ed-areia/30 bg-white/8 px-5 py-3 text-center text-[14px] font-light text-ed-white">
              {etapa}
            </div>
            {i < CICLO.length - 1 && (
              <ArrowDown
                aria-hidden
                size={18}
                className="my-2 text-ed-areia motion-safe:animate-[ed-pulse_2s_ease-in-out_infinite]"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            )}
          </div>
        ))}
        <div
          aria-hidden
          className="mt-5 w-full flex items-center gap-2 text-ed-areia motion-safe:animate-[ed-pulse_2s_ease-in-out_infinite]"
        >
          <RotateCcw size={16} />
          <span className="flex-1 h-px bg-ed-areia/50" />
          <span className="text-[12px] font-light tracking-wide">e recomeça</span>
        </div>
      </div>
    </div>
  );
}


/* ---------------- Blocos reutilizáveis ---------------- */

export function AvaliacaoEd({ id = "avaliacao" }: { id?: string }) {
  return (
    <EdSection bg="green" id={id}>
      <div className="text-center max-w-[720px] mx-auto">
        <Reveal>
          <h2 className="ed-title text-ed-white">{AVALIACAO.titulo}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-[17px] font-light text-ed-white/90">
            {AVALIACAO.linha1}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 text-[17px] font-light text-ed-white/90">
            {AVALIACAO.linha2}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-10 md:gap-[60px] md:grid-cols-2">
        <Reveal>
          <div className="h-full">
            <EdLabel>{LABEL_CPF}</EdLabel>
            {/* TODO: Carol vai definir o texto de introdução da coluna CPF na seção Avaliação Inicial */}
            <p className="mt-5 text-[16px] font-light leading-relaxed text-ed-white/90">
              {AVALIACAO.cpf}
            </p>
            <div className="mt-7">
              <EdCTA href={QUIZ_CPF_URL} variant="areia">
                {AVALIACAO.botao}
              </EdCTA>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full md:border-l md:border-ed-areia/20 md:pl-[60px]">
            <EdLabel>{LABEL_CNPJ}</EdLabel>
            <p className="mt-5 text-[16px] font-light leading-relaxed text-ed-white/90">
              {AVALIACAO.cnpj1}
            </p>
            <p className="mt-3 text-[16px] font-light leading-relaxed text-ed-white/90">
              {AVALIACAO.cnpj2}
            </p>
            <div className="mt-7">
              <EdCTA href={QUIZ_CNPJ_URL} variant="areia">
                {AVALIACAO.botao}
              </EdCTA>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 text-center">
        <EdRule />
        <p className="mt-6 text-[15px] font-light italic text-ed-white/70 max-w-[520px] mx-auto">
          {AVALIACAO.fechamento}
        </p>
      </div>
    </EdSection>
  );
}

export function CtaFinalEd() {
  return (
    <EdSection bg="green">
      <div className="text-center max-w-[720px] mx-auto">
        <Reveal>
          <h2 className="ed-title text-ed-white">{CTA_FINAL.titulo}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 text-[16px] font-light text-ed-white/85">
            {CTA_FINAL.texto}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-8">
            <EdCTA href="#avaliacao" variant="areia">
              {CTA_FINAL.botao}
            </EdCTA>
          </div>
        </Reveal>

        <div className="my-12">
          <EdRule tone="soft" width={40} />
        </div>

        <Reveal>
          <p className="text-[18px] text-ed-areia">{CTA_FINAL.altTitulo}</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 text-[15px] font-light text-ed-white/85">
            {CTA_FINAL.altTexto}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-7">
            <EdCTA href="#avaliacao" variant="outlineAreia">
              {CTA_FINAL.altBotao}
            </EdCTA>
          </div>
        </Reveal>
      </div>
    </EdSection>
  );
}

/* ---------------- Nav ---------------- */

export function EdNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 bg-ed-green/97 backdrop-blur border-b border-ed-areia/20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link to="/v2" className="ed-display text-ed-white text-[26px] md:text-[30px]">
          Casa Orí
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] tracking-wide text-ed-white transition-opacity ${
                pathname === l.to
                  ? "opacity-100 underline underline-offset-8 decoration-ed-areia"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-ed-white/60 hover:text-ed-areia transition-colors"
          >
            <ArrowLeft size={14} /> Tema atual
          </Link>
          <EdCTA href="#avaliacao" variant="outlineAreia" className="px-5 py-2.5 text-[13px]">
            {CTA_PRINCIPAL}
          </EdCTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ed-white p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ed-green border-t border-ed-areia/20 px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="ed-display text-[26px] text-ed-white"
            >
              {l.label}
            </Link>
          ))}
          <EdCTA
            href="#avaliacao"
            variant="outlineAreia"
            className="mt-2 self-start"
          >
            {CTA_PRINCIPAL}
          </EdCTA>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-ed-white/60"
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
    <footer className="bg-ed-dark text-ed-soft px-5 sm:px-8 lg:px-12 pt-16 pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid gap-10 md:grid-cols-4 text-[14px] font-light">
          <div className="md:col-span-2">
            <p className="ed-eyebrow text-ed-areia">Casa Orí</p>
            <p className="mt-4 text-ed-soft/80 max-w-[320px] leading-relaxed">
              Terapia sistêmica, constelação familiar e desenvolvimento de equipes.
              Asa Sul, Brasília — e online para todo o Brasil.
            </p>
          </div>
          <div>
            <p className="ed-eyebrow text-ed-soft/60">Navegar</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ed-soft/85 hover:text-ed-areia">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ed-eyebrow text-ed-soft/60">Contato</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-ed-areia"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-ed-areia"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-1.5 text-[13px] text-ed-soft/70 hover:text-ed-areia"
            >
              <ArrowLeft size={14} /> Voltar ao tema atual
            </Link>
          </div>
        </div>

        <p className="ed-wordmark text-ed-areia mt-14 select-none">Casa Orí</p>
        <p className="mt-6 text-[12px] tracking-wide text-ed-soft/60">
          Casa Orí © 2026 · Carol Milhomens · @suacasa.ori
        </p>
      </div>
    </footer>
  );
}
