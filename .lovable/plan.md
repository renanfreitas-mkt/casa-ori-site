# Alinhar os textos do novo tema (/v2) com a revisão da Carol

Comparei página por página o novo tema com o documento de revisão. A estrutura e o visual ficam exatamente como estão — só entram/são corrigidos textos, sempre nos blocos que já existem.

## O que já está correto

Serviços (todos os 7, com formato, frase-âncora e descrição), Sistema ORI (O/R/I, diferenciais, listas "Na vida pessoal" e "Nas empresas", ganhos), pilares, premissas, significado do nome, dores CPF/CNPJ.

## O que está faltando ou diferente

### Home
- Fechamento CPF/CNPJ com o texto do documento:
  - Para você: "Ainda tentando resolver só a parte que você consegue ver? Vamos investigar aquilo que ainda não apareceu." → botão "Quero entender minha situação".
  - Para você líder: "Ainda tentando resolver só o que você consegue ver na sua empresa? Vamos investigar o que ainda está influenciando os resultados." → botão "Quero entender minha empresa".
- Ponte depois dos dois públicos: "O método continua o mesmo. É o formato que muda de acordo com a sua necessidade ou da sua empresa." + botão "Quero conhecer o método" (aproveita o bloco de Serviços que já existe na home).
- Bloco de depoimentos com o título "O que muda quando você começa a ver o problema por completo?".
- Bloco do podcast "Continue essa conversa…" com a descrição: "Conversas sobre novas formas de entender e lidar com o que estamos vivendo no dia a dia." (hoje o tema novo não tem o podcast).

### Sistema ORI
- Frase da terceira citação completa: "…Fazer isso caber na sua rotina. É assim que se resolve o que estava te desgastando tanto."
- Fechamento da página: "A estrutura está aqui. O Sistema ORI organiza o caminho — e quem caminha é você." + botão "Por onde eu começo?".

### Sobre
- Linha de especialidade da Carol: "especialista em Comunicação, Comportamento e Relações Humanas · criadora do Sistema ORI".
- Primeiro parágrafo da bio, hoje resumido, volta ao texto do documento (4 anos com comunicação corporativa, cerca de 20 empresas de diferentes portes e segmentos).
- Título das premissas passa a ser "Antes de começar, vale alinhar alguns pontos"; o item "O que você vive hoje não começou agora" recebe a frase completa.
- Fechamento da aba: "Qual desconforto você escolhe: o que já te acompanha há tanto tempo, ou o que te leva à mudança que você busca?" + botão "Quero essa mudança".

### Contato
- Título "próximos passos" e abertura em destaque "Nem sempre dá pra saber por onde começar sozinho."
- As três linhas "Sem precisar ter tudo entendido. / Sem precisar ter todas as respostas. / Só a disponibilidade de olhar para o que está pedindo atenção." e o parágrafo de orientação.
- Os dois blocos com os textos do documento: "Para você" ("Responder algumas perguntas te ajuda a entender por onde começar.", botão "Quero começar por aqui") e "Para você líder" ("Algumas perguntas rápidas, pra gente entender por onde começar.", botão "Quero entender minha empresa").
- Linha menor e discreta do WhatsApp, "Online ou presencial, conforme sua necessidade." e a assinatura "Profundidade para compreender. Direção para seguir."

## Detalhes técnicos

- Toda a copy corrigida vai para `src/components/site/content.ts` (novas chaves: ponte do método, título de depoimentos, podcast, fechamento ORI, fechamento Sobre, contato completo, CTA final revisado).
- `src/components/site/v2/EditorialPages.tsx` passa a consumir essas chaves; os blocos novos (podcast, depoimentos com título, fechamentos) reutilizam `EdSection`, `EdHead`, `EdCard`, `EdCTA` já existentes, mantendo o ritmo de cores atual.
- Como `content.ts` também alimenta o tema atual em pontos compartilhados, a copy fica sincronizada nas duas versões.
- Nenhuma mudança de grid, espaçamento, tipografia, imagens ou paleta.
