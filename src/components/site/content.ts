/**
 * Fonte única dos textos do site.
 * Usado pelo tema editorial (/v2). Ao ajustar a copy, ajuste aqui.
 */

export const QUIZ_CPF_URL = "https://casa-ori-spark.lovable.app";
export const QUIZ_CNPJ_URL = "https://casa-ori-spark.lovable.app";
export const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";
export const INSTAGRAM_URL = "https://instagram.com/suacasa.ori";

export const HERO = {
  kicker: "Terapia sistêmica · Constelação familiar · Empresas",
  titulo: "Algo está pesando,",
  tituloEm: "mas e o que ainda está invisível?",
  lead: "Casa Orí é um espaço de escuta atenta em Brasília, onde o que pesa encontra espaço e o que parecia confuso começa a ganhar direção.",
  ctaCpf: "Quero entender o que está acontecendo",
  ctaCnpj: "Sou líder e quero falar sobre minha equipe",
};

export const EXPLICACAO = {
  titulo: "O que você consegue ver é apenas",
  tituloEm: "uma parte do problema.",
  meio: "Mas ela não conta a história toda.",
  fim: "Enquanto você tenta resolver só essa parte, uma outra continua influenciando a situação.",
};

export const DORES_CPF = [
  "Sabe que precisa tomar uma decisão, mas continua adiando.",
  "Evita conversas difíceis, mesmo sabendo que o problema só vai aumentar.",
  "Percebe que vive situações parecidas, mas não consegue sair desse ciclo repetitivo.",
  "Sente um vazio que não consegue explicar.",
  "Tem dificuldade de dizer “não”, mesmo quando isso te sobrecarrega.",
  "Vive relações difíceis e não consegue mudar a forma como lida com elas.",
  "Coloca as necessidades dos outros em primeiro lugar e tem dificuldade de priorizar as suas.",
];

export const DORES_CNPJ = [
  "Percebe que tudo depende de você e a equipe não consegue caminhar sozinha.",
  "Precisa repetir as mesmas orientações várias vezes, mas elas continuam não acontecendo.",
  "Resolve um problema e, pouco tempo depois, outro muito parecido aparece novamente.",
  "Passa mais tempo apagando incêndios do que pensando no crescimento da empresa.",
  "Investe tempo e energia para melhorar a equipe, mas as mudanças não se sustentam.",
  "Percebe que, mesmo dizendo a mesma coisa, cada pessoa entende de um jeito diferente.",
  "Tem dificuldade de entender o que está por trás dos comportamentos da equipe.",
];

export type Eixo = {
  letra: string;
  nome: string;
  titulo: string;
  tensao: string;
  texto: string;
  citacao: string;
};

export const EIXOS: Eixo[] = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "Identificar o que está invisível.",
    tensao: "Enquanto isso continua invisível, o problema só muda de forma.",
    texto:
      "A investigação vai além do que você consegue enxergar sozinho. É o momento em que se passa a entender o que estava ali o tempo todo te atrapalhando, sem que você percebesse — pode ser um padrão que se repete, uma crença antiga ou um medo disfarçado. Nomear isso já muda a forma como você vê a situação inteira.",
    citacao: "Antes, você não via. Agora, não dá mais para não ver o que te trava.",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "Recolocar cada coisa no lugar.",
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
      "Ver o que estava escondido. Colocar cada coisa no seu lugar. Fazer isso caber na sua rotina.",
  },
];

/** Eixos O / R / I na versão da dobra da home. */
export const EIXOS_HOME: Eixo[] = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "O que ainda não está visível?",
    tensao:
      "Investigamos aquilo que ainda não foi percebido e continua influenciando a situação que trouxe você até aqui.",
    texto: "",
    citacao: "",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "O que muda quando essa outra parte se torna visível?",
    tensao:
      "Ajudamos você a reorganizar a forma como compreende essa situação e a construir novas possibilidades de ação.",
    texto: "",
    citacao: "",
  },
  {
    letra: "I",
    nome: "Integra",
    titulo: "E o que fazer a partir daqui?",
    tensao:
      "Acompanhamos e ajustamos essas mudanças à sua realidade para que elas aconteçam de forma consistente.",
    texto: "",
    citacao: "",
  },
];

export const DIFERENCIAIS = [
  "Não para na percepção, vai até a mudança acontecer na prática",
  "Acompanha sem criar dependência",
  "Respeita o ritmo de cada pessoa ou equipe, sem perder direção",
  "Funciona nos dois contextos — vida pessoal e empresa — com a mesma estrutura",
];

export const NA_VIDA = [
  "dificuldade de se comunicar",
  "sintoma que virou tão comum que você já nem estranha mais",
  "exaustão que não passa",
  "dificuldade de lidar com emoções específicas",
  "relações que sempre travam do mesmo jeito",
  "vida aparentemente completa, mas vazia por dentro",
  "insegurança de tomar decisões",
];

