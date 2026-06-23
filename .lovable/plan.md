Vou trazer o movimento de volta para o hero, mas sem o peso do WebGL que estava travando o site.

Opções (vou aplicar a primeira por padrão se você não disser o contrário):

1. Gradiente animado em CSS puro
- Fundo verde/areia em camadas com `background-position` animando lentamente (~20s loop).
- Brilho suave pulsando no canto inferior direito, no lugar do `PulsingBorder`.
- Tudo em CSS (`@keyframes`), sem JS rodando a cada frame, sem canvas, sem GPU pesado.
- Mantém o clima orgânico do hero original.

2. Voltar o `MeshGradient` com `speed` bem reduzido e só em telas grandes
- Reativa o shader, mas com velocidade baixa e desativado em mobile/`prefers-reduced-motion`.
- Mais próximo do visual original, porém volta a usar WebGL (risco do travamento voltar em máquinas mais fracas).

Se confirmar a opção 1, eu já implemento.