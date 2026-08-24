import { memo } from "react";
import { User } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { SectionHead, Em, QUIZ_CPF_URL } from "./kit";

const PILARES = [
  {
    titulo: "Atenção sem julgamento",
    texto:
      "Aqui, o que você traz não é avaliado como certo ou errado, bom ou ruim. Sua história é respeitada e recebida como é, sem precisar ser justificada.",
  },
  {
    titulo: "Profundidade com linguagem acessível",
    texto:
      "Ir além do problema aparente não significa complicar. A explicação chega em uma linguagem clara para que você consiga entender e aplicar.",
  },
  {
    titulo: "Escuta com movimento",
    texto:
      "Falar sobre o que incomoda importa, mas não é onde o processo termina. A escuta aqui sempre aponta pra algo: um próximo passo, uma pergunta de reflexão, uma ação pra experimentar.",
  },
  {
    titulo: "Direcionamento com autorresponsabilidade",
    texto:
      "A direção é dada. Colocá-la em prática é parte que cabe a você.",
  },
];

const PREMISSAS = [
  {
    titulo: "Não existe fórmula pronta",
    texto:
      "Cada pessoa e cada equipe chega com uma história, um contexto e uma necessidade diferente. O caminho não é igual para todo mundo — ele é construído a partir do que você vive.",
  },
  {
    titulo: "Não se resolve tudo de uma vez",
    texto:
      "Alguns encontros são pontuais, mas mudanças mais consistentes acontecem com tempo, repetição e comprometimento com o processo.",
  },
  {
    titulo: "Ninguém resolve por você",
    texto:
      "Existe direção, acompanhamento e suporte. Mas a mudança não vem de fora. Ela acontece a partir do que você está disposto a olhar e sustentar.",
  },
  {
    titulo: "Só entender não resolve o problema",
    texto:
      "Ter consciência é importante, mas não suficiente. O que aparece precisa ganhar forma na prática — nas suas ações, decisões, na forma como você se posiciona e se comunica.",
  },
  {
    titulo: "Não é para te prender aqui",
    texto:
      "O acompanhamento existe para te ajudar a seguir em frente, não para criar dependência. O objetivo é que você desenvolva autonomia ao longo do processo.",
  },
  {
    titulo: "O que você vive hoje não começou agora",
    texto:
      "Muitas vezes, se conecta a padrões que vêm de antes — de uma história pessoal ou da cultura de uma empresa.",
  },
  {
    titulo: "Vai incomodar, e isso faz parte",
    texto:
      "Olhar para o que precisa ser visto pode incomodar. Mas aqui esse desconforto tem direção e faz parte do caminho da mudança.",
  },
];

const NomeImpl = () => (
  <Section bg="superficie">
    <SectionHead kicker="Sobre" title="O que significa Casa Orí" className="mb-12" />
    <div className="grid md:grid-cols-[1fr_1fr_1.3fr] gap-6 items-stretch">
      <Reveal>
        <div className="h-full bg-white/70 border border-verde/12 rounded-3xl p-8">
          <span className="script text-verde text-[30px] leading-none">Casa</span>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-texto-suave">
            lugar — onde você pode ser você, sem precisar esconder nada.
          </p>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="h-full bg-white/70 border border-verde/12 rounded-3xl p-8">
          <span className="script text-verde text-[30px] leading-none">Orí</span>
          <p className="mt-4 text-[15px] font-light leading-relaxed text-texto-suave">
            cabeça, direção — aquilo que te guia.
          </p>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <div className="h-full bg-verde text-white rounded-3xl p-8 flex flex-col justify-center">
          <span className="script text-areia text-[30px] leading-none">=</span>
          <p className="mt-4 text-[16px] md:text-[17px] font-light leading-relaxed text-white/90">
            A segurança de uma escuta atenta, onde o que pesa encontra espaço e o
            que parecia confuso começa a ganhar direção.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const Nome = memo(NomeImpl);

const PilaresImpl = () => (
  <Section bg="areia-claro">
    <SectionHead title="Quatro pilares guiam cada processo" className="mb-12" />
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {PILARES.map((p, i) => (
        <Reveal key={p.titulo} delay={i * 90}>
          <div className="h-full border-t border-verde/20 pt-6">
            <span className="script text-verde/40 text-[22px] leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 section-title-sm text-verde">{p.titulo}</h3>
            <p className="mt-3 text-[15px] md:text-[16px] font-light leading-relaxed text-texto-suave">
              {p.texto}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);
export const Pilares = memo(PilaresImpl);

const CarolSobreImpl = () => (
  <Section bg="branco">
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
        <h2 className="section-title text-verde">Carol Milhomens</h2>
        <p className="mt-2 script text-[19px] text-verde/70">
          especialista em Comunicação, Comportamento e Relações Humanas ·
          criadora do Sistema ORI
        </p>
        <div className="mt-7 space-y-5 text-texto-suave font-light leading-relaxed text-[16px] md:text-[17px] max-w-2xl">
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
            pra cá, já foram mais de <Em>900 atendimentos</Em> conduzidos. Foi
            essa prática que deu origem ao método que estrutura esse trabalho
            hoje — o Sistema ORI.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const CarolSobre = memo(CarolSobreImpl);

const PremissasImpl = () => (
  <Section bg="superficie">
    <SectionHead title="Antes de começar, vale alinhar alguns pontos" className="mb-12" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {PREMISSAS.map((p, i) => (
        <Reveal key={p.titulo} delay={i * 60}>
          <div className="h-full bg-white/70 border border-verde/12 rounded-3xl p-7">
            <h3 className="text-[17px] font-medium text-verde leading-snug">
              {p.titulo}
            </h3>
            <p className="mt-3 text-[15px] font-light leading-relaxed text-texto-suave">
              {p.texto}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);
export const Premissas = memo(PremissasImpl);

const SobreFechamentoImpl = () => (
  <Section bg="verde-noite">
    <div className="max-w-[760px] mx-auto text-center">
      <Reveal>
        <p className="script text-areia text-[26px] md:text-[36px] leading-snug">
          Qual desconforto você escolhe: o que já te acompanha há tanto tempo, ou
          o que te leva à mudança que você busca?
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div className="mt-10">
          <CTA href={QUIZ_CPF_URL} external variant="areia">
            Quero essa mudança
          </CTA>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const SobreFechamento = memo(SobreFechamentoImpl);
