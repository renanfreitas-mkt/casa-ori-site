/** Quiz para empresas (CNPJ) — textos do documento da Carol. */
export type PerfilEmpresa = 0 | 1 | 2;

export const SITUACOES_EMPRESA = [
  {
    texto: "“Já expliquei isso mil vezes e o time não entende.”",
    reflexao:
      "Pessoas diferentes escutam e entendem de formas diferentes. Por isso, quando a mesma mensagem não é compreendida repetidas vezes, o problema não é de quem ouve. É a forma como ela está sendo passada. Cabe a quem lidera perceber isso e adaptar a linguagem. Sem isso, cada repetição é retrabalho, gasto de tempo e entrega que atrasa.",
    opcoes: [
      "Nunca tinha pensado que o problema podia estar na minha forma de falar.",
      "Já pensei nisso, mas continuo me comunicando do mesmo jeito.",
      "Já tentei mudar minha forma de falar e, mesmo assim, não resolveu.",
    ],
  },
  {
    texto: "“Meu time não colabora entre si.”",
    reflexao:
      "Quem você costuma reconhecer? Quem resolve um problema sozinho, ou quem pede ajuda e divide o crédito com um colega? Se resolver sozinho é o que chama atenção e pedir ajuda não é bem visto, o time aprende rápido qual dos dois comportamentos vale mais a pena. Colaboração não nasce de discurso, nasce do que você reconhece e valoriza na prática.",
    opcoes: [
      "Nunca tinha percebido que a quem direciono o reconhecimento poderia interferir tanto.",
      "Já enxergo isso, mas ainda acho que quem resolve sozinha é que precisa reconhecimento.",
      "Já tentei valorizar mais o trabalho em conjunto e, ainda assim, o time continua nessa dinâmica mais individual.",
    ],
  },
  {
    texto: "“Coloquei uma pessoa em um cargo de confiança (ou como sócia), mas ela não age como tal.”",
    reflexao:
      "Esse cargo foi dado porque ela tem perfil para sustentar as responsabilidades exigidas? Ou por conveniência sua, para dividir o peso e tirar obrigações das suas costas? Se foi por conveniência, talvez você esteja exigindo que essa pessoa seja melhor do que ela realmente pode ser agora e cobrando um comportamento que ela nunca teve a chance de aprender.",
    opcoes: [
      "Não tinha pensado ainda que talvez tenha sido mais pela minha conveniência do que pelas habilidades dela.",
      "Sei que foi por conveniência, mas ainda é mais cômodo manter assim do que resolver, mesmo que isso me custe reclamar toda semana.",
      "Levei em consideração sim as habilidades dela, mas a pessoa ainda continua sem agir como eu preciso que ela aja.",
    ],
  },
  {
    texto: "“Meu time não tem iniciativa.”",
    reflexao:
      "Quando alguém toma uma iniciativa diferente do que você tinha ordenado, como você interpreta? Que essa pessoa não respeita as suas ideias? Que ela não te escuta, ou insiste em algo que não é o certo? Talvez aqui o que pese não é a iniciativa em si, é o quanto você leva essa “ideia diferente” para o lado pessoal. Enquanto essas divergências forem interpretadas como afronta, ninguém arrisca de novo.",
    opcoes: [
      "Nunca tinha me dado conta de que a falta de iniciativa pudesse vir de como eu reajo às novas ideias.",
      "Já enxergo isso, mas é automático levar para o pessoal quando alguém sugere algo diferente do que eu pedi.",
      "Já estou tentando não levar para o pessoal, mas o time continua só fazendo o que eu mando.",
    ],
  },
  {
    texto: "“Só fico sabendo de um problema quando ele já virou uma crise.”",
    reflexao:
      "Quando alguém te traz um problema da empresa, como você costuma reagir? Faz cara feia, solta um “mais essa agora” ou trata como se a pessoa tivesse atrapalhado o seu dia? Se sim, o time aprende rápido que apontar um problema só vai trazer mais problemas — e passa a esconder até a bomba estourar. O que poderia ser resolvido ainda pequeno, vira retrabalho, prejuízo e até cliente perdido.",
    opcoes: [
      "Nunca tinha relacionado minha reação aos problemas ao fato de o time esconder as coisas de mim.",
      "Reconheço isso, mas não consigo agir diferente quando alguém me traz um problema.",
      "Já tento segurar minha reação e, mesmo assim, só fico sabendo quando a bomba estoura.",
    ],
  },
  {
    texto: "“Contratei alguém sênior, mas ele age como júnior.”",
    reflexao:
      "Será que o fato dessa pessoa saber mais do que você em alguma área te incomoda? Como se o domínio dela sobre aquele assunto colocasse vocês em concorrência, e não no mesmo time. Por isso você aumenta o controle e limita a autonomia justamente onde ela deveria ser mais livre, mesmo que isso te custe caro porque o cargo nunca chega a ser exercido de verdade.",
    opcoes: [
      "Nunca tinha enxergado que ela agir como júnior fosse uma consequência do alto controle que exerço.",
      "Tenho consciência disso, mas ainda limito a autonomia dela por causa dessa concorrência que sinto.",
      "Já tentei dar mais autonomia, mas ela continua sem ocupar o lugar de sênior.",
    ],
  },
  {
    texto: "“Meu time vive em conflito e sempre sobra para a empresa.”",
    reflexao:
      "Quando surge um atrito entre duas pessoas, sua primeira reação é evitar entrar no assunto — “isso não é comigo, eles que se resolvam”? Ou você entra, mas costuma tomar partido de um dos lados? Quando um conflito entre o seu time começa a gerar prejuízos dentro da empresa, ele deixa de ser um problema só das pessoas envolvidas e passa a ser responsabilidade sua conduzir, ou de algum responsável. Só não dá para continuar tirando o corpo fora.",
    opcoes: [
      "Nunca me ocorreu que essa seria uma responsabilidade minha.",
      "Já percebi que pode ser responsabilidade minha, mas ainda evito esse papel porque não sei como fazer.",
      "Já tentei ajudar a resolver, mas parece que os conflitos se mantêm ou até pioram.",
    ],
  },
  {
    texto: "“As pessoas não vestem a camisa da empresa.”",
    reflexao:
      "Quão dispensável você deixa parecer que as pessoas da sua equipe são? Quando quer que alguém melhore, você mostra o quanto o trabalho do outro é melhor que o dele? E o reconhecimento do que cada um agrega para a empresa, você lembra de fazer? “Vestir a camisa” só acontece quando a pessoa sente que pertence a um grupo e é valorizada nele, e não que está só de passagem. Não dá para cobrar pertencimento de um time que é tratado como peça de reposição.",
    opcoes: [
      "Nunca tinha associado que fazer alguém se sentir dispensável ou comparado pudesse interferir na sensação de pertencimento dessa pessoa.",
      "Já vejo isso, mas ainda não achei outro jeito de fazer uma pressão neles.",
      "Já tentei mudar esse tom e, mesmo assim, o time parece desconectado da empresa.",
    ],
  },
  {
    texto: "“Recompenso em dinheiro quem se destaca, mas parece que não é o suficiente.”",
    reflexao:
      "Para você, receber dinheiro é a melhor forma de ser reconhecido? Então é natural pensar que funciona assim para todo mundo. Mas essa é a grande armadilha do “trate o outro como você gostaria de ser tratado”. Nem toda pessoa se sente reconhecida só por ganhar mais: tem quem precise receber um elogio verbal, ser mais escutado ou ganhar mais dias de folga, por exemplo. O ideal é tratar o outro como ele gostaria de ser tratado, e não como você gostaria.",
    opcoes: [
      "Não imaginava que existissem formas tão diferentes de reconhecer uma pessoa.",
      "Até percebo isso, mas ainda acho que dinheiro é a melhor forma de reconhecer as pessoas.",
      "Já tentei variar a forma de reconhecer, mas não sei se acertei muito nisso.",
    ],
  },
  {
    texto: "“O time só rende bem quando estou por perto.”",
    reflexao:
      "Será que o motivo desse rendimento é medo, e não compromisso? Quando a autoridade vem de intimidação, a entrega existe só enquanto alguém está de olho e desaparece assim que a pressão sai de perto. Performance que dura de verdade não nasce de medo. Nasce de uma liderança que consegue despertar compromisso no seu time, com a real noção das suas responsabilidades e prazos.",
    opcoes: [
      "Nunca tinha associado essa inconstância de rendimento à pressão que eu faço.",
      "Já percebi isso, mas ainda uso a pressão da minha presença pra garantir que as coisas sejam feitas.",
      "Já tentei gerar esse compromisso, mas o rendimento ainda cai quando não estou por perto.",
    ],
  },
];

