import type { ReactNode } from "react";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";

type Variant = "primary" | "outlineWhite" | "outlineGreen" | "areia" | "verde";

export function CTA({
  children,
  variant = "primary",
  href = "#contato",
  external = false,
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 rounded-full tracking-wide text-[14px] md:text-[15px] transition-colors duration-300";
  const styles: Record<Variant, string> = {
    primary:
      "bg-[#26533C] text-white hover:bg-[#1d4230] border border-[#26533C]",
    verde:
      "bg-[#26533C] text-white hover:bg-[#1d4230] border border-[#26533C]",
    areia:
      "bg-[#C4B58E] text-[#26533C] hover:bg-white border border-[#C4B58E]",
    outlineWhite:
      "border border-white text-white hover:bg-white hover:text-[#26533C]",
    outlineGreen:
      "border border-[#26533C] text-[#26533C] hover:bg-[#26533C] hover:text-white",
  };
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppCTA({
  variant = "areia",
  children = "Falar no WhatsApp",
  className = "",
}: {
  variant?: Variant;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <CTA href={WHATSAPP_URL} external variant={variant} className={className}>
      {children}
    </CTA>
  );
}
