# Refinamento editorial e autoral da v2

Aplicar à versão `/v2` a direção visual escolhida, mantendo textos, fotos, paleta atual, páginas e funcionamento intactos.

## Tipografia e títulos

- Incorporar a fonte enviada `CasaOri-Regular.otf` ao projeto e usá-la nos títulos da v2.
- Manter os títulos em caixa alta, preservando o aspecto pequeno, limpo e editorial já aprovado.
- Criar destaque pontual com a mesma linguagem tipográfica em itálico e em uma cor existente da paleta — sem introduzir uma nova família ou nova cor.
- Revisar todos os títulos nas cinco páginas da v2 para controlar largura e quebras por breakpoint, evitando palavras órfãs ou uma segunda linha sem equilíbrio visual.
- Usar quebras intencionais apenas quando melhorarem a leitura; no celular, deixar o texto se reorganizar naturalmente sem cortes artificiais.

## Traços orgânicos

- Criar pequenos elementos autorais em traço manual — círculos irregulares, sublinhados e setas — usando somente as cores atuais.
- Dar prioridade à página e ao resumo do Sistema ORI, conectando ou destacando etapas sem transformar os cards em ilustrações densas.
- Usar no restante da v2 apenas poucos acentos úteis, próximos a palavras-chave ou transições que realmente precisam de destaque.
- Não sobrepor desenhos a fotos, parágrafos longos, botões ou outros blocos já preenchidos.
- Quando animados, os traços surgirão discretamente como se fossem desenhados; a animação será removida para quem prefere menos movimento.

## Preservação do site

- Não alterar copy, imagens, ordem das seções, navegação, links, depoimentos, CTAs ou paleta.
- Manter o fundo branco dominante e o contraste atual de leitura.
- Não modificar o tema original fora de `/v2`.

## Detalhes técnicos

- Registrar a fonte local com `@font-face` e vinculá-la somente aos estilos editoriais da v2.
- Criar utilitários reutilizáveis para títulos equilibrados, destaques em itálico e traços manuais, evitando ajustes isolados inconsistentes.
- Implementar os desenhos como SVGs leves, acessíveis e decorativos, sem dependências novas.
- Ajustar larguras máximas e quebras responsivas nos componentes compartilhados da v2 e, quando necessário, em títulos específicos.

## Validação

- Conferir `/v2`, `/v2/servicos`, `/v2/sistema-ori`, `/v2/sobre` e `/v2/contato` em desktop e celular.
- Verificar títulos sem palavras isoladas, desenhos sem sobreposição, contraste preservado, fonte carregada e ausência de erros no navegador.
