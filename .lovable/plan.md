# Plano — Site Casa Orí

Site one-page com âncoras, navegação fixa, scroll suave e animações de entrada suaves. Identidade visual fiel ao Guidebook (verde #26533C, areia #C4B58E, areia claro #E8DEC8, branco). Tipografia Roboto + Dancing Script (substituto da Artifact). Sem bibliotecas de UI — tudo customizado com Tailwind. Ícones via lucide-react.

## Arquitetura de rotas

- `src/routes/index.tsx` — única rota, renderiza a one-page completa
- `src/routes/__root.tsx` — adicionar `<link>` Google Fonts (Roboto + Dancing Script) no head e meta SEO em português
- `src/styles.css` — tokens da paleta Casa Orí, fontes, textura kraft, `scroll-behavior: smooth`

## Estrutura de componentes

```text
src/components/site/
  Nav.tsx              -> nav fixo, transparente -> verde após 80px, hambúrguer mobile
  Section.tsx          -> wrapper com id, padding 120px, reveal via Intersection Observer
  Reveal.tsx           -> hook/wrapper de fade+translateY ao entrar no viewport
  Logo.tsx             -> SVG circular concêntrico + "Casa Orí"
  Accordion.tsx        -> + / × animado, max-height transition (FAQ e Antes de Começar)
  ServiceCard.tsx      -> card com hover verde
  OriPillar.tsx        -> bloco O / R / I
  WhatsAppButton.tsx   -> variantes (primário areia, outline branco)
  sections/
    Hero.tsx           -> #home — vídeo placeholder + manifesto
    Dores.tsx          -> "Talvez você tenha chegado aqui porque..."
    ComoAjuda.tsx      -> texto introdutório + teaser ORI + grid serviços miniatura
    CarolTeaser.tsx
    Depoimentos.tsx
    Podcast.tsx
    Instagram.tsx
    Faq.tsx
    HomeCta.tsx
    Sobre.tsx          -> #sobre (Por que / Quem conduz / Como é conduzido / fechamento)
    Servicos.tsx       -> #servicos (Avaliação + 5 cards alternados + Como escolher + fechamento)
    SistemaOri.tsx     -> #sistema-ori (O que é, 3 eixos, diferencial, onde se aplica, esperar)
    Antes.tsx          -> #antes (7 accordions + fechamento)
    Contato.tsx        -> #contato (CTA WhatsApp, formas de atendimento, empresas, fechamento)
    Footer.tsx
```

## Design tokens (`src/styles.css`)

Adicionar no `@theme inline` / `:root`:

```css
--color-verde: #26533C;
--color-areia: #C4B58E;
--color-areia-claro: #E8DEC8;
--color-texto: #1C1C1C;
--color-texto-suave: #555555;
--font-sans: "Roboto", system-ui, sans-serif;
--font-script: "Dancing Script", cursive;
```

Utilitários: `.kraft` (background com ruído SVG sutil), `.script` (Dancing Script), `.label` (uppercase + letter-spacing 0.1em). Regras tipográficas com `clamp()` conforme briefing.

## Navegação e scroll

- `<a href="#secao">` com `html { scroll-behavior: smooth }`
- Nav fixo: estado verde após `window.scrollY > 80` (listener com `useEffect`)
- Intersection Observer detecta seção ativa → marca o link correspondente
- Mobile: estado aberto → overlay full-screen verde com links centralizados

## Animações

- Componente `Reveal` usando IntersectionObserver (`threshold: 0.15`) aplica classes Tailwind `opacity-0 translate-y-8` → `opacity-100 translate-y-0` com `transition-all duration-700 ease-out`
- Delay escalonado via prop `delay` (0, 120, 240ms) em grids
- Accordion: `max-height` 0 → suficiente, transição 0.4s ease; ícone `Plus` → `X` (lucide)
- Hover de cards: `transition-colors duration-300`

## Conteúdo

Todos os textos do briefing transcritos literalmente em pt-BR — sem resumir nem substituir. Placeholders mantidos:

- Vídeo manifesto: div verde escuro com ícone `Play`
- Foto Carol: retângulo areia com ícone `User`
- Depoimentos: 3 cards com texto placeholder
- Instagram grid 3×2: quadrados areia claro com ícone `Camera`
- WhatsApp: `https://wa.me/55XXXXXXXXXX` (placeholder)
- Quiz: `QUIZ_URL` (placeholder, `target="_blank"`)
- Instagram handle: `@suacasa.ori`

## SEO

Em `index.tsx` via `head()`:
- title: "Casa Orí — Terapia sistêmica e constelação familiar · Carol Milhomens"
- description curta sobre Casa Orí em Brasília
- og:title, og:description, og:type=website
- `<html lang="pt-BR">` em `__root.tsx`

## O que não será feito

- Não vou implementar player de vídeo real, integração Spotify, feed real do Instagram, ou backend — tudo placeholder visual conforme briefing
- Não vou trocar Dancing Script por outra fonte
- Não vou adicionar cores fora da paleta

## Verificação final

- Conferir build sem erros
- Revisar visualmente no preview em desktop e mobile (375px)
- Confirmar contraste correto (verde→branco, areia→verde) em todas as seções
