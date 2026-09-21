# Revisão v.4 — o que dá para fazer

Quase tudo da sua lista é possível. Abaixo o que será feito e, no fim, os poucos pontos que ficam em aberto.

## Home

- Quebrar "Surge um problema / Você tenta resolver / Gasta tempo e energia / O problema continua" em quatro linhas, com fonte menor e uma seta desenhada indicando a sequência (a mesma seta que sai da página Sistema ORI).
- Deixar em caixa alta e como destaque principal: "Você tenta resolver só o que consegue ver. Mas o que ainda está invisível?".
- Dois botões no topo: "Quero entender o que está acontecendo comigo" e "Quero entender o que está acontecendo com a minha empresa".
- Tirar "O método continua o mesmo" da faixa verde escura e colocar ali as dores, abrindo com "Como isso costuma acontecer na prática".
- Alinhar as colunas "Para você" e "Para sua empresa" na mesma altura e dar o mesmo tratamento visual às duas (hoje só a de empresa tem fundo verde).
- Depoimento: trocar a foto de palestra pela foto da prancheta e equilibrar o tamanho da caixa de texto com o da foto (ajuste aplicado em todos os depoimentos do site).
- Sistema ORI clicável: o bloco inteiro e cada etapa levam para a página do Sistema ORI, com botão visível.
- Carol: trocar pela foto sentada com a perna cruzada. A seção continua no lugar atual.
- Serviços: corrigir o texto que encosta na forma verde clara, mostrar só o começo de cada serviço com "explica mais" levando à aba correspondente, e trocar o botão "Ver todos os serviços" por dois botões ("Para você" e "Para empresas").
- Segundo depoimento: mesma correção de proporção e troca da foto com recorte estranho de sofá.
- Chamada final: os dois botões com fundo preenchido, com o mesmo peso.
- Voltar, no fim da página, as seções de podcast (player do Spotify) e Instagram (@suacasa.ori).

## Para você

- Abertura própria: sequência "surge um problema…", a frase de destaque adaptada e a fala "A Casa Orí te ajuda a investigar o que ainda não foi percebido, mas continua te influenciando".
- Incluir as dores de pessoa física logo depois da abertura.
- Serviços mantidos como estão, com "explica mais".
- Manter o depoimento de constelação e acrescentar o da Marta.
- "Próximo passo" falando só com a pessoa física, sem menção a líder.

## Para empresas

- Abertura equivalente, adaptada para empresa, mantendo "Quero entender minha empresa".
- Incluir as dores de empresa.
- Liderança sempre antes de Equipe.
- Formatos de trabalho mantidos.
- "Próximo passo" só com o botão de empresa.

## Sistema ORI

- Manter a letra atual do "ORI" e só acrescentar um círculo ao redor.
- Remover a foto que aparece muito cortada.
- Reduzir as letras dentro das bolinhas (ou deixá-las ultrapassando de propósito), sem aparência espremida.
- Remover a seta desta página.
- Centralizar o texto final dentro da área verde escura.
- Conferir se o depoimento do Thiago se repete em outra página e remover a repetição.

## Sobre

- Refazer a equação do nome: "Casa + Orí = …" com o sinal de mais e o resultado ao lado do igual, e dar escala ao bloco usando o símbolo da Casa Orí grande ao fundo.
- Tirar a primeira pessoa de "Como conduzo", seguindo o padrão do resto do site.
- Revisar o texto da Carol para não repetir o da home, deixando este mais aprofundado.
- Trocar a foto em que ela olha para fora da página.
- Deixar o depoimento sem foto ao lado.
- Diminuir o bloco "Desconforto da mudança" e aumentar as frases de impacto, centralizando.
- "Quero essa mudança" passa a abrir o WhatsApp.
- Acrescentar aqui também as chamadas de podcast e Instagram.

## Contato

- Separar as trilhas: o bloco "Para você" com o botão dele logo abaixo, e o bloco de empresa com o seu próprio botão.
- Dar destaque à frase "Profundidade para compreender, direção para seguir", ocupando melhor a forma verde.

## Pontos que ficam em aberto

- Depoimento de empresa para fechar a aba "Para empresas": não existe ainda, entra quando você tiver.
- Foto nova para o depoimento do Thiago: por enquanto fica sem foto, com o layout reequilibrado.
- Nome "Processos no seu ritmo" e introdução mais elaborada do Sistema ORI: deixados como estão, conforme você indicou como baixa prioridade.
- O número do WhatsApp do site ainda é um placeholder; me envie o número real para os botões funcionarem.

## Detalhes técnicos

- Textos centralizados em `src/components/site/content.ts`; páginas em `src/components/site/v2/EditorialPages.tsx`; estilos em `src/styles.css`.
- Seta e círculo do ORI como SVG inline decorativo, sem novas dependências.
- Podcast via iframe do Spotify com carregamento tardio; Instagram como bloco de link.
- Componente único para depoimentos, com proporção fixa entre foto e texto e variante sem foto.
