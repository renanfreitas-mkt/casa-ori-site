import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/* Quiz único por enquanto — trocar aqui quando houver URLs distintas CPF/CNPJ */
export const QUIZ_URL = "https://casa-ori-spark.lovable.app";
export const QUIZ_CPF_URL = QUIZ_URL;
export const QUIZ_CNPJ_URL = QUIZ_URL;

export const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";

/** Destaque de palavra dentro de um parágrafo */
export function Em({
  children,
  tone = "verde",
}: {
  children: ReactNode;
  tone?: "verde" | "areia";
}) {
  return (
    <em
      className={`not-italic font-medium ${
        tone === "areia" ? "text-areia" : "text-verde"
      }`}
    >
      {children}
    </em>
  );
}

/** Cabeçalho padrão de seção — mesma escala e ritmo em todo o site */
export function SectionHead({
  kicker,
  title,
  lead,
  align = "left",
  tone = "escuro",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "escuro" | "claro";
  className?: string;
}) {
  const isDarkText = tone === "escuro";
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto max-w-[720px]" : "max-w-[760px]"} ${className}`}
    >
      {kicker && (
        <Reveal>
          <span
            className={`label-eyebrow ${isDarkText ? "text-verde/60" : "text-areia"}`}
          >
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={kicker ? 100 : 0}>
        <h2
          className={`section-title ${kicker ? "mt-4" : ""} ${
            isDarkText ? "text-verde" : "text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={180}>
          <p
            className={`mt-5 text-[16px] md:text-[17px] font-light leading-relaxed ${
              isDarkText ? "text-texto-suave" : "text-white/85"
            }`}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Bloco duplo Para você / Para você líder */
export function PublicoDuo({
  cpf,
  cnpj,
  tone = "claro",
}: {
  cpf: { titulo: string; texto: ReactNode; cta: ReactNode };
  cnpj: { titulo: string; texto: ReactNode; cta: ReactNode };
  tone?: "claro" | "escuro";
}) {
  const isLight = tone === "claro";
  const card = isLight
    ? "bg-white/70 border-verde/12"
    : "bg-white/[0.04] border-areia/25";
  const titleColor = isLight ? "text-verde" : "text-areia";
  const bodyColor = isLight ? "text-texto-suave" : "text-white/80";

  const Col = (p: typeof cpf) => (
    <div
      className={`${card} border rounded-3xl p-8 md:p-10 text-center flex flex-col items-center h-full`}
    >
      <h3 className={`text-[19px] md:text-[20px] font-medium ${titleColor}`}>
        {p.titulo}
      </h3>
      <p
        className={`mt-4 text-[15px] md:text-[16px] font-light leading-relaxed max-w-[340px] ${bodyColor}`}
      >
        {p.texto}
      </p>
      <div className="mt-auto pt-8">{p.cta}</div>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
      <Reveal>{Col(cpf)}</Reveal>
      <Reveal delay={120}>{Col(cnpj)}</Reveal>
    </div>
  );
}
