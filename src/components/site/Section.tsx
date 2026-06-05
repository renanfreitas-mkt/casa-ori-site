import type { ReactNode, CSSProperties } from "react";

type Bg = "verde" | "areia" | "areia-claro" | "branco" | "kraft";

const bgClass: Record<Bg, string> = {
  verde: "bg-[#26533C] text-white",
  areia: "kraft-areia text-[#26533C]",
  "areia-claro": "kraft text-[#26533C]",
  branco: "bg-white text-[#26533C]",
  kraft: "kraft text-[#26533C]",
};

export function Section({
  id,
  bg = "branco",
  children,
  className = "",
  style,
}: {
  id?: string;
  bg?: Bg;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={style}
      className={`${bgClass[bg]} px-5 sm:px-6 lg:px-10 py-14 md:py-24 lg:py-32 ${className}`}
    >
      <div className="max-w-[1180px] mx-auto">{children}</div>
    </section>
  );
}
