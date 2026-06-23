import { Play } from "lucide-react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";
const QUIZ_URL = "QUIZ_URL";

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#1d4230] text-white min-h-[88svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Animated shader background */}
      <div className="absolute inset-0 overflow-hidden">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#1d4230", "#26533C", "#3a6b50", "#C4B58E", "#E8DEC8"]}
          speed={0.25}
          style={{ width: "100%", height: "100%" }}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-50 mix-blend-soft-light"
          colors={["#26533C", "#1d4230", "#E8DEC8", "#26533C"]}
          speed={0.18}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(29,66,48,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,66,48,0.35)_0%,rgba(29,66,48,0.75)_100%)]" />

        {/* Subtle pulsing accent in corner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute -bottom-32 -right-32 hidden md:block pointer-events-none"
        >
          <PulsingBorder
            colors={["#C4B58E", "#E8DEC8", "#26533C"]}
            colorBack="#00000000"
            roundness={1}
            thickness={0.08}
            softness={0.85}
            intensity={3}
            spotSize={0.25}
            pulse={0.12}
            smoke={0.45}
            smokeSize={3}
            scale={0.7}
            speed={0.6}
            style={{ width: 420, height: 420 }}
          />
        </motion.div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="label-eyebrow text-white/70">Casa Orí</span>
        </Reveal>

        <Reveal delay={120}>
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

        <Reveal delay={220}>
          <div className="mx-auto my-10 h-px w-20 bg-[#C4B58E]" />
        </Reveal>

        <Reveal delay={300}>
          <p
            className="mx-auto text-white/85 font-light max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.8 }}
          >
            A Casa Orí é um espaço para olhar de perto o que está pedindo
            atenção — na vida pessoal, nas relações e no trabalho.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTA href={QUIZ_URL} external variant="areia">
              Quero entender o que está acontecendo
            </CTA>
            <CTA href={WHATSAPP_URL} external variant="outlineWhite">
              Falar com a Carol
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={520}>
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
