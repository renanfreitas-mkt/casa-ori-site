# Separar Serviços em duas páginas: Para você e Para empresas

## O que muda

A página única de Serviços vira duas páginas independentes, mantendo exatamente o mesmo visual, textos, fotos e paleta atuais.

- **Para você** (`/para-voce`) — serviços de pessoa física: Terapia Sistêmica, Constelação Familiar e Vivências (SERV_CPF), com título, introdução, foto das cartas e depoimento já existentes.
- **Para empresas** (`/para-empresas`) — serviços para equipes e lideranças: Palestras, Encontro de Comunicação, Encontro para Liderança e Liderança em Processo (SERV_CNPJ).

## Passos

1. **Menu e rodapé** (`ui.tsx`): a lista de links passa a ter "Para você" (`/para-voce`) e "Para empresas" (`/para-empresas`) no lugar de "Serviços". Ordem: Início, Para você, Para empresas, Sistema ORI, Sobre, Contato.

2. **Nova página Para você** (`src/routes/para-voce.tsx`):
   - Hero com a foto das cartas de constelação (que hoje abre /servicos), kicker "Para você", título e introdução existentes.
   - Lista SERV_CPF com os cartões de serviço atuais (componente ServicoEd, sem alteração).
   - Depoimento + foto da Carol no laptop (bloco que hoje fica no meio de /servicos).
   - CTA final existente.

3. **Nova página Para empresas** (`src/routes/para-empresas.tsx`):
   - Hero no mesmo padrão visual, com kicker "Para empresas" e o título "Equipes e lideranças".
   - Lista SERV_CNPJ com os mesmos cartões.
   - CTA final existente.
   - Foto: reutilizar `edTeam` (foto de reunião de equipe) ou deixar o hero sem foto, seguindo o padrão das demais páginas.

4. **Redirecionamento**: `/servicos` passa a redirecionar (301) para `/para-voce`. Links internos que apontam para `/servicos` são atualizados para a página correta conforme o contexto.

5. **Home**: permanece como está — continua apresentando os dois mundos com os botões atuais.

6. **SEO**: cada página nova com título, descrição, canonical e og tags próprios ("Para você — Casa Orí" e "Para empresas — Casa Orí").

## Validação

Conferir com Playwright em desktop e mobile: menu abrindo as duas páginas novas, `/servicos` redirecionando, textos e fotos corretos em cada página, sem erros no console.

## Detalhes técnicos

- Componente `ServicosEd` em `EditorialPages.tsx` será dividido em dois (ex.: `ServicosPessoasEd` e `ServicosEmpresasEd`), reaproveitando `ServicoEd`, `EdHead`, `EdCTA`, `CtaFinalEd` e as classes `.page-*` já existentes.
- Nenhum texto, cor, fonte ou foto é alterado — apenas reorganizados entre as duas páginas.
