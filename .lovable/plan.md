# Pacote: dobra da Carol, nova fonte de títulos e ajustes do bloco verde

## 1. Nova dobra sobre a Carol na home

Uma dobra orgânica, no mesmo espírito do restante do site (formas suaves, foto atravessando o bloco, sem cartões nem faixas rígidas), colocada entre o Sistema ORI e a seção de Serviços.

- Texto: o conteúdo já existente da Carol (título "Quem conduz", nome e os dois parágrafos), sem inventar nada novo.
- Fotos: duas das imagens enviadas — o retrato de fundo laranja como foto principal (recorte vertical, canto arredondado orgânico) e a foto dela conduzindo um encontro como imagem secundária, menor e deslocada, criando profundidade.
- Um destaque caligráfico pontual (uma palavra) e um link discreto para a página Sobre.
- A terceira foto (palestra em luz azul) fica de fora por não combinar com a paleta clara do site.

## 2. Fonte dos títulos

Trocar a fonte de títulos pela nova enviada (CasaOriV4). Todos os títulos do site passam a usar a nova versão; textos corridos continuam em Roboto. Vou conferir acentuação e maiúsculas nos títulos das cinco páginas depois da troca.

## 3. Bloco verde dos serviços

- Alinhamento conferido em todas as larguras (celular pequeno, celular grande, tablet, notebook, telas largas), sem linha cortada nem texto saindo da forma.
- Altura mínima e limites de largura/proporção para a forma verde manter tamanho e proporção coerentes entre telas, em vez de crescer ou encolher demais.
- Revisão de tamanho de fonte, entrelinha e espaço entre linhas do texto dentro da forma, para o conjunto respirar sem quebrar a harmonia.

## Detalhes técnicos

- Fontes: enviar `CasaOriV4-Regular.otf`/`.ttf` como asset e apontar a `@font-face` `CasaOri` em `src/styles.css` para o novo arquivo (mantendo o nome da família, sem tocar nos seletores de título).
- Fotos: `Carol_Home.jpeg` e `quem_e_a_carol.jpeg` via `lovable-assets` + pointer `.asset.json` em `src/assets`, com `loading="lazy"` na secundária.
- Nova seção `#carol` em `HomeEdImpl` (`EditorialPages.tsx`) com classes `home-carol-*` em `src/styles.css`; item de navegação não é alterado.
- Bloco verde: `.home-services-wash` recebe `min-height`, `max-width`/`max-height` e `clamp()` na proporção; `.home-services-intro` recebe `min-height` coerente, `padding` interno e ajuste de `line-height`/tamanhos via `clamp()`; breakpoints checados em 360, 390, 430, 768, 1024, 1280 e 1600 px com Playwright.

## Preservado

Cores da paleta, textos existentes, links, dobra do Sistema ORI, páginas internas e ordem da página Sobre (Casa Orí antes da Carol).
