import { ArrowRight } from "lucide-react";
import { ShaderBackground } from "@/components/ui/sih";

// Hero da home — "Declaração": a frase inteira como uma afirmação, alinhada à esquerda,
// com "abismo" em destaque, sobre o fundo animado (shader "Silk", src/components/ui/sih.tsx).
// Cores: verde #26533C · bege #C1B48A · branco #FEFEFE

export function HeroCasaOri({ cpfHref, cnpjHref }: { cpfHref: string; cnpjHref: string }) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden rounded-b-[2.5rem] bg-[#26533C] font-['Roboto',sans-serif] text-[#FEFEFE] antialiased md:min-h-[calc(100svh-5rem)] md:rounded-b-[4rem]">
      <style>{`
        @keyframes oriUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ori-up { opacity: 0; animation: oriUp 1.1s cubic-bezier(.2,.7,.2,1) forwards }
        /* "abismo": as letras se afastam devagar, abrindo o próprio abismo na palavra */
        @keyframes oriGap { from { letter-spacing: -0.04em; margin-right: 0.04em } to { letter-spacing: 0.06em; margin-right: -0.06em } }
        .ori-gap { animation: oriGap 2.6s cubic-bezier(.3,.6,.2,1) .8s both }
        @keyframes oriLine { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .ori-line { transform-origin: left; animation: oriLine 1.2s cubic-bezier(.2,.7,.2,1) .7s both }
        /* símbolo: "condensa" a partir do redemoinho e depois gira devagar */
        @keyframes oriForm { from { opacity: 0; filter: blur(18px); transform: rotate(-40deg) scale(1.12) } to { opacity: 1; filter: blur(0); transform: none } }
        @keyframes oriSpin { to { transform: rotate(360deg) } }
        .ori-form { animation: oriForm 3.2s cubic-bezier(.2,.7,.2,1) .4s both }
        .ori-spin { animation: oriSpin 180s linear infinite }
        @media (prefers-reduced-motion: reduce) {
          .ori-form, .ori-spin { animation: none; opacity: 1; filter: none; transform: none }
          .ori-up, .ori-line { animation: none; opacity: 1; transform: none }
          .ori-gap { animation: none; letter-spacing: 0.06em; margin-right: -0.06em }
        }
      `}</style>

      {/* fundo animado */}
      <ShaderBackground className="absolute inset-0 -z-20" />
      {/* véus: centro mais escuro pra leitura, bordas com profundidade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_center,rgba(18,46,33,.55)_0%,rgba(18,46,33,0)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(18,46,33,.35)_0%,transparent_25%,transparent_75%,rgba(18,46,33,.45)_100%)]" />

      {/* símbolo da Casa Orí formado pelo próprio fundo: a máscara deixa a seda clarear só nas linhas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[14%] -right-[18%] -z-10 aspect-square w-[78vw] max-w-[44rem] sm:-right-[10%] sm:w-[52vw] lg:-bottom-[24%] lg:-right-[4%] lg:w-[46vw]"
      >
        <div className="ori-form h-full w-full">
          <div
            className="ori-spin h-full w-full bg-[#F3EBD0] opacity-[0.18] mix-blend-soft-light"
            style={{
              WebkitMaskImage: "url(/img/simbolo-ori.svg)",
              maskImage: "url(/img/simbolo-ori.svg)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-10 lg:px-12">
        {/* "!" vence a regra global .theme-editorial h1 (fonte da marca + caixa alta) */}
        <h1 className="font-['Poppins',sans-serif]! text-[clamp(1.4rem,6.1vw,4.5rem)] font-medium! normal-case! leading-[1.1] tracking-[-0.025em]!">
          <span className="ori-up block" style={{ animationDelay: ".1s" }}>Entre o que você quis dizer </span>
          <span className="ori-up block" style={{ animationDelay: ".22s" }}>e o que o outro entendeu </span>
          <span className="ori-up block" style={{ animationDelay: ".34s" }}>
            existe um <span className="ori-gap inline-block font-semibold text-[#C1B48A]">abismo.</span>
          </span>
        </h1>

        {/* assinatura, ligada à frase por um filete */}
        <div className="mt-10 flex items-center gap-5 md:mt-12">
          <span aria-hidden="true" className="ori-line block h-px w-12 bg-[#C1B48A]/70 md:w-16" />
          <span
            className="ori-up block font-['Casa_Ori_V5','Casa_Ori',serif] text-[clamp(1rem,4.4vw,1.5rem)] font-normal uppercase tracking-[0.1em] text-[#FEFEFE]/85"
            style={{ animationDelay: ".6s" }}
          >
            A Casa Orí trabalha nele.
          </span>
        </div>

        {/* botões: levam aos quizzes de pessoa e de empresa */}
        <div
          className="ori-up mt-12 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          style={{ animationDelay: ".8s" }}
        >
          <a
            href={cpfHref}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#C1B48A] px-8 text-[14px] font-medium tracking-[0.03em] text-[#1F4A35] transition-colors duration-300 hover:bg-[#FEFEFE]"
          >
            Atendimento para você
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
          </a>
          <a
            href={cnpjHref}
            className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-[#FEFEFE]/40 px-8 text-[14px] font-normal tracking-[0.03em] text-[#FEFEFE] transition-colors duration-300 hover:border-[#FEFEFE] hover:bg-[#FEFEFE] hover:text-[#1F4A35]"
          >
            Atendimento para empresas
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
