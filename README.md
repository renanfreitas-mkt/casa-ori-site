# Casa Orí 

# PROMPT — SITE CASA ORÍ
## Para uso no Lovable

---

## MISSÃO

Construa o site da **Casa Orí**, espaço de terapia sistêmica, constelação familiar e desenvolvimento de equipes fundado por Carol Milhomens, em Brasília.

O site é uma **one page com âncoras** — aparenta ter páginas separadas com navegação, mas é um scroll contínuo. Cada seção tem seu próprio `id` de âncora. A navegação no topo leva o usuário diretamente à seção correspondente com scroll suave.

**Objetivo principal:** fazer o visitante sentir que chegou ao lugar certo — e dar o próximo passo pelo WhatsApp.

---

## STACK

- React + TypeScript + Tailwind CSS
- Fonte via Google Fonts: `Roboto` (títulos e corpo)
- Fonte cursiva decorativa: usar `Dancing Script` como substituta para Artifact (não disponível no Google Fonts) — apenas para frases em destaque e anotações
- Ícones: `lucide-react`
- Sem bibliotecas de UI externas — tudo customizado

---

## IDENTIDADE VISUAL — OBRIGATÓRIA

### Paleta oficial (extraída do Guidebook 2026)

```css
:root {
  --verde:      #26533C;   /* cor principal — fundos escuros, botões, nav */
  --areia:      #C4B58E;   /* fundo secundário — textura kraft */
  --areia-claro:#E8DEC8;   /* versão mais clara para backgrounds suaves */
  --branco:     #FFFFFF;   /* texto sobre verde, fundo de seções claras */
  --texto:      #1C1C1C;   /* texto principal sobre fundo claro */
  --texto-suave:#555555;   /* texto secundário, descrições */
}
```

### Regra de cor obrigatória (do Guidebook)
- **Fundo verde → texto branco**
- **Fundo areia/claro → texto verde**
- Nunca texto preto sobre verde nem texto verde sobre branco puro sem contraste adequado

### Tipografia

```
Títulos grandes:     Roboto 300–400, tamanhos generosos
Subtítulos:          Roboto 500–600
Corpo:               Roboto 300–400, line-height 1.8
Labels/labels:       Roboto 400, letter-spacing 0.1em, maiúsculas
Frases em destaque:  Dancing Script (cursiva) — para citações, frases da Carol
```

### Logo
Sem arquivo de logo disponível. Usar o nome **"Casa Orí"** em Roboto 500, cor `var(--verde)` ou branca dependendo do fundo. Adicionar um círculo pequeno com linhas concêntricas (SVG simples) antes do texto como símbolo — representa a impressão digital circular da marca.

### Estética geral
- Textura de papel kraft no fundo das seções areia (usar `background-image` com ruído sutil via CSS ou um padrão de grain)
- Espaço generoso — padding vertical mínimo de `120px` nas seções
- Sem sombras excessivas, sem bordas duras
- Animações suaves de entrada com `opacity + translateY` ao entrar no viewport (Intersection Observer)
- Nunca parecer: landing page de curso, site clínico frio, ou página de coach

---

## ARQUITETURA — 6 SEÇÕES COM ÂNCORAS

```
#home          → Página Principal
#sobre         → Sobre
#servicos      → Serviços
#sistema-ori   → Sistema ORI
#antes         → Antes de Começar
#contato       → Contato
```

---

## NAVEGAÇÃO (fixed, topo)

```
[Logo: Casa Orí]          [Home · Sobre · Serviços · Sistema ORI · Antes de Começar · Contato]   [Botão: Falar no WhatsApp]
```

- `position: fixed; top: 0; z-index: 100; width: 100%`
- Estado inicial: fundo transparente
- Após 80px de scroll: fundo `var(--verde)` com transição suave `0.4s ease`
- No estado transparente: links brancos (sobre hero)
- No estado verde: links brancos
- Botão WhatsApp: outline branco → preenche branco ao hover, texto vira verde
- Mobile: hambúrguer → menu overlay em `var(--verde)` com links centralizados

---

## SEÇÃO 1 — HOME (`#home`)

**Fundo:** `var(--verde)` | **Texto:** branco

**Hero com vídeo manifesto placeholder:**
```
[área de vídeo — placeholder verde escuro com ícone de play centralizado]
[overlay leve sobre o vídeo: rgba(38, 83, 60, 0.6)]
```

