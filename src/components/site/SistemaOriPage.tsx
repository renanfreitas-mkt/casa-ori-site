import { memo } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { SectionHead, QUIZ_CPF_URL } from "./kit";

type Eixo = {
  letra: string;
  nome: string;
  titulo: string;
  tensao: string;
  texto: string;
  citacao: string;
};

const EIXOS: Eixo[] = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "Identificar o que ainda não foi percebido.",
    tensao: "Enquanto isso continua invisível, o problema só muda de forma.",
    texto:
      "A investigação vai além do que você consegue enxergar sozinho. É o momento em que se passa a entender o que estava ali o tempo todo te atrapalhando, sem que você percebesse — pode ser um padrão que se repete, uma crença antiga ou um medo disfarçado. Nomear isso já muda a forma como você vê a situação inteira.",
    citacao: "Antes, você não via. Agora, não dá mais para não ver o que te trava.",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "Recolocar cada coisa no seu lugar.",
    tensao: "Com tudo fora de ordem, a mudança não tem como acontecer.",
    texto:
      "A reorganização vai além de só enxergar o invisível. É o momento em que as coisas realmente retomam seu lugar: papéis e responsabilidades se reposicionam, limites ficam mais claros, a forma de se comunicar se ajusta. Colocar cada coisa em seu lugar é o que tira a mudança do campo das ideias.",
    citacao:
      "Identificar e nomear é o início. Reorganizar é o que te tira do lugar incômodo de antes.",
  },
  {
    letra: "I",
    nome: "Integra",
    titulo: "Sustentar a mudança na prática.",
    tensao: "É isso que evita os dois extremos: desistir ou se perder em mil ações.",
    texto:
      "A integração é o momento de colocar em prática o que foi visto e reorganizado, ajustando o que não funcionar, sempre que necessário. O que realmente importa não é fazer tudo de uma vez, e sim o que cabe na sua rotina, hoje.",
    citacao:
      "Ver o que estava escondido. Colocar cada coisa no seu lugar. Fazer isso caber na sua rotina. É assim que se resolve o que estava te desgastando tanto.",
  },
];

const DIFERENCIAIS = [
  "Não para na percepção, vai até a mudança acontecer na prática",
  "Acompanha sem criar dependência",
  "Respeita o ritmo de cada pessoa ou equipe, sem perder direção",
  "Funciona nos dois contextos — vida pessoal e empresa — com a mesma estrutura",
];

const NA_VIDA = [
  "dificuldade de se comunicar",
  "sintoma que virou tão comum que você já nem estranha mais",
  "exaustão que não passa",
  "dificuldade de lidar com emoções específicas",
  "relações que sempre travam do mesmo jeito",
  "vida aparentemente completa, mas vazia por dentro",
  "insegurança de tomar decisões",
];

const NAS_EMPRESAS = [
  "conflito que se repete sempre entre as mesmas pessoas",
  "feedback que mais critica do que resolve",
  "reuniões que terminam sem ninguém saber o que fazer depois",
  "liderança perdida sobre o que fazer com a equipe",
  "cultura de sempre culpar o outro",
  "informações que se perdem entre um setor e outro",
  "não conseguir delegar sem sentir que vai dar errado",
];

const GANHOS = [
  "identificar o que antes estava mantendo os problemas no lugar",
  "conseguir se comunicar diferente em conversas conflituosas",
  "tomar melhores decisões considerando prós e contras que antes você não via",
  "sair de situações que antes pareciam sem saída",
  "sustentar mudanças adaptadas ao seu ritmo, na prática",
];

const OriEixosImpl = () => (
  <Section bg="superficie">
    <SectionHead
      kicker="Sistema ORI"
      title="Um caminho em três movimentos."
      lead="A mesma estrutura conduz processos individuais e trabalhos dentro de empresas — o que muda é o contexto, não o método."
      className="mb-14"
    />

    <div className="space-y-6 md:space-y-8">
      {EIXOS.map((e, i) => (
        <Reveal key={e.letra} delay={i * 90}>
          <article className="bg-white/75 border border-verde/12 rounded-3xl p-8 md:p-12 grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-12">
            <div>
              <span className="script text-verde block leading-none text-[64px] md:text-[80px]">
                {e.letra}
              </span>
              <span className="label-eyebrow text-verde/55 block mt-2">
                {e.nome}
              </span>
            </div>
            <div>
              <h3 className="section-title-sm text-verde">{e.titulo}</h3>
              <p className="mt-3 text-[16px] font-light text-verde/75">
                {e.tensao}
              </p>
              <p className="mt-5 text-[15px] md:text-[16px] font-light leading-relaxed text-texto-suave">
                {e.texto}
              </p>
              <p className="mt-7 border-l-2 border-areia pl-5 script text-[19px] md:text-[21px] text-verde">
                {e.citacao}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
export const OriEixos = memo(OriEixosImpl);

const OriDiferencialImpl = () => (
  <Section bg="verde">
    <SectionHead
      tone="claro"
      title="O que torna o Sistema ORI diferente"
      className="mb-12"
    />
    <ul className="grid md:grid-cols-2 gap-5 md:gap-6">
      {DIFERENCIAIS.map((d, i) => (
        <Reveal key={i} delay={i * 80} as="li">
          <div className="border border-areia/25 rounded-2xl px-7 py-6 text-white/90 font-light leading-relaxed text-[16px] h-full">
            {d}
          </div>
        </Reveal>
      ))}
    </ul>
  </Section>
);
export const OriDiferencial = memo(OriDiferencialImpl);

function ListaCol({ titulo, itens }: { titulo: string; itens: string[] }) {
  return (
    <div>
      <h3 className="section-title-sm text-verde">{titulo}</h3>
      <ul className="mt-6 space-y-3">
        {itens.map((t, i) => (
          <Reveal key={i} delay={i * 45} as="li">
            <div className="flex gap-3 text-[15px] font-light leading-relaxed text-texto-suave">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-areia shrink-0" />
              <span>{t}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

const OriAplicacaoImpl = () => (
  <Section bg="areia-claro">
    <SectionHead
      title="Onde o Sistema ORI costuma ser aplicado"
      className="mb-12"
    />
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative">
      <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-verde/12 -translate-x-1/2" />
      <ListaCol titulo="Na vida pessoal" itens={NA_VIDA} />
      <ListaCol titulo="Nas empresas" itens={NAS_EMPRESAS} />
    </div>
  </Section>
);
export const OriAplicacao = memo(OriAplicacaoImpl);

const OriGanhosImpl = () => (
  <Section bg="superficie">
    <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
      <SectionHead title="O que você ganha ao longo do caminho" />
      <ol className="space-y-4">
        {GANHOS.map((g, i) => (
          <Reveal key={i} delay={i * 70} as="li">
            <div className="flex gap-5 items-baseline border-b border-verde/10 pb-4">
              <span className="script text-verde/45 text-[22px] leading-none w-8 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[16px] font-light leading-relaxed text-texto-suave">
                {g}
              </span>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </Section>
);
export const OriGanhos = memo(OriGanhosImpl);

const OriFechamentoImpl = () => (
  <Section bg="verde-noite">
    <div className="max-w-[720px] mx-auto text-center">
      <Reveal>
        <p className="script text-areia text-[26px] md:text-[34px] leading-snug">
          A estrutura está aqui.
          <br />O Sistema ORI organiza o caminho — e quem caminha é você.
        </p>
      </Reveal>
      <Reveal delay={160}>
        <div className="mt-10">
          <CTA href={QUIZ_CPF_URL} external variant="areia">
            Por onde eu começo?
          </CTA>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const OriFechamento = memo(OriFechamentoImpl);
