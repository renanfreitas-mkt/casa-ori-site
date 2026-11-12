import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Reveal } from "../Reveal";
import { AbismoVento } from "@/components/ui/abismo-vento";
import { links } from "./ui";
import {
  CTA_FINAL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PODCAST_EMBED_URL,
  PODCAST_URL,
  QUIZ_CNPJ_URL,
  QUIZ_CPF_URL,
  V2_COPY,
  WHATSAPP_URL,
} from "../content";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

/*
 * PEÇAS DA ESTÉTICA DO ABISMO — usadas pela home e por todas as outras páginas.
 * REGRA: textos exatamente como no site (content.ts); aqui só muda o layout.
 */
export const C = {
  oliva: "#263120",
  olivaFundo: "#1B2A1E",
  nevoa: "#F0F1EB",
  salvia: "#A9B59B",
};

export const fonte = "font-['Inter_Tight','Roboto',sans-serif]";
export const serifa = "font-['Instrument_Serif',serif] font-normal italic";

/* ---------------- peças ---------------- */

export function Kicker({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] ${claro ? "text-[#F0F1EB]/60" : "text-[#263120]/55"}`}>
      <span aria-hidden="true" className={`h-px w-8 ${claro ? "bg-[#F0F1EB]/40" : "bg-[#263120]/30"}`} />
      {children}
    </span>
  );
}

export function Titulo({ children, claro = false, className = "" }: { children: ReactNode; claro?: boolean; className?: string }) {
  return (
    <h2 className={`${fonte} text-[clamp(2rem,4.6vw,3.6rem)] font-normal leading-[1.04] tracking-[-0.035em] ${claro ? "text-[#F0F1EB]" : "text-[#263120]"} ${className}`}>
      {children}
    </h2>
  );
}

export function Pilula({
  href,
  children,
  tom = "escuro",
  seta = true,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  tom?: "escuro" | "claro" | "contorno" | "contornoClaro";
  seta?: boolean;
  /** com onClick (e sem href) vira botão — ex.: abrir o quiz em janela */
  onClick?: () => void;
}) {
  const estilos = {
    escuro: "bg-[#263120] text-[#F0F1EB] hover:bg-[#1B2A1E]",
    claro: "bg-[#F0F1EB] text-[#263120] hover:bg-white",
    contorno: "border border-[#263120]/35 text-[#263120] hover:bg-[#263120] hover:text-[#F0F1EB]",
    contornoClaro: "border border-[#F0F1EB]/40 text-[#F0F1EB] hover:bg-[#F0F1EB] hover:text-[#263120]",
  } as const;
  const cls = `group inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 py-2.5 text-left text-[13.5px] leading-snug transition-colors duration-300 ${estilos[tom]}`;
  const conteudo = (
    <>
      {children}
      {seta && <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.7} />}
    </>
  );
  if (!href) {
    return (
      <button type="button" onClick={onClick} className={`${cls} cursor-pointer`}>
        {conteudo}
      </button>
    );
  }
  const externo = href.startsWith("http");
  return (
    <a href={href} target={externo ? "_blank" : undefined} rel={externo ? "noopener noreferrer" : undefined} className={cls}>
      {conteudo}
    </a>
  );
}

/* ---------------- menu ---------------- */

export function MenuAbismo() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // transparente sobre a foto; ganha fundo oliva ao rolar a página
  useEffect(() => {
    const on = () => setRolou(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const solido = rolou || aberto;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${fonte} transition-colors duration-500 ${
        solido ? "bg-[#1B2A1E]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-10 md:h-20 lg:px-14">
        <Link to="/" className="flex items-center" aria-label="Casa Orí">
          <img src={logoAsset.url} alt="Casa Orí" width={44} height={44} className="h-10 w-10 rounded-full object-cover ring-1 ring-[#F0F1EB]/25 md:h-11 md:w-11" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13.5px] text-[#F0F1EB] transition-opacity ${pathname === l.to ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Pilula href={WHATSAPP_URL} tom="claro">
            Falar no WhatsApp
          </Pilula>
        </div>

        <button
          type="button"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
          className="-mr-2 p-2 text-[#F0F1EB] lg:hidden"
        >
          {aberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {aberto && (
        <div className="flex flex-col gap-5 border-t border-[#F0F1EB]/10 bg-[#1B2A1E] px-6 py-8 lg:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setAberto(false)} className="text-[20px] text-[#F0F1EB]">
              {l.label}
            </Link>
          ))}
          <div className="mt-2">
            <Pilula href={WHATSAPP_URL} tom="claro">
              Falar no WhatsApp
            </Pilula>
          </div>
        </div>
      )}
    </header>
  );
}

/** Podcast e Instagram — dois cartões lado a lado em verde claro. */
export function PodcastInstagram() {
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-[#E6EEE2] p-8 md:p-10">
            <Kicker>{V2_COPY.podcast.kicker}</Kicker>
            <h2 className={`${fonte} mt-6 text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.08] tracking-[-0.03em]`}>{V2_COPY.podcast.titulo}</h2>
            <p className="mt-5 text-[15.5px] font-light leading-relaxed text-[#263120]/70">{V2_COPY.podcast.texto}</p>
            <div className="mt-7 overflow-hidden rounded-[18px]">
              <iframe
                title="Podcast da Casa Orí no Spotify"
                src={PODCAST_EMBED_URL}
                width="100%"
                height="232"
                loading="lazy"
                style={{ border: 0 }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
            <div className="mt-7">
              <Pilula href={PODCAST_URL} tom="contorno">
                {V2_COPY.podcast.cta}
              </Pilula>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-[#E6EEE2] p-8 md:p-10">
            <Kicker>{V2_COPY.instagram.kicker}</Kicker>
            <h2 className={`${fonte} mt-6 text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.08] tracking-[-0.03em]`}>{V2_COPY.instagram.titulo}</h2>
            <p className="mt-5 text-[15.5px] font-light leading-relaxed text-[#263120]/70">{V2_COPY.instagram.texto}</p>
            <div className="mt-7 flex flex-1 flex-col justify-between gap-8 rounded-[18px] bg-[#26533C] px-7 py-8 text-[#F0F1EB]">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${fonte} flex items-center gap-3 text-[clamp(1.6rem,3vw,2.3rem)] font-light tracking-[-0.03em] transition-opacity hover:opacity-80`}
              >
                <IconeInstagram className="h-8 w-8 shrink-0 text-[#C9DCC4]" />
                {INSTAGRAM_HANDLE}
              </a>
              <div>
                <Pilula href={INSTAGRAM_URL} tom="claro">
                  {V2_COPY.instagram.cta}
                </Pilula>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- fechamento + rodapé (foto real do abismo sob véu verde) ---------------- */