**Conteúdo sobre o vídeo (centralizado):**

```
[Label: "CASA ORÍ" — Roboto, letra espaçada, pequeno]

Antes de ser um método e um serviço,
a Casa Orí é um lugar.    ← Roboto 300, grande, itálico suave

[linha fina areia, 80px, centralizada]

Aqui, existe escuta e respiro para quem percebeu
que precisa parar de fugir do que sente —
e, finalmente, olhar para a própria história.

[Botão: "Preciso de ajuda" → ancora para #contato]
```

**Seção de identificação de dores** (fundo `var(--areia-claro)`, texto verde):

Título: *"Talvez você tenha chegado aqui porque..."*

Lista visual — cada item como um parágrafo com traço lateral verde:
- A sobrecarga está grande. Por fora, você tenta seguir no automático.
- Aparece na dificuldade de colocar limites.
- Na insegurança para tomar decisões que sabe que precisa tomar.
- No medo de errar.
- Na pressão da sua família.
- Naqueles problemas que só mudam de forma, mas sempre voltam.

Frase de fechamento em destaque (Dancing Script, grande, verde):
*"Já percebeu que continuar desse jeito não está mais funcionando?"*

**Seção "Como a Casa Orí ajuda"** (fundo branco, texto verde):

Texto introdutório:
> "Na Casa Orí, esse novo olhar começa quando você encontra um lugar seguro para falar. Aqui, você pode colocar para fora o que está confuso e ser acompanhado em um processo de escuta, compreensão e organização interna."

> "Aquilo que aparece como ansiedade, insegurança e medo não começa só no momento em que te incomoda. Existe uma história familiar e aprendizados antigos que podem estar aumentando essas travas."

