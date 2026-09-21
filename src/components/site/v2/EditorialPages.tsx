import { memo, Fragment } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import {
  EdSection,
  EdHead,
  EdCard,
  EdCTA,
  EdAccent,
  EdLetterMark,
  EdStepArrow,
} from "./ui";
import carolLaptop from "@/assets/carol-laptop.jpeg.asset.json";
import casaOriEspaco from "@/assets/casa-ori-espaco.jpeg.asset.json";
import carolPoltrona from "@/assets/carol-poltrona.jpeg.asset.json";
// Carol_Home.jpeg — a foto da hero ("carol hero")
import carolHero from "@/assets/carol-hero.jpg.asset.json";
// quem_e_a_carol.jpeg — a foto da dobra "Quem conduz"
import carolConduzindo from "@/assets/carol-conduzindo.jpg.asset.json";
// foto da palestra usada ao lado do depoimento
import carolPalestra from "@/assets/carol-palestra.jpg.asset.json";
// cartas de constelação na mesa (página de serviços)
import cartasConstelacao from "@/assets/cartas-constelacao.jpg.asset.json";
// Carol anotando em prancheta
import carolAnotacoes from "@/assets/carol-anotacoes.jpg.asset.json";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";
import {
  DORES_CPF,
  DORES_CNPJ,
  EIXOS,
  EIXOS_HOME,
  DIFERENCIAIS,
  NA_VIDA,
  NAS_EMPRESAS,
  GANHOS,
  SERV_CPF,
  SERV_CNPJ,
  PILARES,
  PREMISSAS,
  NOME,
  CAROL,
  DEPOIMENTOS,
  CTA_FINAL,
  QUIZ_CPF_URL,
  QUIZ_CNPJ_URL,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  PODCAST_URL,
  PODCAST_EMBED_URL,
  V2_COPY,
  type Servico,
} from "../content";

/* ====================== BLOCOS COMPARTILHADOS ====================== */

function HomeTestimonial({
  texto,
  autor,
  inicial,
  tone = "light",
}: {
  texto: string;
  autor: string;
  inicial: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal className="h-full">
      <aside
        className={`home-testimonial ${dark ? "bg-ed-ink text-ed-cream" : "bg-ed-cream text-ed-ink"}`}
      >
        <span className={`ed-display text-[56px] leading-none ${dark ? "text-ed-butter" : "text-ed-olive"}`} aria-hidden="true">
          “
        </span>
        <p className={`mt-2 text-[16px] md:text-[18px] font-light leading-relaxed ${dark ? "text-ed-cream/85" : "text-ed-ink/75"}`}>
          {texto}
        </p>
        <div className="mt-7 flex items-center gap-3">
          <span
            aria-hidden="true"
            className={`flex h-10 w-10 items-center justify-center rounded-full border ed-display text-[18px] ${
              dark
                ? "border-ed-butter/50 bg-ed-butter/15 text-ed-butter"
                : "border-ed-olive/35 bg-ed-leaf/20 text-ed-forest"
            }`}
          >
            {inicial}
          </span>
          <span className={`ed-eyebrow ${dark ? "text-ed-sand" : "text-ed-ink/55"}`}>{autor}</span>
        </div>
      </aside>
    </Reveal>
  );
}

/** Depoimento com foto na mesma altura da caixa de texto (ou sem foto). */
function TestimonialEd({
  depoimento,
  autor,
  tone = "light",
  image,
  alt,
  compact = false,
}: {
  depoimento: { texto: string; autor: string; inicial: string };
  autor?: string;
  tone?: "light" | "dark";
  image?: string;
  alt?: string;
  compact?: boolean;
}) {
  const card = (
    <HomeTestimonial
      texto={depoimento.texto}
      autor={autor ?? depoimento.autor}
      inicial={depoimento.inicial}
      tone={tone}
    />
  );
  if (!image) {
    return <div className="testimonial-solo">{card}</div>;
  }
  return (
    <div className={`testimonial-row ${compact ? "testimonial-row-compact" : ""}`}>
      <Reveal delay={120} className="h-full">
        <img src={image} alt={alt ?? ""} loading="lazy" className="testimonial-photo" />
      </Reveal>
      {card}
    </div>
  );
}

