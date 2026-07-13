## Plano — Atualização Site Casa Orí v3

Reescrita quase total da **home** (`/`) mantendo identidade visual base, rotas internas (`/servicos`, `/sobre`, `/sistema-ori`, `/contato`) e navegação. A mudança principal é a nova arquitetura CPF vs. CNPJ em duas colunas e a substituição de "Impulsiona" por "Integra" em todo o site.

---

### 1. Tokens de cor — `src/styles.css`

Adicionar dois novos tokens à paleta existente:
- `--verde-escuro: #1A2E25` (seções de dor)
- `--verde-claro: #4A7A5E` (hover/detalhes)

Registrar como utilitários Tailwind (`bg-verde-escuro`, `text-verde-claro`) via `@theme`.

---

### 2. Nova estrutura da home — `src/routes/index.tsx`

Ordem das 10 seções (substitui a atual):

```text
1.  Hero (ciclo de repetição)          verde
2.  Explicação (transição)             areia-claro
3.  Dores CPF + CNPJ (2 colunas)       verde-escuro
4.  Sistema ORI (O·R·I - Integra)      areia-claro
5.  Avaliação inicial (2 quizzes)      verde
6.  Serviços (2 colunas, 6 cards)      areia-claro
7.  Carol (com epifania)               verde
8.  Podcast + Instagram                areia-claro
9.  Depoimentos                        areia (título novo)
10. CTA Final (Opção A + B)            verde
```

Progressão intencional: escurece nas dores → clareia nas soluções.

---

### 3. Componentes a criar/reescrever

**Novo — `src/components/site/HeroCycle.tsx`**
Ciclo circular com 4 nós ("Surge um problema" → "Você tenta resolver" → "Gasta tempo e energia" → "O problema continua" → volta). SVG responsivo: círculo desktop (≤480px) com nós posicionados + setas curvas em `var(--areia)` com animação de pulso `opacity 0.6→1` em loop 2s. Mobile: empilha em coluna com setas verticais. Cada nó: pill com fundo `rgba(255,255,255,0.1)`, borda `rgba(196,181,142,0.4)`, Roboto 300 14px branco.

**Reescrever — `src/components/site/Hero.tsx`**
Substituir conteúdo atual pelo `HeroCycle` + textos novos ("Você tenta resolver só o que consegue ver." / "Mas e o que ainda está invisível?" em `var(--areia)`) + único CTA `Quero entender o que está acontecendo` ancorado em `#avaliacao`. Manter fundo verde e o shader `MeshGradient` (desktop ≥1024px, respeitando `prefers-reduced-motion`).

**Reescrever `src/components/site/sections.tsx`** com os novos blocos:

- `Explicacao` — bloco centralizado `max-w-[640px]`, três linhas conforme briefing.
- `Dores` — grid 2 colunas desktop, empilha mobile (CPF primeiro). Labels "PARA VOCÊ" / "PARA VOCÊ LÍDER". Cada item com traço lateral `var(--areia)` 3px. Divisor vertical entre colunas (desktop). Fundo `verde-escuro`.
- `SistemaOri` — título "É justamente aqui que entra o Sistema ORI." + 3 cards O/R/I com **I = Integra** (não Impulsiona). Cards alternam fundo verde/areia/verde.
- `Avaliacao` — id=`avaliacao`. Duas colunas com botões `Começar agora` apontando para constantes `QUIZ_CPF_URL` / `QUIZ_CNPJ_URL` (placeholders, `target="_blank"`). Linha de fechamento em itálico embaixo.
- `Servicos` — 2 colunas, 3 cards cada (Terapia Sistêmica, Constelação Familiar, Vivências | Workshops e Oficinas, Programas de Desenvolvimento, Palestras) com link "Saiba mais →" para `/servicos`. Divisor vertical desktop.
- `Carol` — reescrever texto de apresentação com a epifania pessoal (5 parágrafos do briefing). Manter foto placeholder e nome.
- `ContinueConversa` — junta Podcast (mantém iframe Spotify existente) + Instagram grid sob o título "Continue essa conversa".
- `Depoimentos` — mantém estrutura, novo título "O que muda quando essa outra parte começa a aparecer?".
- `CtaFinal` — Opção A + separador + Opção B, ambos ancorando `#avaliacao`.

Remover da home: `ComoAjuda`, `CarolTeaser`, `Faq`, `HomeCta`, `PorQue`, `QuemConduz` antigos (movidos/redundantes com o novo fluxo).

---

### 4. Mudança global: "Impulsiona" → "Integra"

Substituir em:
- `src/components/site/sections.tsx` (constante `ORI_MINI`)
- `src/routes/sistema-ori.tsx`
- `src/routes/servicos.tsx` e `src/routes/sobre.tsx` (se mencionarem)
- Qualquer copy em `Nav.tsx` ou meta descriptions

Novo texto do eixo I: "E o que fazer a partir daqui? Acompanhamos e ajustamos essas mudanças à sua realidade para que elas aconteçam de forma consistente."

---

### 5. Tom CNPJ — "você líder"

Ajustar labels e copy nas páginas `/servicos` e `/sobre`:
- Labels: `PARA VOCÊ LÍDER` (não "PARA EMPRESAS")
- Endereçamento sempre à pessoa (líder), não à empresa como entidade

---

### 6. Constantes e TODOs

No topo de `sections.tsx`:
```ts
const QUIZ_CPF_URL = "QUIZ_CPF_URL";  // TODO: URL real
const QUIZ_CNPJ_URL = "QUIZ_CNPJ_URL"; // TODO: URL real
```

Comentários `{/* TODO */}` conforme briefing:
- Intro da coluna CPF em Avaliação
- Nome "Workshops e Oficinas"
- Ambos quizzes
- Escolha final entre CTA A/B

---

### 7. O que NÃO muda

- Rotas `/servicos`, `/sobre`, `/sistema-ori`, `/contato` — apenas swap Impulsiona→Integra e tom CNPJ
- `Nav.tsx`, `Footer`, `Logo`, `CTA`, `Reveal`, `Section`, `Accordion`
- Iframe do Spotify e imagens já configuradas
- Rodapé e página de contato

---

### 8. Verificação

Após implementar: build automático + inspeção visual via preview (screenshot desktop + mobile) para confirmar:
- Ciclo hero renderiza e anima
- Progressão de cores no scroll
- Duas colunas colapsam corretamente em mobile (CPF primeiro)
- Nenhuma menção residual a "Impulsiona"