export const NAS_EMPRESAS = [
  "conflito que se repete sempre entre as mesmas pessoas",
  "feedback que mais critica do que resolve",
  "reuniões que terminam sem ninguém saber o que fazer depois",
  "liderança perdida sobre o que fazer com a equipe",
  "cultura de sempre culpar o outro",
  "informações que se perdem entre um setor e outro",
  "não conseguir delegar sem sentir que vai dar errado",
];

export const GANHOS = [
  "identificar o que antes estava mantendo os problemas no lugar",
  "conseguir se comunicar diferente em conversas conflituosas",
  "tomar melhores decisões considerando prós e contras que antes você não via",
  "sair de situações que antes pareciam sem saída",
  "sustentar mudanças adaptadas ao seu ritmo, na prática",
];

export type Servico = {
  titulo: string;
  formato: string;
  ancora: string;
  paragrafos: string[];
};

export const SERV_CPF: Servico[] = [
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

export const SERV_CNPJ: Servico[] = [
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
    formato: "Encontros semanais · Presencial · 3 meses · Para lideranças e gestores",
    ancora:
      "Não basta saber o que fazer, é preciso saber liderar as pessoas que fazem.",
    paragrafos: [
      "O programa combina conteúdo — tipos e estilos de liderança, comunicação assertiva, escuta, feedback, inteligência emocional, dentre outros — com acompanhamento da aplicação prática ao longo de alguns meses. Não é um treinamento pontual: é um acompanhamento para que as mudanças se sustentem dentro da empresa.",
    ],
  },
];

export const PILARES = [
  {
    titulo: "Atenção sem julgamento",
    texto:
      "Aqui, o que você traz não é avaliado como certo ou errado, bom ou ruim. Sua história é respeitada e recebida como é, sem precisar ser justificada.",
  },
  {
    titulo: "Profundidade acessível",
    texto:
      "Ir além do problema aparente não significa complicar. A explicação chega em uma linguagem clara para que você consiga entender e aplicar.",
  },
  {
    titulo: "Escuta com movimento",
    texto:
      "Falar sobre o que incomoda importa, mas não é onde o processo termina. A escuta aqui sempre aponta pra algo: um próximo passo, uma pergunta de reflexão, uma ação pra experimentar.",
  },
  {
    titulo: "Direção e autorresponsabilidade",
    texto: "A direção é dada. Colocá-la em prática é parte que cabe a você.",
  },
];

