import { memo } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { SectionHead, Em, QUIZ_CPF_URL, QUIZ_CNPJ_URL, WHATSAPP_URL } from "./kit";

type Servico = {
  titulo: string;
  formato: string;
  ancora: string;
  paragrafos: string[];
};

const SERV_CPF: Servico[] = [
  {
    titulo: "Terapia Sistêmica",
    formato:
      "Acompanhamento contínuo · Presencial ou online · Sessões semanais ou quinzenais · 1 hora",
    ancora:
      "Para tudo aquilo que você já não aguenta mais carregar do mesmo jeito: o que pesa, o que trava, o que parece se repetir sem motivo aparente.",
    paragrafos: [
      "Cada sessão parte do que está acontecendo agora — uma relação difícil, uma decisão parada, aquela sensação de estar sobrecarregado. As mudanças são colocadas em prática na sua rotina entre uma sessão e outra, e ajustadas conforme as dificuldades vão aparecendo.",
    ],
  },
  {
    titulo: "Constelação Familiar",
    formato: "Atendimento pontual · Presencial ou online · Até 2h · Tema específico",
    ancora:
      "Para toda e qualquer situação que trava: um padrão que se repete, um sintoma que persiste sem explicação, um conflito com alguém que não se resolve.",
    paragrafos: [
      "Cada sessão investiga uma dessas situações por vez, a partir de uma representação guiada dela. Você enxerga a sua dor por um novo ângulo e sai com orientações práticas para levar essa mudança adiante no dia a dia.",
    ],
  },
  {
    titulo: "Vivências",
    formato:
      "Encontro em grupo · Presencial · Formato e duração definidos conforme o tema",
    ancora: "Um momento de desaceleração para sentir.",
    paragrafos: [
      "É um encontro dedicado a escuta, trocas e dinâmicas em grupo. É na experiência com o outro que a gente se enxerga, se entende e se reconhece melhor.",
    ],
  },
];

const SERV_CNPJ: Servico[] = [
  {
    titulo: "Palestras",
    formato: "Presencial ou online · 1h a 1h30 · Para equipes e eventos corporativos",
    ancora:
      "Amplia a forma de olhar para desafios da liderança, da comunicação e das relações dentro das empresas.",
    paragrafos: [
      "Cada palestra é construída em torno de um tema escolhido com a empresa — liderança, comunicação assertiva, gestão de conflitos, inteligência emocional, entre outros — com exemplos do dia a dia daquele time. O objetivo não é esgotar o assunto, mas abrir a primeira camada dele. A partir daí, a empresa decide o quanto quer ir mais fundo.",
    ],
  },
  {
    titulo: "Encontro de Comunicação",
    formato: "Presencial ou online · 4 horas · 5 a 20 pessoas",
    ancora: "Quando a comunicação falha, tudo falha junto.",
    paragrafos: [
      "O encontro parte do ciclo real da comunicação — quem fala, quem escuta e onde a maior parte dos ruídos nasce. Cada pessoa parte de um ponto de vista diferente, e é aí que a maioria dos mal-entendidos começa, dentro ou fora do trabalho. A equipe sai entendendo melhor esse ciclo, com exemplos do próprio dia a dia do time.",
    ],
  },
  {
    titulo: "Encontro para Liderança",
    formato: "Presencial ou online · 4 horas · Para líderes e gestores",
    ancora: "Você é a sua empresa, ou você tem uma empresa?",
    paragrafos: [
      "Enquanto a sua identidade e a identidade da empresa forem a mesma coisa, delegar vira ameaça e qualquer crítica ao negócio vira crítica a você — porque, nesse ponto, defender a empresa é defender a si mesmo. O encontro trabalha essa separação, para que decisões deixem de ser sobre se proteger e passem a ser sobre o que a empresa realmente precisa para crescer.",
    ],
  },
  {
    titulo: "Liderança em Processo",
    formato:
      "Encontros semanais · Presencial · 3 meses · Para lideranças e gestores",
    ancora: "Não basta saber o que fazer, é preciso saber liderar as pessoas que fazem.",
    paragrafos: [
      "O programa combina conteúdo — tipos e estilos de liderança, comunicação assertiva, escuta, feedback, inteligência emocional, dentre outros — com acompanhamento da aplicação prática ao longo de alguns meses. Não é um treinamento pontual: é um acompanhamento para que as mudanças se sustentem dentro da empresa.",
    ],
  },
];

