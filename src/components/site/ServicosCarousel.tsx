"use client";
import {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  type CSSProperties,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { calculateGap } from "@/components/ui/circular-testimonials";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";

type Servico = {
  titulo: string;
  meta: string;
  paraQuem: string[];
  beneficios?: string[];
  cta?: { label: string; href: string };
  src: string;
};

const servicos: Servico[] = [
  {
    titulo: "Terapia Sistêmica",
    meta: "Acompanhamento contínuo · Sessões semanais ou quinzenais · 1 hora",
    paraQuem: [
      "sente que precisa de suporte mais constante",
      "está vivendo conflitos que se repetem",
      "se sente emocionalmente sobrecarregado",
      "tem dificuldade de sustentar mudanças sozinho",
    ],
    beneficios: [
      "observar com mais clareza o que se repete",
      "perceber mais rápido o que não está funcionando",
      "ter um suporte mais próximo para o que vai surgindo",
    ],
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    titulo: "Constelação Familiar Individual",
    meta: "Atendimento pontual · 2 horas · Questão específica com mais privacidade",
    paraQuem: [
      "sente que existe um tema que precisa ser olhado com mais atenção",
      "quer aprofundar um tema antes de começar acompanhamento contínuo",
      "prefere viver esse processo de forma mais reservada",
    ],
    src: "https://images.unsplash.com/photo-1499377193864-82682aefed04?q=80&w=1200&auto=format&fit=crop",
  },
  {
    titulo: "Constelação Familiar em Grupo",
    meta: "Atendimento pontual · Até 3 horas · Presencial · Campo coletivo",
    paraQuem: [
      "deseja viver esse processo em um contexto coletivo",
      "se beneficia da força do grupo para ampliar a percepção",
      "quer acessar novas compreensões a partir do movimento do grupo",
    ],
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
  {
    titulo: "Vivências",
    meta: "Experiências presenciais · Desenvolvimento pessoal",
    paraQuem: [
      "sente que alguns temas precisam ser vividos, e não só falados",
      "quer se aprofundar em questões emocionais em contexto coletivo",
      "se beneficia da troca com outras pessoas",
    ],
    src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    titulo: "Casa Orí para Empresas",
    meta: "Palestras · Treinamentos · Vivências · Processos personalizados",
    paraQuem: [
      "estão com a produtividade caindo",
      "vivem apagando incêndio",
      "têm dificuldade de alinhar equipe e liderança",
      "percebem que os mesmos problemas continuam voltando",
    ],
    beneficios: [
      "dar mais clareza para a comunicação e os papéis",
      "reduzir ruídos que impactam a execução no dia a dia",
      "construir acordos mais claros e decisões sustentáveis",
    ],
    cta: {
      label: "Quero saber mais sobre o trabalho em empresas",
      href: "#contato",
    },
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
  },
];

export function ServicosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = servicos.length;
  const active = useMemo(() => servicos[activeIndex], [activeIndex]);

  useEffect(() => {
    function onResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setActiveIndex((p) => (p + 1) % len);
    }, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [len]);

  const next = useCallback(() => {
    setActiveIndex((p) => (p + 1) % len);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [len]);
  const prev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + len) % len);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [len]);

  function imgStyle(index: number, isMobile: boolean): CSSProperties {
    const gap = calculateGap(containerWidth);
    const stickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + len) % len === index;
    const isRight = (activeIndex + 1) % len === index;
    const base: CSSProperties = {
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
    if (isActive)
      return {
        ...base,
        zIndex: 3,
        opacity: 1,
        transform: `translateX(0) translateY(0) scale(1) rotateY(0deg)`,
      };
    if (isMobile) return { ...base, zIndex: 1, opacity: 0 };
    if (isLeft)
      return {
        ...base,
        zIndex: 2,
        opacity: 1,
        transform: `translateX(-${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(15deg)`,
      };
    if (isRight)
      return {
        ...base,
        zIndex: 2,
        opacity: 1,
        transform: `translateX(${gap}px) translateY(-${stickUp}px) scale(0.85) rotateY(-15deg)`,
      };
    return { ...base, zIndex: 1, opacity: 0 };
  }

  const isMobile = containerWidth > 0 && containerWidth < 640;

  return (
    <section className="kraft text-[#26533C] px-6 lg:px-10 py-20 md:py-28 lg:py-32">
      <div className="max-w-[1180px] mx-auto">
        <Reveal>
          <div className="text-center mb-14 md:mb-20">
            <span className="label-eyebrow text-[#26533C]/70">
              Caminhos possíveis
            </span>
            <h2
              className="mt-5 font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Cinco formas de começar
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Images */}
          <div
            ref={imageContainerRef}
            className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] [perspective:1000px]"
          >
            {servicos.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.titulo}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl select-none shadow-xl"
                style={imgStyle(i)}
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <span className="label-eyebrow text-[#26533C]/70">
                  Serviço {activeIndex + 1} de {len}
                </span>
                <h3
                  className="mt-4 font-light"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {active.titulo}
                </h3>
                <p className="mt-4 text-[14px] tracking-wide text-[#26533C]/70">
                  {active.meta}
                </p>

                <div className="mt-7 text-xs uppercase tracking-widest text-[#26533C]/70">
                  Para quem
                </div>
                <ul className="mt-3 space-y-2">
                  {active.paraQuem.map((p, i) => (
                    <li
                      key={i}
                      className="pl-5 relative font-light leading-relaxed text-[#26533C]/85 text-[15px]"
                    >
                      <span
                        className="absolute left-0 top-3 w-2.5 h-px"
                        style={{ background: "currentColor" }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                {active.beneficios && (
                  <>
                    <div className="mt-6 text-xs uppercase tracking-widest text-[#26533C]/70">
                      Com esse formato é possível
                    </div>
                    <ul className="mt-3 space-y-2">
                      {active.beneficios.map((p, i) => (
                        <li
                          key={i}
                          className="pl-5 relative font-light leading-relaxed text-[#26533C]/85 text-[15px]"
                        >
                          <span
                            className="absolute left-0 top-3 w-2.5 h-px"
                            style={{ background: "currentColor" }}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {active.cta && (
                  <div className="mt-8">
                    <CTA href={active.cta.href} variant="verde">
                      {active.cta.label}
                    </CTA>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 pt-10">
              <button
                onClick={prev}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Serviço anterior"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: hoverPrev ? "#C4B58E" : "#26533C",
                  color: "#E8DEC8",
                }}
              >
                <FaArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Próximo serviço"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: hoverNext ? "#C4B58E" : "#26533C",
                  color: "#E8DEC8",
                }}
              >
                <FaArrowRight size={16} />
              </button>
              <div className="flex items-center gap-2 ml-2">
                {servicos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      if (autoplayRef.current)
                        clearInterval(autoplayRef.current);
                    }}
                    aria-label={`Ir para serviço ${i + 1}`}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === activeIndex ? 24 : 8,
                      background:
                        i === activeIndex ? "#26533C" : "#26533C40",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