**Sistema ORI em miniatura** (teaser, link para seção #sistema-ori):

3 blocos horizontais (em coluna no mobile):
```
[ O — Observa ]     [ R — Reorganiza ]     [ I — Impulsiona ]
  Identificar          Colocar no lugar        Transformar em
  o que está           o que está              continuidade
  por trás             fora de ordem
```
Fundo de cada bloco: `var(--verde)` | Texto: branco | Hover: `var(--areia)` com texto verde

**Lista de serviços em miniatura** (cards grid 2×3):
- Terapia Sistêmica
- Constelação Familiar Individual
- Constelação Familiar em Grupo
- Vivências
- Casa Orí para Empresas

Cada card: borda `var(--areia)`, hover fundo `var(--verde)`, ícone Lucide simples, link para `#servicos`

**Sobre Carol — teaser:**
```
[foto placeholder — retrato vertical, arredondado]

À frente da Casa Orí está Carol Milhomens,
terapeuta sistêmica e criadora do Sistema ORI.

Com olhar sistêmico e condução didática,
Carol ajuda pessoas e empresas a transformarem
problemas difíceis em caminhos possíveis.

[Link: "Conheça Carol →" ancora #sobre]
```

**Depoimentos** (fundo `var(--areia)`, texto verde):

3 cards com depoimento placeholder:
```
"[Depoimento da cliente]"
— Nome, contexto
```

**Podcast** (fundo `var(--verde)`, texto branco):

Placeholder simples:
```
[Ícone microfone]
Podcast Casa Orí
[Botão outline: "Ouvir no Spotify"]
```

**Instagram** (fundo branco):

Grid 3×2 com placeholders de posts — `background: var(--areia-claro)` com ícone câmera centralizado
Botão: "Seguir no Instagram @suacasa.ori"

**FAQ — "Talvez você esteja se perguntando..."** (fundo `var(--areia-claro)`, texto verde):

Acordeão (accordion) — cada pergunta clicável expande a resposta:

- **Preciso saber exatamente o que estou sentindo para começar?**
  "Não. Muitas pessoas chegam apenas com a sensação de que estão cansadas, confusas ou vivendo algo que se repete. E isso já é suficiente para começar."

- **Como saber qual atendimento faz mais sentido para mim?**
  "Você não precisa decidir sozinha. No primeiro contato, é possível entender melhor o que você está vivendo e identificar qual caminho pode ser mais adequado para o seu momento."

- **Os atendimentos podem ser online?**
  "Sim. A Casa Orí oferece atendimentos online e presenciais, de acordo com o serviço e a disponibilidade de agenda."

- **A Casa Orí só atende pessoas físicas?**
  "O foco principal da Casa Orí está no desenvolvimento pessoal. Por isso, esse trabalho também pode ser aplicado em empresas e organizações — já que toda empresa é feita de pessoas."

- **Preciso já chegar com tudo entendido?**
  "Não. O processo começa justamente quando você decide olhar para o que está vivendo, mesmo que ainda não saiba explicar tudo com clareza."

**CTA de fechamento da seção Home:**

Fundo `var(--verde)`, texto branco:

```
[Dancing Script, grande]
"Se algo está pesando aí dentro,
talvez seja a hora de olhar para isso
de um outro jeito."

[Botão: "Seja bem-vindo à Casa Orí" → ancora #contato]
```

---

## SEÇÃO 2 — SOBRE (`#sobre`)

**Fundo:** alternado verde e areia | Segue a estrutura do wireframe

### Por que a Casa Orí

Fundo `var(--areia-claro)`, texto verde:

```
A palavra Casa carrega a ideia de abrigo:
um lugar seguro onde você pode chegar
sem precisar ter tudo organizado.

Já Orí significa cabeça, direção.
É aquilo que te guia.

[linha fina verde]

A Casa Orí nasce desse encontro:
um lugar onde o que pesa encontra acolhimento
e o que parecia confuso começa a ganhar direção.
```

Subtítulo em Dancing Script: *"Porque voltar para si também precisa de lugar e direção."*

### Quem conduz

Fundo `var(--verde)`, texto branco:

```
[foto placeholder Carol — retângulo vertical, levemente assimétrico]

Carol Milhomens
Terapeuta sistêmica e criadora do Sistema ORI

"Antes de conduzir outras pessoas nesse caminho,
eu também fui transformada por ele. O olhar sistêmico
e o estudo da comunicação mudaram a forma como
eu me percebo, olho para a minha história e me
relaciono com a vida."

"Ao atuar com Desenvolvimento Pessoal desde 2019,
entendi que minha forma de escutar, enxergar o todo
e traduzir questões profundas de um jeito mais claro
eram os diferenciais do meu trabalho."
```

### Como é conduzido o trabalho

Fundo branco, texto verde — 4 pilares em cards:

1. **Acolhimento com autorresponsabilidade**
   "Aqui, a sua dor tem lugar e a sua participação no processo também."

2. **Profundidade com linguagem acessível**
   "O olhar sistêmico ajuda a enxergar além do problema aparente."

3. **Escuta com movimento**
   "Você pode falar sobre o que incomoda, mas o processo não para na fala."

4. **Cada processo respeita o seu tempo**
   "Sem perder o compromisso com aquilo que precisa mudar."

### Fechamento da seção Sobre

Fundo `var(--verde)`, texto branco — frase da Carol em Dancing Script grande + botão WhatsApp.

---

## SEÇÃO 3 — SERVIÇOS (`#servicos`)

**Fundo:** começa com branco, alterna com `var(--areia-claro)` e `var(--verde)`

### Avaliação Inicial

Fundo `var(--areia-claro)`, texto verde — caixa centralizada, sem listar os serviços aqui:

```
Antes de indicar um serviço, é preciso entender
o que está acontecendo e que tipo de condução
pode realmente te ajudar.

É a partir desse primeiro momento de escuta
que o caminho começa a ser definido.
```

Abaixo do texto, um único botão centralizado:

```
[Botão: "Descobrir qual serviço é para mim →"]
→ href: "QUIZ_URL" (placeholder — URL externa a ser inserida)
→ target: "_blank"
→ estilo: fundo var(--verde), texto branco, padding generoso
→ hover: fundo levemente mais escuro (#1d4230)
```

Nota de rodapé abaixo do botão, pequena, em itálico:
*"Responda algumas perguntas e descubra o caminho mais indicado para o seu momento."*

### Cards de Serviços

Cada serviço em seu próprio bloco, alternando fundo verde e areia:

**Terapia Sistêmica** (fundo verde, texto branco)
```
Acompanhamento contínuo · Sessões semanais ou quinzenais · 1 hora

Para quem:
— sente que precisa de suporte mais constante
— está vivendo conflitos que se repetem
— se sente emocionalmente sobrecarregado
— tem dificuldade de sustentar mudanças sozinho

Com esse acompanhamento, é possível:
— observar com mais clareza o que se repete
— perceber mais rápido o que não está funcionando
— ter um suporte mais próximo para o que vai surgindo
```

**Constelação Familiar Individual** (fundo areia, texto verde)
```
Atendimento pontual · 2 horas · Questão específica com mais privacidade

Para quem:
— sente que existe um tema que precisa ser olhado com mais atenção
— quer aprofundar um tema antes de começar acompanhamento contínuo
— prefere viver esse processo de forma mais reservada
```

**Constelação Familiar em Grupo** (fundo verde, texto branco)
```
Atendimento pontual · Até 3 horas · Presencial · Campo coletivo

Para quem:
— deseja viver esse processo em um contexto coletivo
— se beneficia da força do grupo para ampliar a percepção
— quer acessar novas compreensões a partir do movimento do grupo
```

**Vivências** (fundo areia, texto verde)
```
Experiências presenciais · Desenvolvimento pessoal

Para quem:
— sente que alguns temas precisam ser vividos, e não só falados
— quer se aprofundar em questões emocionais em contexto coletivo
— se beneficia da troca com outras pessoas
```

**Empresas** (fundo verde, texto branco — card maior, destaque)
```
Palestras · Treinamentos · Vivências · Processos personalizados

Para empresas que:
— estão com a produtividade caindo
— vivem apagando incêndio
— têm dificuldade de alinhar equipe e liderança
— percebem que os mesmos problemas continuam voltando

Com esse formato, é possível:
— dar mais clareza para a comunicação e os papéis
— reduzir ruídos que impactam a execução no dia a dia
— construir acordos mais claros e decisões sustentáveis

[Botão: "Quero saber mais sobre o trabalho em empresas" → ancora #contato]
```

### Como escolher

Fundo branco, texto verde — caixa centralizada:

```
Ainda em dúvida por onde começar?

Tudo bem não saber. Na Casa Orí, o primeiro passo é a escuta.
A partir de uma conversa inicial, entendemos o que está acontecendo
e indicamos o melhor caminho para você.

[Botão: "Vamos construir esse caminho juntos →"]
```

### Fechamento dos Serviços

Fundo `var(--verde)`, texto branco:

```
[Dancing Script]
"Talvez você não precise de mais esforço.
Talvez precise de um novo olhar."

[Botão: "Quero começar" → âncora #contato]
```

---

## SEÇÃO 4 — SISTEMA ORI (`#sistema-ori`)

**Fundo principal:** `var(--verde)` | **Texto:** branco

### O que é

```
[Label: "METODOLOGIA AUTORAL"]

O Sistema ORI

Por trás de cada processo, existe uma estrutura.

O Sistema ORI é a metodologia que sustenta a forma como o trabalho
na Casa Orí é conduzido — em processos individuais e dentro de empresas.
```

### 3 Eixos — layout visual

3 blocos empilhados (desktop: lado a lado), cada um com seu símbolo:

**Eixo 1 — O · Observa** (fundo `var(--areia)`, texto verde)
```
Identifica o que está por trás do problema.
Enquanto o padrão não é visto, o problema só muda de forma.

— reconhecer repetições
— diferenciar fato, interpretação e padrão
— identificar gatilhos e pontos de tensão
— entender o custo real do que está acontecendo

[Frase em destaque, Dancing Script]
"É quando o que era desconhecido começa a fazer sentido."
```

**Eixo 2 — R · Reorganiza** (fundo `var(--verde)`, texto branco)
```
Colocar no lugar o que está fora de ordem.
A mudança só acontece quando cada coisa assume o seu lugar.

— reposicionar papéis e responsabilidades
— estabelecer limites mais claros
— reorganizar a forma de se comunicar
— construir novas possibilidades de ação

[Frase em destaque, Dancing Script]
"É quando o padrão automático instável dá lugar para um novo mais seguro."
```

**Eixo 3 — I · Impulsiona** (fundo `var(--areia)`, texto verde)
```
Transformar as novas possibilidades em continuidade.
Não basta entender e agir uma vez.

— ajustar o que não funcionou
— adaptar as ações à vida real
— sustentar novas escolhas com consistência
— revisar o caminho sempre que necessário

[Frase em destaque, Dancing Script]
"É o que evita dois extremos: desistir ou se perder em mil ações."
```

### Diferencial

Fundo branco, texto verde — 4 itens com ícone:

- **Transforma leitura em ação possível**
- **Acompanha sem criar dependência**
- **Respeita o tempo sem perder direção**
- **Fortalece autonomia ao longo do caminho**

### Onde se aplica

2 colunas:
```
Na vida pessoal:                 Nas empresas:
— processos terapêuticos         — organização de papéis
— relações e família             — liderança e tomada de decisão
— decisões e posicionamento      — comunicação e execução
                                 — alinhamento de equipe
```

### O que esperar

Lista de conquistas ao longo de um processo com o Sistema ORI — itens simples com traço lateral:

- Identificar padrões antes de repetir
- Entender o que sustenta os problemas
- Se posicionar com mais consciência
- Tomar decisões mais alinhadas
- Sustentar mudanças na prática

```
[Frase de fechamento em Dancing Script, grande]
"O Sistema ORI não resolve por você.
Ele organiza o caminho para que você consiga
fazer a sua parte com mais clareza."
```

---

## SEÇÃO 5 — ANTES DE COMEÇAR (`#antes`)

**Fundo:** `var(--areia-claro)` | **Texto:** verde

Título da seção: *"Antes de começar, é importante alinhar algumas coisas."*

7 blocos em accordion (expansível ao clicar):

1. **Não existe fórmula pronta**
   "Cada pessoa chega com uma história, um contexto e uma necessidade diferente. O caminho não é igual para todo mundo — ele é construído a partir do que você vive."

2. **Não se resolve tudo em uma sessão**
   "Alguns atendimentos são pontuais, mas mudanças mais consistentes acontecem com tempo, repetição e comprometimento com o processo."

3. **Ninguém resolve por você**
   "Existe direção, acompanhamento e suporte. Mas a mudança não vem de fora. Ela acontece a partir do que você está disposto a olhar, sustentar e transformar."

4. **Só entender não resolve seu problema**
   "Ter consciência é importante, mas não suficiente. O que aparece precisa ganhar forma na prática — nas suas ações, decisões, na forma como você se posiciona e se comunica."

5. **Não é para te prender aqui**
   "O acompanhamento existe para te ajudar a caminhar com mais clareza, não para criar dependência. O objetivo é que você desenvolva autonomia ao longo do processo."

6. **Seu problema não começou agora**
   "O que você vive hoje não começou recentemente. Muitas vezes, ele se conecta a padrões e dinâmicas que vêm do seu sistema familiar."

7. **Vai incomodar, e isso faz parte**
   "Olhar para o que precisa ser visto gera desconforto. Mas aqui esse desconforto tem direção e acompanha um processo de mudança."
   
   Pergunta em destaque: *"Qual desconforto você escolhe? O que já te acompanha há tanto tempo ou o que pode abrir espaço para algo novo?"*

**Fechamento:**

Fundo `var(--verde)`, texto branco:

```
Se isso fez sentido para você,
talvez seja o momento de começar.

[Botão: "Agendar conversa inicial" → âncora #contato]
```

---

## SEÇÃO 6 — CONTATO (`#contato`)

**Fundo:** `var(--verde)` | **Texto:** branco

### Entre em contato

```
[Label: "PRÓXIMOS PASSOS"]

[Dancing Script, grande]
"O caminho pode começar por uma conversa."

Sem precisar ter tudo entendido.
Sem precisar ter todas as respostas.
Só com a disponibilidade de olhar para o que está pedindo cuidado.

Se você deseja agendar um atendimento, tirar dúvidas sobre os serviços
ou entender qual caminho pode fazer mais sentido para o seu momento,
entre em contato pelo WhatsApp.

[Botão principal: "Falar no WhatsApp"
 → link: https://wa.me/55XXXXXXXXXX
 → estilo: fundo var(--areia), texto var(--verde), grande
 → hover: fundo branco]
```

### Formas de atendimento

Fundo `var(--areia)`, texto verde — 2 colunas:

```
Online                           Presencial
Disponível para todos            Disponível conforme
os serviços, de acordo           o serviço e a
com a disponibilidade            disponibilidade
de agenda.                       de agenda.
```

### Empresas

Fundo `var(--verde)`, texto branco — bloco separado:

```
A Casa Orí também pode atuar em organizações.

Se o seu contato for para entender melhor a aplicação
desse trabalho em empresas ou equipes,
você também pode falar pelo WhatsApp.

A proposta é compreender a necessidade do seu contexto
e avaliar de que forma a Casa Orí pode contribuir.

[Botão outline: "Falar sobre minha empresa"]
```

### Fechamento final

Fundo branco, texto verde — minimalista:

```
[Dancing Script, grande, centralizado]
"Profundidade para compreender.
Direção para transformar."

Casa Orí · Carol Milhomens · @suacasa.ori
Asa Sul, Brasília

[ícones: Instagram · WhatsApp]
```

---

## RODAPÉ

Fundo `var(--verde)`, texto branco — linha única:

```
Casa Orí © 2026  ·  Carol Milhomens  ·  Asa Sul, Brasília  ·  @suacasa.ori  ·  [Instagram] [WhatsApp]
```

---

## ANIMAÇÕES E INTERAÇÕES

### Princípios
- Todas as entradas de seção: `opacity: 0 → 1` + `translateY(30px → 0)`, `0.7s ease`
- Intersection Observer com `threshold: 0.15`
- Delay escalonado para elementos em grid (0ms, 120ms, 240ms...)
- **NUNCA** bounce, elastic ou overshoot
- **NUNCA** animações que competem com o conteúdo

### Accordion (FAQ e Antes de Começar)
- Ícone `+` → `×` ao abrir
- Altura do conteúdo anima de `0` para `auto` com `max-height` transition `0.4s ease`
- Fundo do item ativo: levemente mais escuro

### Hover nos cards de serviço
- Fundo muda suavemente para `var(--verde)`, texto para branco
- Transição: `0.35s ease`
- Sem escala, sem sombra — só cor

### Scroll suave
```css
html { scroll-behavior: smooth; }
```

### Navegação ativa
- Link correspondente à seção visível fica com underline ou opacity mais alta
- Detectar via Intersection Observer qual seção está no viewport

---

## RESPONSIVO

- **Mobile-first**
- Breakpoint principal: `768px`
- Nav desktop: horizontal; nav mobile: hambúrguer → overlay
- Grid de cards: 2 colunas desktop → 1 coluna mobile
- Sistema ORI eixos: 3 colunas desktop → 1 coluna mobile
- Padding lateral mobile: `24px`; desktop: `8%` máx `1200px` centralizado
- Tipografia responsiva com `clamp()`:
  - Títulos hero: `clamp(2rem, 5vw, 4rem)`
  - Títulos de seção: `clamp(1.8rem, 3.5vw, 2.8rem)`
  - Dancing Script em destaque: `clamp(1.6rem, 4vw, 3rem)`

---

## O QUE NÃO FAZER

- ❌ Usar cores fora da paleta oficial (`#26533C`, `#C4B58E`, `#FFFFFF`)
- ❌ Texto preto sobre verde
- ❌ Sombras agressivas ou bordas grossas
- ❌ Visual de landing page de curso ou coach
- ❌ Banners com gradiente colorido e texto em cima
- ❌ Animações rápidas ou com bounce
- ❌ Cards com imagem de banco de dados genérico (pessoas sorrindo, mãos dadas)
- ❌ Ícones coloridos ou muito detalhados — usar Lucide em cor sólida
- ❌ Botões com cantos muito arredondados (estilo app) — usar `border-radius: 4px` máximo

---

## PLACEHOLDERS DE CONTEÚDO

Onde houver conteúdo a ser adicionado depois:

- **Vídeo manifesto:** `div` com fundo `var(--verde)` escuro, ícone play centralizado, texto "Vídeo manifesto — a ser inserido"
- **Foto da Carol:** retângulo com `background: var(--areia)`, ícone pessoa centralizado
- **Depoimentos:** 3 cards com texto "Depoimento a ser inserido — Nome, contexto"
- **Posts Instagram:** 6 quadrados com `background: var(--areia-claro)`, ícone câmera
- **WhatsApp:** link `https://wa.me/55XXXXXXXXXX` em todos os botões — número a substituir
- **Instagram:** `@suacasa.ori`

---

## NOTAS FINAIS

O site precisa transmitir em cada scroll:

**"Aqui eu posso respirar. Aqui eu posso falar."**

O conteúdo já foi escrito e validado pela Carol. Não simplificar, não resumir sem necessidade, não substituir as frases por linguagem genérica. O texto é parte da identidade da marca.

---

*Briefing elaborado por IMPETUS Consultoria — Renan Freitas — Junho 2026*
*Fontes: Guidebook Casa Orí 2026, Wireframe orí_Site.pdf, Documentos de Tom de Voz e Produtos*
*Para uso no Lovable.dev | Projeto: Casa Orí — @suacasa.ori*

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://casa-ori-site.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d94c8821-72a8-4449-bb05-962df12f7ff2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
