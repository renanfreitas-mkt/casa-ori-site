# Plano — Casa Orí v3 (reorganização + refinos)

## 1. Arquitetura em abas (rotas)

Hoje tudo vive em `/`. Vamos quebrar em rotas reais (não âncoras) e simplificar a home:

- `/` — **Início**: Hero, Dores/Objeções, Como ajuda, Depoimentos, Instagram, FAQ curto, CTA contato.
- `/servicos` — **Serviços**: AvaliacaoInicial, ServicosGrid, ServicosCta, AntesResumo.
- `/sistema-ori` — **Sistema ORI**: SistemaOriIntro, Diferencial, Aplicação, Esperar (unificado num só lugar).
- `/sobre` — **Sobre / Quem conduz**: PorQue, QuemConduz, ComoConduzido.
- `/podcast` — **Podcast**: seção Podcast com embed do Spotify (sai da home).
- `/contato` — **Contato**: Contato + Antes.

Nav atualizado com esses links (Link do TanStack). Cada rota com `head()` próprio (title + meta description únicos).

**Resolve:** página longa, Sistema ORI duplicado, Podcast aparecendo cedo demais.

## 2. Tipografia — trocar a cursiva

Substituir `Dancing Script` por uma fonte mais sóbria e editorial. Opções (escolher 1):
- **Caveat** — manuscrita mais seca, menos "fofa".
- **Reenie Beanie** — manuscrita fina, quase nota de caderno.
- **Italiana** (serif italic display) — abandona o "manuscrito" e vai para serif elegante.

Recomendação: **Italiana** ou **Cormorant Garamond Italic** — mantém o gesto editorial sem o tom infantilizado. Trocar `--font-script` em `src/styles.css` e o `<link>` em `__root.tsx`.

## 3. CTAs mais arredondados

Trocar `rounded-[3px]` por `rounded-full` (pílula) em `CTA.tsx` e nos botões soltos do `Nav.tsx`. Coerente com a logo circular.

## 4. Refinos de copy

- **"Casa Orí é um espaço de escuta…"** → reescrever para algo menos restrito a terapia. Proposta:  
  *"A Casa Orí é um espaço para olhar de perto o que está pedindo atenção — na vida pessoal, nas relações e no trabalho."*
- **Pilar "Acolhimento"** → substituir por **"Atenção"** (ou "Presença atenta"). Ajustar o texto do pilar para falar de atenção/foco, não de afago.
- **Dores e objeções** → incluir 2–3 itens com linguagem corporativa, ex.:
  - *"Sua emoção está atrapalhando sua produtividade — e você não consegue mais separar as duas coisas."*
  - *"Decisões de carreira travadas por questões que não são (só) de carreira."*
  - *"Liderar pessoas exige escutar a si mesmo primeiro."*

Os textos finais ficam para a Carol validar — eu deixo placeholders claros marcados como `// COPY: validar`.

## 5. Embed do Spotify

Mantém na nova rota `/podcast`, com o embed que já existe.

## Arquivos afetados

- `src/routes/__root.tsx` — trocar `<link>` da fonte.
- `src/routes/index.tsx` — enxugar para conteúdo de Início.
- `src/routes/servicos.tsx`, `sistema-ori.tsx`, `sobre.tsx`, `podcast.tsx`, `contato.tsx` — novos.
- `src/components/site/Nav.tsx` — novos links + CTA pílula.
- `src/components/site/CTA.tsx` — `rounded-full`.
- `src/components/site/sections.tsx` — copy do Hero/Pilares/Dores, remover duplicação de Sistema ORI da home.
- `src/styles.css` — `--font-script` nova fonte.

## Fora de escopo

- Posts do Instagram dinâmicos (decisão pendente em conversa anterior).
- Mudanças na paleta verde/areia.
- Redesign visual das seções (só copy, rota e tokens).

## Perguntas antes de implementar

1. **Fonte cursiva**: prefere manuscrita mais seca (Caveat) ou abandonar manuscrito e ir para serif italic editorial (Italiana / Cormorant Italic)?
2. **Abas**: ok com as 6 rotas propostas (Início, Serviços, Sistema ORI, Sobre, Podcast, Contato) ou quer fundir alguma (ex.: Sobre dentro de Início)?
3. **Copy corporativa**: posso escrever os 3 novos itens de dores/objeções, ou a Carol vai mandar o texto?
