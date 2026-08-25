import { memo } from "react";
import { Reveal } from "../Reveal";
import { EdSection, EdHead, EdCard, EdQuote, EdCTA } from "./ui";
import edHero from "@/assets/ed-hero.jpg";
import edRoom from "@/assets/ed-room.jpg";
import edQuoteImg from "@/assets/ed-quote.jpg";
import edTeam from "@/assets/ed-team.jpg";
import {
  HERO,
  EXPLICACAO,
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
  CONTATO,
  QUIZ_CPF_URL,
  QUIZ_CNPJ_URL,
  WHATSAPP_URL,
  type Servico,
} from "../content";

/* ============================= HOME ============================= */

const HomeEdImpl = () => (
  <>
    {/* Hero editorial */}
    <section className="bg-ed-cream px-5 sm:px-8 lg:px-12 pt-14 md:pt-20 pb-0">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <span className="ed-eyebrow text-ed-ink/55">{HERO.kicker}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="ed-display text-ed-ink mt-6 text-[clamp(2.4rem,7vw,5.6rem)]">
            {HERO.titulo}
            <br />
            <span className="text-ed-olive italic">{HERO.tituloEm}</span>
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr] items-end">
          <Reveal delay={160}>
            <p className="max-w-[520px] text-[16px] md:text-[18px] font-light leading-relaxed text-ed-ink/70">
              {HERO.lead}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <EdCTA href={QUIZ_CPF_URL} variant="ink">
                {HERO.ctaCpf}
              </EdCTA>
              <EdCTA href={QUIZ_CNPJ_URL} variant="outlineInk">
                {HERO.ctaCnpj}
              </EdCTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={280}>
          <img
            src={edHero}
            alt="Espaço de atendimento da Casa Orí em Brasília"
            className="mt-14 w-full h-[46vh] md:h-[68vh] object-cover rounded-t-[36px]"
          />
        </Reveal>
      </div>
    </section>

    {/* Explicação */}
    <EdSection bg="butter">
      <div className="max-w-[880px]">
        <Reveal>
          <p className="ed-title text-ed-ink">
            {EXPLICACAO.titulo}{" "}
            <span className="italic text-ed-olive">{EXPLICACAO.tituloEm}</span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 text-[17px] md:text-[19px] font-light leading-relaxed text-ed-ink/75">
            {EXPLICACAO.meio} {EXPLICACAO.fim}
          </p>
        </Reveal>
      </div>
    </EdSection>

    {/* Dores segmentadas */}
    <EdSection bg="cream">
      <EdHead
        kicker="Talvez você reconheça"
        title="Onde isso costuma aparecer."
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <EdCard>
          <span className="ed-eyebrow text-ed-ink/50">Para você</span>
          <ul className="mt-6 space-y-4">
            {DORES_CPF.map((d) => (
              <li
                key={d}
                className="flex gap-3 text-[15px] font-light leading-relaxed text-ed-ink/75"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ed-butter shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <EdCTA href={QUIZ_CPF_URL} variant="ink" className="w-full sm:w-auto">
              Quero entender minha situação
            </EdCTA>
          </div>
        </EdCard>
        <EdCard className="bg-ed-butter/30 border-ed-ink/15 text-ed-ink">
          <span className="ed-eyebrow text-ed-ink/60">Para sua empresa</span>
          <ul className="mt-6 space-y-4">
            {DORES_CNPJ.map((d) => (
              <li
                key={d}
                className="flex gap-3 text-[15px] font-normal leading-relaxed text-ed-ink"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ed-ink shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <EdCTA href={QUIZ_CNPJ_URL} variant="ink" className="w-full sm:w-auto">
              Quero entender minha empresa
            </EdCTA>
          </div>
        </EdCard>
      </div>
    </EdSection>

    <EdQuote
      image={edQuoteImg}
      quote={DEPOIMENTOS[0].texto}
      autor={DEPOIMENTOS[0].autor}
    />

    {/* Sistema ORI resumo */}
    <EdSection bg="cream">
      <EdHead
        kicker="Sistema ORI"
        title="Um caminho em três movimentos."
        lead="A mesma estrutura conduz processos individuais e trabalhos dentro de empresas — o que muda é o contexto, não o método."
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 90}>
            <EdCard className="h-full">
              <span className="ed-display text-ed-olive text-[64px] block">
                {e.letra}
              </span>
              <span className="ed-eyebrow text-ed-ink/50 mt-2 block">{e.nome}</span>
              <h3 className="mt-6 ed-display text-[24px] text-ed-ink">{e.titulo}</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {e.tensao}
              </p>
            </EdCard>
          </Reveal>
        ))}
      </div>
    </EdSection>

    {/* Serviços resumo */}
    <EdSection bg="butter">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        <div>
          <EdHead
            kicker="Serviços"
            title="Cada situação pede um caminho diferente."
            lead="Processos individuais conduzidos no seu ritmo, e trabalhos com equipes e lideranças a partir do dia a dia real do time."
          />
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <EdCTA href="/v2/servicos" variant="ink">
                Ver todos os serviços
              </EdCTA>
              <EdCTA href={WHATSAPP_URL} variant="outlineInk">
                Falar no WhatsApp
              </EdCTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <img
            src={edRoom}
            alt="Sala de atendimento minimalista"
            loading="lazy"
            className="w-full h-[300px] md:h-[440px] object-cover rounded-[32px]"
          />
        </Reveal>
      </div>
    </EdSection>

    <CtaFinalEd />
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
        title="Por onde você quer começar?"
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {[CTA_FINAL.cpf, CTA_FINAL.cnpj].map((c, i) => (
          <Reveal key={c.titulo} delay={i * 100}>
            <div className="border border-ed-cream/25 rounded-[28px] p-8 md:p-10 h-full flex flex-col">
              <span className="ed-eyebrow text-ed-butter">{c.titulo}</span>
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
      <article className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-6 md:gap-12 py-10 md:py-12 border-t border-ed-ink/12">
        <div>
          <h3 className="ed-display text-[26px] md:text-[30px] text-ed-ink">
            {s.titulo}
          </h3>
          <p className="mt-4 text-[13px] leading-relaxed text-ed-ink/55">{s.formato}</p>
        </div>
        <div>
          <p className="ed-display text-[22px] md:text-[26px] text-ed-olive italic">
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
        kicker="Serviços"
        title={
          <>
            Você já sabe que algo precisa mudar. A pergunta agora é:{" "}
            <span className="italic text-ed-olive">por onde começar?</span>
          </>
        }
        lead="Cada situação pede um caminho diferente. Por isso, o primeiro passo é sempre entender melhor o que está acontecendo, antes de decidir por onde seguir."
      />
      <Reveal delay={240}>
        <div className="mt-9">
          <EdCTA href={QUIZ_CPF_URL} variant="ink">
            Quero começar por aqui
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>

    <EdSection bg="white">
      <span className="ed-eyebrow text-ed-ink/50">Para você</span>
      <h2 className="mt-4 ed-title text-ed-ink max-w-[640px]">
        Processos individuais, conduzidos no seu ritmo.
      </h2>
      <div className="mt-8">
        {SERV_CPF.map((s, i) => (
          <ServicoEd key={s.titulo} s={s} i={i} />
        ))}
      </div>
    </EdSection>

    <EdQuote image={edTeam} quote={DEPOIMENTOS[1].texto} autor={DEPOIMENTOS[1].autor} />

    <EdSection bg="butter">
      <span className="ed-eyebrow text-ed-ink/50">Para sua empresa</span>
      <h2 className="mt-4 ed-title text-ed-ink max-w-[680px]">
        Trabalho com equipes e lideranças, a partir do dia a dia real do time.
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
      <h3 className="ed-display text-[26px] text-ed-ink">{titulo}</h3>
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
        kicker="Sistema ORI"
        title="Um caminho em três movimentos."
        lead="A mesma estrutura conduz processos individuais e trabalhos dentro de empresas — o que muda é o contexto, não o método."
        className="mb-14"
      />
      <div className="space-y-6">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 90}>
            <EdCard className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12">
              <div>
                <span className="ed-display text-ed-olive block text-[72px] md:text-[88px]">
                  {e.letra}
                </span>
                <span className="ed-eyebrow text-ed-ink/50 block mt-2">{e.nome}</span>
              </div>
              <div>
                <h3 className="ed-display text-[26px] md:text-[30px] text-ed-ink">
                  {e.titulo}
                </h3>
                <p className="mt-4 text-[16px] font-light text-ed-ink/70">{e.tensao}</p>
                <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-ink/70">
                  {e.texto}
                </p>
                <p className="mt-7 border-l-2 border-ed-butter pl-5 ed-display italic text-[20px] md:text-[23px] text-ed-olive">
                  {e.citacao}
                </p>
              </div>
            </EdCard>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <EdSection bg="ink">
      <EdHead tone="cream" title="O que torna o Sistema ORI diferente" className="mb-12" />
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
      <EdHead title="Onde o Sistema ORI costuma ser aplicado" className="mb-12" />
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <ListaEd titulo="Na vida pessoal" itens={NA_VIDA} />
        <ListaEd titulo="Nas empresas" itens={NAS_EMPRESAS} />
      </div>
    </EdSection>

    <EdSection bg="cream">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <EdHead title="O que você ganha ao longo do caminho" />
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

    <CtaFinalEd />
  </>
);
export const OriEd = memo(OriEdImpl);

/* ============================= SOBRE ============================= */

const SobreEdImpl = () => (
  <>
    <EdSection bg="cream" wide>
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        <div>
          <EdHead
            kicker={CAROL.titulo}
            title={CAROL.nome}
            lead="Mais de 900 atendimentos conduzidos desde 2019, entre processos individuais e trabalhos com equipes."
          />
          {CAROL.paragrafos.map((p, i) => (
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

    <EdSection bg="butter">
      <EdHead title="O nome" className="mb-10" />
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
              <h3 className="ed-display text-[24px] text-ed-ink">{p.titulo}</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {p.texto}
              </p>
            </EdCard>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <EdQuote image={edQuoteImg} quote={DEPOIMENTOS[2].texto} autor={DEPOIMENTOS[2].autor} />

    <EdSection bg="cream">
      <EdHead
        kicker="Antes de começar"
        title="Algumas premissas deste trabalho"
        className="mb-12"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {PREMISSAS.map((p, i) => (
          <Reveal key={p.titulo} delay={i * 60}>
            <div className="border-t border-ed-ink/12 pt-6 h-full">
              <h3 className="ed-display text-[22px] text-ed-ink">{p.titulo}</h3>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-ed-ink/70">
                {p.texto}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <CtaFinalEd />
  </>
);
export const SobreEd = memo(SobreEdImpl);

/* ============================= CONTATO ============================= */

const ContatoEdImpl = () => (
  <>
    <EdSection bg="cream">
      <EdHead kicker={CONTATO.kicker} title={CONTATO.titulo} lead={CONTATO.lead} />
      <Reveal delay={220}>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <EdCTA href={QUIZ_CPF_URL} variant="ink">
            Quero entender minha situação
          </EdCTA>
          <EdCTA href={QUIZ_CNPJ_URL} variant="outlineInk">
            Quero entender minha empresa
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>

    <EdSection bg="ink">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        <div>
          <EdHead tone="cream" title={CONTATO.diretoTitulo} lead={CONTATO.diretoTexto} />
          <Reveal delay={200}>
            <div className="mt-8">
              <EdCTA href={WHATSAPP_URL} variant="butter">
                Falar no WhatsApp
              </EdCTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="ed-display italic text-ed-butter text-[28px] md:text-[38px] leading-tight">
            {CONTATO.diretoCitacao}
          </p>
        </Reveal>
      </div>
    </EdSection>
  </>
);
export const ContatoEd = memo(ContatoEdImpl);
