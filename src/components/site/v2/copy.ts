/**
 * Textos exatos da Carol para o tema editorial (/v2).
 * Não reescrever nem resumir — qualquer ajuste vem da Carol.
 */

// TODO: Substituir QUIZ_CPF_URL pela URL real
export const QUIZ_CPF_URL = "https://casa-ori-spark.lovable.app";
// TODO: Substituir QUIZ_CNPJ_URL pela URL real
export const QUIZ_CNPJ_URL = "https://casa-ori-spark.lovable.app";
// TODO: Substituir número de WhatsApp pelo número real da Carol
export const WHATSAPP_NUM = "55XXXXXXXXXX";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUM}`;
export const WHATSAPP_CONVERSA = `https://wa.me/${WHATSAPP_NUM}?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20conversa%20inicial%20na%20Casa%20Or%C3%AD`;
export const WHATSAPP_EMPRESA = `https://wa.me/${WHATSAPP_NUM}?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20da%20Casa%20Or%C3%AD%20para%20empresas`;
export const INSTAGRAM_URL = "https://instagram.com/suacasa.ori";

export const CTA_PRINCIPAL = "Quero entender o que está acontecendo";
export const LABEL_CPF = "Para você";
export const LABEL_CNPJ = "Para você líder";

export const CICLO = [
  "Surge um problema",
  "Você tenta resolver",
  "Gasta tempo e energia",
  "O problema continua",
];

export const HERO = {
  linha1: "Você tenta resolver só o que consegue ver.",
  destaque: "Mas e o que ainda está invisível?",
  lead: "A Casa Orí ajuda pessoas e empresas a investigar o que ainda não foi percebido, mas continua influenciando comportamentos, relações e resultados.",
};

export const EXPLICACAO = [
  "O que você consegue ver é apenas uma parte do problema.",
  "Mas ela não conta a história toda.",
  "Enquanto você tenta resolver só essa parte, uma outra continua influenciando a situação.",
];

export const DORES_TITULO = "Como isso costuma acontecer na prática?";

export const DORES_CPF = {
  titulo: "Na vida pessoal",
  itens: [
    "Sabe que precisa tomar uma decisão, mas continua adiando.",
    "Evita conversas difíceis, mesmo sabendo que o problema só vai aumentar.",
    "Percebe que vive situações parecidas, mas não consegue sair desse ciclo repetitivo.",
    "Sente um vazio que não consegue explicar.",
    "Tem dificuldade de dizer “não”, mesmo quando isso te sobrecarrega.",
    "Vive relações difíceis e não consegue mudar a forma como lida com elas.",
    "Coloca as necessidades dos outros em primeiro lugar e tem dificuldade de priorizar as suas.",
  ],
};

export const DORES_CNPJ = {
  titulo: "Na sua empresa",
  itens: [
    "Percebe que tudo depende de você e a equipe não consegue caminhar sozinha.",
    "Precisa repetir as mesmas orientações várias vezes, mas elas continuam não acontecendo.",
    "Resolve um problema e, pouco tempo depois, outro muito parecido aparece novamente.",
    "Passa mais tempo apagando incêndios do que pensando no crescimento da empresa.",
    "Investe tempo e energia para melhorar a equipe, mas as mudanças não se sustentam.",
    "Percebe que, mesmo dizendo a mesma coisa, cada pessoa entende de um jeito diferente.",
    "Tem dificuldade de entender o que está por trás dos comportamentos da equipe.",
  ],
};

export const ORI_INTRO = {
  titulo: "E o que fazer quando isso acontece?",
  destaque: "É justamente aqui que entra o Sistema ORI.",
  lead: "Um método autoral que conduz você por um processo para investigar aquilo que ainda não está visível, construir novas possibilidades de ação e ajustar essas mudanças à sua realidade.",
};

export type EixoV2 = {
  letra: string;
  nome: string;
  pergunta: string;
  texto: string;
  fechamento: string;
};

export const EIXOS: EixoV2[] = [
  {
    letra: "O",
    nome: "Observa",
    pergunta: "O que ainda não está visível?",
    texto:
      "Investigamos aquilo que ainda não foi percebido e continua influenciando a situação que trouxe você até aqui.",
    fechamento: "Enquanto o padrão não é visto, o problema só muda de forma.",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    pergunta: "O que muda quando essa outra parte se torna visível?",
    texto:
      "Ajudamos você a reorganizar a forma como compreende essa situação e a construir novas possibilidades de ação.",
    fechamento: "A mudança só acontece quando cada coisa assume o seu lugar.",
  },
  {
    letra: "I",
    nome: "Integra",
    pergunta: "E o que fazer a partir daqui?",
    texto:
      "Acompanhamos e ajustamos essas mudanças à sua realidade para que elas aconteçam de forma consistente.",
    fechamento:
      "Não basta entender e agir uma vez. A mudança é quando o novo caminho se torna contínuo.",
  },
];

