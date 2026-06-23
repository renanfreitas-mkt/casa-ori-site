import { memo } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";
const QUIZ_URL = "QUIZ_URL";

function HeroImpl() {
  return (
    <section
      id="home"
      className="relative bg-[#1d4230] text-white min-h-[88svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Static layered background (lightweight, no WebGL / no JS animation) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "radial-gradient(60% 50% at 20% 20%, rgba(196,181,142,0.22) 0%, transparent 60%)",
            "radial-gradient(50% 45% at 85% 80%, rgba(58,107,80,0.45) 0%, transparent 65%)",
            "radial-gradient(80% 60% at 50% 100%, rgba(0,0,0,0.45) 0%, transparent 70%)",
            "linear-gradient(180deg, #1d4230 0%, #26533C 60%, #1d4230 100%)",
          ].join(","),
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />

      <div className="relative max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="label-eyebrow text-white/70">Casa Orí</span>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="mt-8 font-light text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
          >
            Algo está pesando.
            <br />
            E você já não consegue
            <br />
            fingir que está tudo bem.
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <div className="mx-auto my-10 h-px w-20 bg-[#C4B58E]" />
        </Reveal>

        <Reveal delay={180}>
          <p
            className="mx-auto text-white/85 font-light max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.8 }}
          >
            A Casa Orí é um espaço para olhar de perto o que está pedindo
            atenção — na vida pessoal, nas relações e no trabalho.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTA href={QUIZ_URL} external variant="areia">
              Quero entender o que está acontecendo
            </CTA>
            <CTA href={WHATSAPP_URL} external variant="outlineWhite">
              Falar com a Carol
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <button
            type="button"
            className="mt-10 inline-flex items-center gap-3 text-white/75 hover:text-white text-sm tracking-wide transition-colors"
            aria-label="Assistir vídeo manifesto"
          >
            <span className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center">
              <Play size={16} fill="currentColor" />
            </span>
            Vídeo manifesto
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export const Hero = memo(HeroImpl);