export const PREMISSAS = [
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

export const NOME = [
  { palavra: "Casa", texto: "lugar — onde você pode ser você, sem precisar esconder nada." },
  { palavra: "Orí", texto: "cabeça, direção — aquilo que te guia." },
  {
    palavra: "=",
    texto:
      "A segurança de uma escuta atenta, onde o que pesa encontra espaço e o que parecia confuso começa a ganhar direção.",
  },
];

export const CAROL = {
  titulo: "Quem conduz",
  nome: "Carol Milhomens",
  paragrafos: [
    "Antes de fazer parte do meu trabalho, esse processo fez parte da minha vida.",
    "Durante muito tempo, eu também tentei resolver apenas a parte que conseguia enxergar. Foi vivendo esse processo que comecei a perceber que aquilo que aparecia não contava a história inteira.",
    "Essa busca acabou se transformando na minha forma de trabalhar e deu origem ao Sistema ORI, reunindo a minha vivência, os estudos e a prática profissional.",
    "Desde 2019, conduzo pessoas e empresas nesse mesmo processo: compreender o que realmente está acontecendo, investigar aquilo que ainda não está visível e construir novas possibilidades de ação.",
  ],
};

export const DEPOIMENTOS = [
  {
    texto:
      "À medida que nos ouve, Carol consegue organizar nossos pensamentos de forma tão clara que a raiz do problema rapidamente se torna evidente. Acolhe sem julgamentos, escuta com presença e conduz cada atendimento com paciência e sabedoria. A sensação é de que chegamos de um jeito e saímos completamente diferentes: mais leves e alinhados com nós mesmos.",
    autor: "Bruna Cruz",
    inicial: "B",
  },
  {
    texto:
      "Carol tem uma sensibilidade única para acolher, perceber e sentir o outro, além de uma habilidade única quando o assunto é comunicação. Conduz conversas difíceis com uma leveza que só ela tem. Através da Constelação Familiar, teve grande responsabilidade na resolução de processos pessoais desafiadores. Sua entrega amorosa é sempre um lugar seguro para se estar.",
    autor: "Luana F.",
    inicial: "L",
  },
  {
    texto:
      "Eu já havia feito 2 Constelações Familiares com profissionais diferentes. Mas o seu trabalho me impressionou pela profundidade, pela abrangência e, principalmente, pelo resultado. Estou profundamente agradecida por seus esclarecimentos e deixo um pedido: por favor, continue seus estudos pois há muita gente pra você ajudar.",
    autor: "Marta F.",
    inicial: "M",
  },
  {
    texto:
      "Ter um atendimento com Carol é chegar pesando meia tonelada e sair leve igual uma pena. Carol nos mostra o que é preciso ter para levar a vida de forma mais leve. Resumindo, Carol é nosso segundo cérebro junto do seu novo espaço Orí que completa toda a cena.",
    autor: "Thiago C.",
    inicial: "T",
  },
];

export const CTA_FINAL = {
  cpf: {
    titulo: "Para você",
    texto:
      "Algo está pesando, se repetindo ou travando — e você quer entender o que está por trás disso.",
    cta: "Quero entender minha situação",
  },
  cnpj: {
    titulo: "Para você líder",
    texto:
      "A equipe não engrena, os conflitos se repetem e a comunicação trava os resultados.",
    cta: "Quero entender minha empresa",
  },
};

export const CONTATO = {
  kicker: "Contato",
  titulo: "O primeiro passo é entender o que está acontecendo.",
  lead: "Antes de escolher um serviço, vale entender melhor a sua situação. São poucas perguntas e, no fim, você recebe uma orientação sobre o caminho que faz mais sentido agora.",
  diretoTitulo: "Prefere falar direto com a Carol?",
  diretoTexto:
    "Se você já sabe o que precisa, ou simplesmente prefere conversar antes de responder qualquer coisa, o WhatsApp está aberto. Atendimentos presenciais em Brasília e online para todo o Brasil.",
  diretoCitacao: "Uma conversa já muda o ponto de partida.",
};

/** Copy aprovada especificamente para o tema editorial (/v2). */
export const V2_COPY = {
  home: {
    titulo: "Mas o que ainda está invisível?",
    subtitulo:
      "Enquanto você tenta resolver só essa parte, uma outra continua influenciando a situação. O que muda quando você começa a ver o problema por completo?",
    metodoTitulo: "O método continua o mesmo.",
    metodoTexto:
      "É o formato que muda de acordo com a sua necessidade ou da sua empresa.",
    ctaCpf: "Quero entender minha situação",
    ctaCnpj: "Quero entender minha empresa",
    heroDestaque:
      "Surge um problema. Você tenta resolver. Gasta tempo e energia e o problema continua.",
    heroLinhas: [
      "Você tenta resolver só o que consegue ver.",
      "Mas e o que ainda está invisível?",
      "A Casa Orí ajuda pessoas e empresas a investigar o que ainda não foi percebido, mas continua influenciando comportamentos, relações e resultados.",
    ],
    ctaUnica: "Quero entender o que está acontecendo",
    doresTitulo: "Como isso costuma acontecer na prática?",
  },
  servicos: {
    introducao:
      "Você já sabe que algo precisa mudar. Cada situação pede um caminho diferente. Por isso, o primeiro passo é sempre entender melhor o que está acontecendo, antes de decidirmos juntos por onde seguir.",
    cta: "Quero entender meu momento",
  },
  ori: {
    titulo: "Sistema ORI",
    fechamento:
      "A estrutura está aqui. O sistema ORI organiza o caminho e quem caminha é você.",
    cta: "Quero dar o primeiro passo",
  },
  sobre: {
    especialidade:
      "Especialista em Comunicação, Comportamento e Relações Humanas, criadora do Sistema ORI.",
    bio: [
      "Antes de fundar a Casa Orí, atuei por 4 anos com comunicação corporativa, passando por cerca de 20 empresas de diferentes portes e segmentos. Foi nesse caminho que percebi como comportamento, comunicação e história pessoal estão sempre conectados, mesmo dentro de uma empresa.",
      "Em paralelo, com a formação em Constelação Familiar, a combinação entre a prática em comunicação e o olhar sistêmico me abriu caminhos para começar a atender em 2019 e a abrir a Casa Orí em 2024. De lá pra cá, já foram mais de 900 atendimentos conduzidos. Foi essa prática que deu origem ao método que estrutura esse trabalho hoje — o Sistema ORI.",
    ],
    fechamento:
      "Qual desconforto você escolhe: o que já te acompanha há tanto tempo, ou o que te leva à mudança que você busca?",
    cta: "Quero essa mudança",
  },
  contato: {
    titulo: "Próximos passos",
    texto:
      "O primeiro passo é sempre olhar para o que está pedindo atenção. Sem precisar ter tudo entendido. Sem precisar ter todas as respostas. Só a disponibilidade de investigar. Para entendermos a sua situação e definirmos o melhor caminho, responda algumas perguntas rápidas.",
    cpfTexto: "Responder algumas perguntas me ajuda a entender o seu momento.",
    cpfCta: "Quero entender minha situação",
    cnpjTexto: "Algumas perguntas rápidas, pra gente entender o cenário do seu negócio.",
    cnpjCta: "Quero entender minha empresa",
    whatsapp:
      "Se você já sabe o que precisa e quer agendar direto, é só chamar no WhatsApp. Online ou presencial, conforme sua necessidade.",
  },
} as const;
