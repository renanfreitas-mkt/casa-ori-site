import { memo, useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sistema-ori", label: "Sistema ORI" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isContato = pathname === "/contato";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open || pathname !== "/"
            ? "bg-[#26533C] py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-6">
          <Logo color="white" />

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-white text-[13px] tracking-wide transition-opacity duration-300 hover:opacity-100 ${
                    isActive ? "opacity-100 border-b border-white/70 pb-1" : "opacity-75"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center border border-white text-white text-[13px] px-4 py-2 rounded-full tracking-wide transition-colors duration-300 hover:bg-white hover:text-[#26533C]"
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
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-white text-xl tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 border border-white text-white px-6 py-3 rounded-full tracking-wide hover:bg-white hover:text-[#26533C] transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={`lg:hidden fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#26533C] text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          isContato || open
            ? "opacity-0 pointer-events-none translate-y-3"
            : "opacity-100"
        }`}
      >
        <MessageCircle size={24} strokeWidth={1.6} />
      </a>
    </>
  );
}
