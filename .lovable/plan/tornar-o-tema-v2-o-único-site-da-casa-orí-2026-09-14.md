# Tornar o tema V2 o único site da Casa Orí

## Resultado

A versão editorial atual deixará de ser uma alternativa em `/v2` e passará a ocupar os endereços principais do site:

- `/` — Início
- `/servicos` — Serviços
- `/sistema-ori` — Sistema ORI
- `/sobre` — Sobre
- `/contato` — Contato

O tema antigo será removido do projeto, sem alterar o conteúdo ou a aparência aprovada da V2.

## Implementação

1. **Promover a V2 para os endereços principais**
   - Substituir o conteúdo das cinco páginas atuais pelo conteúdo editorial correspondente.
   - Manter uma navegação e um rodapé únicos compartilhados por todas as páginas.
   - Atualizar todos os links internos, incluindo o botão “Ver todos os serviços”, para os novos endereços sem `/v2`.

2. **Remover a alternância de temas**
   - Excluir do cabeçalho, menu mobile e rodapé os links “Tema atual” e “Voltar ao tema atual”.
   - Remover o botão “Ver novo tema” junto com a navegação antiga.
   - Manter apenas os links do site, WhatsApp e redes sociais.

3. **Retirar o tema antigo do projeto**
   - Excluir as páginas e componentes usados exclusivamente pelo visual anterior, incluindo sua hero, navegação, seções e efeitos.
   - Preservar os arquivos compartilhados que continuam alimentando textos, animações, imagens e componentes da versão editorial.
   - Remover bibliotecas que ficarem sem uso após a limpeza.

4. **Organizar os antigos endereços `/v2`**
   - Manter redirecionamentos permanentes de `/v2` e suas quatro páginas internas para os novos endereços principais, evitando links antigos quebrados.
   - Não manter conteúdo duplicado nesses endereços.

5. **Atualizar identificação e busca**
   - Retirar “Tema editorial” e “versão editorial” dos títulos e descrições das páginas.
   - Garantir metadados próprios para cada uma das cinco páginas principais, incluindo título, descrição, Open Graph e cartão de compartilhamento.

6. **Validar a versão final**
   - Conferir as cinco páginas em computador e celular.
   - Testar navegação, menu mobile, CTAs, quizzes, WhatsApp e redirecionamentos de `/v2`.
   - Confirmar ausência de conteúdo antigo, links quebrados, cortes, rolagem horizontal e erros visíveis.

## Preservado

- Layout, cores, fontes, imagens, textos, depoimentos, diagramas e desenhos da V2.
- Fundo branco e paleta oficial da marca.
- Endereços principais já conhecidos do site.
