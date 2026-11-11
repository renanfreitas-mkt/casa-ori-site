import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Reveal } from "../Reveal";
import { HeroAbismo } from "./HeroAbismo";
import { AbismoVento } from "@/components/ui/abismo-vento";
import { links } from "./ui";
import { resumo } from "./EditorialPages";
import {
  CAROL,
  CTA_FINAL,
  DEPOIMENTOS,
  DORES_CNPJ,
  DORES_CPF,
  EIXOS_HOME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PODCAST_EMBED_URL,
  PODCAST_URL,
  QUIZ_CNPJ_URL,
  QUIZ_CPF_URL,
  SERV_CNPJ,
  SERV_CPF,
  V2_COPY,
  WHATSAPP_URL,
  type Servico,
} from "../content";
import carolAnotacoes from "@/assets/carol-anotacoes.jpg.asset.json";
import carolPoltrona from "@/assets/carol-poltrona.jpeg.asset.json";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

/*
 * HOME NA ESTÉTICA DO ABISMO — aparece só quando a hero "Abismo" é escolhida no seletor (/?escolher&hero=abismo).
 * REGRA: os textos são exatamente os da home atual (content.ts / V2_COPY e os rótulos fixos da home).
 * Aqui só muda o layout: paleta oliva-escuro × névoa, Inter Tight + Instrument Serif, pílulas, fotos com tratamento.
 */

const C = {
  oliva: "#263120",
  olivaFundo: "#1B2A1E",
  nevoa: "#F0F1EB",
  salvia: "#A9B59B",
};

const fonte = "font-['Inter_Tight','Roboto',sans-serif]";
const serifa = "font-['Instrument_Serif',serif] font-normal italic";

/* ---------------- peças ---------------- */

