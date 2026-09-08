import { memo } from "react";
import { Reveal } from "../Reveal";
import {
  EdSection,
  EdHead,
  EdCard,
  EdQuote,
  EdCTA,
  EdLabel,
  EdListaTracos,
  CicloHero,
  AvaliacaoEd,
  CtaFinalEd,
} from "./ui";
import edHero from "@/assets/ed-hero.jpg";
import edRoom from "@/assets/ed-room.jpg";
import edQuoteImg from "@/assets/ed-quote.jpg";
import edTeam from "@/assets/ed-team.jpg";
import {
  HERO,
  EXPLICACAO,
  DORES_TITULO,
  DORES_CPF,
  DORES_CNPJ,
  ORI_INTRO,
  ORI_PAGE,
  EIXOS,
  SERVICOS_HEAD,
  SERVICOS_CPF,
  SERVICOS_CNPJ,
  CASA,
  CAROL,
  CONTATO,
  DEPOIMENTOS,
  DEPOIMENTO_TITULO,
  LABEL_CPF,
  LABEL_CNPJ,
  CTA_PRINCIPAL,
  WHATSAPP_CONVERSA,
  WHATSAPP_EMPRESA,
  type ServicoV2,
} from "./copy";

/* ============================= HOME ============================= */

const HomeEdImpl = () => (
  <>
    {/* Hero — ciclo de repetição */}
    <section className="bg-ed-dark text-ed-white px-5 sm:px-8 lg:px-12 pt-16 md:pt-24 pb-0">
      <div className="max-w-[1180px] mx-auto text-center">
        <Reveal>
          <CicloHero />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-14 text-[17px] md:text-[19px] font-light text-ed-white/90">
            {HERO.linha1}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <h1 className="mt-4 ed-title text-ed-areia font-bold">{HERO.destaque}</h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-7 mx-auto max-w-[560px] text-[16px] font-light leading-relaxed text-ed-white/85">
            {HERO.lead}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9">
            <EdCTA href="#avaliacao" variant="areiaDark">
              {CTA_PRINCIPAL}
            </EdCTA>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <img
            src={edHero}
            alt="Espaço de atendimento da Casa Orí em Brasília"
            className="mt-16 w-full h-[40vh] md:h-[60vh] object-cover rounded-t-[36px]"
          />
        </Reveal>
      </div>
    </section>

    {/* Explicação */}
    <EdSection bg="soft">
      <div className="max-w-[880px]">
        {EXPLICACAO.map((linha, i) => (
          <Reveal key={linha} delay={i * 110}>
            <p
              className={
                i === 0
                  ? "ed-title text-ed-dark"
                  : "mt-7 text-[17px] md:text-[19px] font-light leading-relaxed text-ed-dark/85"
              }
            >
              {linha}
            </p>
          </Reveal>
        ))}
      </div>
    </EdSection>

    {/* Dores segmentadas */}
    <EdSection bg="dark">
      <Reveal>
        <h2 className="ed-title text-ed-white max-w-[820px]">{DORES_TITULO}</h2>
      </Reveal>
      <div className="mt-14 grid gap-12 md:gap-20 md:grid-cols-2">
        <Reveal>
          <div>
            <EdLabel>{LABEL_CPF}</EdLabel>
            <h3 className="mt-4 ed-display text-[28px] text-ed-white">
              {DORES_CPF.titulo}
            </h3>
            <EdListaTracos itens={DORES_CPF.itens} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="md:border-l md:border-ed-areia/20 md:pl-20">
            <EdLabel>{LABEL_CNPJ}</EdLabel>
            <h3 className="mt-4 ed-display text-[28px] text-ed-white">
              {DORES_CNPJ.titulo}
            </h3>
            <EdListaTracos itens={DORES_CNPJ.itens} />
          </div>
        </Reveal>
      </div>
    </EdSection>

    {/* Sistema ORI — teaser */}
    <EdSection bg="soft">
      <div className="max-w-[820px]">
        <Reveal>
          <h2 className="ed-title text-ed-green">{ORI_INTRO.titulo}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 ed-display italic text-[24px] md:text-[30px] text-ed-dark">
            {ORI_INTRO.destaque}
          </p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-[16px] font-light leading-relaxed text-ed-green/85">
            {ORI_INTRO.lead}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 90}>
            <EdCard className="h-full">
              <span className="ed-display text-ed-green text-[64px] block">
                {e.letra}
              </span>
              <span className="ed-eyebrow text-ed-green/60 mt-2 block">{e.nome}</span>
              <h3 className="mt-6 ed-display text-[23px] text-ed-dark">{e.pergunta}</h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-text/75">
                {e.texto}
              </p>
            </EdCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="mt-12">
          <EdCTA href="/v2/sistema-ori" variant="green">
            Conhecer o Sistema ORI
          </EdCTA>
        </div>
      </Reveal>
    </EdSection>

    {/* Avaliação inicial */}
    <AvaliacaoEd />

    {/* Depoimento */}
    <EdQuote
      image={edQuoteImg}
      titulo={DEPOIMENTO_TITULO}
      quote={DEPOIMENTOS[0].texto}
      autor={DEPOIMENTOS[0].autor}
    />

    <CtaFinalEd />
  </>
);
export const HomeEd = memo(HomeEdImpl);