/** Sequência "surge um problema…" com setas indicando o ciclo. */
function SequenciaProblema({ tone = "ink", staircase = false }: { tone?: "ink" | "cream"; staircase?: boolean }) {
  const dark = tone === "ink";
  if (staircase) {
    const linhas = V2_COPY.home.heroSequencia;
    return (
      <h1 className="problem-sequence problem-sequence-staircase relative z-30">
        {linhas.map((linha, i) => (
          <Fragment key={linha}>
            <span
              className={`stair-step ed-display text-[clamp(1.15rem,3.4vw,3rem)] leading-none ${
                dark ? "text-ed-ink" : "text-ed-cream"
              }`}
            >
              {linha}
            </span>
            {i < linhas.length - 1 && (
              <span
                className={`stair-arrow stair-arrow-drawn ${dark ? "text-ed-olive" : "text-ed-sand"}`}
                aria-hidden="true"
              />
            )}
          </Fragment>
        ))}
      </h1>
    );
  }

  return (
    <ol className="problem-sequence">
      {V2_COPY.home.heroSequencia.map((linha, i) => (
        <li key={linha}>
          <span className={`text-[15px] md:text-[16px] font-light leading-snug ${dark ? "text-ed-ink/75" : "text-ed-cream/80"}`}>
            {linha}
          </span>
          {i < V2_COPY.home.heroSequencia.length - 1 && (
            <EdStepArrow className="problem-sequence-arrow" />
          )}
        </li>
      ))}
    </ol>
  );
}

