
# Otimização Mobile-First + Limpeza de Duplicações

## Duplicações a remover
1. **Carol aparece 2x** (`CarolTeaser` na Home + `QuemConduz` em Sobre) → remover `CarolTeaser` da home.
2. **Mini-cards de 5 serviços em `ComoAjuda`** repetem o `ServicosCarousel` → substituir por 1 CTA "Ver caminhos possíveis →".
3. **CTAs WhatsApp em 6 lugares** (HomeCta, SobreCta, ComoEscolher, ServicosCta, Antes-final, Contato) → manter só 3 momentos-chave: fim Home, fim Serviços, seção Contato. Remover `SobreCta` e o CTA repetido no fim do `Antes`.
4. **"Empresas" duplicado** (card no carrossel + bloco dedicado no Contato) → remover bloco do Contato.
5. **"Formas de atendimento Online/Presencial"** repete o FAQ → remover bloco.
6. **Footer** repete @suacasa.ori/Instagram/WhatsApp já presentes no fim do Contato → manter rodapé minimalista (copyright + 2 ícones apenas).

## Ajustes Mobile-First
1. **Padding de seções**: `py-20 md:py-28 lg:py-32` → `py-14 md:py-24 lg:py-32` (menos peso no mobile).
2. **Hero**: trocar `min-h-screen` por `min-h-[88svh]`, ajustar paddings.
3. **ServicosCarousel mobile**: ocultar imagens laterais (efeito 3D só a partir de `md`); imagem ativa única no mobile; altura `h-[260px]` no mobile.
4. **SistemaOriEixos**: virar accordion no mobile (`md:hidden` + accordion / `hidden md:grid` para 3 colunas) — reduz scroll massivo.
5. **InstagramGrid**: `grid-cols-2 md:grid-cols-3` (thumbs maiores no mobile).
6. **WhatsApp flutuante**: botão fixo no canto inferior direito no mobile (`lg:hidden`), oculto quando chega no Contato.
7. **Mini-ORI em ComoAjuda**: compactar — manter cards mas com altura reduzida e estado `active:` (mobile não tem hover).
8. **Tipografia densa**: parágrafos longos `text-[17px]` → `text-[15px] md:text-[17px]`.
9. **Reveal delays**: reduzir `i * 120` → `i * 60` em listas (menos espera percebida no mobile).

## Arquivos tocados
- `src/components/site/Section.tsx` — padding responsivo.
- `src/components/site/sections.tsx` — remover CarolTeaser, SobreCta, sub-blocos do Contato (Formas/Empresas), simplificar ComoAjuda, accordion mobile em SistemaOriEixos, InstagramGrid 2 col, ajustes tipográficos e delays.
- `src/components/site/ServicosCarousel.tsx` — esconder slides laterais no mobile, altura reduzida.
- `src/components/site/Nav.tsx` — botão WhatsApp flutuante mobile.
- `src/routes/index.tsx` — remover `<CarolTeaser />` e `<SobreCta />` da composição.

## Fora de escopo
- Textos validados pela Carol (não simplificar/reescrever).
- Paleta, fontes, estrutura de âncoras.
