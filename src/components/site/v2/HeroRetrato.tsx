import { ArrowUpRight } from "lucide-react";
import { ShaderBackground } from "@/components/ui/sih";

// Hero "Retrato": Carol em close no centro, com luz de recorte atrás,
// a pergunta no alto à esquerda e a resposta grande embaixo à direita — o abismo fica entre as duas.

export function HeroRetrato({
  cpfHref,
  cnpjHref,
  foto = "/img/carol-close.webp",
}: {
  cpfHref: string;
  cnpjHref: string;
  /** close da Carol, sem fundo, 1683x1515 */
  foto?: string;
}) {
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[640px] overflow-hidden rounded-b-[2.5rem] bg-[#173A2A] font-['Roboto',sans-serif] text-[#FEFEFE] antialiased md:h-[calc(100svh-5rem)] md:min-h-[680px] md:rounded-b-[4rem]">
      <style>{`
        @keyframes oriUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ori-up { opacity: 0; animation: oriUp 1.1s cubic-bezier(.2,.7,.2,1) forwards }
        @keyframes oriRise { from { opacity: 0; transform: translate(-50%, 24px) } to { opacity: 1; transform: translate(-50%, 0) } }
        .ori-rise { animation: oriRise 1.4s cubic-bezier(.2,.7,.2,1) .15s both }
        @media (prefers-reduced-motion: reduce) {
          .ori-up { animation: none; opacity: 1; transform: none }
          .ori-rise { animation: none; opacity: 1; transform: translateX(-50%) }
        }
      `}</style>

      {/* fundo animado + luz de recorte atrás da cabeça (o "brilho" da referência) */}
      <ShaderBackground className="absolute inset-0 -z-30" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_38%_48%_at_50%_42%,rgba(150,185,140,.55)_0%,rgba(60,105,78,.25)_45%,rgba(23,58,42,0)_75%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(12,30,22,.6)_100%)]" />

      {/* Carol em close (rosto e ombros, foto de estúdio sem fundo) */}
      <img
        src={foto}
        width={1683}
        height={1515}
        decoding="async"
        fetchPriority="high"
        alt="Carol Milhomens, terapeuta sistêmica e fundadora da Casa Orí"
        className="ori-rise pointer-events-none absolute left-1/2 top-[5%] z-0 h-auto w-[150%] max-w-none select-none [filter:contrast(1.05)_saturate(1.02)_drop-shadow(0_30px_60px_rgba(0,0,0,.45))] sm:w-[110%] md:bottom-0 md:top-auto md:h-[76%] md:w-auto"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 96%)", maskImage: "linear-gradient(to bottom, #000 62%, transparent 96%)" }}
      />
      {/* a foto se dissolve no verde embaixo (no celular é mais alto: o texto fica por cima) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[58%] bg-[linear-gradient(to_bottom,rgba(23,58,42,0)_0%,rgba(23,58,42,.8)_40%,#173A2A_70%)] md:h-[38%] md:bg-[linear-gradient(to_bottom,rgba(23,58,42,0)_0%,rgba(23,58,42,.75)_55%,#173A2A_100%)]" />

      {/* pergunta: no celular centralizada embaixo (como na referência); no desktop, alto à esquerda */}
      <div className="relative z-10 mx-auto h-full w-full max-w-[1400px] px-5 sm:px-10 lg:px-14">
        <div className="absolute inset-x-5 bottom-9 flex flex-col items-center text-center sm:inset-x-10 md:static md:items-start md:pt-16 md:text-left lg:pt-20">
          <h1 className="max-w-[34rem] font-['Poppins',sans-serif]! text-[clamp(1.2rem,5.4vw,2.1rem)] font-medium! uppercase! leading-[1.08] tracking-[-0.01em]!">
            <span className="ori-up block" style={{ animationDelay: ".2s" }}>Entre o que você quis dizer</span>
            <span className="ori-up block" style={{ animationDelay: ".3s" }}>e o que o outro entendeu</span>
            <span className="ori-up block" style={{ animationDelay: ".4s" }}>
              existe um <span className="text-[#C1B48A]">abismo.</span>
            </span>
          </h1>
          {/* no celular a resposta entra aqui, discreta, no lugar do texto grande do canto */}
          <p className="ori-up mt-3 text-[12px] font-normal uppercase tracking-[0.18em] text-[#C1B48A] md:hidden" style={{ animationDelay: ".5s" }}>
            A Casa Orí trabalha nele.
          </p>
          <div className="ori-up mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start" style={{ animationDelay: ".7s" }}>
            <a
              href={cpfHref}
              className="group inline-flex h-[52px] items-center gap-4 rounded-full bg-[#FEFEFE] py-1.5 pl-6 pr-1.5 text-[14px] font-normal text-[#173A2A] shadow-[0_10px_30px_-12px_rgba(0,0,0,.5)] transition-colors duration-300 hover:bg-[#F3EBD0]"
            >
              <span className="md:hidden">Para você</span>
              <span className="hidden md:inline">Atendimento para você</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#C1B48A] text-[#173A2A] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </a>
            <a
              href={cnpjHref}
              className="inline-flex h-[52px] items-center rounded-full border border-[#FEFEFE]/45 bg-[#173A2A]/30 px-6 text-[14px] font-normal text-[#FEFEFE] backdrop-blur-sm transition-colors duration-300 hover:border-[#FEFEFE] hover:bg-[#FEFEFE]/10"
            >
              Para empresas
            </a>
          </div>
        </div>

        {/* resposta: grande, colada no canto inferior direito, por cima da foto (só desktop, como na referência) */}
        <div className="absolute bottom-9 right-10 z-20 hidden text-right md:block lg:right-10">
          <p className="ori-up font-['Poppins',sans-serif] text-[clamp(2.4rem,10.5vw,5.75rem)] font-light uppercase leading-[0.92] tracking-[-0.025em] text-[#FEFEFE] [text-shadow:0_4px_30px_rgba(0,0,0,.4)]" style={{ animationDelay: ".9s" }}>
            A Casa Orí
            <br />
            trabalha nele.
          </p>
          <p className="ori-up ml-auto mt-3 max-w-[19rem] text-[12px] font-light leading-relaxed text-[#FEFEFE]/85 [text-shadow:0_1px_12px_rgba(0,0,0,.7)] md:text-[13px]" style={{ animationDelay: "1.05s" }}>
            Desde 2019, conduzindo pessoas e empresas a enxergar o que ainda não está visível.
          </p>
        </div>
      </div>
    </section>
  );
}
