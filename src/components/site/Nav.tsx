import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sistema-ori", label: "Sistema ORI" },
  { href: "#antes", label: "Antes de Começar" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open ? "bg-[#26533C] py-3 shadow-sm" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
          <Logo color="white" />

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-white text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-100 ${
                    isActive ? "opacity-100 border-b border-white/70 pb-1" : "opacity-75"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center border border-white text-white text-[13px] px-4 py-2 rounded-[3px] tracking-wide transition-colors duration-300 hover:bg-white hover:text-[#26533C]"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 -mr-2"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#26533C] transition-opacity duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-7 px-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-xl tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 border border-white text-white px-6 py-3 rounded-[3px] tracking-wide hover:bg-white hover:text-[#26533C] transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