export const AVALIACAO = {
  titulo: "Como começar?",
  linha1: "Cada situação pede um caminho diferente.",
  linha2: "Por isso, todo processo da Casa Orí começa com uma primeira conversa.",
  // TODO: Carol vai definir o texto de introdução da coluna CPF na seção Avaliação Inicial
  cpf: "Responder algumas perguntas é o primeiro passo para entender por onde começar.",
  cnpj1: "Vamos começar entendendo a realidade da sua empresa.",
  cnpj2: "Responder algumas perguntas é o primeiro passo para a nossa conversa.",
  botao: "Começar agora",
  fechamento:
    "Depois dessa primeira conversa, o próximo passo é definido de acordo com a sua necessidade.",
};

export const DEPOIMENTO_TITULO =
  "O que muda quando essa outra parte começa a aparecer?";

// TODO: Substituir depoimento placeholder pelos textos reais
export const DEPOIMENTOS = [
  {
    texto:
      "Pela primeira vez em anos, me senti realmente ouvida. Saí de cada encontro com algo concreto para fazer no dia seguinte.",
    autor: "Depoimento a substituir",
  },
  {
    texto:
      "Achei que o problema era a equipe. Era a forma como eu comunicava o que esperava dela.",
    autor: "Depoimento a substituir",
  },
  {
    texto: "O que se repetia há anos finalmente ganhou nome. E, com nome, deu para mudar.",
    autor: "Depoimento a substituir",
  },
];

export const CTA_FINAL = {
  titulo: "A mudança só começa quando algo novo pode ser visto.",
  texto:
    "Se você chegou até aqui, talvez seja o momento de começar esse processo.",
  botao: CTA_PRINCIPAL,
  altTitulo: "Ainda tentando resolver só a parte que você consegue ver?",
  altTexto: "Vamos investigar aquilo que ainda não apareceu.",
  altBotao: "Quero começar agora",
};

/* ---------------- Serviços ---------------- */

export const SERVICOS_HEAD = {
  titulo: "Diferentes formas de aplicar o Sistema ORI",
  lead: "O método continua o mesmo. O formato muda de acordo com a necessidade de cada pessoa ou empresa.",
};

export type ServicoV2 = { titulo: string; texto: string };

export const SERVICOS_CPF: ServicoV2[] = [
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

export const SERVICOS_CNPJ: ServicoV2[] = [
  {
    // TODO: Carol vai confirmar o nome "Workshops e Oficinas" para o primeiro serviço CNPJ
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

/* ---------------- Sistema ORI (página) ---------------- */

export const ORI_PAGE = {
  titulo: "O Sistema ORI",
  lead: "Um método autoral que conduz você por um processo para investigar aquilo que ainda não está visível, construir novas possibilidades de ação e ajustar essas mudanças à sua realidade.",
};

/* ---------------- Sobre ---------------- */

export const CASA = {
  titulo: "A Casa Orí",
  paragrafos: [
    "A Casa Orí é um espaço de terapia sistêmica, constelação familiar e desenvolvimento de equipes em Brasília.",
    "A palavra Casa carrega a ideia de abrigo: um lugar seguro onde você pode chegar sem precisar ter tudo organizado.",
    "Já Orí significa cabeça, direção — aquilo que te guia.",
    "A Casa Orí nasce desse encontro: um lugar onde o que pesa encontra acolhimento e o que parecia confuso começa a ganhar direção.",
  ],
};

export const CAROL = {
  pergunta: "Quem vai conduzir esse processo com você?",
  nome: "Carol Milhomens",
  credenciais: [
    "especialista em Comunicação, Comportamento e Relações humanas",
    "criadora do Sistema ORI",
  ],
  destaque:
    "Antes de fazer parte do meu trabalho, esse processo fez parte da minha vida.",
  paragrafos: [
    "Durante muito tempo, eu também tentei resolver apenas a parte que conseguia enxergar. Foi vivendo esse processo que comecei a perceber que aquilo que aparecia não contava a história inteira.",
    "Essa busca acabou se transformando na minha forma de trabalhar e deu origem ao Sistema ORI, reunindo a minha vivência, os estudos e a prática profissional.",
    "Desde 2019, conduzo pessoas e empresas nesse mesmo processo: compreender o que realmente está acontecendo, investigar aquilo que ainda não está visível e construir novas possibilidades de ação.",
  ],
};

/* ---------------- Contato ---------------- */

export const CONTATO = {
  titulo: "O caminho pode começar por uma conversa.",
  linhas: [
    "Sem precisar ter tudo entendido.",
    "Sem precisar ter todas as respostas.",
    "Só com a disponibilidade de olhar para o que está pedindo cuidado.",
  ],
  botao: "Agendar conversa inicial",
  nota: "Esse primeiro contato é simples e direto. Você pode tirar dúvidas ou agendar — sem compromisso.",
  formas: [
    {
      titulo: "Online",
      texto:
        "Disponível para todos os serviços, de acordo com a disponibilidade de agenda.",
    },
    {
      titulo: "Presencial",
      texto:
        "Disponível conforme o serviço e a disponibilidade de agenda. Asa Sul, Brasília.",
    },
  ],
  empresaTitulo: "A Casa Orí também atua em organizações.",
  empresaTexto:
    "Se o seu contato for para entender o trabalho com equipes ou lideranças, você também pode falar pelo WhatsApp.",
  empresaBotao: "Falar sobre minha empresa",
};
