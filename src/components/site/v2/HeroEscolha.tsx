import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { HeroCasaOri } from "./HeroCasaOri";
import { HeroRetrato } from "./HeroRetrato";
import { HeroAbismo } from "./HeroAbismo";

// Hero da home com seletor para a cliente escolher o modelo.
// O seletor só aparece no link de escolha: /?escolher  (o site normal mostra a hero padrão, sem seletor).
// O modelo escolhido fica salvo no navegador e também pode ir no link: /?escolher&hero=retrato

const MODELOS = [
  { id: "declaracao", nome: "Declaração", ideia: "Só texto sobre o verde animado, com o símbolo no canto" },
  { id: "retrato", nome: "Retrato", ideia: "Carol em close sobre o verde animado" },
  { id: "abismo", nome: "Abismo", ideia: "Foto de um abismo em tela cheia, com vento no mato" },
] as const;

type ModeloId = (typeof MODELOS)[number]["id"];
const PADRAO: ModeloId = "declaracao";
const CHAVE = "casaori:hero";
const valido = (v: string | null): v is ModeloId => MODELOS.some((m) => m.id === v);

export function HeroEscolha({ cpfHref, cnpjHref }: { cpfHref: string; cnpjHref: string }) {
  const [modelo, setModelo] = useState<ModeloId>(PADRAO);
  const [escolhendo, setEscolhendo] = useState(false);
  const [aberto, setAberto] = useState(false);

  // lê o modo de escolha e o modelo só no navegador (o servidor sempre entrega a hero padrão)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (!q.has("escolher")) return;
    setEscolhendo(true);
    let salvo: string | null = null;
    try {
      salvo = window.localStorage.getItem(CHAVE);
    } catch {
      /* navegador sem armazenamento: segue sem lembrar */
    }
    const pedido = q.get("hero");
    if (valido(pedido)) setModelo(pedido);
    else if (valido(salvo)) setModelo(salvo);
  }, []);

  const escolher = (id: ModeloId) => {
    setModelo(id);
    try {
      window.localStorage.setItem(CHAVE, id);
    } catch {
      /* ignora */
    }
    const q = new URLSearchParams(window.location.search);
    q.set("hero", id);
    window.history.replaceState(null, "", `${window.location.pathname}?${q.toString().replace("escolher=", "escolher")}`);
  };

  const props = { cpfHref, cnpjHref };
  const hero =
    modelo === "retrato" ? (
      <HeroRetrato key="retrato" {...props} foto="/img/carol-close.webp" />
    ) : modelo === "abismo" ? (
      <HeroAbismo key="abismo" {...props} />
    ) : (
      <HeroCasaOri key="declaracao" {...props} />
    );

  return (
    <>
      {hero}

      {/* seletor — no topo, abaixo do menu (centralizado no celular, à direita no desktop): embaixo ficam botões e pilares */}
      {escolhendo && (
        <div className="fixed left-1/2 top-[4.75rem] z-[60] w-[calc(100%-2rem)] max-w-[22rem] -translate-x-1/2 font-['Roboto',sans-serif] md:left-auto md:right-6 md:top-[6.25rem] md:translate-x-0">
          <div className="overflow-hidden rounded-2xl border border-[#26533C]/15 bg-[#FEFEFE]/95 text-[#173A2A] shadow-[0_20px_50px_-15px_rgba(0,0,0,.45)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              aria-expanded={aberto}
            >
              <span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#26533C]/60">Escolha a abertura do site</span>
                <span className="block text-[15px] font-medium">{MODELOS.find((m) => m.id === modelo)?.nome}</span>
              </span>
              <span className={`rounded-full px-3 py-1 text-[12px] font-medium ${aberto ? "text-[#26533C]/60" : "bg-[#26533C] text-[#FEFEFE]"}`}>{aberto ? "Fechar" : "Trocar"}</span>
            </button>
            {aberto && (
              <div className="grid gap-1.5 border-t border-[#26533C]/10 p-2">
                {MODELOS.map((m, i) => {
                  const ativo = m.id === modelo;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => escolher(m.id)}
                      aria-pressed={ativo}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${ativo ? "bg-[#26533C] text-[#FEFEFE]" : "hover:bg-[#26533C]/[0.06]"}`}
                    >
                      <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[12px] font-medium ${ativo ? "bg-[#C1B48A] text-[#173A2A]" : "border border-[#26533C]/25"}`}>
                        {ativo ? <Check className="h-3.5 w-3.5" strokeWidth={2.5} /> : String.fromCharCode(65 + i)}
                      </span>
                      <span>
                        <span className="block text-[14px] font-medium">{m.nome}</span>
                        <span className={`block text-[12px] font-light ${ativo ? "text-[#FEFEFE]/75" : "text-[#173A2A]/60"}`}>{m.ideia}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
