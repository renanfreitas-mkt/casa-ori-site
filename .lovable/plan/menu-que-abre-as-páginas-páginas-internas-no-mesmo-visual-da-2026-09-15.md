# Menu que abre as páginas + páginas internas no mesmo visual da home

## O problema

1. **Menu.** Quando você está na home, os itens do menu (Serviços, Sistema ORI, Contato) apenas rolam para um trecho da própria home, em vez de abrir a página correspondente. Só funcionam como páginas quando você já está em outra página.
2. **Páginas internas.** Serviços, Sistema ORI, Sobre e Contato ainda seguem o formato antigo: blocos empilhados em faixas de cores alternadas. A home já tem a leitura contínua e orgânica.

## O que vai ser feito

### 1. Menu

- Todos os itens do menu passam a abrir a página: Início → home, Serviços → página de Serviços, Sistema ORI, Sobre, Contato.
- Vale igual no computador e no menu do celular; o item da página atual continua destacado.
- O rodapé já abre as páginas e continua como está.
- Conferência item por item, em computador e celular, checando o endereço final e o topo correto de cada página.

### 2. Páginas internas no padrão da home

Mesmas palavras, mesmas cores da marca e mesmos links — muda só a montagem visual, para cada página ter o mesmo ritmo da home:

- Fundo claro dominante, com as formas verdes orgânicas e cantos arredondados já usados na home, no lugar das faixas de cor alternadas.
- Títulos na fonte da marca, em blocos curtos; textos corridos em Roboto, como hoje.
- Abertura de cada página com respiro maior e um destaque caligráfico pontual, igual à home.
- Depoimentos e chamadas distribuídos ao longo da leitura, sem seções fechadas.
- Espaçamentos verticais unificados com os da home, sem vazios grandes.
- A dobra do Sistema ORI dentro da home permanece exatamente como está.

## Detalhes técnicos

- `EdNav` em `src/components/site/v2/ui.tsx`: remover o mapa `homeAnchors` e o caminho `<a href="#...">`; todos os itens voltam a ser `<Link to>`.
- `EditorialPages.tsx`: reescrever `ServicosEdImpl`, `OriEdImpl`, `SobreEdImpl` e `ContatoEdImpl` usando as mesmas classes de fluxo da home (`home-flow`, washes orgânicos, grids assimétricos) em vez de `EdSection bg="ink|butter|white"` alternados; reaproveitar `HomeTestimonial`, `EdHead as="h1"` uma vez por página e `EdCTA`.
- `src/styles.css`: generalizar as classes `.home-*` de fluxo/wash para uso nas páginas internas (ou adicionar equivalentes `.page-*`), sem alterar tokens de cor.
- Validação com Playwright em 360, 390, 768, 1280 e 1600 px: sem overflow, um `h1` por página, sem erros no console, e clique em cada item do menu conferindo a rota resultante.
