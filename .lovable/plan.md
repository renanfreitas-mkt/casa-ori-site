## Redesign da seção "O Sistema ORI"

Aplicar a direção escolhida (v3 — Moldura editorial com escalonamento): intro verde com cantos arredondados no topo + 3 cartões sobrepostos por margem negativa, com card central elevado e contraste de tons (areia-claro / areia / areia-claro).

### Mudanças

**1. `src/components/site/sections.tsx`**
- Fundir `SistemaOriIntro` + `SistemaOriEixos` em um único componente `SistemaOri` envolto por uma "moldura" sobre fundo `areia-claro`:
  - Container externo `max-w-[1180px]` em fundo `kraft` (areia-claro), padding vertical responsivo.
  - Bloco intro: `bg-[#26533C] rounded-t-3xl` com padding generoso e `pb-32 md:pb-48` para criar espaço de sobreposição. Mantém eyebrow "Metodologia autoral", h2 "O Sistema ORI", script em `#C4B58E` e parágrafo descritivo (textos exatos atuais).
  - Grid de 3 cards com `-mt-24 md:-mt-32 relative z-20`, gap-8, px lateral.
  - Cards O e I em `bg-[#E8DEC8]`, card R central em `bg-[#C4B58E]` com `md:translate-y-4` para escalonar. Todos com `rounded-2xl`, `shadow-2xl`, borda sutil, hover `-translate-y-2`.
  - Cada card: letra grande (`text-7xl` light), label uppercase tracking-wide, h3 do título, subline italic, lista com travessão "—", divisor sutil + quote em Dancing Script.
- Conteúdo (letras, nomes, títulos, sublines, itens, frases) vem do array `eixos` existente — sem reescrever textos.
- Remover `SistemaOriEixos` da composição em `routes/index.tsx` (substituído pelo novo componente unificado `SistemaOri`).

**2. `src/routes/index.tsx`**
- Substituir `<SistemaOriIntro />` + `<SistemaOriEixos />` por `<SistemaOri />`. Demais seções (Diferencial, Aplicação, Esperar) permanecem inalteradas.

### Responsivo
- Mobile: cards empilhados, sem `translate-y-4` no central; overlap reduzido (`-mt-20`); intro com `pb-28`.

### Fora de escopo
- Textos (mantidos exatamente como Carol validou).
- `SistemaOriDiferencial`, `SistemaOriAplicacao`, `SistemaOriEsperar` (não tocadas).
- Paleta e fontes (já alinhadas).
