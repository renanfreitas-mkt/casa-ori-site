import { AbismoVento } from "@/components/ui/abismo-vento";
import { EIXOS_HOME, V2_COPY } from "@/components/site/content";
import { HeroCtas } from "./HeroCtas";

// Hero "Abismo": a foto do cânion em tela cheia, com vento leve no mato (src/components/ui/abismo-vento.tsx).
// Composição inspirada em páginas editoriais de bem-estar: título grande à esquerda com a palavra
// "abismo" em itálico serifado, o Sistema ORI embaixo à esquerda e os CTAs embaixo à direita.
// TEXTOS: todos vêm do site (content.ts) exatamente como estão — aqui só muda o layout.

export function HeroAbismo({
  cpfHref,
  cnpjHref,
  telaCheia = false,
}: {
  cpfHref: string;
  cnpjHref: string;
  /** true na HomeAbismo: o menu fica por cima da foto, então a hero ocupa a tela inteira */
  telaCheia?: boolean;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden rounded-b-[2.5rem] bg-[#1B2A1E] font-['Inter_Tight','Roboto',sans-serif] text-[#F0F1EB] antialiased md:rounded-b-[4rem] ${
        telaCheia ? "h-[100svh] min-h-[640px] md:min-h-[700px]" : "h-[calc(100svh-4rem)] min-h-[620px] md:h-[calc(100svh-5rem)] md:min-h-[660px]"
      }`}
    >
      <style>{`
        @keyframes oriUp { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ori-up { opacity: 0; animation: oriUp 1.2s cubic-bezier(.2,.7,.2,1) forwards }
        @media (prefers-reduced-motion: reduce) { .ori-up { animation: none; opacity: 1; transform: none } }
      `}</style>

      {/* o abismo, com vento no mato */}
      {/* foco na pessoa à beira do abismo: no celular (recorte vertical) ela continua na tela */}
      {/* foto espelhada: a pessoa fica à direita, longe do título */}
      <AbismoVento src="/img/abismo.webp" focus={[0.74, 0.5]} espelhar className="absolute inset-0 -z-20" />
      {/* véus para leitura: esquerda e base mais escuras, como na referência */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,24,16,.72)_0%,rgba(14,24,16,.35)_42%,rgba(14,24,16,0)_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(14,24,16,.35)_0%,rgba(14,24,16,0)_28%,rgba(14,24,16,0)_55%,rgba(14,24,16,.8)_100%)]" />

      <div
        className={`relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-between px-5 pb-8 sm:px-10 md:pb-10 lg:px-14 ${
          telaCheia ? "pt-36 md:pt-[22vh]" : "pt-24 md:pt-[14vh]"
        }`}
      >
        {/* título (o espaço embaixo é da frase sob "abismo") */}
        <div className="sm:pb-12">
          <h1 className="font-['Inter_Tight','Roboto',sans-serif]! text-[clamp(1.6rem,7.2vw,4.6rem)] font-normal! normal-case! leading-[1.04] tracking-[-0.035em]! [text-shadow:0_2px_30px_rgba(0,0,0,.25)]">
            <span className="ori-up block" style={{ animationDelay: ".1s" }}>Entre</span>
            <span className="ori-up block" style={{ animationDelay: ".16s" }}>o que você quis dizer</span>
            <span className="ori-up block" style={{ animationDelay: ".22s" }}>e o que o outro entendeu</span>
            <span className="ori-up block" style={{ animationDelay: ".28s" }}>
              existe um{" "}
              {/* "A Casa Orí trabalha nele" fica logo abaixo de "abismo": é dentro dele que a Casa trabalha */}
              <span className="sm:relative sm:inline-block">
                <em className="font-['Instrument_Serif',serif] text-[1.12em] font-normal italic tracking-[-0.01em]">abismo.</em>
                <span
                  className="ori-up mt-3 block font-['Inter_Tight','Roboto',sans-serif] text-[clamp(1rem,1.7vw,1.4rem)] font-light not-italic leading-snug tracking-[-0.01em] text-[#F0F1EB] sm:absolute sm:left-[0.06em] sm:top-full sm:mt-2 sm:whitespace-nowrap"
                  style={{ animationDelay: ".45s" }}
                >
                  {V2_COPY.home.headlineApoio}
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* base: CTAs sempre no canto inferior esquerdo (em qualquer tela); Sistema ORI à direita no desktop */}
        <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-end lg:justify-between">
          <ul className="hidden space-y-4 lg:block">
            {EIXOS_HOME.map((e, i) => (
              <li key={e.nome} className="ori-up flex max-w-[20rem] items-start gap-4" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#F0F1EB]/50 text-[11px] font-medium text-[#F0F1EB]">
                  {e.letra}
                </span>
                <p className="text-[13.5px] font-light leading-snug text-[#F0F1EB]/80">
                  <span className="text-[#F0F1EB]">{e.nome}</span> {e.titulo}
                </p>
              </li>
            ))}
          </ul>

          <div className="ori-up self-start" style={{ animationDelay: ".8s" }}>
            <HeroCtas
              cpfHref={cpfHref}
              cnpjHref={cnpjHref}
              rotuloCpf="Atendimento terapêutico para você"
              rotuloCnpj="Treinamento de comunicação para a liderança da sua empresa"
              rotuloClass="text-[#F0F1EB]/85 [text-shadow:0_1px_10px_rgba(0,0,0,.5)]"
              botaoClass="bg-[#263120]/90 text-[#F0F1EB] backdrop-blur-sm hover:bg-[#F0F1EB] hover:text-[#263120]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
