export function Logo({ color = "white" }: { color?: "white" | "verde" }) {
  const stroke = color === "white" ? "#FFFFFF" : "#26533C";
  const text = color === "white" ? "text-white" : "text-[#26533C]";
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        className="transition-transform duration-500 group-hover:rotate-45"
        aria-hidden="true"
      >
        <circle cx="17" cy="17" r="15.5" stroke={stroke} strokeWidth="1" />
        <circle cx="17" cy="17" r="11" stroke={stroke} strokeWidth="0.8" opacity="0.85" />
        <circle cx="17" cy="17" r="7" stroke={stroke} strokeWidth="0.7" opacity="0.7" />
        <circle cx="17" cy="17" r="3" stroke={stroke} strokeWidth="0.6" opacity="0.55" />
        <circle cx="17" cy="17" r="0.9" fill={stroke} />
      </svg>
      <span className={`${text} font-medium tracking-wide text-lg`}>Casa Orí</span>
    </a>
  );
}