export function IconeInstagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.8" />
        <circle cx="12" cy="12" r="3.9" />
        <circle cx="17.2" cy="6.8" r="0.4" fill="currentColor" />
      </g>
    </svg>
  );
}

export function IconeWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.2 19.8l1.1-3.9A8.2 8.2 0 1 1 8.4 18.9l-4.2.9Z" />
        <path d="M9.1 8.4c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.7l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.5-.2.7-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.6.6-2.9 0a8 8 0 0 1-3.7-3.7c-.6-1.3-.4-2.3.1-2.9Z" />
      </g>
    </svg>
  );
}

export type Passo = "ambos" | "cpf" | "cnpj";

export function CartoesProximoPasso({ so = "ambos" }: { so?: Passo }) {
  const blocos = [
    ...(so !== "cnpj" ? [{ ...CTA_FINAL.cpf, href: QUIZ_CPF_URL }] : []),
    ...(so !== "cpf" ? [{ ...CTA_FINAL.cnpj, href: QUIZ_CNPJ_URL }] : []),
  ];
  return (
    <div className={`mx-auto grid w-full gap-4 text-left md:gap-5 ${blocos.length > 1 ? "max-w-[920px] md:grid-cols-2" : "max-w-[560px]"}`}>
      {blocos.map((c, i) => (
        <Reveal key={c.titulo} delay={120 + i * 100} className="h-full">
          <div className="flex h-full flex-col rounded-[24px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_50px_-30px_rgba(27,42,30,.6)] backdrop-blur-md md:p-7">
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">{c.titulo}</span>
            <p className="mt-3 flex-1 text-[15px] font-light leading-relaxed text-[#1B2A1E]/85">{c.texto}</p>
            <div className="mt-5">
              <Pilula href={c.href}>{c.cta}</Pilula>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** "O próximo passo" sobre a foto do abismo + rodapé. passo={false}: só o rodapé
 *  (para as páginas que já terminam com um fechamento próprio). */
export function FechamentoAbismo({ passo = "ambos" }: { passo?: Passo | false }) {
  return (
    <footer id="contato" className="text-[#F0F1EB]">
      {/* O próximo passo: a mesma foto do topo, mais aberta, sob um véu verde transparente */}
      {passo && (
      <section className="relative isolate overflow-hidden px-5 py-28 sm:px-10 md:py-36 lg:px-14">
        <AbismoVento src="/img/abismo.webp" focus={[0.6, 0.3]} className="absolute inset-0 -z-20" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[#26533C]/30" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(27,42,30,.45)_0%,rgba(27,42,30,0)_30%,rgba(27,42,30,0)_70%,#1B2A1E_100%)]" />
        <div className="mx-auto max-w-[1300px] text-center">
          <Reveal>
            <h2 className={`${fonte} text-[clamp(2.4rem,6vw,4.6rem)] font-light leading-[1.02] tracking-[-0.04em]`}>
              O próximo <em className={serifa}>passo</em>
            </h2>
          </Reveal>
          <div className="mt-12 md:mt-14">
            <CartoesProximoPasso so={passo} />
          </div>
        </div>
      </section>
      )}

      {/* rodapé */}
      <div className="bg-[#1B2A1E] px-5 pb-10 pt-16 sm:px-10 md:pt-20 lg:px-14">
        <div className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-[1.1fr_1.9fr] md:gap-14">
          <div>
            <Link to="/" className="inline-block">
              <img src={logoAsset.url} alt="Casa Orí" width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-1 ring-[#F0F1EB]/25" />
            </Link>
            <p className="mt-6 max-w-[24rem] text-[15px] font-light leading-relaxed text-[#F0F1EB]/70">
              Terapia sistêmica, constelação familiar e desenvolvimento de equipes. Asa Sul, Brasília — e online para todo o Brasil.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${fonte} mt-5 inline-block text-[22px] font-light tracking-[-0.02em] text-[#F0F1EB]/90 transition-opacity hover:opacity-75`}
            >
              @suacasa.ori
            </a>
          </div>
          <nav aria-label="Rodapé" className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#a9b59b]">Navegar</h3>
              <ul className="mt-5 space-y-3">
                {links.map((l) => (
                  <li key={l.to}>
                    <a href={l.to} className="text-[15px] font-light text-[#F0F1EB]/85 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#a9b59b]">Contato</h3>
              <ul className="mt-5 flex gap-3">
                <li>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/20 transition-colors hover:bg-[#F0F1EB]/10">
                    <IconeInstagram className="h-[17px] w-[17px]" />
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/20 transition-colors hover:bg-[#F0F1EB]/10">
                    <IconeWhatsapp className="h-[17px] w-[17px]" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="mx-auto mt-16 max-w-[1300px] border-t border-[#F0F1EB]/14 pt-6">
          <p className="text-[13px] font-light text-[#F0F1EB]/55">Casa Orí © 2026 · Carol Milhomens · @suacasa.ori</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- moldura das páginas ---------------- */

/** Menu + conteúdo + fechamento, igual à home. */
export function LayoutAbismo({ children, passo = "ambos" }: { children: ReactNode; passo?: Passo | false }) {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-white ${fonte} antialiased`} style={{ color: C.oliva }}>
      <MenuAbismo />
      <main>{children}</main>
      <FechamentoAbismo passo={passo} />
    </div>
  );
}

/** Fundo da foto do abismo com véu verde (topo das páginas e painéis de fechamento). */
export function FundoAbismo({ focus = [0.5, 0.5], espelhar = false }: { focus?: [number, number]; espelhar?: boolean }) {
  return (
    <>
      <AbismoVento src="/img/abismo.webp" focus={focus} espelhar={espelhar} className="absolute inset-0 -z-20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,24,16,.78)_0%,rgba(14,24,16,.45)_50%,rgba(14,24,16,.2)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,24,16,.45)_0%,rgba(14,24,16,0)_30%,rgba(14,24,16,0)_60%,rgba(14,24,16,.7)_100%)]" />
    </>
  );
}

/** Topo das páginas internas: foto do abismo ao fundo, texto à esquerda e (opcional) foto arredondada à direita. */
export function HeroPagina({
  children,
  image,
  alt,
  focus = [0.5, 0.5],
  espelhar = false,
  extra,
}: {
  children: ReactNode;
  image?: string;
  alt?: string;
  focus?: [number, number];
  espelhar?: boolean;
  /** conteúdo largo abaixo do texto (ex.: cartões de vidro) */
  extra?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[60svh] flex-col justify-center overflow-hidden rounded-b-[2.5rem] bg-[#1B2A1E] px-5 pb-16 pt-32 text-[#F0F1EB] sm:px-10 md:rounded-b-[4rem] md:pb-24 md:pt-40 lg:px-14">
      <FundoAbismo focus={focus} espelhar={espelhar} />
      <div className={`mx-auto grid w-full max-w-[1300px] items-center gap-12 ${image ? "md:grid-cols-[1.15fr_0.85fr] md:gap-16" : ""}`}>
        <div>{children}</div>
        {image && (
          <Reveal delay={160}>
            <div className="mx-auto max-w-[460px] overflow-hidden rounded-[32px] shadow-[0_30px_80px_-40px_rgba(0,0,0,.7)]">
              <img src={image} alt={alt ?? ""} className="aspect-[4/5] w-full object-cover [filter:saturate(.9)_contrast(1.03)]" />
            </div>
          </Reveal>
        )}
      </div>
      {extra && <div className="mx-auto mt-14 w-full max-w-[1300px] md:mt-16">{extra}</div>}
    </section>
  );
}

/** Título grande da página (h1) no topo escuro. */
export function TituloPagina({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={`${fonte} text-[clamp(2.4rem,6.4vw,5rem)] font-normal leading-[1.02] tracking-[-0.04em] text-[#F0F1EB] [text-shadow:0_2px_30px_rgba(0,0,0,.25)] ${className}`}>
      {children}
    </h1>
  );
}

/** Frases que se alternam sozinhas (mesma lógica da página antiga), no topo escuro. */
export function FrasesRotativas({ frases }: { frases: readonly string[] }) {
  const [i, setI] = useState(0);
  const [visivel, setVisivel] = useState(true);
  const [tick, setTick] = useState(0);
  const ir = (passo: number) => {
    setVisivel(false);
    setTimeout(() => {
      setI((n) => (n + passo + frases.length) % frases.length);
      setVisivel(true);
    }, 350);
  };
  useEffect(() => {
    const id = setInterval(() => ir(1), 4500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frases.length, tick]);
  const manual = (passo: number) => {
    ir(passo);
    setTick((t) => t + 1);
  };
  const btn =
    "grid h-10 w-10 place-items-center rounded-full border border-[#F0F1EB]/35 text-[#F0F1EB] transition-colors hover:bg-[#F0F1EB] hover:text-[#263120]";
  return (
    <div>
      <h1
        aria-live="polite"
        className={`${fonte} min-h-[3.3em] max-w-[16ch] text-[clamp(2rem,4.6vw,3.8rem)] font-normal leading-[1.06] tracking-[-0.035em] text-[#F0F1EB] transition-all duration-300 ease-out [text-shadow:0_2px_30px_rgba(0,0,0,.25)]`}
        style={{ opacity: visivel ? 1 : 0, transform: visivel ? "none" : "translateY(8px)" }}
      >
        {frases[i]}
      </h1>
      <div className="mt-5 flex items-center gap-3">
        <button type="button" aria-label="Frase anterior" className={btn} onClick={() => manual(-1)}>
          ←
        </button>
        <button type="button" aria-label="Próxima frase" className={btn} onClick={() => manual(1)}>
          →
        </button>
        <span className="ml-2 text-[13px] tabular-nums text-[#F0F1EB]/60">
          {i + 1} / {frases.length}
        </span>
      </div>
    </div>
  );
}

/** Seção clara padrão (branca ou névoa). */
export function SecaoClara({ children, fundo = "branco", id }: { children: ReactNode; fundo?: "branco" | "nevoa"; id?: string }) {
  return (
    <section id={id} className={`${fundo === "nevoa" ? "bg-[#F3F6F1]" : "bg-white"} px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14`}>
      <div className="mx-auto max-w-[1300px]">{children}</div>
    </section>
  );
}

/** Depoimento em verde médio, como na home (foto opcional ao lado). */
export function DepoimentoAbismo({
  depoimento,
  image,
  alt,
  fotoDireita = false,
}: {
  depoimento: { texto: string; autor: string; inicial: string };
  image?: string;
  alt?: string;
  fotoDireita?: boolean;
}) {
  const citacao = (
    <Reveal delay={120}>
      <figure className={image ? "" : "mx-auto max-w-[52rem]"}>
        <span aria-hidden="true" className={`${serifa} block text-[72px] leading-[0.6] text-[#C9DCC4]`}>
          “
        </span>
        <blockquote className={`${serifa} mt-4 text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.45] text-[#F0F1EB]/92`}>{depoimento.texto}</blockquote>
        <figcaption className="mt-8 flex items-center gap-3">
          <span aria-hidden="true" className={`${serifa} grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/30 text-[20px] not-italic`}>
            {depoimento.inicial}
          </span>
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#F0F1EB]/65">{depoimento.autor}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
  return (
    <section className="bg-[#34604A] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      <div className={`mx-auto max-w-[1300px] ${image ? "grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16" : ""}`}>
        {image && (
          <Reveal className={fotoDireita ? "md:order-2" : ""}>
            <div className="overflow-hidden rounded-[28px]">
              <img src={image} alt={alt ?? ""} loading="lazy" className="aspect-[4/5] w-full object-cover [filter:saturate(.85)_contrast(1.03)]" />
            </div>
          </Reveal>
        )}
        {citacao}
      </div>
    </section>
  );
}

/** Depoimento da imersão (vários parágrafos) — cartão verde-noite. */
export function VualaAbismo({
  depoimento,
  image,
  alt,
  fotoDireita = false,
}: {
  depoimento: { paragrafos: string[]; autor: string; contexto: string; inicial: string };
  image?: string;
  alt?: string;
  fotoDireita?: boolean;
}) {
  return (
    <section className="bg-[#34604A] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {image && (
          <Reveal className={fotoDireita ? "md:order-2" : ""}>
            <div className="overflow-hidden rounded-[28px]">
              <img src={image} alt={alt ?? ""} loading="lazy" className="aspect-[4/5] max-h-[620px] w-full object-cover object-[center_30%] [filter:saturate(.85)_contrast(1.03)]" />
            </div>
          </Reveal>
        )}
        <Reveal delay={120}>
          <figure>
            <span aria-hidden="true" className={`${serifa} block text-[72px] leading-[0.6] text-[#C9DCC4]`}>
              “
            </span>
            <div className="mt-4 space-y-4">
              {depoimento.paragrafos.map((p, i) => (
                <p key={i} className="text-[16px] font-light leading-relaxed text-[#F0F1EB]/88 md:text-[17px]">
                  {p}
                </p>
              ))}
            </div>
            <figcaption className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className={`${serifa} grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#F0F1EB]/30 text-[20px] not-italic`}>
                {depoimento.inicial}
              </span>
              <span className="flex flex-col">
                <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#F0F1EB]/70">{depoimento.autor}</span>
                <span className="mt-1 text-[12px] font-light text-[#F0F1EB]/50">{depoimento.contexto}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/** Painel de fechamento sobre a foto do abismo (páginas que não usam "O próximo passo"). */
export function PainelAbismo({ children, focus = [0.6, 0.35] }: { children: ReactNode; focus?: [number, number] }) {
  return (
    <section className="relative isolate overflow-hidden px-5 py-24 text-[#F0F1EB] sm:px-10 md:py-32 lg:px-14">
      <AbismoVento src="/img/abismo.webp" focus={focus} className="absolute inset-0 -z-20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[#1B2A1E]/45" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(27,42,30,.35)_0%,rgba(27,42,30,0)_35%,rgba(27,42,30,0)_65%,#1B2A1E_100%)]" />
      <div className="mx-auto max-w-[1300px]">{children}</div>
    </section>
  );
}