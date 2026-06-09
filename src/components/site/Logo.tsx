import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

export function Logo({ color = "white" }: { color?: "white" | "verde" }) {
  const text = color === "white" ? "text-white" : "text-[#26533C]";
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <img
        src={logoAsset.url}
        alt="Casa Orí"
        width={38}
        height={38}
        className="w-[38px] h-[38px] rounded-full object-cover transition-transform duration-500 group-hover:rotate-45"
      />
      <span className={`${text} font-medium tracking-wide text-lg`}>Casa Orí</span>
    </a>
  );
}
