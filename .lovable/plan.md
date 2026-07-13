## Objetivo
Reorganizar a Hero para o padrão do site (mesmo container/max-width das outras seções) em layout 2 colunas no desktop:
- **Esquerda:** eyebrow, headline ("Você tenta resolver só o que consegue ver. / Mas e o que ainda está invisível?"), divisor, parágrafo descritivo e CTA — alinhados à esquerda.
- **Direita:** animação canvas do ciclo (a HTML enviada, portada para React).

No mobile, empilha: animação em cima, texto embaixo (ou o inverso — texto primeiro pra leitura rápida). Escolho **texto em cima, animação embaixo no mobile** para preservar hierarquia de leitura.

## Alterações

### 1. `src/components/site/HeroCanvasCycle.tsx` (novo)
Portar o `<canvas>` + script do arquivo `casa_or_din_mico_e_leve.html` para um componente React:
- `useRef` no canvas + `useEffect` para inicializar contexto, `resize`, `requestAnimationFrame` e listener de `mousemove`.
- Manter as 4 cores/nodos originais (laranja, amarelo, verde, marrom) — combinam com a paleta areia/verde do site sobre fundo `#1A2E25`.
- Ajustar texto central para tom claro (`#F5EFE3` em vez de `#333`) já que o fundo da hero é escuro; remover linhas tracejadas cinza-claro que ficam ruins no escuro (ou trocar para `rgba(255,255,255,0.15)`).
- Cleanup: cancelar `rAF` e remover listeners no unmount.
- Container responsivo com `aspect-square` e `max-w-[440px]`.

### 2. `src/components/site/Hero.tsx` (rewrite)
- Trocar `max-w-[1000px] mx-auto ... text-center` por `max-w-[1200px]` + `grid md:grid-cols-2 gap-10 lg:gap-16 items-center`.
- Coluna esquerda: eyebrow + `<p>` "Você tenta resolver..." + `<h1>` "Mas e o que ainda está invisível?" + divisor (à esquerda, não centralizado) + parágrafo + CTA. Tudo `text-left`.
- Coluna direita: `<HeroCanvasCycle />`.
- Remover o `<HeroCycle />` atual do topo (fica só o canvas novo à direita).
- Manter shader/gradientes/noise/glow existentes intactos.
- Ordem mobile: texto primeiro (`order-1`), canvas depois (`order-2`) — ou inverso se preferir; deixo texto primeiro.

### 3. Sem mudanças em outros arquivos
`HeroCycle.tsx` continua existindo (não removo pra não quebrar imports em outro lugar), mas deixa de ser usado pela Hero.

## Verificação
- Preview desktop: 2 colunas, texto à esquerda alinhado com o resto do site, canvas animando à direita.
- Preview mobile: empilhado, canvas legível, sem overflow.
- Sem erros no console (rAF cleanup ok em HMR).
