import { useState, type ReactNode } from "react";
import { Plus, X } from "lucide-react";

export type AccordionItem = { q: string; a: ReactNode };

export function Accordion({
  items,
  tone = "verde",
}: {
  items: AccordionItem[];
  tone?: "verde" | "branco";
}) {
  const [open, setOpen] = useState<number | null>(null);
  const border =
    tone === "verde" ? "border-[#26533C]/25" : "border-white/30";
  const text = tone === "verde" ? "text-[#26533C]" : "text-white";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`border-b ${border}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className={`w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left ${text} group`}
            >
              <span className="text-lg md:text-xl font-normal leading-snug">
                {item.q}
              </span>
              <span
                className={`shrink-0 mt-1 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                {isOpen ? <X size={22} /> : <Plus size={22} />}
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? 600 : 0 }}
            >
              <div
                className={`pb-7 pr-10 text-[15px] md:text-base leading-relaxed ${
                  tone === "verde" ? "text-[#26533C]/85" : "text-white/85"
                }`}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
