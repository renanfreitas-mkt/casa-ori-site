## Plano — Carrossel circular para Serviços

Substituir os 5 blocos verticais de serviços (`ServicosLista`) por um carrossel circular animado adaptado do componente fornecido, mantendo todo o conteúdo (título, meta, "para quem", benefícios, CTA do bloco de empresas).

### Passos

1. **Instalar dependências**
   - `bun add react-icons` (framer-motion já está instalado).

2. **Criar `src/components/ui/circular-testimonials.tsx`**
   - Cola do componente fornecido com correções:
     - Adicionar tipagens (`useRef<HTMLDivElement | null>`, `useRef<ReturnType<typeof setInterval> | null>`).
     - O JSX no snippet veio truncado/quebrado pelo upload — vou reconstruí-lo fielmente: container 2 colunas, lado esquerdo com `<img>` em rotação 3D (active / left / right), lado direito com nome, designation, quote animado palavra-a-palavra com `framer-motion`, e dois botões redondos com `FaArrowLeft` / `FaArrowRight`.
     - Manter API original (`testimonials`, `autoplay`, `colors`, `fontSizes`) — sem renomear, para o componente UI ficar reutilizável.

3. **Criar `src/components/site/ServicosCarousel.tsx`**
   - Adapta a lista `servicos` (movida do `sections.tsx`) para o formato do carrossel:
     - `quote` = meta + lista "Para quem" + (se houver) "Com esse formato é possível" como uma única string formatada, OU usar o próprio componente com children/extras. Para manter qualidade visual, vou criar um **wrapper customizado** que reusa as transformações 3D do componente UI mas renderiza o conteúdo rico (listas com bullets, CTA do bloco empresas) no lado direito.
   - Imagens Unsplash temporárias (5), relacionadas ao tema:
     - Terapia individual, círculo de pessoas, mãos, natureza/sereno, ambiente corporativo.
   - Paleta passada como prop `colors`: name `#26533C`, designation `#26533C99`, testimony `#1C1C1C`, arrowBackground `#26533C`, arrowForeground `#E8DEC8`, arrowHoverBackground `#C4B58E`.
   - Background da seção: `kraft` areia-claro (consistente com a seção atual).

4. **Substituir uso em `src/routes/index.tsx`**
   - Trocar `<ServicosLista />` por `<ServicosCarousel />`.
   - Manter `AvaliacaoInicial`, `ComoEscolher`, `ServicosCta` ao redor.
   - Manter `ServicosLista` exportado (não remover ainda) para evitar quebrar imports em outros lugares, mas desuso.

### Estratégia para conteúdo rico no carrossel

Como o componente original mostra apenas `quote` como texto corrido, vou criar uma variante interna no `ServicosCarousel`:
- Reusar a lógica de transforms 3D das imagens (calculateGap, getImageStyle) do componente UI **importando** funções/lógica.
- Renderizar lado direito próprio, com `<h3>` (título), meta (eyebrow), bloco "Para quem" (lista com traço), bloco "Com esse formato é possível" quando houver, e CTA quando houver — animado com `AnimatePresence` no `activeIndex`.

Para evitar duplicação, `circular-testimonials.tsx` fica como componente genérico (caso seja reusado para depoimentos depois), e `ServicosCarousel.tsx` é uma **implementação irmã** baseada na mesma técnica (não envolve o componente UI por dentro, mas compartilha estilo). Mais limpo do que tentar forçar conteúdo rico via prop `quote`.

### Responsivo

- Desktop (≥768px): grid 2 colunas, imagem à esquerda (com left/center/right empilhados em 3D), conteúdo à direita.
- Mobile: 1 coluna, imagem acima (somente a ativa, sem empilhamento 3D para economizar espaço), conteúdo abaixo, botões prev/next centralizados.
- Autoplay ligado (5s), pausa ao clicar nas setas. Navegação por teclado (← →).

### Não vou fazer

- Não vou remover `ServicosLista` do arquivo (mantém exportado, só não é usado).
- Não vou alterar `AvaliacaoInicial`, `ComoEscolher`, `ServicosCta`, nem o resto do site.
- Não vou adicionar dark mode toggle do demo.
- Não vou usar imagens reais da Carol — apenas Unsplash temporário (concordado).

### Verificação

- Build sem erros.
- Preview desktop (1190px) e mobile (375px).
- Conferir que os 5 serviços rotacionam, conteúdo correto aparece para cada, CTA do bloco empresas funciona apontando para `#contato`.