const PILARES = [
  "Primeiro, liderança. Você é a cabeça da sua empresa. Segundo um estudo da Gallup (2025), 70% do engajamento da equipe pode ser atribuída ao gestor. Isso significa que seu time pode até seguir o que você fala, mas é o que você coloca em prática que faz a diferença.",
  "Depois, comunicação. Ela é a chave que transforma visão em ação, planejamento em resultado, investimento em time que entende o que precisa ser feito. Não se trata de falar bem ou não, é sobre quanto da sua operação trava, atrasa ou se perde por falta de uma linguagem clara dentro da sua empresa.",
];

export const PERFIS_EMPRESA: Record<PerfilEmpresa, { titulo: string; texto: string[]; cta: string }> = {
  0: {
    titulo: "Esperar que a equipe mude não resolve",
    texto: [
      "Percebe como só esperar que a sua equipe mude não resolve os problemas que te deixam exausto? Cada ponto que você acabou de reconhecer tem uma raiz em comum: o jeito como você lidera e se comunica com o time.",
      ...PILARES,
      "E a boa notícia? Essa decisão de resolver o que te deixa exausto está nas suas mãos. E você não precisa fazer isso sozinho: a Casa Orí existe justamente para te guiar a construir esses dois pilares, juntos.",
    ],
    cta: "Quero começar",
  },
  1: {
    titulo: "A conveniência está custando caro",
    texto: [
      "Ainda que você já tenha percebido sua responsabilidade na resolução dos problemas da sua empresa, parece estar mais conveniente manter tudo como está, mesmo que isso te custe retrabalho, desgaste e reclamações que se repetem.",
      "Não adianta fazer tudo igual e esperar resultados diferentes. A resposta não está em cobrar mais da equipe, está em como você lidera e se comunica com ela.",
      ...PILARES,
      "O que ainda falta para você perceber que essa conveniência está te custando caro?",
      "Quando decidir sair dela, lembre-se de que não precisa fazer isso sozinho: a Casa Orí existe justamente para te guiar a construir esses dois pilares essenciais para resolver os problemas da sua empresa.",
    ],
    cta: "Cansei da conveniência",
  },
  2: {
    titulo: "Falta uma visão de fora",
    texto: [
      "Você já percebeu a sua responsabilidade na resolução dos problemas da sua empresa e já tentou mudar a forma como lidera e se comunica com o time. Mesmo assim, os resultados não vieram como esperado.",
      "Liderança e comunicação são difíceis de calibrar de dentro do próprio processo. Quem está dentro do problema dificilmente enxerga com clareza o que está travando a própria forma de liderar e de se comunicar — é um ponto cego estrutural, não uma falha sua.",
      "Sabe o que pode estar faltando? Uma visão de fora que enxergue o que você, de dentro, não consegue ver sozinho ainda. A Casa Orí existe justamente para ser essa visão e te ajudar a calibrar esses dois pilares até eles gerarem os resultados que a sua empresa precisa hoje.",
    ],
    cta: "Preciso dessa visão de fora",
  },
};

/** Perfil = resposta mais escolhida. Empate: vale a de menor consciência (0 → 1 → 2). */
export function perfilEmpresa(respostas: PerfilEmpresa[]): PerfilEmpresa {
  const n = [0, 0, 0];
  for (const r of respostas) n[r]++;
  const max = Math.max(...n);
  return n.indexOf(max) as PerfilEmpresa;
}
