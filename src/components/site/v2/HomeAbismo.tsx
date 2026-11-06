import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Reveal } from "../Reveal";
import { HeroAbismo } from "./HeroAbismo";
import MeadowRiseFooter from "@/components/ui/meadow-rise-footer";
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
import instagramHandleImg from "@/assets/instagram-handle.png.asset.json";

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
            <div className="h-full rounded-[28px] border border-[#263120]/12 bg-[#F5F6F2] p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#263120]/60">Para você</span>
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
            <div className="h-full rounded-[28px] bg-[#263120] p-8 text-[#F0F1EB] md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#F0F1EB]/60">Para sua empresa</span>
              <ul className="mt-7 divide-y divide-[#F0F1EB]/10">
                {DORES_CNPJ.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-[#F0F1EB]/85 first:pt-0 last:pb-0">
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
    <section className="bg-[#263120] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
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
            <span aria-hidden="true" className={`${serifa} block text-[90px] leading-[0.6] text-[#A9B59B]`}>
              “
            </span>
            <blockquote className={`${serifa} mt-4 text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.35] text-[#F0F1EB]/90`}>
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
                className="group flex h-full flex-col rounded-[28px] border border-[#263120]/12 bg-[#F5F6F2] p-8 transition-colors duration-300 hover:border-[#263120]/40 hover:bg-white md:p-9"
              >
                <span className={`${serifa} text-[64px] leading-none text-[#263120]`}>{e.letra}</span>
                <span className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#263120]/55">{e.nome}</span>
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
    <section id="carol" className="relative overflow-hidden bg-[#1B2A1E] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      {/* névoa do abismo bem sutil ao fundo */}
      <img src="/img/abismo.webp" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] [filter:blur(2px)]" />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="mx-auto max-w-[460px] overflow-hidden rounded-t-full rounded-b-[28px]">
            <img
              src={carolPoltrona.url}
              alt="Carol Milhomens sentada em uma poltrona na Casa Orí"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover [filter:saturate(.88)_contrast(1.03)]"
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
    <article className="grid gap-2 border-b border-[#263120]/15 py-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
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

/** Caminhos possíveis — névoa; intro fixa à esquerda e lista à direita. */
function Servicos() {
  return (
    <section id="servicos" className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <Reveal>
            <Kicker>Serviços</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <Titulo className="mt-6">Caminhos possíveis</Titulo>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[30rem] text-[16px] font-light leading-relaxed text-[#263120]/75 md:text-[17px]">{V2_COPY.servicos.introducao}</p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pilula href="/para-voce">Para você</Pilula>
              <Pilula href="/para-empresas" tom="contorno">
                Para empresas
              </Pilula>
            </div>
          </Reveal>
        </div>
        <div className="space-y-12">
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#263120]/55">Para você</span>
            <div className="mt-3 border-t border-[#263120]/15">
              {SERV_CPF.map((s) => (
                <LinhaServico key={s.titulo} s={s} href="/para-voce" />
              ))}
            </div>
          </div>
          <div>
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#263120]/55">Para sua empresa</span>
            <div className="mt-3 border-t border-[#263120]/15">
              {SERV_CNPJ.map((s) => (
                <LinhaServico key={s.titulo} s={s} href="/para-empresas" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Podcast e Instagram — fundo branco, dois cartões lado a lado. */
function PodcastInstagram() {
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col rounded-[28px] border border-[#263120]/12 bg-[#F5F6F2] p-8 md:p-10">
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
          <div className="flex h-full flex-col rounded-[28px] border border-[#263120]/12 bg-[#F5F6F2] p-8 md:p-10">
            <Kicker>{V2_COPY.instagram.kicker}</Kicker>
            <h2 className={`${fonte} mt-6 text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.08] tracking-[-0.03em]`}>{V2_COPY.instagram.titulo}</h2>
            <p className="mt-5 text-[15.5px] font-light leading-relaxed text-[#263120]/70">{V2_COPY.instagram.texto}</p>
            <div className="mt-7 flex flex-1 flex-col justify-between rounded-[18px] border border-[#263120]/10 bg-white px-7 py-8">
              <img src={instagramHandleImg.url} alt={INSTAGRAM_HANDLE} className="w-full max-w-[300px]" />
              <div className="mt-6">
                <Pilula href={INSTAGRAM_URL}>{V2_COPY.instagram.cta}</Pilula>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- fechamento + rodapé (Meadow Rise, na cara do abismo) ---------------- */

// Céu enevoado com luz dourada e morros de musgo que escurecem até o verde do rodapé,
// com um cânion cortando o meio — como a foto do abismo.
const PALETA_ABISMO = {
  sky: ["#cfd3c4", "#e6e3d2"] as [string, string],
  haze: "#b9c0ad",
  glow: "#fff1cf",
  hills: [
    ["#9aa592", "#828e7c"],
    ["#7f8f6a", "#5f6e4c"],
    ["#667b4a", "#465a31"],
    ["#506736", "#334722"],
    ["#3c5229", "#243518"],
    ["#2a3d20", "#152112"],
  ] as [string, string][],
  ground: "#1B2A1E",
  ink: "#1B2A1E",
  sub: "#3a4636",
  pill: "#263120",
  pillInk: "#F0F1EB",
  text: "#F0F1EB",
  muted: "#a9b59b",
  line: "rgba(240, 241, 235, 0.14)",
};

function CartoesProximoPasso() {
  const blocos = [
    { ...CTA_FINAL.cpf, href: QUIZ_CPF_URL },
    { ...CTA_FINAL.cnpj, href: QUIZ_CNPJ_URL },
  ];
  return (
    <div className="mx-auto grid w-full max-w-[920px] gap-4 text-left md:grid-cols-2 md:gap-5">
      {blocos.map((c) => (
        <div key={c.titulo} className="flex h-full flex-col rounded-[24px] border border-white/60 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(27,42,30,.6)] backdrop-blur-md md:p-7">
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#263120]/60">{c.titulo}</span>
          <p className="mt-3 flex-1 text-[15px] font-light leading-relaxed text-[#1B2A1E]/85">{c.texto}</p>
          <div className="mt-5">
            <Pilula href={c.href}>{c.cta}</Pilula>
          </div>
        </div>
      ))}
    </div>
  );
}

function FechamentoAbismo() {
  return (
    <div id="contato">
      <MeadowRiseFooter
        name=""
        brandHref="/"
        logo={<img src={logoAsset.url} alt="Casa Orí" width={64} height={64} className="h-16 w-16 rounded-full object-cover ring-1 ring-[#F0F1EB]/25" />}
        heading="O próximo *passo*"
        subheading=""
        cta={null}
        heroExtra={<CartoesProximoPasso />}
        tagline="Terapia sistêmica, constelação familiar e desenvolvimento de equipes. Asa Sul, Brasília — e online para todo o Brasil."
        brandExtra={
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-5 block">
            <img src={instagramHandleImg.url} alt="@suacasa.ori" className="w-full max-w-[190px] opacity-90 invert" />
          </a>
        }
        newsletter={false}
        columns={[{ title: "Navegar", links: links.map((l) => ({ label: l.label, href: l.to })) }]}
        socialTitle="Contato"
        socials={[
          { icon: "instagram", href: INSTAGRAM_URL, label: "Instagram" },
          { icon: "whatsapp", href: WHATSAPP_URL, label: "WhatsApp" },
        ]}
        copyright="Casa Orí © 2026 · Carol Milhomens · @suacasa.ori"
        legal={[]}
        preset="meadow"
        palette={PALETA_ABISMO}
        seed={7}
        mist={0.85}
        drift={0.8}
        canyon={1.5}
        heroHeight="clamp(880px, 100svh, 960px)"
        height="1320px"
        maxWidth="1300px"
      />
    </div>
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
