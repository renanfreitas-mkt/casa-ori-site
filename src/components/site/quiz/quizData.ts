export type Afirmacao = { texto: string; camadas: string[]; nunca: string };

export const AFIRMACOES: Afirmacao[] = [
  {
    texto: "Tenho dificuldade para entender o que estou sentindo.",
    camadas: [
      "Aprendi a ignorar o que sinto e focar apenas no que precisa ser feito.",
      "Nem sempre consigo identificar ou dar nome ao que estou sentindo.",
      "Existem sentimentos que prefiro evitar porque não gosto de senti-los.",
    ],
    nunca: "Nunca tinha relacionado isso à minha dificuldade de entender o que sinto.",
  },
  {
    texto: "Me sinto sobrecarregado — parece que nunca é suficiente.",
    camadas: [
      "Tenho dificuldade de pedir ajuda porque parece que não dei conta sozinho.",
      "Preciso estar sempre resolvendo alguma coisa para me sentir útil ou valorizado.",
      "Sinto que preciso dar conta de tudo que esperam de mim para não decepcionar ninguém.",
    ],
    nunca: "Nunca tinha relacionado isso à minha sobrecarga.",
  },
  {
    texto: "Costumo colocar as necessidades dos outros acima das minhas.",
    camadas: [
      "Aprendi que é egoísmo se colocar em primeiro lugar.",
      "Quando escolho cuidar de mim, sinto que estou abandonando alguém.",
      "Talvez eu nem saiba quais são as minhas necessidades, por isso me ocupo com as dos outros.",
    ],
    nunca: "Nunca tinha relacionado isso à forma como me coloco nas minhas relações.",
  },
  {
    texto: "Sinto que vivo os mesmos problemas, só mudam as pessoas ou as situações.",
    camadas: [
      "Tenho dificuldade de perceber por que continuo repetindo algumas histórias.",
      "Percebo que são problemas muito parecidos com os que pessoas da minha família já viveram.",
      "Parece que estou tentando resolver algo que nunca consigo concluir.",
    ],
    nunca: "Nunca tinha relacionado isso à repetição de alguns padrões na minha vida.",
  },
  {
    texto: "Costumo deixar de falar o que penso para evitar conflitos.",
    camadas: [
      "Tenho medo de que uma conversa difícil estrague a relação.",
      "Sinto que preciso escolher entre ser sincero e manter a paz.",
      "Tenho receio de que as pessoas deixem de gostar de mim se eu disser o que realmente penso.",
    ],
    nunca: "Nunca tinha relacionado isso à minha dificuldade de me posicionar.",
  },
  {
    texto: "Tenho relações que me desgastam muito, mas insisto nelas.",
    camadas: [
      "Tenho receio de perder a relação se eu me posicionar ou colocar limites.",
      "Muitas vezes aceito situações que me machucam porque acredito que relacionamentos são assim mesmo.",
      "Tenho medo de ficar sozinho se algumas dessas relações acabarem.",
    ],
    nunca: "Nunca tinha relacionado isso ao desgaste que sinto nas minhas relações.",
  },
  {
    texto: "Tenho dificuldade para dizer não, mesmo quando preciso.",
    camadas: [
      "Tenho medo de parecer egoísta ao negar algo a alguém.",
      "Sinto que as necessidades dos outros são sempre mais importantes que as minhas.",
      "Vou me sentir culpado se eu disser não e as pessoas se afastarem de mim.",
    ],
    nunca: "Nunca tinha relacionado isso à minha dificuldade de dizer não.",
  },
  {
    texto: "Parece que estou vivendo uma vida que não escolhi.",
    camadas: [
      "Tenho a sensação de estar vivendo o papel que esperam de mim.",
      "Sinto culpa quando penso em escolher algo que faz sentido para mim.",
      "Eu até sei o que gostaria de fazer, mas tenho medo de ser julgado por isso.",
    ],
    nunca: "Nunca tinha relacionado isso à forma como estou vivendo minha vida.",
  },
];

export type Resultado = { titulo: string; texto: string[]; proximo: string };

export const RESULTADOS: Record<1 | 2 | 3, Resultado> = {
  1: {
    titulo: "Você acabou de perceber algo importante.",
    texto: [
      "Muitas das situações que te incomodam hoje podem estar ligadas a questões que você nunca tinha relacionado antes.",
      "Isso não significa que seus problemas sejam maiores ou menores do que você imaginava. Significa que talvez exista mais coisa por trás deles do que parecia à primeira vista.",
      "Quando começamos a enxergar novas camadas, também começamos a perceber que tentar resolver apenas o que aparece nem sempre é suficiente.",
      "Talvez esse seja o momento de olhar para essas questões com mais curiosidade e menos cobrança.",
    ],
    proximo:
      "Se algo que você marcou aqui ficou ecoando, talvez valha a pena conversar sobre isso com mais calma.",
  },
  2: {
    titulo: "Você já percebe muita coisa.",
    texto: [
      "Ao responder às perguntas, você provavelmente reconheceu padrões, medos, culpas, responsabilidades e conflitos que já fazem parte da sua história.",
      "Mas existe uma diferença importante entre perceber e transformar.",
      "Muitas pessoas conseguem identificar exatamente o que acontece com elas — e ainda assim continuam vivendo os mesmos ciclos.",
      "Nem sempre a dificuldade está em entender o problema. Às vezes, está em acessar aquilo que continua sustentando esse problema.",
    ],
    proximo:
      "Perceber é o começo. Mas o que sustenta o que você já percebe ainda pode ser olhado com mais profundidade.",
  },
  3: {
    titulo: "Existe algo mais profundo conectando tudo isso.",
    texto: [
      "Sobrecarga, dificuldade de dizer não, culpa, medo de decepcionar, relações desgastantes, dificuldade de escolher o próprio caminho...",
      "Muitas vezes esses problemas parecem separados. Mas nem sempre são.",
      "Quando diferentes áreas da vida começam a apresentar dificuldades parecidas, vale a pena se perguntar se existe algo mais profundo conectando tudo isso.",
      "Talvez o que você está vivendo hoje não seja uma coleção de problemas isolados. Talvez seja a manifestação de algo maior que ainda está pedindo para ser compreendido.",
    ],
    proximo:
      "O que aparece em lugares diferentes da sua vida pode ter uma origem em comum. Esse é exatamente o tipo de coisa que vale olhar com mais atenção.",
  },
};

export function calcularResultado(afirmacoes: number, camadas: number, nunca: number): 1 | 2 | 3 {
  if (afirmacoes > 0 && camadas >= afirmacoes * 2) return 3;
  if (nunca < afirmacoes * 0.3 && camadas >= afirmacoes) return 2;
  return 1;
}
