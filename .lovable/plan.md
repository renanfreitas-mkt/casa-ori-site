# Depoimentos reais no tema editorial (/v2)

Substituir os 3 placeholders de depoimento pelos 4 depoimentos reais, somente no tema `/v2`. Layout, cores e fontes permanecem intactos.

## Conteúdo

Atualizar `DEPOIMENTOS` em `src/components/site/content.ts` com os 4 depoimentos (versões de card já aprovadas):

1. **Bruna Cruz** — versão curta editada (sem foto, inicial "B")
2. **Luana F.** — versão curta editada (inicial "L")
3. **Marta F.** — íntegra (inicial "M")
4. **Thiago C.** — íntegra (inicial "T")

Todos com avatar de inicial em círculo (as fotos de perfil não foram enviadas; se chegarem depois, é só trocar).

## Onde cada um entra

- **Início** (`/v2`): Bruna Cruz — substitui `DEPOIMENTOS[0]` no bloco de citação existente.
- **Serviços** (`/v2/servicos`): Luana F. — substitui `DEPOIMENTOS[1]`.
- **Sistema ORI** (`/v2/sistema-ori`): Marta F. — substitui `DEPOIMENTOS[2]`.
- **Sobre** (`/v2/sobre`): Thiago C. — novo bloco `EdQuote` no mesmo estilo dos demais (foto escura + citação), reutilizando uma imagem editorial já existente.

## Detalhes técnicos

- `content.ts`: `DEPOIMENTOS` vira array com 4 itens; adicionar campo `inicial` por depoimento.
- `src/components/site/v2/ui.tsx`: `EdQuote` passa a exibir um círculo com a inicial ao lado do nome do autor.
- `src/components/site/v2/EditorialPages.tsx`: referências por índice ajustadas e novo `EdQuote` na página Sobre.
- A Home v1 (tema atual) não é alterada.
