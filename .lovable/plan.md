Vou atacar a causa mais provável do travamento: animações contínuas e JavaScript pesado carregando/renderizando cedo demais.

1. Substituir o fundo WebGL do Hero
- Remover `MeshGradient` e `PulsingBorder` do Hero, que ficam animando continuamente e podem travar o navegador.
- Trocar por um fundo CSS estático/leve com gradientes e textura, mantendo a estética verde/areia da Casa Orí.
- Remover o `framer-motion` do Hero para o topo carregar sem custo extra.

2. Simplificar as animações de entrada
- Ajustar o componente `Reveal` para usar uma animação mais curta e leve.
- Respeitar `prefers-reduced-motion`, mostrando o conteúdo direto para quem estiver com redução de movimento ativa.
- Reduzir delays em sequência para evitar sensação de site “preso” enquanto a página aparece.

3. Deixar o menu mais imediato
- Trocar o listener de scroll que pode disparar muitos updates por uma lógica que só muda estado quando cruza o limite.
- Encurtar/remover transições longas no header e no menu mobile.
- Evitar `transition-all` no menu, usando apenas propriedades necessárias.

4. Corrigir o code splitting da home
- Evitar vários `React.lazy` importando o mesmo arquivo grande de seções, porque isso pode gerar erro de chunk e atraso artificial.
- Carregar as seções da home em um bloco único e estável, com fallback leve, ou dividir em arquivos reais depois se necessário.
- Isso também deve reduzir o risco do erro atual de “Failed to fetch dynamically imported module”.

5. Otimizar as outras páginas
- Hoje `/servicos`, `/sobre`, `/sistema-ori` e `/contato` importam o arquivo inteiro `sections.tsx` diretamente.
- Ajustar para carregar o conteúdo pesado dessas páginas de forma mais segura, sem travar a navegação.

6. Remover animação automática pesada no carrossel de serviços
- O carrossel usa `setInterval`, várias imagens e `framer-motion`; vou reduzir/remover autoplay e simplificar transições para não disputar processamento com o restante do site.

7. Validar no preview
- Conferir carregamento da home, troca de páginas pelo menu e rolagem.
- Verificar se não há erro de módulo dinâmico após as mudanças.