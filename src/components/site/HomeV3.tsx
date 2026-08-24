import { memo } from "react";
import { User, Mic, Instagram as InstagramIcon, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { SectionHead, PublicoDuo, Em, QUIZ_CPF_URL, QUIZ_CNPJ_URL } from "./kit";

/* ============== 2. O PROBLEMA (bloco escuro) ============== */
const ExplicacaoImpl = () => (
  <Section bg="verde-noite">
    <div className="max-w-[820px] mx-auto">
      <Reveal>
        <p className="section-title text-white text-center">
          O que você consegue ver é apenas{" "}
          <span className="text-areia">uma parte do problema.</span>
        </p>
      </Reveal>

      {/* seta ligando "uma parte do problema" → "mas ela não conta a história toda" */}
      <Reveal delay={120}>
        <div className="mt-8 flex flex-col items-center" aria-hidden="true">
          <span className="block h-10 w-px bg-areia/50" />
          <ArrowDown size={18} className="text-areia -mt-1" />
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 text-center text-[18px] md:text-[20px] font-light text-white/80 italic">
          Mas ela não conta a história toda.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mx-auto my-12 h-px w-[60px] bg-areia/45" />
      </Reveal>

      <Reveal delay={360}>
        <p className="text-center text-[19px] md:text-[22px] font-light leading-relaxed text-white">
          Enquanto você tenta resolver só essa parte, uma outra continua{" "}
          <Em tone="areia">influenciando</Em> a situação.
        </p>
      </Reveal>
    </div>
  </Section>
);
export const Explicacao = memo(ExplicacaoImpl);

/* ============== 3. DORES (claro, alívio depois do escuro) ============== */
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
      <span className="label-eyebrow text-verde/55">{label}</span>
      <h3 className="mt-4 mb-8 section-title-sm text-verde">{titulo}</h3>
      <ul className="space-y-4">
        {itens.map((d, i) => (
          <Reveal key={i} delay={i * 50} as="li">
            <div className="border-l-2 border-areia pl-4 text-texto-suave text-[15px] leading-relaxed font-light">
              {d}
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

const DoresV3Impl = () => (
  <Section bg="superficie">
    <SectionHead
      align="center"
      title="Como isso costuma acontecer na prática?"
      className="mb-14"
    />
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative">
      <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-verde/12 -translate-x-1/2" />
      <DoresColuna label="Para você" titulo="Na vida pessoal" itens={DORES_CPF} />
      <DoresColuna label="Para você líder" titulo="Na sua empresa" itens={DORES_CNPJ} />
    </div>
  </Section>
);
export const DoresV3 = memo(DoresV3Impl);

/* ============== 4. SISTEMA ORI (home) ============== */
const EIXOS = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "Identificar o que ainda não foi percebido.",
    texto:
      "Enquanto isso continua invisível, o problema só muda de forma. A investigação vai além do que você consegue enxergar sozinho.",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "Recolocar cada coisa no seu lugar.",
    texto:
      "Papéis e responsabilidades se reposicionam, limites ficam mais claros, a forma de se comunicar se ajusta.",
  },
  {
    letra: "I",
    nome: "Integra",
    titulo: "Sustentar a mudança na prática.",
    texto:
      "Colocar em prática o que foi visto e reorganizado, no que cabe na sua rotina, hoje — ajustando sempre que necessário.",
  },
];

const SistemaOriV3Impl = () => (
  <Section bg="areia-claro" id="sistema">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
      <div className="lg:sticky lg:top-28">
        <SectionHead
          kicker="E o que fazer quando isso acontece?"
          title="É justamente aqui que entra o Sistema ORI."
          lead="Um método autoral que conduz você por um processo para investigar o que ainda não está visível, reorganizar o que está fora de lugar e sustentar essas mudanças na prática."
        />
        <Reveal delay={240}>
          <Link
            to="/sistema-ori"
            className="mt-8 inline-flex items-center gap-2 text-verde border-b border-verde pb-1 text-sm tracking-wide hover:gap-3 transition-all"
          >
            Quero conhecer o método <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>

      {/* Cartões escalonados */}
      <ol className="relative space-y-4 md:space-y-5">
        {EIXOS.map((e, i) => (
          <Reveal key={e.letra} delay={i * 110} as="li">
            <div
              className="bg-white/75 border border-verde/12 rounded-3xl p-7 md:p-9"
              style={{ marginLeft: `${i * 6}%` }}
            >
              <div className="flex items-baseline gap-4">
                <span className="script text-verde text-4xl leading-none">
                  {e.letra}
                </span>
                <span className="label-eyebrow text-verde/55">{e.nome}</span>
              </div>
              <h3 className="mt-5 section-title-sm text-verde">{e.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed font-light text-texto-suave">
                {e.texto}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </Section>
);
export const SistemaOriV3 = memo(SistemaOriV3Impl);

/* ============== 5+6. AVALIAÇÃO + SERVIÇOS (composição única) ============== */
const AvaliacaoV3Impl = () => (
  <Section id="avaliacao" bg="superficie">
    <SectionHead
      align="center"
      kicker="Como começar?"
      title="Cada situação pede um caminho diferente."
      lead="Por isso, todo processo da Casa Orí começa com uma primeira conversa."
      className="mb-14"
    />

    <PublicoDuo
      cpf={{
        titulo: "Para você",
        texto:
          "Responder algumas perguntas é o primeiro passo para entender por onde começar.",
        cta: (
          <CTA href={QUIZ_CPF_URL} external variant="verde">
            Quero entender minha situação
          </CTA>
        ),
      }}
      cnpj={{
        titulo: "Para você líder",
        texto:
          "Algumas perguntas rápidas, pra gente entender a realidade da sua empresa e por onde começar.",
        cta: (
          <CTA href={QUIZ_CNPJ_URL} external variant="verde">
            Quero entender minha empresa
          </CTA>
        ),
      }}
    />

    {/* Transição: da primeira conversa para os formatos */}
    <div className="mt-16 md:mt-20 flex flex-col items-center" aria-hidden="true">
      <span className="block h-12 w-px bg-verde/25" />
      <ArrowDown size={18} className="text-verde/45 -mt-1" />
    </div>

    <Reveal>
      <p className="mt-8 text-center text-[16px] font-light text-texto-suave max-w-[620px] mx-auto">
        Depois dessa primeira conversa, o próximo passo é definido de acordo com
        a sua necessidade.
      </p>
    </Reveal>
    <Reveal delay={120}>
      <p className="mt-6 text-center section-title text-verde max-w-[760px] mx-auto">
        <Em>O método continua o mesmo.</Em>{" "}
        <span className="font-light">
          É o formato que muda de acordo com a sua necessidade ou da sua empresa.
        </span>
      </p>
    </Reveal>
    <Reveal delay={200}>
      <div className="mt-9 text-center">
        <CTA href="/servicos" variant="outlineGreen">
          Quero conhecer o método
        </CTA>
      </div>
    </Reveal>
  </Section>
);
export const AvaliacaoV3 = memo(AvaliacaoV3Impl);

/* ============== 7. CAROL ============== */
const CarolV3Impl = () => (
  <Section bg="areia-claro">
    <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-10 md:gap-16 items-start">
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-3 rounded-full border border-verde/15" aria-hidden="true" />
          <div className="relative aspect-square rounded-full overflow-hidden bg-areia flex items-center justify-center">
            <User size={64} strokeWidth={1} className="text-verde/50" />
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <span className="label-eyebrow text-verde/55">
          Quem vai conduzir esse processo com você
        </span>
        <h3 className="mt-4 section-title text-verde">Carol Milhomens</h3>
        <p className="mt-2 script text-[19px] text-verde/70">
          especialista em Comunicação, Comportamento e Relações Humanas ·
          criadora do Sistema ORI
        </p>

        <div className="mt-7 space-y-5 text-texto-suave font-light leading-relaxed text-[16px] md:text-[17px] max-w-xl">
          <p>
            Antes de fundar a Casa Orí, atuei por 4 anos com comunicação
            corporativa, passando por cerca de <Em>20 empresas</Em> de
            diferentes portes e segmentos. Foi nesse caminho que percebi como
            comportamento, comunicação e história pessoal estão sempre
            conectados, mesmo dentro de uma empresa.
          </p>
          <p>
            Em paralelo, com a formação em Constelação Familiar, a combinação
            entre a prática em comunicação e o olhar sistêmico me abriu caminhos
            para começar a atender em 2019 e a abrir a Casa Orí em 2024. De lá
            pra cá, já foram mais de <Em>900 atendimentos</Em> conduzidos.
          </p>
        </div>
        <Reveal delay={220}>
          <Link
            to="/sobre"
            className="mt-8 inline-flex items-center gap-2 text-verde border-b border-verde pb-1 text-sm tracking-wide hover:gap-3 transition-all"
          >
            Conhecer a Casa Orí <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Reveal>
    </div>
  </Section>
);
export const CarolV3 = memo(CarolV3Impl);

/* ============== 8. CONTINUE ESSA CONVERSA ============== */
const ContinueConversaImpl = () => (
  <Section bg="superficie">
    <SectionHead align="center" title="Continue essa conversa…" className="mb-14" />

    {/* Podcast */}
    <div className="grid md:grid-cols-2 items-center gap-10 md:gap-14">
      <div>
        <Reveal>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-verde/25 flex items-center justify-center shrink-0 text-verde">
              <Mic size={22} strokeWidth={1.3} />
            </div>
            <span className="label-eyebrow text-verde/60">Podcast</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h3 className="mt-6 section-title-sm text-verde">Podcast Casa Orí</h3>
          <p className="mt-3 text-texto-suave font-light max-w-lg">
            Conversas sobre novas formas de entender e lidar com o que estamos
            vivendo no dia a dia.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-6">
            <CTA
              href="https://open.spotify.com/show/68NOAxNfohZSbC4edNFQzS"
              variant="verde"
              external
            >
              Quero ouvir
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
    <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border-t border-verde/12 pt-10">
      <Reveal>
        <div>
          <span className="label-eyebrow text-verde/60">Instagram</span>
          <h3 className="mt-2 section-title-sm text-verde">@suacasa.ori</h3>
          <p className="mt-2 text-[15px] font-light text-texto-suave">
            Reflexões curtas sobre relações, comunicação e comportamento.
          </p>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <a
          href="https://instagram.com/suacasa.ori"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-verde border-b border-verde pb-1 text-sm tracking-wide self-start"
        >
          Seguir no Instagram <InstagramIcon size={16} />
        </a>
      </Reveal>
    </div>
  </Section>
);
export const ContinueConversa = memo(ContinueConversaImpl);

/* ============== 9. DEPOIMENTOS ============== */
/* TODO Carol: substituir pelos depoimentos reais do Instagram (texto + nome/contexto) */
const DEPOIMENTOS = [
  {
    texto:
      "Depoimento a ser inserido — texto da cliente sobre a experiência no processo conduzido na Casa Orí.",
    autor: "Nome, contexto",
  },
  {
    texto:
      "Depoimento a ser inserido — texto da cliente sobre a experiência no processo conduzido na Casa Orí.",
    autor: "Nome, contexto",
  },
  {
    texto:
      "Depoimento a ser inserido — texto de liderança sobre o trabalho feito com a equipe.",
    autor: "Nome, empresa",
  },
];

const DepoimentosV3Impl = () => (
  <Section bg="areia">
    <SectionHead
      title="O que muda quando você começa a ver o problema por completo?"
      className="mb-12"
    />
    <div className="grid md:grid-cols-3 gap-5 md:gap-6">
      {DEPOIMENTOS.map((d, i) => (
        <Reveal key={i} delay={i * 110}>
          <div
            className="bg-superficie rounded-3xl p-8 h-full flex flex-col"
            style={{ marginTop: `${(i % 2) * 24}px` }}
          >
            <span className="script text-verde text-4xl leading-none" aria-hidden="true">
              “
            </span>
            <p className="mt-3 text-[15px] leading-relaxed font-light text-verde/85 flex-1">
              {d.texto}
            </p>
            <p className="mt-6 text-xs tracking-widest uppercase text-verde/60">
              — {d.autor}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);
export const DepoimentosV3 = memo(DepoimentosV3Impl);

/* ============== 10. CTA FINAL ============== */
const CtaFinalImpl = () => (
  <Section bg="verde">
    <SectionHead
      align="center"
      tone="claro"
      title="A mudança só começa quando algo novo pode ser visto."
      className="mb-12"
    />
    <PublicoDuo
      tone="escuro"
      cpf={{
        titulo: "Para você",
        texto: (
          <>
            Ainda tentando resolver só a parte que você consegue ver?
            <br />
            Vamos investigar aquilo que ainda não apareceu.
          </>
        ),
        cta: (
          <CTA href={QUIZ_CPF_URL} external variant="areia">
            Quero entender minha situação
          </CTA>
        ),
      }}
      cnpj={{
        titulo: "Para você líder",
        texto: (
          <>
            Ainda tentando resolver só o que você consegue ver na sua empresa?
            <br />
            Vamos investigar o que ainda está influenciando os resultados.
          </>
        ),
        cta: (
          <CTA href={QUIZ_CNPJ_URL} external variant="areia">
            Quero entender minha empresa
          </CTA>
        ),
      }}
    />
  </Section>
);
export const CtaFinal = memo(CtaFinalImpl);
