import { memo } from "react";
import { User, Camera, Mic, Instagram as InstagramIcon, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";

/* TODO: Substituir QUIZ_CPF_URL pela URL real do quiz CPF */
const QUIZ_CPF_URL = "QUIZ_CPF_URL";
/* TODO: Substituir QUIZ_CNPJ_URL pela URL real do quiz CNPJ */
const QUIZ_CNPJ_URL = "QUIZ_CNPJ_URL";

/* ============== 2. EXPLICAÇÃO ============== */
const ExplicacaoImpl = () => (
  <Section bg="areia-claro">
    <div className="max-w-[640px] mx-auto text-center">
      <Reveal>
        <p className="text-[20px] leading-relaxed text-[#26533C]">
          O que você consegue ver é apenas uma parte do problema.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 text-[18px] font-light leading-relaxed text-[#555555]">
          Mas ela não conta a história toda.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-6 text-[20px] leading-relaxed text-[#26533C]">
          Enquanto você tenta resolver só essa parte, uma outra continua
          influenciando a situação.
        </p>
      </Reveal>
    </div>
  </Section>
);
export const Explicacao = memo(ExplicacaoImpl);

/* ============== 3. DORES ============== */
const DORES_CPF = [
  "Sabe que precisa tomar uma decisão, mas continua adiando.",
  "Evita conversas difíceis, mesmo sabendo que o problema só vai aumentar.",
  "Percebe que vive situações parecidas, mas não consegue sair desse ciclo repetitivo.",
  "Sente um vazio que não consegue explicar.",
  "Tem dificuldade de dizer “não”, mesmo quando isso te sobrecarrega.",
  "Vive relações difíceis e não consegue mudar a forma como lida com elas.",
  "Coloca as necessidades dos outros em primeiro lugar e tem dificuldade de priorizar as suas.",
];
const DORES_CNPJ = [
  "Percebe que tudo depende de você e a equipe não consegue caminhar sozinha.",
  "Precisa repetir as mesmas orientações várias vezes, mas elas continuam não acontecendo.",
  "Resolve um problema e, pouco tempo depois, outro muito parecido aparece novamente.",
  "Passa mais tempo apagando incêndios do que pensando no crescimento da empresa.",
  "Investe tempo e energia para melhorar a equipe, mas as mudanças não se sustentam.",
  "Percebe que, mesmo dizendo a mesma coisa, cada pessoa entende de um jeito diferente.",
  "Tem dificuldade de entender o que está por trás dos comportamentos da equipe.",
];

function DoresColuna({
  label,
  titulo,
  itens,
}: {
  label: string;
  titulo: string;
  itens: string[];
}) {
  return (
    <div>
      <span className="text-[11px] tracking-[0.22em] uppercase text-[#C4B58E] font-normal">
        {label}
      </span>
      <h3 className="mt-4 mb-8 text-[18px] font-medium text-white">{titulo}</h3>
      <ul className="space-y-5">
        {itens.map((d, i) => (
          <Reveal key={i} delay={i * 60} as="li">
            <div className="border-l-[3px] border-[#C4B58E] pl-4 text-white/90 text-[15px] leading-relaxed font-light">
              {d}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

const DoresV3Impl = () => (
  <section className="bg-[#1A2E25] text-white px-5 sm:px-6 lg:px-10 py-16 md:py-24 lg:py-32">
    <div className="max-w-[1180px] mx-auto">
      <Reveal>
        <p className="label-eyebrow text-[#C4B58E] text-center">
          Como isso costuma acontecer na prática?
        </p>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-14 md:gap-20 relative">
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-[#C4B58E]/20 -translate-x-1/2" />
        <DoresColuna label="Para você" titulo="Na vida pessoal" itens={DORES_CPF} />
        <DoresColuna label="Para você líder" titulo="Na sua empresa" itens={DORES_CNPJ} />
      </div>
    </div>
  </section>
);
export const DoresV3 = memo(DoresV3Impl);

/* ============== 4. SISTEMA ORI (home) ============== */
const EIXOS = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "O que ainda não está visível?",
    texto:
      "Investigamos aquilo que ainda não foi percebido e continua influenciando a situação que trouxe você até aqui.",
    tone: "verde" as const,
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "O que muda quando essa outra parte se torna visível?",
    texto:
      "Ajudamos você a reorganizar a forma como compreende essa situação e a construir novas possibilidades de ação.",
    tone: "areia" as const,
  },
  {
    letra: "I",
    nome: "Integra",
    titulo: "E o que fazer a partir daqui?",
    texto:
      "Acompanhamos e ajustamos essas mudanças à sua realidade para que elas aconteçam de forma consistente.",
    tone: "verde" as const,
  },
];

const SistemaOriV3Impl = () => (
  <Section bg="areia-claro" id="sistema">
    <div className="max-w-2xl mx-auto text-center">
      <Reveal>
        <p className="text-[#26533C] font-light text-[18px]">
          E o que fazer quando isso acontece?
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h2
          className="mt-3 text-[#26533C] font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", lineHeight: 1.2 }}
        >
          É justamente aqui que entra o Sistema ORI.
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-6 max-w-[580px] mx-auto text-[16px] font-light text-[#555555] leading-relaxed">
          Um método autoral que conduz você por um processo para investigar
          aquilo que ainda não está visível, construir novas possibilidades
          de ação e ajustar essas mudanças à sua realidade.
        </p>
      </Reveal>
    </div>

    <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-5 md:gap-6">
      {EIXOS.map((e, i) => {
        const isVerde = e.tone === "verde";
        const card = isVerde
          ? "bg-[#26533C] text-white"
          : "bg-[#C4B58E] text-[#26533C]";
        const sub = isVerde ? "text-white/60" : "text-[#26533C]/70";
        const body = isVerde ? "text-white/85" : "text-[#26533C]/85";
        return (
          <Reveal key={e.letra} delay={i * 100}>
            <div className={`${card} p-8 md:p-10 h-full flex flex-col rounded-sm`}>
              <span className={`text-[11px] tracking-[0.25em] uppercase ${sub}`}>
                {e.letra} — {e.nome.toUpperCase()}
              </span>
              <h3
                className="mt-5 font-medium"
                style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.35rem)", lineHeight: 1.3 }}
              >
                {e.titulo}
              </h3>
              <p className={`mt-5 text-[15px] leading-relaxed font-light ${body}`}>
                {e.texto}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>

    <div className="mt-10 text-center">
      <Link
        to="/sistema-ori"
        className="inline-flex items-center gap-2 text-[#26533C] border-b border-[#26533C] pb-1 text-sm tracking-wide hover:gap-3 transition-all"
      >
        Ver o método completo <ArrowRight size={16} />
      </Link>
    </div>
  </Section>
);
export const SistemaOriV3 = memo(SistemaOriV3Impl);

/* ============== 5. AVALIAÇÃO INICIAL ============== */
const AvaliacaoV3Impl = () => (
  <Section id="avaliacao" bg="verde">
    <div className="text-center max-w-2xl mx-auto">
      <Reveal>
        <h2
          className="font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)", lineHeight: 1.2 }}
        >
          Como começar?
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 text-[18px] font-light text-white/85">
          Cada situação pede um caminho diferente.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-3 text-[18px] font-light text-white/85">
          Por isso, todo processo da Casa Orí começa com uma primeira conversa.
        </p>
      </Reveal>
    </div>

    <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-14 relative">
      <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-[#C4B58E]/25 -translate-x-1/2" />

      {/* Coluna CPF */}
      <Reveal>
        <div className="md:pr-4">
          <span className="text-[11px] tracking-[0.22em] uppercase text-[#C4B58E]">
            Para você
          </span>
          {/* TODO: Carol vai definir o texto de introdução da coluna CPF na seção Avaliação Inicial */}
          <p className="mt-5 text-white/90 font-light leading-relaxed text-[16px]">
            Responder algumas perguntas é o primeiro passo para entender por
            onde começar.
          </p>
          <div className="mt-8">
            <CTA href={QUIZ_CPF_URL} external variant="areia">
              Começar agora{"\u00a0"}
            </CTA>
          </div>
        </div>
      </Reveal>

      {/* Coluna CNPJ */}
      <Reveal delay={120}>
        <div className="md:pl-4">
          <span className="text-[11px] tracking-[0.22em] uppercase text-[#C4B58E]">
            Para você líder
          </span>
          <p className="mt-5 text-white/90 font-light leading-relaxed text-[16px]">
            Vamos começar entendendo a realidade da sua empresa.
          </p>
          <p className="mt-3 text-white/80 font-light leading-relaxed text-[15px]">
            Responder algumas perguntas é o primeiro passo para a nossa conversa.
          </p>
          <div className="mt-8">
            <CTA href={QUIZ_CNPJ_URL} external variant="areia">
              Começar agora →
            </CTA>
          </div>
        </div>
      </Reveal>
    </div>

    <div className="mt-14 flex flex-col items-center">
      <div className="h-px w-[60px] bg-[#C4B58E]" />
      <p className="mt-6 text-[15px] italic font-light text-white/70 text-center max-w-lg">
        Depois dessa primeira conversa, o próximo passo é definido de acordo
        com a sua necessidade.
      </p>
    </div>
  </Section>
);
export const AvaliacaoV3 = memo(AvaliacaoV3Impl);

/* ============== 6. SERVIÇOS ============== */
type SvcCard = { titulo: string; texto: string };

const SERV_CPF: SvcCard[] = [
  {
    titulo: "Terapia Sistêmica",
    texto:
      "Acompanhamento contínuo para reorganizar situações recorrentes da sua vida por meio da investigação de tudo aquilo que ainda não foi percebido.",
  },
  {
    titulo: "Constelação Familiar",
    texto:
      "Atendimento pontual para investigar um problema específico e tornar visível aquilo que ainda está influenciando essa situação.",
  },
  {
    titulo: "Vivências",
    texto:
      "Experiências presenciais em grupo para ampliar a forma de compreender temas do desenvolvimento pessoal.",
  },
];

const SERV_CNPJ: SvcCard[] = [
  {
    /* TODO: Confirmar nome "Workshops e Oficinas" ou outro para o primeiro serviço CNPJ */
    titulo: "Workshops e Oficinas",
    texto:
      "Encontros práticos para desenvolver novas formas de liderança, comunicação e relações dentro da empresa.",
  },
  {
    titulo: "Programas de Desenvolvimento",
    texto:
      "Processo de desenvolvimento para lideranças que precisam transformar comportamentos, fortalecer equipes e sustentar mudanças ao longo do tempo.",
  },
  {
    titulo: "Palestras",
    texto:
      "Encontros que ampliam a forma de olhar para desafios da liderança, da comunicação e das relações dentro das empresas.",
  },
];

function ServCol({ label, cards }: { label: string; cards: SvcCard[] }) {
  return (
    <div>
      <span className="text-[11px] tracking-[0.22em] uppercase text-[#26533C]">
        {label}
      </span>
      <div className="mt-6 space-y-8">
        {cards.map((c, i) => (
          <Reveal key={c.titulo} delay={i * 70}>
            <div>
              <h3 className="text-[18px] font-semibold text-[#26533C]">
                {c.titulo}
              </h3>
              <p className="mt-3 text-[15px] font-light text-[#555555] leading-relaxed">
                {c.texto}
              </p>
              <Link
                to="/servicos"
                className="mt-4 inline-flex items-center gap-1.5 text-[#26533C] text-sm hover:gap-2 transition-all"
              >
                Saiba mais <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

const ServicosV3Impl = () => (
  <Section bg="areia-claro">
    <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
      <Reveal>
        <h2
          className="text-[#26533C] font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)", lineHeight: 1.2 }}
        >
          Diferentes formas de aplicar o Sistema ORI
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-5 text-[16px] font-light text-[#555555] leading-relaxed">
          O método continua o mesmo. O formato muda de acordo com a necessidade
          de cada pessoa ou empresa.
        </p>
      </Reveal>
    </div>

    <div className="grid md:grid-cols-2 gap-10 md:gap-16 relative">
      <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-[#C4B58E] -translate-x-1/2" />
      <div className="md:pr-6">
        <ServCol label="Para você" cards={SERV_CPF} />
      </div>
      <div className="md:pl-6">
        <ServCol label="Para você líder" cards={SERV_CNPJ} />
      </div>
    </div>
  </Section>
);
export const ServicosV3 = memo(ServicosV3Impl);

/* ============== 7. CAROL ============== */
const CarolV3Impl = () => (
  <Section bg="verde">
    <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-12 md:gap-16 items-start">
      <Reveal>
        <div className="aspect-[3/4] bg-[#C4B58E] flex items-center justify-center">
          <User size={64} strokeWidth={1} className="text-[#26533C]/55" />
        </div>
      </Reveal>
      <Reveal delay={120}>
        <span className="label-eyebrow text-white/60">
          Quem vai conduzir esse processo com você
        </span>
        <h3
          className="mt-5 font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)", lineHeight: 1.2 }}
        >
          Carol Milhomens
        </h3>
        <p className="mt-2 text-[#C4B58E] italic font-light">
          especialista em Comunicação, Comportamento e Relações humanas
          <br className="hidden md:block" /> criadora do Sistema ORI
        </p>

        <div className="mt-8 space-y-5 text-white/85 font-light leading-relaxed text-[16px] md:text-[17px] max-w-xl">
          <p>
            Antes de fazer parte do meu trabalho, esse processo fez parte da
            minha vida.
          </p>
          <p>
            Durante muito tempo, eu também tentei resolver apenas a parte que
            conseguia enxergar. Foi vivendo esse processo que comecei a
            perceber que aquilo que aparecia não contava a história inteira.
          </p>
          <p>
            Essa busca acabou se transformando na minha forma de trabalhar e
            deu origem ao Sistema ORI, reunindo a minha vivência, os estudos e
            a prática profissional.
          </p>
          <p>
            Desde 2019, conduzo pessoas e empresas nesse mesmo processo:
            compreender o que realmente está acontecendo, investigar aquilo
            que ainda não está visível e construir novas possibilidades de
            ação.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const CarolV3 = memo(CarolV3Impl);

/* ============== 8. CONTINUE ESSA CONVERSA (Podcast + Instagram) ============== */
const ContinueConversaImpl = () => (
  <Section bg="areia-claro">
    <div className="text-center max-w-2xl mx-auto">
      <Reveal>
        <h2
          className="text-[#26533C] font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)", lineHeight: 1.2 }}
        >
          Continue essa conversa
        </h2>
      </Reveal>
    </div>

    {/* Podcast */}
    <div className="mt-14 grid md:grid-cols-2 items-center gap-10 md:gap-14">
      <div>
        <Reveal>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#26533C]/30 flex items-center justify-center shrink-0 text-[#26533C]">
              <Mic size={22} strokeWidth={1.3} />
            </div>
            <span className="label-eyebrow text-[#26533C]/65">Podcast</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h3 className="mt-6 text-[22px] md:text-2xl font-medium text-[#26533C]">
            Podcast Casa Orí
          </h3>
          <p className="mt-3 text-[#555555] font-light max-w-lg">
            Conversas sobre o que sustenta nossas histórias e a forma como
            elas se repetem.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-6">
            <CTA
              href="https://open.spotify.com/show/68NOAxNfohZSbC4edNFQzS"
              variant="verde"
              external
            >
              Abrir no Spotify
            </CTA>
          </div>
        </Reveal>
      </div>
      <Reveal delay={150}>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5">
          <iframe
            title="Podcast Casa Orí no Spotify"
            src="https://open.spotify.com/embed/show/68NOAxNfohZSbC4edNFQzS?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full"
          />
        </div>
      </Reveal>
    </div>

    {/* Instagram */}
    <div className="mt-16 md:mt-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">Instagram</span>
          <h3 className="mt-3 text-[22px] md:text-2xl font-medium text-[#26533C]">
            @suacasa.ori
          </h3>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="https://instagram.com/suacasa.ori"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#26533C] border-b border-[#26533C] pb-1 text-sm tracking-wide self-start md:self-auto"
          >
            Seguir no Instagram <InstagramIcon size={16} />
          </a>
        </Reveal>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 50}>
            <div className="aspect-square bg-[#C4B58E]/50 flex items-center justify-center hover:bg-[#C4B58E] transition-colors duration-300">
              <Camera size={26} strokeWidth={1.2} className="text-[#26533C]/55" />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
export const ContinueConversa = memo(ContinueConversaImpl);

/* ============== 9. DEPOIMENTOS ============== */
const DepoimentosV3Impl = () => (
  <Section bg="areia">
    <Reveal>
      <span className="label-eyebrow text-[#26533C]/75">Depoimentos</span>
      <h3
        className="mt-4 font-medium text-[#26533C] max-w-3xl"
        style={{ fontSize: "clamp(1.6rem, 2.8vw, 2rem)", lineHeight: 1.25 }}
      >
        O que muda quando essa outra parte começa a aparecer?
      </h3>
    </Reveal>

    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {[0, 1, 2].map((i) => (
        <Reveal key={i} delay={i * 120}>
          <div className="bg-[#E8DEC8] p-8 h-full flex flex-col">
            <span
              className="script text-[#26533C] text-4xl leading-none"
              aria-hidden="true"
            >
              “
            </span>
            <p className="mt-4 text-[15px] leading-relaxed font-light text-[#26533C]/85 flex-1">
              Depoimento a ser inserido — texto da cliente sobre a experiência
              no processo conduzido na Casa Orí.
            </p>
            <p className="mt-6 text-xs tracking-widest uppercase text-[#26533C]/70">
              — Nome, contexto
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);
export const DepoimentosV3 = memo(DepoimentosV3Impl);

/* ============== 10. CTA FINAL ============== */
/* TODO: Carol vai definir qual das duas opções de CTA final usar como principal. Por ora, ambas aparecem */
const CtaFinalImpl = () => (
  <Section bg="verde">
    <div className="text-center max-w-3xl mx-auto">
      {/* Opção A */}
      <Reveal>
        <h2
          className="font-medium"
          style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.6rem)", lineHeight: 1.2 }}
        >
          A mudança só começa quando algo novo pode ser visto.
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-6 text-[16px] font-light text-white/85">
          Se você chegou até aqui, talvez seja o momento de começar esse
          processo.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-8">
          <CTA href="#avaliacao" variant="areia">
            Quero entender o que está acontecendo{"\u00a0"}
          </CTA>
        </div>
      </Reveal>

      <div className="mx-auto my-14 h-px w-[40px] bg-[#E8DEC8]/40" />

      {/* Opção B */}
      <Reveal delay={100}>
        <p className="text-[18px] text-[#C4B58E]">
          Ainda tentando resolver só a parte que você consegue ver?
        </p>
      </Reveal>
      <Reveal delay={180}>
        <p className="mt-3 text-[15px] font-light text-white/80">
          Vamos investigar aquilo que ainda não apareceu.
        </p>
      </Reveal>
      <Reveal delay={260}>
        <div className="mt-6">
          <a
            href="#avaliacao"
            className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 rounded-full tracking-wide text-[14px] md:text-[15px] transition-colors duration-300 border border-[#C4B58E] text-[#C4B58E] hover:bg-[#C4B58E] hover:text-[#26533C]"
          >
            Quero começar agora{"\u00a0"}
          </a>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const CtaFinal = memo(CtaFinalImpl);
