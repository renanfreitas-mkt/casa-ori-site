import { memo } from "react";
import { ArrowDown } from "lucide-react";

const NODES = [
  "Surge um problema",
  "Você tenta resolver",
  "Gasta tempo e energia",
  "O problema continua",
];

// Positions for each node on the desktop ring (centered on 400x400 SVG coords).
const RING_POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
];

// Curved arc paths connecting the four cardinal nodes (top→right→bottom→left→top).
const ARC_PATHS = [
  "M 236 64 A 160 160 0 0 1 336 200",
  "M 336 236 A 160 160 0 0 1 236 336",
  "M 164 336 A 160 160 0 0 1 64 236",
  "M 64 164 A 160 160 0 0 1 164 64",
];

function HeroCycleImpl() {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      {/* Desktop / tablet: circular */}
      <div className="hidden sm:block relative w-full aspect-square">
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="hc-arrow-head"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#C4B58E" />
            </marker>
          </defs>
          {ARC_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="#C4B58E"
              strokeWidth="1.5"
              markerEnd="url(#hc-arrow-head)"
              style={{
                animation: `arrow-pulse 2s ease-in-out ${i * 0.45}s infinite`,
              }}
            />
          ))}
        </svg>

        {NODES.map((label, i) => (
          <div
            key={label}
            className={`absolute ${RING_POSITIONS[i]} w-[118px] h-[118px] rounded-full flex items-center justify-center text-center px-3 border text-white text-[13px] leading-tight font-light`}
            style={{
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(196,181,142,0.4)",
              backdropFilter: "blur(4px)",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="sm:hidden flex flex-col items-center gap-2">
        {NODES.map((label, i) => (
          <div key={label} className="w-full flex flex-col items-center">
            <div
              className="w-full rounded-full py-3 px-4 text-center border text-white text-[13px] font-light"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(196,181,142,0.4)",
              }}
            >
              {label}
            </div>
            <ArrowDown
              size={16}
              className="text-[#C4B58E] my-1"
              style={{
                animation: `arrow-pulse 2s ease-in-out ${i * 0.35}s infinite`,
              }}
            />
          </div>
        ))}
        <span className="text-[11px] text-white/60 italic -mt-1">
          e o ciclo se repete
        </span>
      </div>
    </div>
  );
}

export const HeroCycle = memo(HeroCycleImpl);
