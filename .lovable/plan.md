# Tema alternativo "Editorial" em /v2

Criar uma segunda versão completa do site — mesmos textos, mesma estrutura de páginas — com um template visual inspirado nas referências (estilo Calmia): tipografia display serifada gigante, fundos creme/manteiga, blocos verde-oliva escuro, fotos grandes e cartões flutuantes.

## Como o usuário acessa

- Botão "Ver novo tema" no menu (desktop e mobile) da versão atual, levando para `/v2`.
- Dentro do `/v2`, um botão equivalente "Voltar ao tema atual" retorna para o site original.
- Páginas espelhadas: `/v2`, `/v2/servicos`, `/v2/sistema-ori`, `/v2/sobre`, `/v2/contato`.
- O site atual continua intacto: nada é removido nem reescrito.

## Direção visual do novo tema

- Paleta: creme (#F4EFE6), manteiga suave (#F2E3A8), verde-oliva profundo (#2A2A1C / verde da marca), areia como acento.
- Título display em serifa alta (ex. Instrument Serif / Cormorant já disponível), com nome "Casa Orí" em escala enorme em hero e rodapé, como nas referências.
- Composição: hero com foto em largura total e título sobreposto; seções alternando cartões brancos flutuantes sobre fundo manteiga; um bloco de depoimento em foto escura com citação centralizada; rodapé escuro com wordmark gigante.
- Cantos suaves, bordas finas, ícones em linha finos, muito espaço em branco.

## Conteúdo

- Todos os textos vêm dos mesmos dados já usados hoje (serviços CPF/CNPJ, eixos ORI, bio da Carol, premissas, contato). Nada de copy nova.
- Fotos: gero um conjunto de imagens no estilo das referências (ambiente de sessão acolhedor, retrato editorial, detalhe de sala, encontro com equipe) e uso nos blocos de foto.
- CTAs continuam apontando para os mesmos quizzes e WhatsApp.

## Detalhes técnicos

- Novos tokens de tema em `src/styles.css` sob um escopo próprio (ex. `.theme-editorial` com variáveis creme/manteiga/oliva), sem alterar os tokens atuais.
- Extrair as constantes de conteúdo hoje embutidas em `ServicosPage.tsx`, `SistemaOriPage.tsx`, `SobrePage.tsx`, `ContatoPage.tsx` e `HomeV3.tsx` para `src/components/site/content.ts`, e importar tanto nas páginas atuais quanto nas novas — garante textos idênticos e um só lugar para editar.
- Novos componentes em `src/components/site/v2/`: `NavV2`, `FooterV2`, `HeroV2`, `SectionV2`, `CardV2`, `QuoteBlockV2`, mais uma página por rota.
- Rotas em `src/routes/v2.tsx` (layout com `<Outlet />`), `v2.index.tsx`, `v2.servicos.tsx`, `v2.sistema-ori.tsx`, `v2.sobre.tsx`, `v2.contato.tsx`, cada uma com `head()` próprio (título/description/og) e `robots: noindex` enquanto for versão de avaliação.
- Fonte display carregada via `<link>` no `__root.tsx`.
- Imagens geradas ficam em `src/assets` e são importadas diretamente.
