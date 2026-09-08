# Casa Orí v2 — textos da Carol e paleta oficial

Aplicar no tema editorial (`/v2`) os textos exatos da Carol e a nova paleta verde/areia. Estrutura de rotas, tipografia e layout geral do template continuam como estão. O site atual (fora de `/v2`) não é alterado.

## Paleta

Novas variáveis no tema editorial: verde escuro `#215d1b`, verde principal `#26533c`, verde suave `#c3cdb8`, verde musgo `#717d5f`, verde claro `#a0b18a`, areia `#c1b48a`, branco `#fefefe`, texto `#1C1C1C`.

Aplicação por seção conforme a tabela do briefing: dores e hero em verdes escuros, explicação e Sistema ORI em verde suave, serviços em branco, CTA final e avaliação em `#26533c`, rodapé em `#215d1b`. Traços das listas de dores e setas do ciclo em areia.

Consequência: os fundos creme/manteiga do template editorial saem e dão lugar a essa paleta; as fotos geradas continuam nos blocos de imagem/depoimento.

## Home (`/v2`)

1. **Navegação** — botão passa a ser "Quero entender o que está acontecendo" apontando para `#avaliacao`.
2. **Hero** — novo diagrama circular de 4 etapas (Surge um problema → Você tenta resolver → Gasta tempo e energia → O problema continua → volta ao início), setas em areia com pulso suave. Abaixo, o texto "Você tenta resolver só o que consegue ver / Mas e o que ainda está invisível?" e o parágrafo da Casa Orí. Um único CTA.
3. **Explicação** — bloco de transição em verde suave, sem botão.
4. **Dores** — título "Como isso costuma acontecer na prática?", duas colunas (PARA VOCÊ / PARA VOCÊ LÍDER) com divisor vertical, listas exatas, sem botões.
5. **Sistema ORI (teaser)** — nova chamada e os três eixos com os textos novos; terceiro eixo passa a se chamar **Integra**.
6. **Avaliação inicial** (`#avaliacao`) — remove "Por onde você quer começar?"; entra "Como começar?" com duas colunas e botões "Começar agora", mais a linha de fechamento.
7. **Depoimento** — nova chamada "O que muda quando essa outra parte começa a aparecer?"; depoimento continua placeholder.
8. **CTA final** — CTA principal + separador + CTA alternativo em outline, ambos para `#avaliacao`.

## Serviços (`/v2/servicos`)

Novo título e nova lista em duas colunas: Terapia Sistêmica, Constelação Familiar, Vivências (PARA VOCÊ); Workshops e Oficinas, Programas de Desenvolvimento, Palestras (PARA VOCÊ LÍDER), cada um com "Saiba mais". No fim da página, o bloco "Como começar?" com os dois botões.

Observação: essa lista substitui os serviços CNPJ atuais (Encontro de Comunicação, Encontro para Liderança, Liderança em Processo) na versão `/v2`.

## Sistema ORI (`/v2/sistema-ori`)

Título, subtítulo e os três eixos com os textos completos, incluindo as frases de fechamento de cada eixo. "Impulsiona" vira "Integra".

## Sobre (`/v2/sobre`)

Ordem invertida: primeiro o bloco "A Casa Orí", depois "Carol Milhomens" com o texto completo em primeira pessoa. Espaço reservado para a foto da Carol.

## Contato (`/v2/contato`)

Novo título e subtítulos, botão "Agendar conversa inicial" com mensagem pronta no WhatsApp, nota abaixo, bloco Online/Presencial em duas colunas e bloco "PARA VOCÊ LÍDER" com botão próprio.

## Ajustes globais

- "Impulsiona" → "Integra" em todo o v2.
- Nenhuma ocorrência de "Por onde você quer começar?".
- Rótulo CNPJ sempre "PARA VOCÊ LÍDER".
- Links de quiz e WhatsApp ficam como placeholders identificados, prontos para troca.

## Pendências marcadas no código

Texto de introdução da coluna CPF na avaliação; confirmação do nome "Workshops e Oficinas"; URLs reais dos dois quizzes; número real de WhatsApp; foto da Carol; depoimentos reais.

## Detalhes técnicos

- `src/styles.css`: novos tokens `--color-ed-*` com a paleta oficial (verde-escuro, verde, verde-suave, musgo, claro, areia, branco, texto), mantendo os utilitários tipográficos existentes.
- `src/components/site/v2/ui.tsx`: novas variantes de fundo em `EdSection` (`verde-escuro`, `verde`, `verde-suave`, `branco`), variantes de botão areia/outline-areia, nav com fundo verde e novo CTA, rodapé em verde escuro.
- Novo componente `CicloHero` (diagrama de 4 etapas com setas animadas em CSS, respeitando `prefers-reduced-motion`).
- Novos componentes auxiliares: `DuasColunas` com divisor, `ListaDores` com traço lateral, `LabelPublico`.
- `src/components/site/content.ts`: novo conjunto de constantes v2 com os textos exatos (hero, explicação, dores, eixos ORI, avaliação, serviços v2, sobre, contato, CTAs), sem alterar as constantes usadas pelo site atual.
- `src/components/site/v2/EditorialPages.tsx`: reescrita das cinco páginas usando as novas constantes e componentes.
- `head()` de cada rota `/v2` atualizado com títulos/descrições coerentes com a nova copy.
