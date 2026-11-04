import { ArrowUpRight, Compass, Heart, Home } from "lucide-react";
import { AbismoVento } from "@/components/ui/abismo-vento";

// Hero "Abismo": a foto do cânion em tela cheia, com vento leve no mato (src/components/ui/abismo-vento.tsx).
// Composição inspirada em páginas editoriais de bem-estar: título grande à esquerda com a palavra
// "abismo" em itálico serifado, três pilares embaixo à esquerda e chamada + botões embaixo à direita.

const PILARES = [
  { Icone: Heart, titulo: "Escuta sem julgamento", texto: "Acolhimento e presença em cada atendimento." },
  { Icone: Compass, titulo: "Sistema ORI", texto: "Observa, reorganiza e integra o que ainda não está visível." },
  { Icone: Home, titulo: "Para você e sua empresa", texto: "Presencial em Brasília e online." },
];

export function HeroAbismo({ cpfHref, cnpjHref }: { cpfHref: string; cnpjHref: string }) {
  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[620px] overflow-hidden rounded-b-[2.5rem] bg-[#1B2A1E] font-['Inter_Tight','Roboto',sans-serif] text-[#F0F1EB] antialiased md:h-[calc(100svh-5rem)] md:min-h-[660px] md:rounded-b-[4rem]">
      <style>{`
        @keyframes oriUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ori-up { opacity: 0; animation: oriUp 1.2s cubic-bezier(.2,.7,.2,1) forwards }
        @media (prefers-reduced-motion: reduce) { .ori-up { animation: none; opacity: 1; transform: none } }
      `}</style>

      {/* o abismo, com vento no mato */}
      {/* foco na pessoa à beira do abismo: no celular (recorte vertical) ela continua na tela */}
      <AbismoVento src="/img/abismo.webp" focus={[0.28, 0.5]} className="absolute inset-0 -z-20" />
      {/* véus para leitura: esquerda e base mais escuras, como na referência */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,24,16,.72)_0%,rgba(14,24,16,.35)_42%,rgba(14,24,16,0)_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,24,16,.35)_0%,rgba(14,24,16,0)_28%,rgba(14,24,16,0)_55%,rgba(14,24,16,.8)_100%)]" />

      {/* nome discreto à direita, como a assinatura da referência */}
      <span className="ori-up absolute right-6 top-[30%] hidden text-[13px] font-light tracking-[0.02em] text-[#F0F1EB]/85 md:block lg:right-10" style={{ animationDelay: ".6s" }}>
        Casa Orí
      </span>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-between px-5 pb-8 pt-24 sm:px-10 md:pb-10 md:pt-[14vh] lg:px-14">
        {/* título */}
        <div>
          <h1 className="font-['Inter_Tight','Roboto',sans-serif]! text-[clamp(1.55rem,6.9vw,4.4rem)] font-normal! normal-case! leading-[1.04] tracking-[-0.035em]! [text-shadow:0_2px_30px_rgba(0,0,0,.25)]">
            <span className="ori-up block" style={{ animationDelay: ".1s" }}>Entre o que você quis dizer</span>
            <span className="ori-up block" style={{ animationDelay: ".18s" }}>e o que o outro entendeu,</span>
            <span className="ori-up block" style={{ animationDelay: ".26s" }}>
              existe um{" "}
              <em className="font-['Instrument_Serif',serif] text-[1.12em] font-normal italic tracking-[-0.01em]">abismo.</em>
            </span>
          </h1>
          <p className="ori-up mt-5 max-w-[26rem] text-[14px] font-light leading-relaxed text-[#F0F1EB]/85 md:hidden" style={{ animationDelay: ".4s" }}>
            A Casa Orí trabalha nele.
          </p>
        </div>

        {/* base: pilares à esquerda, chamada e botões à direita */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <ul className="hidden space-y-5 md:block">
            {PILARES.map(({ Icone, titulo, texto }, i) => (
              <li key={titulo} className="ori-up flex max-w-[19rem] items-start gap-4" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <Icone className="mt-0.5 h-5 w-5 shrink-0 text-[#F0F1EB]/90" strokeWidth={1.4} />
                <p className="text-[13.5px] font-light leading-snug text-[#F0F1EB]/80">
                  <span className="text-[#F0F1EB]">{titulo}</span> {texto}
                </p>
              </li>
            ))}
          </ul>

          <div className="ori-up md:max-w-[24rem]" style={{ animationDelay: ".8s" }}>
            <p className="hidden text-[15px] font-light leading-relaxed text-[#F0F1EB]/90 md:block">
              A Casa Orí trabalha nele.
            </p>
            <div className="mt-0 flex flex-wrap gap-3 md:mt-5">
              <a
                href={cpfHref}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#263120]/90 px-5 text-[13.5px] font-normal text-[#F0F1EB] backdrop-blur-sm transition-colors duration-300 hover:bg-[#F0F1EB] hover:text-[#263120]"
              >
                Atendimento para você
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.6} />
              </a>
              <a
                href={cnpjHref}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#263120]/90 px-5 text-[13.5px] font-normal text-[#F0F1EB] backdrop-blur-sm transition-colors duration-300 hover:bg-[#F0F1EB] hover:text-[#263120]"
              >
                Para empresas
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
