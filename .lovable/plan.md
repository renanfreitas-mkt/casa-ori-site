## Mudanças

**1. Trazer a dobra da Carol (`QuemConduz`) para a home**
- Adicionar `QuemConduz` no `src/routes/index.tsx`, posicionado depois de `ComoAjuda` e antes de `Depoimentos` (apresenta quem conduz antes da prova social).
- Remover `QuemConduz` de `src/routes/sobre.tsx` para não duplicar — a página Sobre fica com `PorQue`, `ComoConduzido` e `Antes`.

**2. Podcast como última dobra da home**
- Adicionar `Podcast` em `src/routes/index.tsx` como última seção antes do `Footer` (depois do `HomeCta`).
- Remover a rota `/podcast` (apagar `src/routes/podcast.tsx`) e o item "Podcast" do menu em `src/components/site/Nav.tsx`, já que o conteúdo passa a viver na home. Isso também reduz o "travamento" de navegação com menu mais enxuto (5 itens em vez de 6).

**Ordem final da home:**
Hero → Dores → ComoAjuda → QuemConduz → Depoimentos → InstagramGrid → Faq → HomeCta → Podcast → Footer

Nenhuma mudança de copy ou de estilo — só recomposição das páginas.