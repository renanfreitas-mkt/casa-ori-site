## Objetivo
Inverter as colunas da Hero (animação à esquerda, texto à direita) e deixar a animação **maior e proporcional** ao texto em todas as telas.

## Alterações

### 1. `src/components/site/Hero.tsx`
- Trocar `order-2 sm:order-1` (texto) → `order-2` e `order-1 sm:order-2` (animação) → `order-1 sm:order-1`. Resultado: animação à esquerda, texto à direita a partir de `sm`. No mobile: animação primeiro, texto depois.
- Ajustar grid: `grid-cols-1 sm:grid-cols-[1.2fr_1fr] md:grid-cols-[1.3fr_1fr]` — coluna da animação passa a ser a maior.
- Reduzir `max-w-[520px]` do parágrafo pra caber melhor na coluna direita (`max-w-[460px]`).

### 2. `src/components/site/HeroCanvasCycle.tsx`
- Aumentar o teto e o piso do canvas: trocar `maxWidth: "min(780px, 92vw, 68vh)"` por `maxWidth: "min(880px, 100%, 78vh)"` e adicionar `minHeight` implícito via `min-w-[280px]` no container pra evitar que fique minúsculo em telas médias.
- Como o canvas usa `aspect-square` + `w-full`, ele agora ocupa toda a largura da coluna esquerda (que é a maior no grid), ficando visivelmente proporcional ao bloco de texto.

## Verificação
- Desktop (≥1024px): animação grande à esquerda ocupando ~57% da largura, texto à direita.
- Tablet (~768px): mesma ordem, animação ainda dominante.
- Mobile: animação em cima, texto embaixo, canvas com largura ~92% da tela.
- Sem erros de layout / build.