/** Abertura padrão das abas: sequência, destaque e fala de contexto. */
function AberturaEd({
  kicker,
  destaque,
  lead,
  cta,
  ctaHref,
  image,
  alt,
}: {
  kicker: string;
  destaque: string;
  lead: string;
  cta: string;
  ctaHref: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="page-flow page-section pt-20 md:pt-28 lg:pt-36">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div
        className={`page-section-inner grid gap-10 items-center ${image ? "md:grid-cols-[1.15fr_0.85fr] md:gap-16" : ""}`}
      >
        <div>
          <Reveal>
            <span className="ed-eyebrow text-ed-ink/55">{kicker}</span>
          </Reveal>
          <Reveal delay={60}>
            <div className="mt-6">
              <SequenciaProblema staircase />
            </div>
          </Reveal>
          <Reveal delay={180}>

            <p className="mt-7 max-w-[540px] text-[16px] md:text-[18px] font-light leading-relaxed text-ed-ink/70">
              {lead}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9">
              <EdCTA href={ctaHref} variant="ink">
                {cta}
              </EdCTA>
            </div>
          </Reveal>
        </div>
        {image && (
          <Reveal delay={160}>
            <img src={image} alt={alt ?? ""} className="page-photo page-photo-hero" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

function DoresEd({ titulo, itens, kicker }: { titulo: string; itens: readonly string[]; kicker: string }) {
  return (
    <section className="page-flow page-section">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <EdHead kicker={kicker} title={titulo} className="mb-10" />
        <ul className="grid gap-4 md:grid-cols-2">
          {itens.map((d, i) => (
            <Reveal key={d} delay={i * 50} as="li">
              <div className="h-full rounded-[22px] border border-ed-ink/12 bg-white px-6 py-5 text-[15px] font-light leading-relaxed text-ed-ink/75">
                {d}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Podcast e Instagram — presentes na home e na página Sobre. */
function PodcastInstagramEd() {
  return (
    <section className="page-flow page-section">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div className="page-section-inner grid gap-10 md:grid-cols-2 md:gap-14 items-start">
        <div>
          <Reveal>
            <span className="ed-eyebrow text-ed-ink/55">{V2_COPY.podcast.kicker}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="ed-title text-ed-ink mt-4">{V2_COPY.podcast.titulo}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70">
              {V2_COPY.podcast.texto}
            </p>
          </Reveal>
          <Reveal delay={200}>
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
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-6">
              <EdCTA href={PODCAST_URL} variant="outlineInk">
                {V2_COPY.podcast.cta}
              </EdCTA>
            </div>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <span className="ed-eyebrow text-ed-ink/55">{V2_COPY.instagram.kicker}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="ed-title text-ed-ink mt-4">{V2_COPY.instagram.titulo}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70">
              {V2_COPY.instagram.texto}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-7 rounded-[24px] border border-ed-ink/12 bg-white px-7 py-8">
              <p className="ed-display text-[28px] md:text-[34px] text-ed-forest">
                {INSTAGRAM_HANDLE}
              </p>
              <div className="mt-6">
                <EdCTA href={INSTAGRAM_URL} variant="ink">
                  {V2_COPY.instagram.cta}
                </EdCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================= HOME ============================= */

function resumo(texto: string, limite = 96) {
  if (texto.length <= limite) return texto;
  const corte = texto.slice(0, limite);
  return `${corte.slice(0, corte.lastIndexOf(" "))}…`;
}

function ServicoResumo({ s, href }: { s: Servico; href: string }) {
  return (
    <article className="home-service-row">
      <h3 className="ed-subtitle text-ed-ink">{s.titulo}</h3>
      <div>
        <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ed-ink/65">
          {resumo(s.ancora)}
        </p>
        <Link
          to={href}
          className="mt-2 inline-block ed-eyebrow text-ed-forest underline underline-offset-4"
        >
          Explica mais
        </Link>
      </div>
    </article>
  );
}

const HomeEdImpl = () => (
  <>
    {/* Abertura contínua: a fotografia atravessa a hero e as dores */}
    <div className="home-opening bg-ed-cream">
      <section id="inicio" className="home-flow home-anchor relative z-10 px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 lg:pt-36">
        <div className="home-hero-grid max-w-[1440px] mx-auto">
          <div className="home-hero-copy relative z-20 pb-12 md:pb-28">
            <Reveal>
              <span className="ed-eyebrow text-ed-ink/55">Casa Orí</span>
            </Reveal>
            <Reveal delay={60}>
              <div className="mt-6">
                <SequenciaProblema staircase />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-9 max-w-[490px] text-[16px] md:text-[18px] font-light leading-relaxed text-ed-ink/70">
                {V2_COPY.home.heroLinhas[0]}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="home-hero-actions mt-9 flex flex-col sm:flex-row flex-wrap items-start gap-3">
                <EdCTA href={QUIZ_CPF_URL} variant="ink">
                  {V2_COPY.home.ctaCpf}
                </EdCTA>
                <EdCTA href={QUIZ_CNPJ_URL} variant="outlineInk">
                  {V2_COPY.home.ctaCnpj}
                </EdCTA>
              </div>
            </Reveal>
          </div>
          <Reveal delay={180} className="home-hero-media">
            <div className="home-hero-photo-wrap">
              <img
                src={carolHero.url}
                alt="Carol Milhomens, terapeuta sistêmica e fundadora da Casa Orí"
                className="home-hero-photo"
              />
              <span className="home-photo-caption ed-eyebrow text-ed-cream/80">
                Escuta · direção · movimento
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reconhecimento em composição aberta, conectado à fotografia da hero */}
      <section className="home-flow home-method-bridge relative bg-ed-cream px-5 sm:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.78fr_1.22fr] gap-10">
          <div className="relative z-20 py-16 md:py-24 lg:py-28">
            <Reveal>
              <span className="ed-eyebrow text-ed-ink/55">Talvez você reconheça</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="home-method-title ed-title text-ed-ink mt-5">
                {V2_COPY.home.doresTitulo}
              </h2>
            </Reveal>
          </div>
          <div aria-hidden="true" />
        </div>
        <div className="home-recognition-grid relative z-20 max-w-[1180px] mx-auto grid md:grid-cols-[0.9fr_1.1fr] items-stretch">
          <Reveal className="h-full">
            <div className="home-person-list pt-8 pb-8 md:pt-14 md:pb-12 md:pr-14">
              <span className="ed-eyebrow text-ed-forest">Para você</span>
              <ul className="mt-6 space-y-4">
                {DORES_CPF.map((d) => (
                  <li key={d} className="home-line-item text-[15px] font-light leading-relaxed text-ed-ink/75">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="home-company-list text-ed-cream">
              <span className="ed-eyebrow text-ed-sand">Para sua empresa</span>
              <ul className="mt-6 space-y-4">
                {DORES_CNPJ.map((d) => (
                  <li key={d} className="home-line-item home-line-item-light text-[15px] font-light leading-relaxed text-ed-cream/85">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>

    <section className="home-flow home-compact-proof relative bg-ed-butter px-5 sm:px-8 lg:px-12 py-8 md:py-10">
      <div className="max-w-[900px] mx-auto">
        <TestimonialEd
          depoimento={DEPOIMENTOS[0]}
          autor="Bruna C."
          image={carolAnotacoes.url}
          alt="Carol Milhomens anotando em uma prancheta durante uma sessão"
          compact
        />
      </div>
    </section>

    {/* Sistema ORI resumo — bloco clicável */}
    <EdSection id="sistema-ori" bg="cream" className="home-flow home-anchor home-ori-fold">
      <EdHead
        kicker="Sistema ORI"
        title={<>Sistema <EdAccent>ORI</EdAccent></>}
        lead={V2_COPY.home.subtitulo}
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {EIXOS_HOME.map((e, i) => (
          <Reveal key={e.letra} delay={i * 40} className="relative h-full">
            <Link to="/sistema-ori" className="block h-full group">
              <EdCard className="h-full transition-colors duration-300 group-hover:border-ed-olive/50">
                <span className="ed-display text-ed-olive text-[44px] block">
                  <EdLetterMark>{e.letra}</EdLetterMark>
                </span>
                <span className="ed-eyebrow text-ed-ink/50 mt-2 block">{e.nome}</span>
                <h3 className="mt-6 ed-subtitle text-ed-ink">{e.titulo}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                  {e.tensao}
                </p>
              </EdCard>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={180}>
        <div className="mt-10">
          <EdCTA href="/sistema-ori" variant="ink">Conhecer o Sistema ORI</EdCTA>
        </div>
      </Reveal>
    </EdSection>

    {/* Quem conduz: dobra orgânica com fotos da Carol */}
    <section id="carol" className="home-flow home-carol relative overflow-hidden bg-ed-cream px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="home-carol-wash" aria-hidden="true" />
      <div className="relative max-w-[1180px] mx-auto grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 items-center">
        <Reveal className="home-carol-media">
          <div className="home-carol-photo-wrap">
            <img
              src={carolPoltrona.url}
              alt="Carol Milhomens sentada em uma poltrona na Casa Orí"
              className="home-carol-photo"
            />
          </div>
        </Reveal>
        <div className="home-carol-copy">
          <Reveal>
            <span className="ed-eyebrow text-ed-ink/55">{CAROL.titulo}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="ed-display text-ed-ink mt-6 text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.06]">
              {CAROL.nome}
            </h2>
          </Reveal>
          {CAROL.paragrafos.map((p, i) => (
            <Reveal key={i} delay={140 + i * 60}>
              <p className="mt-6 max-w-[520px] text-[15px] md:text-[17px] font-light leading-relaxed text-ed-ink/70">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Serviços em percurso editorial, sem grade de cartões */}
    <section id="servicos" className="home-flow home-anchor home-services-flow relative bg-ed-cream px-5 sm:px-8 lg:px-12 py-14 md:py-20 overflow-hidden">
      <div className="home-services-wash" aria-hidden="true" />
      <div className="home-services-shell relative max-w-[1180px] mx-auto">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20 items-start">
          <div className="home-services-intro md:sticky md:top-32">
            <EdHead kicker="Serviços" title="Caminhos possíveis" lead={V2_COPY.servicos.introducao} />
            <Reveal delay={200}>
              <div className="home-services-actions mt-8 flex flex-col sm:flex-row md:flex-col xl:flex-row items-start gap-3">
                <EdCTA href="/para-voce" variant="ink">Para você</EdCTA>
                <EdCTA href="/para-empresas" variant="outlineInk">Para empresas</EdCTA>
              </div>
            </Reveal>
          </div>
          <div className="home-services-list space-y-10 md:pt-16">
            <div>
              <span className="ed-eyebrow text-ed-ink/50">Para você</span>
              <div className="mt-5 border-t border-ed-ink/20">
                {SERV_CPF.map((service) => (
                  <ServicoResumo key={service.titulo} s={service} href="/para-voce" />
                ))}
              </div>
            </div>
            <div>
              <span className="ed-eyebrow text-ed-forest">Para sua empresa</span>
              <div className="mt-5 border-t border-ed-ink/20">
                {SERV_CNPJ.map((service) => (
                  <ServicoResumo key={service.titulo} s={service} href="/para-empresas" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="home-services-proof mt-14 md:mt-20">
          <TestimonialEd
            depoimento={DEPOIMENTOS[1]}
            tone="dark"
            image={carolPalestra.url}
            alt="Carol Milhomens palestrando para um grupo"
          />
        </div>
      </div>
    </section>

    <PodcastInstagramEd />

    <div id="contato" className="home-flow home-anchor">
      <CtaFinalEd />
    </div>
  </>
);
export const HomeEd = memo(HomeEdImpl);


/* ============================= CTA FINAL ============================= */

function CtaFinalEd({ only }: { only?: "cpf" | "cnpj" }) {
  const blocos =
    only === "cpf"
      ? [{ ...CTA_FINAL.cpf, href: QUIZ_CPF_URL }]
      : only === "cnpj"
        ? [{ ...CTA_FINAL.cnpj, href: QUIZ_CNPJ_URL }]
        : [
            { ...CTA_FINAL.cpf, href: QUIZ_CPF_URL },
            { ...CTA_FINAL.cnpj, href: QUIZ_CNPJ_URL },
          ];
  return (
    <EdSection bg="ink">
      <EdHead
        tone="cream"
        align="center"
        title="O próximo passo"
        className="mb-12"
      />
      <div className={`grid gap-6 ${blocos.length > 1 ? "md:grid-cols-2" : "max-w-[620px] mx-auto"}`}>
        {blocos.map((c, i) => (
          <Reveal key={c.titulo} delay={i * 100}>
            <div className="border border-ed-cream/25 rounded-[28px] p-8 md:p-10 h-full flex flex-col">
              <span className="ed-eyebrow text-ed-sand">{c.titulo}</span>
              <p className="mt-5 text-[16px] font-light leading-relaxed text-ed-cream/80 flex-1">
                {c.texto}
              </p>
              <div className="mt-8">
                <EdCTA href={c.href} variant="butter">
                  {c.cta}
                </EdCTA>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </EdSection>
  );
}


/* ============================= SERVIÇOS ============================= */

function ServicoEd({ s, i }: { s: Servico; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <article className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-6 md:gap-12 py-10 md:py-12 border-t border-ed-ink/12">
        <div>
          <h3 className="ed-display text-[26px] md:text-[28px] text-ed-ink md:whitespace-nowrap">
            {s.titulo}
          </h3>
          <p className="mt-4 text-[13px] leading-relaxed text-ed-ink/55">{s.formato}</p>
        </div>
        <div>
          <p className="font-sans text-[18px] md:text-[20px] font-normal italic leading-relaxed text-ed-forest">
            {s.ancora}
          </p>
          {s.paragrafos.map((p) => (
            <p
              key={p}
              className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70"
            >
              {p}
            </p>
          ))}
          <div className="mt-7">
            <EdCTA href={WHATSAPP_URL} variant="outlineInk">
              Quero saber mais
            </EdCTA>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

const ServicosPessoasEdImpl = () => (
  <>
    <AberturaEd
      kicker="Para você"
      destaque={V2_COPY.paraVoce.destaque}
      lead={V2_COPY.paraVoce.lead}
      cta={V2_COPY.contato.cpfCta}
      ctaHref={QUIZ_CPF_URL}
      image={cartasConstelacao.url}
      alt="Cartas de constelação familiar sobre a mesa durante um atendimento da Casa Orí"
    />

    <DoresEd
      kicker="Talvez você reconheça"
      titulo={V2_COPY.paraVoce.doresTitulo}
      itens={DORES_CPF}
    />

    <section className="page-flow page-section">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div className="page-section-inner">
        <span className="ed-eyebrow text-ed-ink/50">Para você</span>
        <h2 className="mt-4 ed-title text-ed-ink max-w-[680px]">
          Processos no seu ritmo
        </h2>
        <div className="mt-8">
          {SERV_CPF.map((s, i) => (
            <ServicoEd key={s.titulo} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="page-flow page-section py-10 md:py-14">
      <div className="page-section-inner space-y-8">
        <TestimonialEd
          depoimento={DEPOIMENTOS[1]}
          tone="dark"
          image={casaOriEspaco.url}
          alt="Sala de atendimento da Casa Orí"
        />
        <TestimonialEd depoimento={DEPOIMENTOS[2]} />
      </div>
    </section>

    <div className="page-flow">
      <CtaFinalEd only="cpf" />
    </div>
  </>
);
export const ServicosPessoasEd = memo(ServicosPessoasEdImpl);

const ServicosEmpresasEdImpl = () => (
  <>
    <AberturaEd
      kicker="Para empresas"
      destaque={V2_COPY.paraEmpresas.destaque}
      lead={V2_COPY.paraEmpresas.lead}
      cta={V2_COPY.contato.cnpjCta}
      ctaHref={QUIZ_CNPJ_URL}
      image={carolConduzindo.url}
      alt="Carol Milhomens conduzindo um encontro com uma equipe"
    />

    <DoresEd
      kicker="Talvez a sua empresa reconheça"
      titulo={V2_COPY.paraEmpresas.doresTitulo}
      itens={DORES_CNPJ}
    />

    <section className="page-flow page-section">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <span className="ed-eyebrow text-ed-forest">Para sua empresa</span>
        <h2 className="mt-4 ed-title text-ed-ink max-w-[560px]">
          Formatos de trabalho
        </h2>
        <div className="mt-8">
          {SERV_CNPJ.map((s, i) => (
            <ServicoEd key={s.titulo} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>

    <div className="page-flow">
      <CtaFinalEd only="cnpj" />
    </div>
  </>
);
export const ServicosEmpresasEd = memo(ServicosEmpresasEdImpl);


/* ============================= SISTEMA ORI ============================= */

function ListaEd({ titulo, itens }: { titulo: string; itens: string[] }) {
  return (
    <div>
      <h3 className="ed-subtitle text-ed-ink">{titulo}</h3>
      <ul className="mt-6 space-y-3">
        {itens.map((t) => (
          <li
            key={t}
            className="flex gap-3 text-[15px] font-light leading-relaxed text-ed-ink/70"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ed-olive/50 shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const OriEdImpl = () => (
  <>
    <section className="page-flow page-section pt-12 md:pt-16">
      <div className="page-section-inner">
        <EdHead
          as="h1"
          kicker="Sistema ORI"
          title={<>Sistema <EdAccent circle>ORI</EdAccent></>}
          lead="A mesma estrutura conduz processos individuais e trabalhos dentro de empresas — o que muda é o contexto, não o método."
          className="mb-14"
        />
        <div className="space-y-6">
          {EIXOS.map((e, i) => (
            <Reveal key={e.letra} delay={i * 90} className="relative">
              <EdCard className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12">
                <div>
                  <span className="ed-display text-ed-olive block text-[48px] md:text-[58px]">
                    <EdLetterMark>{e.letra}</EdLetterMark>
                  </span>
                  <span className="ed-eyebrow text-ed-ink/50 block mt-2">{e.nome}</span>
                </div>
                <div>
                  <h3 className="ed-subtitle text-ed-ink max-w-[32ch]">
                    {e.titulo}
                  </h3>
                  <p className="mt-4 text-[16px] font-light text-ed-ink/70">{e.tensao}</p>
                  <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70">
                    {e.texto}
                  </p>
                  <p className="mt-7 border-l-2 border-ed-butter pl-5 font-sans italic font-light text-[17px] md:text-[19px] leading-relaxed text-ed-forest">
                    {e.citacao}
                  </p>
                </div>
              </EdCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>

    <section className="page-flow page-section py-10 md:py-14">
      <div className="page-section-inner">
        <div className="page-panel page-panel-ink">
          <EdHead
            tone="cream"
            title="O diferencial do Sistema ORI"
            className="mb-12"
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d} delay={i * 80} as="li">
                <div className="border border-ed-cream/25 rounded-2xl px-7 py-6 text-ed-cream/85 font-light leading-relaxed text-[16px] h-full">
                  {d}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="page-flow page-section">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <EdHead title="Onde o Sistema ORI se aplica" className="mb-12" />
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ListaEd titulo="Na vida pessoal" itens={NA_VIDA} />
          <ListaEd titulo="Nas empresas" itens={NAS_EMPRESAS} />
        </div>
      </div>
    </section>

    <section className="page-flow page-section">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div className="page-section-inner grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <EdHead title="O que você ganha no caminho" />
        <ol className="space-y-4">
          {GANHOS.map((g, i) => (
            <Reveal key={g} delay={i * 70} as="li">
              <div className="flex gap-5 items-baseline border-b border-ed-ink/10 pb-4">
                <span className="ed-display text-ed-olive/60 text-[24px] w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-light leading-relaxed text-ed-ink/75">
                  {g}
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <section className="page-flow page-section py-10 md:py-14">
      <div className="page-section-inner">
        <TestimonialEd depoimento={DEPOIMENTOS[3]} />
      </div>
    </section>

    <section className="page-flow page-section pb-16 md:pb-24">
      <div className="page-section-inner">
        <div className="page-panel page-panel-ink text-center">
          <EdHead
            tone="cream"
            align="center"
            title="A estrutura está aqui"
            lead="O Sistema ORI organiza o caminho — e quem caminha é você."
          />
          <Reveal delay={200}>
            <div className="mt-8 flex justify-center">
              <EdCTA href={QUIZ_CPF_URL} variant="butter">
                {V2_COPY.ori.cta}
              </EdCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

  </>
);
export const OriEd = memo(OriEdImpl);

/* ============================= SOBRE ============================= */

const SobreEdImpl = () => (
  <>
    <section className="page-flow page-section nome-section pt-20 md:pt-28">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <img src={logoAsset.url} alt="" aria-hidden="true" className="nome-symbol" />
      <div className="page-section-inner">
        <EdHead as="h1" title="Casa Orí" className="mb-6" />
        <Reveal>
          <div role="img" aria-label="Casa Orí" className="nome-assinatura mb-10" />
        </Reveal>
        <div className="nome-equation">
          <Reveal>
            <div className="nome-card">
              <span className="ed-display uppercase text-[40px] md:text-[52px] text-ed-forest">
                {NOME[0].palavra}
              </span>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {NOME[0].texto}
              </p>
            </div>
          </Reveal>
          <span aria-hidden="true" className="nome-operator">+</span>
          <Reveal delay={90}>
            <div className="nome-card">
              <span className="ed-display uppercase text-[40px] md:text-[52px] text-ed-forest">
                {NOME[1].palavra}
              </span>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {NOME[1].texto}
              </p>
            </div>
          </Reveal>
          <span aria-hidden="true" className="nome-operator">=</span>
          <Reveal delay={180}>
            <div className="nome-card nome-card-result">
              <p className="text-[16px] md:text-[18px] font-light leading-relaxed text-ed-cream/90">
                {NOME[2].texto}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="page-flow page-section">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <EdHead kicker="Como é o método" title="Quatro pilares" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-2">
          {PILARES.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 80}>
              <EdCard className="h-full">
                <h3 className="ed-subtitle text-ed-ink">{p.titulo}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                  {p.texto}
                </p>
              </EdCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="page-flow page-section">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div className="page-section-inner grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16 items-center">
        <div>
          <EdHead
            kicker={CAROL.titulo}
            title={CAROL.nome}
            lead={V2_COPY.sobre.especialidade}
          />
          {V2_COPY.sobre.bio.map((p, i) => (
            <Reveal key={p} delay={200 + i * 80}>
              <p className="mt-6 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70 max-w-[560px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <img
            src={carolLaptop.url}
            alt="Carol Milhomens trabalhando na Casa Orí"
            className="page-photo"
          />
        </Reveal>
      </div>
    </section>

    <section className="page-flow page-section py-10 md:py-14">
      <div className="page-section-inner">
        <TestimonialEd depoimento={DEPOIMENTOS[2]} tone="dark" />
      </div>
    </section>

    <section className="page-flow page-section">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <EdHead
          kicker="Antes de começar"
          title="Antes de começar"
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PREMISSAS.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 60}>
              <div className="border-t border-ed-ink/12 pt-6 h-full">
                <h3 className="ed-subtitle text-ed-ink">{p.titulo}</h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-ed-ink/70">
                  {p.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <PodcastInstagramEd />

    <section className="page-flow page-section pb-16 md:pb-24">
      <div className="page-section-inner">
        <div className="page-panel page-panel-ink text-center">
          <Reveal>
            <span className="ed-eyebrow text-ed-sand">O desconforto da mudança</span>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-[22ch] ed-display uppercase text-ed-butter text-[clamp(1.8rem,4.2vw,3.2rem)] leading-[1.1]">
              {V2_COPY.sobre.fechamento}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <EdCTA href={WHATSAPP_URL} variant="butter">
                {V2_COPY.sobre.cta}
              </EdCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

  </>
);
export const SobreEd = memo(SobreEdImpl);

/* ============================= CONTATO ============================= */

const ContatoEdImpl = () => (
  <>
    <section className="page-flow page-section pt-12 md:pt-16">
      <div className="page-wash page-wash-sand" aria-hidden="true" />
      <div className="page-section-inner">
        <EdHead
          as="h1"
          kicker="Contato"
          title={V2_COPY.contato.titulo}
          lead={V2_COPY.contato.texto}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
          <Reveal delay={160}>
            <div className="h-full flex flex-col rounded-[28px] border border-ed-ink/12 bg-white p-8">
              <span className="ed-eyebrow text-ed-ink/55">Para você</span>
              <p className="mt-5 flex-1 text-[16px] font-light leading-relaxed text-ed-ink/70">
                {V2_COPY.contato.cpfTexto}
              </p>
              <div className="mt-8">
                <EdCTA href={QUIZ_CPF_URL} variant="ink">
                  {V2_COPY.contato.cpfCta}
                </EdCTA>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="h-full flex flex-col rounded-[28px] border border-ed-ink/12 bg-white p-8">
              <span className="ed-eyebrow text-ed-forest">Para sua empresa</span>
              <p className="mt-5 flex-1 text-[16px] font-light leading-relaxed text-ed-ink/70">
                {V2_COPY.contato.cnpjTexto}
              </p>
              <div className="mt-8">
                <EdCTA href={QUIZ_CNPJ_URL} variant="ink">
                  {V2_COPY.contato.cnpjCta}
                </EdCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>


    <section className="page-flow page-section pb-16 md:pb-24">
      <div className="page-wash page-wash-leaf" aria-hidden="true" />
      <div className="page-section-inner">
        <div className="page-panel page-panel-ink grid gap-10 md:grid-cols-[0.85fr_1.15fr] items-center">
          <div>
            <EdHead
              tone="cream"
              title="Fale com a Carol"
              lead={V2_COPY.contato.whatsapp}
              className="ed-pretty max-w-[520px]"
            />
            <Reveal delay={200}>
              <div className="mt-8">
                <EdCTA href={WHATSAPP_URL} variant="butter">
                  Falar no WhatsApp
                </EdCTA>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="ed-display text-ed-butter text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] uppercase">
              Profundidade para compreender. Direção para seguir.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);
export const ContatoEd = memo(ContatoEdImpl);
