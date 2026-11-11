import { ArrowUpRight } from "lucide-react";
import { V2_COPY } from "@/components/site/content";

// CTAs da hero com os TEXTOS ORIGINAIS do site (rótulo + botão), iguais à hero antiga.
// Regra: só o layout muda entre os modelos; os textos vêm de content.ts e não são reescritos.

export const ROTULO_CPF = "Atendimento para você";
export const ROTULO_CNPJ = "Atendimento para a sua empresa";

export function HeroCtas({
  cpfHref,
  cnpjHref,
  align = "start",
  rotuloClass = "text-[#FEFEFE]/85",
  botaoClass = "bg-[#C1B48A] text-[#173A2A] hover:bg-[#FEFEFE]",
  botao2Class,
  rotuloCpf = ROTULO_CPF,
  rotuloCnpj = ROTULO_CNPJ,
}: {
  cpfHref: string;
  cnpjHref: string;
  /** rótulos acima dos botões (padrão: os do site; a home do abismo usa os que a cliente passou) */
  rotuloCpf?: string;
  rotuloCnpj?: string;
  align?: "start" | "center";
  rotuloClass?: string;
  botaoClass?: string;
  /** estilo do segundo botão; se omitido, usa o mesmo do primeiro */
  botao2Class?: string;
}) {
  const itens = [
    { rotulo: rotuloCpf, texto: V2_COPY.home.ctaCpf, href: cpfHref, cls: botaoClass },
    { rotulo: rotuloCnpj, texto: V2_COPY.home.ctaCnpj, href: cnpjHref, cls: botao2Class ?? botaoClass },
  ];
  return (
    <div
      className={`flex w-full flex-col gap-4 sm:w-auto lg:flex-row lg:gap-5 ${align === "center" ? "items-center lg:justify-center" : "items-stretch sm:items-start lg:items-end"}`}
    >
      {itens.map((c) => (
        <div key={c.rotulo} className={`flex flex-col gap-1.5 ${align === "center" ? "items-center" : "items-start"}`}>
          {/* recuo igual ao do texto do botão (pl-5), para os dois começarem na mesma linha vertical */}
          <span className={`max-w-[22rem] text-[12px] lg:max-w-none font-light tracking-[0.02em] md:text-[13px] ${align === "center" ? "" : "pl-5"} ${rotuloClass}`}>{c.rotulo}</span>
          <a
            href={c.href}
            className={`group inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-full py-2.5 pl-5 pr-4 text-left text-[13px] leading-snug transition-colors duration-300 sm:w-auto md:text-[13.5px] ${c.cls}`}
          >
            {c.texto}
            <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={1.7} />
          </a>
        </div>
      ))}
    </div>
  );
}
