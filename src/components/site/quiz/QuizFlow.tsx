import { useEffect, useMemo, useState } from "react";
import { Check, Link2, MessageCircle, X } from "lucide-react";
import { AFIRMACOES, RESULTADOS, calcularResultado } from "./quizData";
import { WHATSAPP_URL } from "@/components/site/content";

type Etapa = 0 | 1 | 2 | 3 | 4;

const FUNDOS: Record<Etapa, string> = {
  0: "bg-[var(--q-verde)] text-[var(--q-branco)]",
  1: "bg-[var(--q-areia-claro)] text-[var(--q-verde)]",
  2: "bg-[var(--q-branco)] text-[var(--q-verde)]",
  3: "bg-[var(--q-verde)] text-[var(--q-branco)]",
  4: "bg-[var(--q-areia-claro)] text-[var(--q-verde)]",
};

export function QuizFlow({ onClose }: { onClose?: () => void }) {
  const [etapa, setEtapa] = useState<Etapa>(0);
  const [cansaco, setCansaco] = useState(0);
  const [marcadas, setMarcadas] = useState<number[]>([]);
  const [camadas, setCamadas] = useState<Record<string, boolean>>({});
  const [nome, setNome] = useState("");
  const [ano, setAno] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [copiado, setCopiado] = useState(false);

  const ir = (e: Etapa) => {
    setEtapa(e);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleAfirmacao = (i: number) =>
    setMarcadas((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i].sort((a, b) => a - b)));
  const toggleCamada = (k: string) => setCamadas((c) => ({ ...c, [k]: !c[k] }));

  const resultado = useMemo(() => {
    let total = 0;
    let nunca = 0;
    for (const i of marcadas) {
      for (let j = 0; j < 4; j++) {
        if (camadas[`${i}-${j}`]) {
          if (j === 3) nunca++;
          else total++;
        }
      }
    }
    return calcularResultado(marcadas.length, total, nunca);
  }, [marcadas, camadas]);

  const enviarDados = () => {
    if (!nome.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setErro("Preencha seu nome e um e-mail válido.");
      return;
    }
    setErro("");
    ir(4);
  };

  const r = RESULTADOS[resultado];
  const msg = `Olá, Carol! Sou ${nome.trim() || "—"}${ano ? ` (nascido(a) em ${ano})` : ""}, e-mail ${email.trim()}. Fiz o quiz de autoconhecimento ("${r.titulo}") e quero conversar sobre o resultado.`;
  const whatsHref = `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`;
  const quizUrl = "https://casa-ori-site.lovable.app/quiz";
  const shareHref = `https://wa.me/?text=${encodeURIComponent(`Fiz o Quiz de Autoconhecimento Guiado da Casa Orí. Faça também: ${quizUrl}`)}`;

  const progresso = etapa === 0 ? 0 : etapa * 25;

  return (
    <div className={`quiz min-h-screen ${FUNDOS[etapa]}`}>
      <div className="sticky top-0 z-20 h-1 bg-transparent">
        <div
          className="h-full bg-[var(--q-verde-claro)] transition-[width] duration-500 ease-out"
          style={{ width: `${progresso}%` }}
        />
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar o quiz"
          className={`fixed right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
            etapa === 0 || etapa === 3
              ? "border-[var(--q-branco)]/40 text-[var(--q-branco)] hover:bg-[var(--q-branco)]/10"
              : "border-[var(--q-verde)]/40 text-[var(--q-verde)] hover:bg-[var(--q-verde)]/10"
          }`}
        >
          <X className="h-5 w-5" />
        </button>
      )}

      <div className="mx-auto w-full max-w-[640px] px-5 pb-24 pt-10 md:pt-16">
        <div className="mb-10 flex items-center justify-between text-[13px]">
          {etapa > 0 ? (
            <button
              type="button"
              onClick={() => ir((etapa - 1) as Etapa)}
              className={etapa === 3 ? "text-[var(--q-branco)]/70" : "text-[var(--q-texto-suave)]"}
            >
              ← Voltar
            </button>
          ) : onClose ? (
            <button type="button" onClick={onClose} className="text-[var(--q-branco)]/70">
              ← Fechar
            </button>
          ) : (
            <a href="/para-voce" className="text-[var(--q-branco)]/70">
              ← Casa Orí
            </a>
          )}
        </div>

        <div key={etapa} className="quiz-step">
          {etapa === 0 && (
            <section className="flex min-h-[70vh] flex-col justify-center text-center">
              <h1 className="quiz-script text-[34px] leading-tight md:text-[46px]">
                De 0 a 10, o quanto você está cansado de tentar resolver os mesmos problemas?
              </h1>
              <div className="mt-10 grid grid-cols-11 gap-1 sm:gap-2" role="radiogroup" aria-label="Nível de cansaço">
                {Array.from({ length: 11 }, (_, n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={cansaco === n}
                    onClick={() => setCansaco(n)}
                    className={`aspect-square rounded-full text-[14px] transition-all duration-300 sm:text-[16px] ${
                      cansaco === n && n > 0
                        ? "scale-110 bg-[var(--q-areia)] font-medium text-[var(--q-verde)]"
                        : "border border-[var(--q-branco)]/30 text-[var(--q-branco)]/80"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-[14px] font-light italic text-[var(--q-branco)]/70">
                Você já pensou nisso mil vezes, tentou de vários jeitos, perdeu a paciência — e mesmo assim o
                problema continua lá.
              </p>
              {cansaco > 0 && (
                <div className="quiz-fade mt-12 space-y-4 text-[17px] font-light leading-relaxed">
                  <p>Mas e se a dificuldade em resolver tudo isso não estiver em tentar mais?</p>
                  <p>E se aquilo que mais te incomoda hoje não for o problema inteiro?</p>
                  <p>E se você estiver tentando resolver só as consequências — e não a causa?</p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => ir(1)}
                      className="quiz-btn bg-[var(--q-areia)] text-[var(--q-verde)]"
                    >
                      Vamos descobrir →
                    </button>
                  </div>
                </div>
              )}
            </section>
          )}

          {etapa === 1 && (
            <section>
              <span className="text-[12px] font-medium tracking-[0.2em]">PASSO 1 DE 3</span>
              <h2 className="mt-4 text-[24px] font-medium leading-snug">Marque as situações com que você se identifica.</h2>
              <p className="mt-2 text-[14px] font-light text-[var(--q-texto-suave)]">Pode marcar quantas quiser.</p>
              <div className="mt-8 space-y-3">
                {AFIRMACOES.map((a, i) => {
                  const on = marcadas.includes(i);
                  return (
                    <button
                      key={i}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleAfirmacao(i)}
                      className={`flex w-full items-start gap-4 rounded-[14px] border px-7 py-6 text-left text-[16px] leading-snug transition-all duration-300 ${
                        on
                          ? "border-[var(--q-verde)] bg-[var(--q-verde)] text-[var(--q-branco)]"
                          : "border-[var(--q-areia)] bg-[var(--q-branco)] text-[var(--q-verde)]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                          on ? "border-[var(--q-branco)]" : "border-[var(--q-areia)]"
                        }`}
                      >
                        {on && <Check className="h-3.5 w-3.5" />}
                      </span>
                      {a.texto}
                    </button>
                  );
                })}
              </div>
              {marcadas.length > 0 && (
                <div className="quiz-fade mt-8">
                  <p className="text-[13px] font-light text-[var(--q-texto-suave)]">
                    {marcadas.length} {marcadas.length === 1 ? "situação marcada" : "situações marcadas"}
                  </p>
                  <button
                    type="button"
                    onClick={() => ir(2)}
                    className="quiz-btn mt-6 bg-[var(--q-verde)] text-[var(--q-branco)]"
                  >
                    Ver o que está por trás →
                  </button>
                </div>
              )}
            </section>
          )}

          {etapa === 2 && (
            <section>
              <span className="text-[12px] font-medium tracking-[0.2em]">PASSO 2 DE 3</span>
              <h2 className="mt-4 text-[22px] font-medium leading-snug">
                Para cada situação que você marcou, veja o que pode estar por trás dela.
              </h2>
              <p className="mt-2 text-[14px] font-light text-[var(--q-texto-suave)]">
                Marque o que também faz sentido para você.
              </p>
              <div className="mt-10 space-y-12">
                {marcadas.map((i, bi) => {
                  const a = AFIRMACOES[i];
                  const opcoes = [...a.camadas, a.nunca];
                  return (
                    <div key={i} className="quiz-fade" style={{ animationDelay: `${bi * 150}ms` }}>
                      <h3 className="text-[18px] font-medium leading-snug">{a.texto}</h3>
                      <div className="my-4 h-px w-full bg-[var(--q-areia)]" />
                      <div className="space-y-2">
                        {opcoes.map((o, j) => {
                          const k = `${i}-${j}`;
                          const on = !!camadas[k];
                          const ultimo = j === 3;
                          return (
                            <button
                              key={k}
                              type="button"
                              aria-pressed={on}
                              onClick={() => toggleCamada(k)}
                              className="quiz-fade flex w-full items-start gap-3 py-2 text-left"
                              style={{ animationDelay: `${bi * 150 + j * 80}ms` }}
                            >
                              <span
                                className={`mt-0.5 h-5 w-5 shrink-0 rounded-full border-2 border-[var(--q-verde)] transition-all duration-200 ${
                                  on ? "bg-[var(--q-verde)] shadow-[inset_0_0_0_3px_var(--q-branco)]" : ""
                                }`}
                              />
                              <span
                                className={`text-[15px] font-light leading-relaxed ${
                                  ultimo ? "italic text-[var(--q-texto-suave)]" : "text-[var(--q-texto)]"
                                }`}
                              >
                                {o}
                              </span>
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
                onClick={() => ir(3)}
                className="quiz-btn mt-12 bg-[var(--q-verde)] text-[var(--q-branco)]"
              >
                Continuar →
              </button>
            </section>
          )}

          {etapa === 3 && (
            <section className="flex min-h-[65vh] flex-col justify-center text-center">
              <span className="text-[12px] font-medium tracking-[0.2em] text-[var(--q-branco)]/70">PASSO 3 DE 3</span>
              <h2 className="quiz-script mt-4 text-[44px]">Quase lá.</h2>
              <p className="mt-2 text-[15px] font-light">Para receber seu resultado:</p>
              <form
                className="mt-10 space-y-8 text-left"
                onSubmit={(e) => {
                  e.preventDefault();
                  enviarDados();
                }}
              >
                <input className="quiz-input" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" />
                <input
                  className="quiz-input"
                  placeholder="Ano de nascimento"
                  inputMode="numeric"
                  maxLength={4}
                  value={ano}
                  onChange={(e) => setAno(e.target.value.replace(/\D/g, "").slice(0, 4))}
                />
                <input
                  className="quiz-input"
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                <p className="text-center text-[13px] font-light italic opacity-70">
                  Seus dados não serão compartilhados. A Carol pode entrar em contato para oferecer a conversa
                  inicial gratuita.
                </p>
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
              <span className="text-[12px] font-medium tracking-[0.2em]">SEU AUTOCONHECIMENTO GUIADO</span>
              <h2 className="mt-4 text-[28px] font-medium leading-tight md:text-[34px]">{r.titulo}</h2>
              <div className="my-6 h-px w-full bg-[var(--q-areia)]" />
              <div className="space-y-5 text-[16px] font-light leading-[1.9] text-[var(--q-verde)]">
                {r.texto.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <div className="mt-12 rounded-[18px] bg-[var(--q-verde)] px-7 py-9 text-[var(--q-branco)] md:px-10">
                <p className="quiz-script text-[30px]">O próximo passo</p>
                <div className="my-4 h-px w-16 bg-[var(--q-branco)]/40" />
                <p className="text-[16px] font-light leading-relaxed">“{r.proximo}”</p>
                <a
                  href={whatsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quiz-btn mt-7 bg-[var(--q-areia)] text-[var(--q-verde)]"
                >
                  Falar com a Carol
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4 text-[13px] text-[var(--q-texto-suave)]">
                <span>Ou compartilhe seu resultado</span>
                <a href={shareHref} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <button
                  type="button"
                  aria-label="Copiar link"
                  onClick={() => {
                    navigator.clipboard?.writeText(quizUrl);
                    setCopiado(true);
                  }}
                >
                  <Link2 className="h-5 w-5" />
                </button>
                {copiado && <span>Link copiado</span>}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/** Pop-up em tela cheia com o quiz; fecha no X, no fundo escuro ou na tecla Esc. */
export function QuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Quiz de Autoconhecimento Guiado">
      <button
        type="button"
        aria-label="Fechar o quiz"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm"
      />
      <div className="quiz-modal-panel absolute inset-0 overflow-y-auto md:inset-6 md:rounded-[24px] md:shadow-2xl lg:inset-x-16">
        <QuizFlow onClose={onClose} />
      </div>
    </div>
  );
}