function Kicker({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11.5px] font-medium uppercase tracking-[0.18em] ${claro ? "text-[#F0F1EB]/60" : "text-[#263120]/55"}`}>
      <span aria-hidden="true" className={`h-px w-8 ${claro ? "bg-[#F0F1EB]/40" : "bg-[#263120]/30"}`} />
      {children}
    </span>
  );
}

function Titulo({ children, claro = false, className = "" }: { children: ReactNode; claro?: boolean; className?: string }) {
  return (
    <h2 className={`${fonte} text-[clamp(2rem,4.6vw,3.6rem)] font-normal leading-[1.04] tracking-[-0.035em] ${claro ? "text-[#F0F1EB]" : "text-[#263120]"} ${className}`}>
      {children}
    </h2>
  );
}

function Pilula({
  href,
  children,
  tom = "escuro",
  seta = true,
}: {
  href: string;
  children: ReactNode;
  tom?: "escuro" | "claro" | "contorno" | "contornoClaro";
  seta?: boolean;
}) {
  const estilos = {
    escuro: "bg-[#263120] text-[#F0F1EB] hover:bg-[#1B2A1E]",
    claro: "bg-[#F0F1EB] text-[#263120] hover:bg-white",
    contorno: "border border-[#263120]/35 text-[#263120] hover:bg-[#263120] hover:text-[#F0F1EB]",
    contornoClaro: "border border-[#F0F1EB]/40 text-[#F0F1EB] hover:bg-[#F0F1EB] hover:text-[#263120]",
  } as const;
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
      className={`group inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 py-2.5 text-[13.5px] leading-snug transition-colors duration-300 ${estilos[tom]}`}
    >
      {children}
      {seta && <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.7} />}
    </a>
  );
}

/* ---------------- menu ---------------- */

function MenuAbismo() {
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

/* ---------------- seções ---------------- */

/** Talvez você reconheça — névoa, duas colunas; a de empresa em cartão oliva. */
function Reconhecimento() {
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <Kicker>Talvez você reconheça</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <Titulo className="mt-6 max-w-[16ch]">{V2_COPY.home.doresTitulo}</Titulo>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[28px] border border-[#26533C]/12 bg-[#F3F6F1] p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para você</span>
              <ul className="mt-7 divide-y divide-[#263120]/10">
                {DORES_CPF.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-[#263120]/80 first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            {/* verde-musgo: mais claro que o verde-noite da hero */}
            <div className="h-full rounded-[28px] bg-[#4F7A5C] p-8 text-white md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/70">Para sua empresa</span>
              <ul className="mt-7 divide-y divide-white/15">
                {DORES_CNPJ.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-white/90 first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Depoimento — foto à esquerda, citação grande em serifa itálica sobre oliva. */
function Depoimento() {
  const d = DEPOIMENTOS[0];
  return (
    <section className="bg-[#34604A] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={carolAnotacoes.url}
              alt="Carol Milhomens anotando em uma prancheta durante uma sessão"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover [filter:saturate(.85)_contrast(1.03)]"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure>
            <span aria-hidden="true" className={`${serifa} block text-[72px] leading-[0.6] text-[#C9DCC4]`}>
              “
            </span>
            <blockquote className={`${serifa} mt-4 text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.45] text-[#F0F1EB]/92`}>
              {d.texto}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className={`${serifa} grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/30 text-[20px] not-italic`}>
                {d.inicial}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#F0F1EB]/65">Bruna C.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/** Sistema ORI — névoa, três cartões com a letra em serifa itálica. */
function SistemaOri() {
  return (
    <section id="sistema-ori" className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <Kicker>Sistema ORI</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo className="mt-6">Sistema ORI</Titulo>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[34rem] text-[16px] font-light leading-relaxed text-[#263120]/75 md:text-[17px]">{V2_COPY.home.subtitulo}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {EIXOS_HOME.map((e, i) => (
            <Reveal key={e.letra} delay={i * 60} className="h-full">
              <Link
                to="/sistema-ori"
                className="group flex h-full flex-col rounded-[28px] border border-[#26533C]/15 bg-[#E6EEE2] p-8 transition-colors duration-300 hover:border-[#26533C]/45 hover:bg-[#DCE8D6] md:p-9"
              >
                <span className={`${serifa} text-[64px] leading-none text-[#26533C]`}>{e.letra}</span>
                <span className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]">{e.nome}</span>
                <h3 className={`${fonte} mt-6 text-[21px] font-normal leading-snug tracking-[-0.015em]`}>{e.titulo}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-[#263120]/70">{e.tensao}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-10">
            <Pilula href="/sistema-ori">Conhecer o Sistema ORI</Pilula>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Quem conduz — oliva, foto da Carol em arco e texto ao lado. */
function QuemConduz() {
  return (
    <section id="carol" className="relative overflow-hidden bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      {/* névoa do abismo bem sutil ao fundo */}
      <img src="/img/abismo.webp" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] [filter:blur(2px)]" />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          {/* foto quase quadrada, cantos arredondados; recorte centrado na Carol */}
          <div className="mx-auto max-w-[500px] overflow-hidden rounded-[32px]">
            <img
              src={carolPoltrona.url}
              alt="Carol Milhomens sentada em uma poltrona na Casa Orí"
              loading="lazy"
              className="aspect-[1/1] w-full object-cover object-[50%_62%] [filter:saturate(.88)_contrast(1.03)] md:aspect-[5/6]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Kicker claro>{CAROL.titulo}</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <Titulo claro className="mt-6">
              {CAROL.nome}
            </Titulo>
          </Reveal>
          {CAROL.paragrafos.map((p, i) => (
            <Reveal key={i} delay={140 + i * 60}>
              <p className={`max-w-[34rem] text-[16px] font-light leading-relaxed text-[#F0F1EB]/75 md:text-[17px] ${i === 0 ? "mt-8" : "mt-5"}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinhaServico({ s, href }: { s: Servico; href: string }) {
  return (
    <article className="grid gap-2 border-b border-[#263120]/12 py-6 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:gap-6">
      <h3 className={`${fonte} text-[21px] font-normal leading-snug tracking-[-0.015em] text-[#263120]`}>{s.titulo}</h3>
      <div>
        <p className="text-[15px] font-light leading-relaxed text-[#263120]/70">{resumo(s.ancora)}</p>
        <Link to={href} className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#263120] underline-offset-4 hover:underline">
          Explica mais
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}

/** Caminhos possíveis — névoa; intro em cima e as duas listas lado a lado
 *  (esquerda sempre "Para você", direita sempre "Para sua empresa", como nas dores). */
function Servicos() {
  return (
    <section id="servicos" className="bg-[#F3F6F1] px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <Kicker>Serviços</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo className="mt-6">Caminhos possíveis</Titulo>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[34rem] text-[16px] font-light leading-relaxed text-[#263120]/75 md:text-[17px]">{V2_COPY.servicos.introducao}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para você</span>
              <div className="mt-3 flex-1">
                {SERV_CPF.map((s) => (
                  <LinhaServico key={s.titulo} s={s} href="/para-voce" />
                ))}
              </div>
              <div className="mt-8">
                <Pilula href="/para-voce">Para você</Pilula>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para sua empresa</span>
              <div className="mt-3 flex-1">
                {SERV_CNPJ.map((s) => (
                  <LinhaServico key={s.titulo} s={s} href="/para-empresas" />
                ))}
              </div>
              <div className="mt-8">
                <Pilula href="/para-empresas" tom="contorno">
                  Para empresas
                </Pilula>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Podcast e Instagram — dois cartões lado a lado em verde claro. */
function PodcastInstagram() {
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

function IconeInstagram({ className = "" }: { className?: string }) {
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

function IconeWhatsapp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.2 19.8l1.1-3.9A8.2 8.2 0 1 1 8.4 18.9l-4.2.9Z" />
        <path d="M9.1 8.4c.2-.4.5-.5.8-.5h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.7l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.5-.2.7-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.6.6-2.9 0a8 8 0 0 1-3.7-3.7c-.6-1.3-.4-2.3.1-2.9Z" />
      </g>
    </svg>
  );
}

function CartoesProximoPasso() {
  const blocos = [
    { ...CTA_FINAL.cpf, href: QUIZ_CPF_URL },
    { ...CTA_FINAL.cnpj, href: QUIZ_CNPJ_URL },
  ];
  return (
    <div className="mx-auto grid w-full max-w-[920px] gap-4 text-left md:grid-cols-2 md:gap-5">
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

function FechamentoAbismo() {
  return (
    <footer id="contato" className="text-[#F0F1EB]">
      {/* O próximo passo: a mesma foto do topo, mais aberta, sob um véu verde transparente */}
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
            <CartoesProximoPasso />
          </div>
        </div>
      </section>

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

/* ---------------- página ---------------- */

export function HomeAbismo() {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-white ${fonte} antialiased`} style={{ color: C.oliva }}>
      <MenuAbismo />
      <main>
        <section id="inicio" className="relative z-10 bg-white">
          <HeroAbismo cpfHref={QUIZ_CPF_URL} cnpjHref={QUIZ_CNPJ_URL} telaCheia />
        </section>
        <Reconhecimento />
        <Depoimento />
        <SistemaOri />
        <QuemConduz />
        <Servicos />
        <PodcastInstagram />
      </main>
      <FechamentoAbismo />
    </div>
  );
}