function ServicoItem({ s, i }: { s: Servico; i: number }) {
  return (
    <Reveal delay={i * 80}>
      <article className="grid md:grid-cols-[minmax(0,300px)_1fr] gap-6 md:gap-12 py-10 md:py-12 border-t border-verde/12">
        <div>
          <h3 className="section-title-sm text-verde">{s.titulo}</h3>
          <p className="mt-3 text-[13px] leading-relaxed text-verde/60">
            {s.formato}
          </p>
        </div>
        <div>
          <p className="script text-[20px] md:text-[22px] text-verde">
            {s.ancora}
          </p>
          {s.paragrafos.map((p, k) => (
            <p
              key={k}
              className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-texto-suave"
            >
              {p}
            </p>
          ))}
          <div className="mt-7">
            <CTA href={WHATSAPP_URL} external variant="outlineGreen">
              Quero saber mais
            </CTA>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

const ServicosIntroImpl = () => (
  <Section bg="superficie">
    <SectionHead
      align="center"
      kicker="Serviços"
      title={
        <>
          Você já sabe que algo precisa mudar. A pergunta agora é:{" "}
          <Em>por onde começar?</Em>
        </>
      }
      lead="Cada situação pede um caminho diferente. Por isso, o primeiro passo é sempre entender melhor o que está acontecendo, antes de decidir por onde seguir."
    />
    <Reveal delay={240}>
      <div className="mt-9 text-center">
        <CTA href={QUIZ_CPF_URL} external variant="verde">
          Quero começar por aqui
        </CTA>
      </div>
    </Reveal>
  </Section>
);
export const ServicosIntro = memo(ServicosIntroImpl);

const ServicosPessoaImpl = () => (
  <Section bg="branco">
    <span className="label-eyebrow text-verde/55">Para você</span>
    <h2 className="mt-4 section-title text-verde max-w-[620px]">
      Processos individuais, conduzidos no seu ritmo.
    </h2>
    <div className="mt-8">
      {SERV_CPF.map((s, i) => (
        <ServicoItem key={s.titulo} s={s} i={i} />
      ))}
    </div>
  </Section>
);
export const ServicosPessoa = memo(ServicosPessoaImpl);

const ServicosEmpresaImpl = () => (
  <Section bg="areia-claro">
    <span className="label-eyebrow text-verde/55">Para sua empresa</span>
    <h2 className="mt-4 section-title text-verde max-w-[620px]">
      Trabalho com equipes e lideranças, a partir do dia a dia real do time.
    </h2>
    <div className="mt-8">
      {SERV_CNPJ.map((s, i) => (
        <ServicoItem key={s.titulo} s={s} i={i} />
      ))}
    </div>
  </Section>
);
export const ServicosEmpresa = memo(ServicosEmpresaImpl);

const ServicosFinalImpl = () => (
  <Section bg="verde">
    <div className="max-w-[720px] mx-auto text-center">
      <Reveal>
        <h2 className="section-title text-white">
          Não sabe qual formato faz mais sentido agora?
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-5 text-[16px] font-light text-white/85">
          Responder algumas perguntas ajuda a entender por onde começar.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <CTA href={QUIZ_CPF_URL} external variant="areia">
            Quero entender minha situação
          </CTA>
          <CTA href={QUIZ_CNPJ_URL} external variant="outlineWhite">
            Quero entender minha empresa
          </CTA>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const ServicosFinal = memo(ServicosFinalImpl);
