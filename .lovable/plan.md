# Revisão v.2 — Casa Orí

Aplicar todas as correções do documento da Carol, com novo ritmo visual e copy atualizada em todas as abas.

## 1. Novo ritmo visual (aplica a todo o site)

Hoje o site alterna blocos de cor em sequência previsível. Novo ritmo:

- Fundo claro (areia/off-white) como dominante do site.
- Apenas 2 blocos escuros na Home, usados como ênfase narrativa: o trecho do problema (trecho 02, continuando o verde escuro do topo) e o fechamento.
- Trecho 03 fica claro, criando o alívio depois do bloco escuro.
- Padronizar todos os títulos de seção: mesma família, mesmo tamanho, mesmo espaçamento (escala fluida única), com kicker curto acima.
- Variar a estrutura em vez da cor: linha do tempo, layout assimétrico 60/40, cartões sobrepostos, divisórias diagonais/curvas suaves.
- Todos os CTAs em primeira pessoa ("Quero...") e arredondados.
- Destacar palavras-chave nos textos (peso/itálico/sublinhado suave) para tirar a monotonia.

## 2. Home

- Trecho 01: "Mas o que ainda está invisível?"
- Trecho 02: fundo escuro; texto "Enquanto você tenta resolver só essa parte, uma outra continua **influenciando** a situação"; seta visual ligando "uma parte do problema" a "mas ela não conta a história toda".
- Trecho 03: fundo claro.
- Trechos 05 e 06: unificados numa composição só, com "Para você" e "Para você líder" centralizados. CTA CPF "Quero entender minha situação", CTA CNPJ "Quero entender minha empresa".
- Ponte após o quiz: "**O método continua o mesmo.** É o formato que muda de acordo com a sua necessidade ou da sua empresa." + CTA "Quero conhecer o método".
- Trecho 07: sai o retângulo; entra composição em cartões escalonados/assimétricos.
- Trecho 08: "Continue essa conversa…"; descrição do podcast: "Conversas sobre novas formas de entender e lidar com o que estamos vivendo no dia a dia."
- Trecho 09: "O que muda quando você começa a ver o problema por completo?" + seção de depoimentos com 3 placeholders marcados para substituir pelos do Instagram.
- Trecho 10: fechamento dividido em CPF/CNPJ, com os textos e CTAs exatos do documento.

## 3. Serviços

- Abertura com o texto novo ("Você já sabe que algo precisa mudar...") + CTA "Quero começar por aqui".
- Bloco PARA VOCÊ: Terapia Sistêmica, Constelação Familiar, Vivências.
- Bloco PARA SUA EMPRESA: Palestras, Encontro de Comunicação, Encontro para Liderança, Liderança em Processo.
- Cada serviço com a linha de formato (duração/modalidade), frase-âncora em destaque, descrição e CTA "Quero saber mais". Textos exatamente como no documento.

## 4. Sistema ORI

- Nome padronizado como "Sistema ORI" (sem "o").
- O / R / I com: título, subtítulo em negrito, frase de tensão, parágrafo e a citação em itálico — textos novos completos.
- "O que torna o Sistema ORI diferente" (4 itens).
- Duas colunas de exemplos: "Na vida pessoal" (7 itens) e "Nas empresas" (7 itens).
- "O que você ganha ao longo do caminho" (5 itens).
- Fechamento: "A estrutura está aqui. O Sistema ORI organiza o caminho — e quem caminha é você." + CTA "Por onde eu começo?"

## 5. Sobre

- Bloco de significado do nome em 3 colunas (Casa | Orí | =), como no documento.
- "Quatro pilares guiam cada processo" com os 4 textos novos.
- Carol Milhomens: subtítulo de especialidade + bio nova (4 anos em comunicação corporativa, ~20 empresas, Constelação, 2019, Casa Orí em 2024, +900 atendimentos).
- "Antes de começar, vale alinhar alguns pontos": 7 premissas com textos novos.
- Fechamento com tipografia diferenciada: "Qual desconforto você escolhe: o que já te acompanha há tanto tempo, ou o que te leva à mudança que você busca?" + CTA "Quero essa mudança".

## 6. Contato

- Título "próximos passos"; frase de abertura em destaque; os três "Sem precisar..." e o parágrafo de orientação.
- Dois blocos: "Para você" → quiz; "Para você líder" → quiz.
- Linha menor e discreta com o atalho de WhatsApp para quem já sabe o que quer.
- "Online ou presencial, conforme sua necessidade."
- Assinatura: "Profundidade para compreender. Direção para seguir."

## Detalhes técnicos

- Quiz: ambos os CTAs (CPF e CNPJ) apontam para `https://casa-ori-spark.lovable.app`, abrindo em nova aba, centralizados em uma constante única para trocar depois por URLs distintas.
- Textos e listas movidos para constantes de módulo por aba, mantendo `React.memo` e o lazy loading atual.
- Tokens de seção novos em `src/styles.css` (superfície clara dominante, superfície escura de ênfase, escala tipográfica única de títulos); sem cores hardcoded nos componentes.
- Hero e o canvas animado permanecem como estão.
- Depoimentos: componente com dados placeholder marcados por comentário para troca rápida.
- Atualizar `head()` de cada rota com título/descrição alinhados à nova copy.
