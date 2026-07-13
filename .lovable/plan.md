## Objetivo
Trocar a ordem das colunas do Hero para que o texto fique à esquerda e a animação (HeroCanvasCycle) à direita, em desktop e mobile.

## Alterações em `src/components/site/Hero.tsx`

1. **Grid columns**: inverter a proporção para dar mais espaço ao texto na esquerda e manter a animação com bom tamanho na direita:
   - de `sm:grid-cols-[1.2fr_1fr] md:grid-cols-[1.3fr_1fr]`
   - para `sm:grid-cols-[1fr_1.1fr] md:grid-cols-[1fr_1.2fr]`

2. **Ordem visual**:
   - Bloco de texto: `order-1` (esquerda em desktop, primeiro em mobile).
   - Bloco da animação: `order-2` (direita em desktop, abaixo do texto em mobile).
   - Atualizar comentários das colunas para refletir a nova posição.

3. **Alinhamento do texto**: manter `text-left` (já está correto para coluna esquerda).

Nenhuma outra seção, estilo global ou componente é alterado.