/* ============================= SERVIÇOS ============================= */

function ServicoEd({ s, i }: { s: ServicoV2; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <article className="py-8 border-t border-ed-green/15">
        <h3 className="ed-display text-[26px] md:text-[28px] text-ed-green">
          {s.titulo}
        </h3>
        <p className="mt-4 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-text/75">
          {s.texto}
        </p>
        <a
          href="/v2/contato"
          className="mt-5 inline-block text-[14px] tracking-wide text-ed-green underline underline-offset-4 decoration-ed-areia hover:text-ed-dark"
        >
          Saiba mais →
        </a>
      </article>
    </Reveal>
  );
}

const ServicosEdImpl = () => (
  <>
    <EdSection bg="white">
      <EdHead title={SERVICOS_HEAD.titulo} lead={SERVICOS_HEAD.lead} />

      <div className="mt-14 grid gap-12 md:gap-20 md:grid-cols-2">
        <div>
          <EdLabel tone="green">{LABEL_CPF}</EdLabel>
          <div className="mt-6">
            {SERVICOS_CPF.map((s, i) => (
              <ServicoEd key={s.titulo} s={s} i={i} />
            ))}
          </div>
        </div>
        <div className="md:border-l md:border-ed-areia md:pl-20">
          <EdLabel tone="green">{LABEL_CNPJ}</EdLabel>
          <div className="mt-6">
            {/* TODO: Carol vai confirmar o nome "Workshops e Oficinas" */}
            {SERVICOS_CNPJ.map((s, i) => (
              <ServicoEd key={s.titulo} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </EdSection>

    <EdQuote
      image={edTeam}
      titulo={DEPOIMENTO_TITULO}
      quote={DEPOIMENTOS[1].texto}
      autor={DEPOIMENTOS[1].autor}
    />

    <AvaliacaoEd />
  </>
);
export const ServicosEd = memo(ServicosEdImpl);

/* ============================= SISTEMA ORI ============================= */

const OriEdImpl = () => (
  <>
    <EdSection bg="soft">
      <EdHead title={ORI_PAGE.titulo} lead={ORI_PAGE.lead} className="mb-14" />
      <div className="space-y-6">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 90}>
            <EdCard className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12">
              <div>
                <span className="ed-display text-ed-green block text-[72px] md:text-[88px]">
                  {e.letra}
                </span>
                <span className="ed-eyebrow text-ed-green/60 block mt-2">{e.nome}</span>
              </div>
              <div>
                <h3 className="ed-display text-[26px] md:text-[30px] text-ed-dark">
                  {e.pergunta}
                </h3>
                <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-text/75">
                  {e.texto}
                </p>
                <p className="mt-7 border-l-[3px] border-ed-areia pl-5 ed-display italic text-[20px] md:text-[23px] text-ed-green">
                  {e.fechamento}
                </p>
              </div>
            </EdCard>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <AvaliacaoEd />

    <CtaFinalEd />
  </>
);
export const OriEd = memo(OriEdImpl);

/* ============================= SOBRE ============================= */

const SobreEdImpl = () => (
  <>
    {/* Bloco 1 — A Casa Orí */}
    <EdSection bg="soft" wide>
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        <div>
          <Reveal>
            <h1 className="ed-title text-ed-green">{CASA.titulo}</h1>
          </Reveal>
          {CASA.paragrafos.map((p, i) => (
            <Reveal key={p} delay={120 + i * 80}>
              <p className="mt-6 text-[16px] font-light leading-relaxed text-ed-green/85 max-w-[560px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <img
            src={edRoom}
            alt="Ambiente da Casa Orí"
            className="w-full h-[320px] md:h-[520px] object-cover rounded-[32px]"
          />
        </Reveal>
      </div>
    </EdSection>

    {/* Bloco 2 — Carol */}
    <EdSection bg="dark" wide>
      <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
        {/* TODO: Inserir foto da Carol na página Sobre */}
        <Reveal>
          <img
            src={edQuoteImg}
            alt="Carol Milhomens"
            loading="lazy"
            className="w-full h-[320px] md:h-[520px] object-cover rounded-[32px]"
          />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="ed-title text-ed-white">{CAROL.pergunta}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 ed-display text-[34px] text-ed-areia">{CAROL.nome}</p>
          </Reveal>
          {CAROL.credenciais.map((c, i) => (
            <Reveal key={c} delay={140 + i * 60}>
              <p className="mt-2 text-[14px] font-light text-ed-white/75">{c}</p>
            </Reveal>
          ))}
          <Reveal delay={260}>
            <p className="mt-8 ed-display italic text-[22px] md:text-[26px] text-ed-white">
              {CAROL.destaque}
            </p>
          </Reveal>
          {CAROL.paragrafos.map((p, i) => (
            <Reveal key={p} delay={320 + i * 80}>
              <p className="mt-6 text-[15px] md:text-[16px] font-light leading-relaxed text-ed-white/85 max-w-[560px]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </EdSection>

    <AvaliacaoEd />

    <CtaFinalEd />
  </>
);
export const SobreEd = memo(SobreEdImpl);

/* ============================= CONTATO ============================= */

const ContatoEdImpl = () => (
  <>
    <EdSection bg="soft">
      <div className="max-w-[820px]">
        <Reveal>
          <h1 className="ed-title text-ed-green">{CONTATO.titulo}</h1>
        </Reveal>
        {CONTATO.linhas.map((l, i) => (
          <Reveal key={l} delay={100 + i * 70}>
            <p className="mt-3 text-[16px] md:text-[17px] font-light text-ed-green/85">
              {l}
            </p>
          </Reveal>
        ))}
        <Reveal delay={340}>
          <div className="mt-9">
            {/* TODO: Substituir número de WhatsApp pelo número real da Carol */}
            <EdCTA href={WHATSAPP_CONVERSA} variant="green">
              {CONTATO.botao}
            </EdCTA>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-5 text-[14px] font-light italic text-ed-green/70 max-w-[460px]">
            {CONTATO.nota}
          </p>
        </Reveal>
      </div>
    </EdSection>

    <EdSection bg="white">
      <div className="grid gap-10 md:grid-cols-2">
        {CONTATO.formas.map((f, i) => (
          <Reveal key={f.titulo} delay={i * 100}>
            <div className="border-t border-ed-areia pt-6">
              <h2 className="ed-display text-[28px] text-ed-green">{f.titulo}</h2>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-ed-text/75 max-w-[360px]">
                {f.texto}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </EdSection>

    <EdSection bg="green">
      <div className="max-w-[720px]">
        <EdLabel>{LABEL_CNPJ}</EdLabel>
        <Reveal delay={80}>
          <h2 className="mt-5 ed-title text-ed-white">{CONTATO.empresaTitulo}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-[16px] font-light leading-relaxed text-ed-white/85">
            {CONTATO.empresaTexto}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <EdCTA href={WHATSAPP_EMPRESA} variant="areia">
              {CONTATO.empresaBotao}
            </EdCTA>
          </div>
        </Reveal>
      </div>
    </EdSection>

    <AvaliacaoEd />
  </>
);
export const ContatoEd = memo(ContatoEdImpl);
