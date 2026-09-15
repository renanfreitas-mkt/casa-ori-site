import { memo } from "react";
import { Reveal } from "../Reveal";
import {
  EdSection,
  EdHead,
  EdCard,
  EdQuote,
  EdCTA,
  EdAccent,
  EdLetterMark,
  EdFlowArrow,
} from "./ui";
import edRoom from "@/assets/ed-room.jpg";
import edQuoteImg from "@/assets/ed-quote.jpg";
import edTeam from "@/assets/ed-team.jpg";
// Carol_Home.jpeg — a foto da hero ("carol hero")
import carolHero from "@/assets/carol-hero.jpg.asset.json";
// quem_e_a_carol.jpeg — a foto da dobra "Quem conduz"
import carolConduzindo from "@/assets/carol-conduzindo.jpg.asset.json";
import {
  DORES_CPF,
  DORES_CNPJ,
  EIXOS,
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
  V2_COPY,
  type Servico,
} from "../content";

/* ============================= HOME ============================= */

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
    <Reveal>
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

const HomeEdImpl = () => (
  <>
    {/* Abertura contínua: a fotografia atravessa a hero e o método */}
    <div className="home-opening bg-ed-cream">
      <section id="inicio" className="home-flow home-anchor relative z-10 px-5 sm:px-8 lg:px-12 pt-12 md:pt-16">
        <div className="home-hero-grid max-w-[1440px] mx-auto">
          <div className="home-hero-copy relative z-20 pb-12 md:pb-28">
            <Reveal>
              <span className="ed-eyebrow text-ed-ink/55">Casa Orí</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="ed-display ed-balanced text-ed-ink mt-7 text-[clamp(2.3rem,5.2vw,4.7rem)] leading-[1.02]">
                MAS O QUE AINDA ESTÁ <EdAccent>invisível?</EdAccent>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-10 max-w-[490px] text-[16px] md:text-[18px] font-light leading-relaxed text-ed-ink/70">
                {V2_COPY.home.subtitulo}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="home-hero-actions mt-9 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 items-start">
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

      <section className="home-flow home-method-bridge relative bg-ed-ink text-ed-cream px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-[0.78fr_1.22fr] gap-10">
          <div className="relative z-20 py-16 md:py-24 lg:py-32">
            <Reveal>
              <h2 className="home-method-title ed-title text-ed-cream">
                {V2_COPY.home.metodoTitulo}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 max-w-[430px] text-[17px] md:text-[19px] font-light leading-relaxed text-ed-cream/80">
                {V2_COPY.home.metodoTexto}
              </p>
            </Reveal>
          </div>
          <div aria-hidden="true" />
        </div>
      </section>
    </div>

    {/* Dores segmentadas em campos conectados */}
    <section className="home-flow home-recognition relative bg-ed-cream px-5 sm:px-8 lg:px-12 pt-20 pb-14 md:pt-24 md:pb-20 overflow-hidden">
      <div className="home-recognition-field" aria-hidden="true" />
      <div className="relative max-w-[1180px] mx-auto">
        <EdHead
          kicker="Talvez você reconheça"
          title="Onde isso costuma aparecer."
          className="mb-14 md:mb-20"
        />
        <div className="home-recognition-grid grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24 items-stretch">
          <Reveal>
            <div className="home-personal-list md:pt-4">
              <span className="ed-eyebrow text-ed-ink/50">Para você</span>
              <ul className="mt-7 space-y-4">
                {DORES_CPF.map((d) => (
                  <li key={d} className="home-line-item text-[15px] font-light leading-relaxed text-ed-ink/75">
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <EdCTA href={QUIZ_CPF_URL} variant="ink">Quero entender minha situação</EdCTA>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="home-company-list text-ed-cream">
              <span className="ed-eyebrow text-ed-sand">Para sua empresa</span>
              <ul className="mt-7 space-y-4">
                {DORES_CNPJ.map((d) => (
                  <li key={d} className="home-line-item home-line-item-light text-[15px] font-light leading-relaxed text-ed-cream/85">
                    {d}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <EdCTA href={QUIZ_CNPJ_URL} variant="butter">Quero entender minha empresa</EdCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="home-flow relative bg-ed-butter px-5 sm:px-8 lg:px-12 py-14 md:py-20">
      <div className="max-w-[1180px] mx-auto grid md:grid-cols-[0.72fr_1.28fr] gap-10 items-center">
        <Reveal>
          <img src={edQuoteImg} alt="" loading="lazy" className="home-quote-image" />
        </Reveal>
        <HomeTestimonial {...DEPOIMENTOS[0]} autor="Bruna C." />
      </div>
    </section>

    {/* Sistema ORI resumo */}
    <EdSection id="sistema-ori" bg="cream" className="home-flow home-anchor home-ori-fold">
      <EdHead
        kicker="Sistema ORI"
        title={<>Sistema <EdAccent>ORI</EdAccent></>}
        lead={V2_COPY.home.subtitulo}
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 40} className="relative h-full">
            <EdCard className="h-full">
              <span className="ed-display text-ed-olive text-[64px] block">
                <EdLetterMark>{e.letra}</EdLetterMark>
              </span>
              <span className="ed-eyebrow text-ed-ink/50 mt-2 block">{e.nome}</span>
              <h3 className="mt-6 ed-subtitle text-ed-ink">{e.titulo}</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {e.tensao}
              </p>
            </EdCard>
            {i < EIXOS.length - 1 && <EdFlowArrow direction="horizontal" />}
          </Reveal>
        ))}
      </div>
    </EdSection>

    {/* Quem conduz: dobra orgânica com fotos da Carol */}
    <section id="carol" className="home-flow home-carol relative overflow-hidden bg-ed-cream px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="home-carol-wash" aria-hidden="true" />
      <div className="relative max-w-[1180px] mx-auto grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-16 items-center">
        <Reveal className="home-carol-media">
          <div className="home-carol-photo-wrap">
            <img
              src={carolConduzindo.url}
              alt="Carol Milhomens conduzindo um encontro com um grupo"
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
          <Reveal delay={280}>
            <p className="mt-8 text-[15px] font-light text-ed-ink/60">
              Uma escuta com <EdAccent>direção</EdAccent>
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8">
              <EdCTA href="/sobre" variant="outlineInk">Conhecer a Casa Orí</EdCTA>
            </div>
          </Reveal>
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
                <EdCTA href="/servicos" variant="ink">Ver todos os serviços</EdCTA>
                <EdCTA href={WHATSAPP_URL} variant="outlineInk">Falar no WhatsApp</EdCTA>
              </div>
            </Reveal>
          </div>
          <div className="home-services-list space-y-10 md:pt-16">
            <div>
              <span className="ed-eyebrow text-ed-ink/50">Para você</span>
              <div className="mt-5 border-t border-ed-ink/20">
                {SERV_CPF.map((service) => (
                  <article key={service.titulo} className="home-service-row">
                    <h3 className="ed-subtitle text-ed-ink">{service.titulo}</h3>
                    <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ed-ink/65">{service.ancora}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <span className="ed-eyebrow text-ed-forest">Para sua empresa</span>
              <div className="mt-5 border-t border-ed-ink/20">
                {SERV_CNPJ.map((service) => (
                  <article key={service.titulo} className="home-service-row">
                    <h3 className="ed-subtitle text-ed-ink">{service.titulo}</h3>
                    <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-ed-ink/65">{service.ancora}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="home-services-proof mt-14 md:mt-20 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-end">
          <HomeTestimonial {...DEPOIMENTOS[1]} tone="dark" />
          <Reveal delay={120}>
            <img src={edRoom} alt="Sala de atendimento da Casa Orí" loading="lazy" className="home-services-image" />
          </Reveal>
        </div>
      </div>
    </section>

    <div id="contato" className="home-flow home-anchor">
      <CtaFinalEd />
    </div>
  </>
);
export const HomeEd = memo(HomeEdImpl);

/* ============================= CTA FINAL ============================= */

function CtaFinalEd() {
  return (
    <EdSection bg="ink">
      <EdHead
        tone="cream"
        align="center"
        title="O próximo passo"
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {[CTA_FINAL.cpf, CTA_FINAL.cnpj].map((c, i) => (
          <Reveal key={c.titulo} delay={i * 100}>
            <div className="border border-ed-cream/25 rounded-[28px] p-8 md:p-10 h-full flex flex-col">
              <span className="ed-eyebrow text-ed-sand">{c.titulo}</span>
              <p className="mt-5 text-[16px] font-light leading-relaxed text-ed-cream/80 flex-1">
                {c.texto}
              </p>
              <div className="mt-8">
                <EdCTA
                  href={i === 0 ? QUIZ_CPF_URL : QUIZ_CNPJ_URL}
                  variant={i === 0 ? "butter" : "outlineCream"}
                >
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

const ServicosEdImpl = () => (
  <>
    <EdSection bg="cream">
       <EdHead
         as="h1"
         kicker="Serviços"
         title="Cada situação pede um caminho"
         lead={V2_COPY.servicos.introducao}
         className="max-w-[900px]"
       />
      <Reveal delay={240}>
        <div className="mt-9">
          <EdCTA href={QUIZ_CPF_URL} variant="ink">
             {V2_COPY.servicos.cta}
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>

    <EdSection bg="white">
      <span className="ed-eyebrow text-ed-ink/50">Para você</span>
      <h2 className="mt-4 ed-title text-ed-ink max-w-[680px]">
        Processos no seu ritmo
      </h2>
      <div className="mt-8">
        {SERV_CPF.map((s, i) => (
          <ServicoEd key={s.titulo} s={s} i={i} />
        ))}
      </div>
    </EdSection>

    <EdQuote image={edTeam} quote={DEPOIMENTOS[1].texto} autor={DEPOIMENTOS[1].autor} inicial={DEPOIMENTOS[1].inicial} />

    <EdSection bg="butter">
      <span className="ed-eyebrow text-ed-ink/50">Para sua empresa</span>
      <h2 className="mt-4 ed-title text-ed-ink max-w-[560px]">
        Equipes e lideranças
      </h2>
      <div className="mt-8">
        {SERV_CNPJ.map((s, i) => (
          <ServicoEd key={s.titulo} s={s} i={i} />
        ))}
      </div>
    </EdSection>

    <CtaFinalEd />
  </>
);
export const ServicosEd = memo(ServicosEdImpl);

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
    <EdSection bg="cream">
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
                <span className="ed-display text-ed-olive block text-[72px] md:text-[88px]">
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
            {i < EIXOS.length - 1 && <EdFlowArrow direction="vertical" />}
          </Reveal>
        ))}
      </div>
    </EdSection>

    <EdSection bg="ink">
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
    </EdSection>

    <EdSection bg="butter">
      <EdHead title="Onde o Sistema ORI se aplica" className="mb-12" />
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <ListaEd titulo="Na vida pessoal" itens={NA_VIDA} />
        <ListaEd titulo="Nas empresas" itens={NAS_EMPRESAS} />
      </div>
    </EdSection>

    <EdSection bg="cream">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
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
    </EdSection>

    <EdQuote image={edRoom} quote={DEPOIMENTOS[3].texto} autor={DEPOIMENTOS[3].autor} inicial={DEPOIMENTOS[3].inicial} />

    <EdSection bg="ink">
      <EdHead
        tone="cream"
        title="A estrutura está aqui"
        lead="O Sistema ORI organiza o caminho — e quem caminha é você."
      />
      <Reveal delay={200}>
        <div className="mt-8">
          <EdCTA href={QUIZ_CPF_URL} variant="butter">
            {V2_COPY.ori.cta}
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>
  </>
);
export const OriEd = memo(OriEdImpl);

/* ============================= SOBRE ============================= */

const SobreEdImpl = () => (
  <>
    <EdSection bg="butter">
      <EdHead as="h1" title="Casa Orí" className="mb-10" />
      <div className="grid gap-6 md:grid-cols-3">
        {NOME.map((n, i) => (
          <Reveal key={n.palavra} delay={i * 90}>
            <EdCard className="h-full bg-ed-cream border-ed-ink/10">
              <span className="ed-display text-[44px] text-ed-olive">{n.palavra}</span>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {n.texto}
              </p>
            </EdCard>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <EdSection bg="white">
      <EdHead kicker="Como conduzo" title="Quatro pilares" className="mb-12" />
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
    </EdSection>

    <EdSection bg="cream" wide>
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
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
            src={edRoom}
            alt="Ambiente da Casa Orí"
            className="w-full h-[340px] md:h-[560px] object-cover rounded-[32px]"
          />
        </Reveal>
      </div>
    </EdSection>

    <EdQuote image={edQuoteImg} quote={DEPOIMENTOS[2].texto} autor={DEPOIMENTOS[2].autor} inicial={DEPOIMENTOS[2].inicial} />

    <EdSection bg="cream">
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
    </EdSection>

    <EdSection bg="ink">
      <EdHead
        tone="cream"
        title="O desconforto da mudança"
        lead={V2_COPY.sobre.fechamento}
      />
      <Reveal delay={200}>
        <div className="mt-8">
          <EdCTA href={QUIZ_CPF_URL} variant="butter">
            {V2_COPY.sobre.cta}
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>
  </>
);
export const SobreEd = memo(SobreEdImpl);

/* ============================= CONTATO ============================= */

const ContatoEdImpl = () => (
  <>
    <EdSection bg="cream">
      <EdHead
        as="h1"
        kicker="Contato"
        title={V2_COPY.contato.titulo}
        lead={
          <>
            {V2_COPY.contato.texto}
            <br />
            <br />
            <strong>Para você:</strong> {V2_COPY.contato.cpfTexto}
            <br />
            <strong>Para você líder:</strong> {V2_COPY.contato.cnpjTexto}
          </>
        }
      />
      <Reveal delay={220}>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <EdCTA href={QUIZ_CPF_URL} variant="ink">
             {V2_COPY.contato.cpfCta}
          </EdCTA>
          <EdCTA href={QUIZ_CNPJ_URL} variant="outlineInk">
             {V2_COPY.contato.cnpjCta}
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>

    <EdSection bg="ink">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        <div>
           <EdHead
             tone="cream"
             title="Fale com a Carol"
             lead={V2_COPY.contato.whatsapp}
             className="ed-pretty max-w-[720px]"
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
          <p className="font-sans italic font-light text-ed-butter text-[22px] md:text-[28px] leading-relaxed max-w-[18ch]">
             Profundidade para compreender. Direção para seguir.
          </p>
        </Reveal>
      </div>
    </EdSection>
  </>
);
export const ContatoEd = memo(ContatoEdImpl);
