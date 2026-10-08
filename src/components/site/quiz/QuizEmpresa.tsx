import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "@/components/site/content";
import { PERFIS_EMPRESA, SITUACOES_EMPRESA, perfilEmpresa, type PerfilEmpresa } from "./quizEmpresaData";

type Etapa = 0 | 1 | 2 | 3 | 4;
export const QUIZ_EMPRESA_HASH = "#quiz-empresa";

const FUNDOS: Record<Etapa, string> = {
  0: "bg-[var(--q-verde)] text-[var(--q-branco)]",
  1: "bg-[var(--q-areia-claro)] text-[var(--q-verde)]",
  2: "bg-[var(--q-branco)] text-[var(--q-verde)]",
  3: "bg-[var(--q-verde)] text-[var(--q-branco)]",
  4: "bg-[var(--q-areia-claro)] text-[var(--q-verde)]",
};

function QuizEmpresaFlow({ onClose }: { onClose: () => void }) {
  const [etapa, setEtapa] = useState<Etapa>(0);
  const [exaustao, setExaustao] = useState(0);
  const [marcadas, setMarcadas] = useState<number[]>([]);
  const [respostas, setRespostas] = useState<Record<number, PerfilEmpresa>>({});
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const ir = (e: Etapa) => {
    setEtapa(e);
    document.querySelector(".quiz-modal-panel")?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggle = (i: number) =>
    setMarcadas((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i].sort((a, b) => a - b)));

  const todasRespondidas = marcadas.every((i) => respostas[i] !== undefined);
  const perfil = useMemo(
    () => perfilEmpresa(marcadas.map((i) => respostas[i]).filter((r) => r !== undefined)),
    [marcadas, respostas],
  );
  const r = PERFIS_EMPRESA[perfil];
  const msg = `Olá, Carol! Sou ${nome.trim()}${empresa ? `, da ${empresa.trim()}` : ""} (e-mail ${email.trim()}). Fiz o quiz para empresas ("${r.titulo}") e: ${r.cta}.`;
  const whatsHref = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  const escuro = etapa === 0 || etapa === 3;

  return (
    <div className={`quiz min-h-full ${FUNDOS[etapa]}`}>
      <div className="sticky top-0 z-20 h-1">
        <div className="h-full bg-[var(--q-verde-claro)] transition-[width] duration-500" style={{ width: `${etapa * 25}%` }} />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar o quiz"
        className={`fixed right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border md:right-10 md:top-10 ${
          escuro ? "border-[var(--q-branco)]/40 text-[var(--q-branco)]" : "border-[var(--q-verde)]/40 text-[var(--q-verde)]"
        }`}
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto w-full max-w-[680px] px-5 pb-24 pt-10 md:pt-16">
        <div className="mb-10 text-[13px]">
          <button
            type="button"
            onClick={() => (etapa > 0 ? ir((etapa - 1) as Etapa) : onClose())}
            className={escuro ? "text-[var(--q-branco)]/70" : "text-[var(--q-texto-suave)]"}
          >
            {etapa > 0 ? "← Voltar" : "← Fechar"}
          </button>
        </div>

        <div key={etapa} className="quiz-step">
          {etapa === 0 && (
            <section className="flex min-h-[65vh] flex-col justify-center text-center">
              <h1 className="quiz-script text-[30px] leading-tight md:text-[42px]">
                De 0 a 10, quanto você está exausto de ficar tentando resolver os mesmos problemas dentro da sua empresa?
              </h1>
              <div className="mt-10 grid grid-cols-11 gap-1 sm:gap-2" role="radiogroup" aria-label="Nível de exaustão">
                {Array.from({ length: 11 }, (_, n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={exaustao === n}
                    onClick={() => setExaustao(n)}
                    className={`aspect-square rounded-full text-[14px] transition-all duration-300 sm:text-[16px] ${
                      exaustao === n && n > 0
                        ? "scale-110 bg-[var(--q-areia)] font-medium text-[var(--q-verde)]"
                        : "border border-[var(--q-branco)]/30 text-[var(--q-branco)]/80"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              {exaustao > 0 && (
                <div className="quiz-fade mt-12 space-y-4 text-[17px] font-light leading-relaxed">
                  <p>Para resolver tudo isso você ainda está esperando que a sua equipe mude?</p>
                  <p>E se toda essa mudança precisasse começar por você?</p>
                  <div className="pt-6">
                    <button type="button" onClick={() => ir(1)} className="quiz-btn bg-[var(--q-areia)] text-[var(--q-verde)]">
                      Vamos ver →
                    </button>
                  </div>
                </div>
              )}
            </section>
          )}

          {etapa === 1 && (
            <section>
              <span className="text-[12px] font-medium tracking-[0.2em]">PASSO 1 DE 3</span>
              <h2 className="mt-4 text-[24px] font-medium leading-snug">
                Veja quais dessas situações são comuns no seu cotidiano.
              </h2>
              <p className="mt-2 text-[14px] font-light text-[var(--q-texto-suave)]">Pode marcar quantas quiser.</p>
              <div className="mt-8 space-y-3">
                {SITUACOES_EMPRESA.map((s, i) => {
                  const on = marcadas.includes(i);
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggle(i)}
                      className={`w-full rounded-[14px] border px-6 py-5 text-left text-[16px] leading-snug transition-all duration-300 ${
                        on
                          ? "border-[var(--q-verde)] bg-[var(--q-verde)] text-[var(--q-branco)]"
                          : "border-[var(--q-areia)] bg-[var(--q-branco)] text-[var(--q-verde)]"
                      }`}
                    >
                      {s.texto}
                    </button>
                  );
                })}
              </div>
              {marcadas.length > 0 && (
                <button type="button" onClick={() => ir(2)} className="quiz-btn quiz-fade mt-8 bg-[var(--q-verde)] text-[var(--q-branco)]">
                  Olhar mais de perto →
                </button>
              )}
            </section>
          )}

          {etapa === 2 && (
            <section>
              <span className="text-[12px] font-medium tracking-[0.2em]">PASSO 2 DE 3</span>
              <h2 className="mt-4 text-[22px] font-medium leading-snug">
                Leia com calma e escolha a frase que mais se parece com você hoje.
              </h2>
              <div className="mt-10 space-y-14">
                {marcadas.map((i) => {
                  const s = SITUACOES_EMPRESA[i];
                  return (
                    <div key={i} className="quiz-fade">
                      <h3 className="text-[18px] font-medium leading-snug">{s.texto}</h3>
                      <p className="mt-3 text-[15px] font-light leading-relaxed text-[var(--q-texto)]">{s.reflexao}</p>
                      <div className="mt-5 space-y-2" role="radiogroup">
                        {s.opcoes.map((o, j) => {
                          const on = respostas[i] === j;
                          return (
                            <button
                              key={j}
                              type="button"
                              role="radio"
                              aria-checked={on}
                              onClick={() => setRespostas((r) => ({ ...r, [i]: j as PerfilEmpresa }))}
                              className={`flex w-full items-start gap-3 rounded-[12px] border px-4 py-3 text-left transition-colors ${
                                on ? "border-[var(--q-verde)] bg-[var(--q-verde)] text-[var(--q-branco)]" : "border-[var(--q-areia)]"
                              }`}
                            >
                              <span className={`mt-1 h-4 w-4 shrink-0 rounded-full border-2 ${on ? "border-[var(--q-branco)] bg-[var(--q-areia)]" : "border-[var(--q-verde)]"}`} />
                              <span className="text-[15px] font-light leading-relaxed">{o}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                disabled={!todasRespondidas}
                onClick={() => ir(3)}
                className="quiz-btn mt-12 bg-[var(--q-verde)] text-[var(--q-branco)] disabled:opacity-40"
              >
                {todasRespondidas ? "Continuar →" : "Escolha uma frase em cada situação"}
              </button>
            </section>
          )}

          {etapa === 3 && (
            <section className="flex min-h-[60vh] flex-col justify-center text-center">
              <span className="text-[12px] font-medium tracking-[0.2em] text-[var(--q-branco)]/70">PASSO 3 DE 3</span>
              <h2 className="quiz-script mt-4 text-[44px]">Quase lá.</h2>
              <p className="mt-2 text-[15px] font-light">Para ver o seu resultado:</p>
              <form
                className="mt-10 space-y-8 text-left"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!nome.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
                    setErro("Preencha seu nome e um e-mail válido.");
                    return;
                  }
                  setErro("");
                  ir(4);
                }}
              >
                <input className="quiz-input" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" />
                <input className="quiz-input" placeholder="Empresa" value={empresa} onChange={(e) => setEmpresa(e.target.value)} autoComplete="organization" />
                <input className="quiz-input" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {erro && <p className="text-center text-[14px] text-[var(--q-areia)]">{erro}</p>}
                <div className="text-center">
                  <button type="submit" className="quiz-btn bg-[var(--q-areia)] text-[var(--q-verde)]">
                    Ver meu resultado →
                  </button>
                </div>
              </form>
            </section>
          )}

          {etapa === 4 && (
            <section>
              <span className="text-[12px] font-medium tracking-[0.2em]">O RESULTADO DA SUA EMPRESA</span>
              <h2 className="quiz-script mt-4 text-[30px] leading-tight md:text-[38px]">{r.titulo}</h2>
              <div className="my-6 h-px w-full bg-[var(--q-areia)]" />
              <div className="space-y-5 text-[16px] font-light leading-[1.85]">
                {r.texto.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a href={whatsHref} target="_blank" rel="noopener noreferrer" className="quiz-btn bg-[var(--q-verde)] text-[var(--q-branco)]">
                  {r.cta}
                </a>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/** Abre o quiz de empresas em pop-up sempre que um link para #quiz-empresa é clicado. */
export function QuizEmpresaHost() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.(`a[href="${QUIZ_EMPRESA_HASH}"]`);
      if (!a) return;
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Quiz para empresas">
      <button
        type="button"
        aria-label="Fechar o quiz"
        onClick={() => setOpen(false)}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm"
      />
      <div className="quiz-modal-panel absolute inset-0 overflow-y-auto md:inset-6 md:rounded-[24px] md:shadow-2xl lg:inset-x-16">
        <QuizEmpresaFlow onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
