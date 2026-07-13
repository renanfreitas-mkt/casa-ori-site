import { memo } from "react";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import { HeroShader } from "./HeroShader";
import { HeroCanvasCycle } from "./HeroCanvasCycle";

function HeroImpl() {
  return (
    <section
      id="home"
      className="hero-ori relative bg-[#1A2E25] text-white min-h-[88svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-ori__gradient absolute inset-0 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="hero-ori__glow absolute pointer-events-none hidden md:block"
      />
      <HeroShader />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(26,46,37,0.75) 100%)",
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.1fr] md:grid-cols-[1fr_1.25fr] gap-8 sm:gap-6 md:gap-10 lg:gap-14 items-center">
          {/* Coluna esquerda: texto */}
          <div className="text-left order-2 sm:order-1 min-w-0">
            <Reveal>
              <span className="label-eyebrow text-white/70">Casa Orí</span>
            </Reveal>

            <Reveal delay={120}>
              <p
                className="mt-5 md:mt-6 font-light text-white/90"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
              >
                Você tenta resolver só o que consegue ver.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1
                className="mt-3 text-[#C4B58E] font-normal"
                style={{
                  fontSize: "clamp(1.5rem, 3.4vw, 2.75rem)",
                  lineHeight: 1.2,
                }}
              >
                Mas e o que ainda está invisível?
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <div className="my-6 md:my-7 h-px w-[60px] bg-[#C4B58E]" />
            </Reveal>

            <Reveal delay={320}>
              <p
                className="text-white/85 font-light max-w-[520px]"
                style={{
                  fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
                  lineHeight: 1.7,
                }}
              >
                A Casa Orí ajuda pessoas e empresas a investigar o que ainda
                não foi percebido, mas continua influenciando comportamentos,
                relações e resultados.
              </p>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-7 md:mt-8">
                <CTA href="#avaliacao" variant="areia">
                  Quero entender o que está acontecendo →
                </CTA>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: animação do ciclo */}
          <Reveal delay={100}>
            <div className="order-1 sm:order-2 flex items-center justify-center min-w-0">
              <HeroCanvasCycle />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroImpl);
