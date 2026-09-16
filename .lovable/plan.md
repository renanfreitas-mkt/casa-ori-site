# Foto saindo de trás do primeiro cartão — página Sistema ORI

Colocar a foto enviada (Carol segurando a prancheta com anotações de sessão) no lugar da bola clara (círculo decorativo) do topo da página /sistema-ori: a foto fica atrás do primeiro cartão branco ("O — Observa") e aparece emergindo por trás dele, no canto superior direito, onde hoje está o círculo.

## O que muda

- A bola decorativa (círculo areia) da primeira seção da página sai; a foto ocupa aquele mesmo canto.
- A foto fica com profundidade menor que o cartão (atrás dele), de forma que uma parte fique escondida pelo cartão branco e a outra parte apareça — como se estivesse "saindo de trás".
- Cantos orgânicos arredondados no topo, no mesmo estilo das outras fotos do site.
- Nada mais muda: textos, cartões, cores, fontes e as outras páginas ficam intactos.

## Detalhes técnicos

1. Criar o asset da foto enviada: `lovable-assets create --file /mnt/user-uploads/BSR01030.JPG.jpeg --filename carol-anotacoes.jpg > src/assets/carol-anotacoes.jpg.asset.json`.
2. Em `src/components/site/v2/EditorialPages.tsx`, na primeira seção de `OriEdImpl`: trocar o `div.page-wash.page-wash-sand` por uma `img` absolutamente posicionada (z-index atrás do conteúdo, `aria-hidden` não — foto com alt descritivo), importando o novo asset.
3. Em `src/styles.css`, adicionar uma classe (ex. `.ori-notes-photo`) com posição à direita/topo no mesmo encaixe do wash atual, `object-fit: cover`, `aspect-ratio: 4/5`, `border-radius: 10rem 10rem 1.5rem 1.5rem`, ajustes para mobile (menor largura, sem estourar a largura da tela).
4. O cartão continua por cima (o conteúdo já tem z-index maior que o wash; garantir com a camada correta).

## Validação

- Playwright em mobile (392px) e desktop (1440px): foto visível saindo de trás do primeiro cartão, sem overflow horizontal, sem erros no console, screenshots conferidos.
