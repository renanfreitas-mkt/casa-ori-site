# Fix: rotas novas dão 404

## Diagnóstico

As páginas `/servicos`, `/sistema-ori`, `/sobre`, `/podcast` e `/contato` foram criadas como arquivos em `src/routes/`, mas o `src/routeTree.gen.ts` ainda lista só `IndexRoute`. O plugin do TanStack Router (que regenera esse arquivo automaticamente) não pegou os arquivos novos no dev server atual — por isso qualquer link cai no `notFoundComponent` do root.

## Correção

1. Reiniciar o dev server para o plugin do TanStack Router regenerar `src/routeTree.gen.ts` com as 5 rotas novas + a Index.
2. Conferir no preview que `/servicos`, `/sistema-ori`, `/sobre`, `/podcast` e `/contato` carregam sem 404 e que o item ativo do menu acompanha a rota.

Nenhuma mudança de código — só restart. Se após o restart alguma rota continuar 404, aí sim eu vou no arquivo correspondente investigar (tipicamente um mismatch entre o nome do arquivo e a string do `createFileRoute`).
