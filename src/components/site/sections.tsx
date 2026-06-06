import {
  Play,
  User,
  Camera,
  Mic,
  Instagram as InstagramIcon,
  MessageCircle,
  Eye,
  Layers,
  Compass,
  Heart,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { CTA, WhatsAppCTA } from "./CTA";

const WHATSAPP_URL = "https://wa.me/55XXXXXXXXXX";
const WHATSAPP_AGENDAR =
  "https://wa.me/55XXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20conversa%20inicial";
const WHATSAPP_GERAL =
  "https://wa.me/55XXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20os%20atendimentos%20da%20Casa%20Or%C3%AD";
const WHATSAPP_EMPRESAS =
  "https://wa.me/55XXXXXXXXXX?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20da%20Casa%20Or%C3%AD%20para%20empresas";
const QUIZ_URL = "QUIZ_URL";

/* ============== HERO ============== */
export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#1d4230] text-white min-h-[88svh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden"
    >
      {/* Animated shader background */}
      <div className="absolute inset-0 overflow-hidden">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          colors={["#1d4230", "#26533C", "#3a6b50", "#C4B58E", "#E8DEC8"]}
          speed={0.25}
          style={{ width: "100%", height: "100%" }}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-50 mix-blend-soft-light"
          colors={["#26533C", "#1d4230", "#E8DEC8", "#26533C"]}
          speed={0.18}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(29,66,48,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,66,48,0.35)_0%,rgba(29,66,48,0.75)_100%)]" />

        {/* Subtle pulsing accent in corner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.55, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute -bottom-32 -right-32 hidden md:block pointer-events-none"
        >
          <PulsingBorder
            colors={["#C4B58E", "#E8DEC8", "#26533C"]}
            colorBack="#00000000"
            roundness={1}
            thickness={0.08}
            softness={0.85}
            intensity={3}
            spotSize={0.25}
            pulse={0.12}
            smoke={0.45}
            smokeSize={3}
            scale={0.7}
            speed={0.6}
            style={{ width: 420, height: 420 }}
          />
        </motion.div>
      </div>

      <div className="relative max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="label-eyebrow text-white/70">Casa Orí</span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="mt-8 font-light text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
          >
            Algo está pesando.
            <br />
            E você já não consegue
            <br />
            fingir que está tudo bem.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto my-10 h-px w-20 bg-[#C4B58E]" />
        </Reveal>

        <Reveal delay={300}>
          <p
            className="mx-auto text-white/85 font-light max-w-2xl"
            style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.8 }}
          >
            A Casa Orí é um espaço de escuta para quem percebeu que seguir no
            automático não está mais funcionando.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTA href={QUIZ_URL} external variant="areia">
              Quero entender o que está acontecendo
            </CTA>
            <CTA href={WHATSAPP_URL} external variant="outlineWhite">
              Falar com a Carol
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <button
            type="button"
            className="mt-10 inline-flex items-center gap-3 text-white/75 hover:text-white text-sm tracking-wide transition-colors"
            aria-label="Assistir vídeo manifesto"
          >
            <span className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center">
              <Play size={16} fill="currentColor" />
            </span>
            Vídeo manifesto
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== DORES ============== */
const dores = [
  "Você sente que a sobrecarga está grande. Por fora, tenta seguir no automático, dar conta de tudo e parecer que está tudo bem.",
  "Você tem dificuldade de colocar limites — e isso te esgota.",
  "Você sente insegurança para tomar decisões que sabe que precisa tomar.",
  "Você tem medo de errar. Ou de decepcionar.",
  "A pressão da sua família pesa de um jeito que é difícil de explicar.",
  "Você percebe que os mesmos problemas só mudam de forma, mas sempre voltam.",
];

export function Dores() {
  return (
    <Section bg="areia-claro">
      <Reveal>
        <h2
          className="font-light max-w-3xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          Talvez você tenha chegado aqui porque...
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-5 max-w-3xl">
        {dores.map((d, i) => (
          <Reveal key={i} delay={i * 90} as="li">
            <div className="border-l-2 border-[#26533C] pl-5 py-1 text-[#26533C]/90 text-[17px] leading-relaxed font-light">
              {d}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <p
          className="script mt-16 text-[#26533C]"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
        >
          “Já percebeu que continuar desse jeito não está mais funcionando?”
        </p>
      </Reveal>
    </Section>
  );
}

/* ============== COMO AJUDA ============== */
export function ComoAjuda() {
  return (
    <Section bg="branco">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">
            Como a Casa Orí ajuda
          </span>
          <p className="mt-6 text-[17px] md:text-lg leading-relaxed font-light text-[#26533C]/90">
            Na Casa Orí, esse novo olhar começa quando você encontra um lugar
            seguro para falar. Aqui, você pode colocar para fora o que está
            confuso e ser acompanhado em um processo de escuta, compreensão e
            organização interna.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[17px] md:text-lg leading-relaxed font-light text-[#26533C]/90 lg:mt-14">
            Aquilo que aparece como ansiedade, insegurança e medo não começa só
            no momento em que te incomoda. Existe uma história familiar e
            aprendizados antigos que podem estar aumentando essas travas.
          </p>
        </Reveal>
      </div>

      {/* ORI mini */}
      <div className="mt-20 grid md:grid-cols-3 gap-4">
        {[
          { l: "O", t: "Observa", d: "Identificar o que está por trás" },
          { l: "R", t: "Reorganiza", d: "Colocar no lugar o que está fora de ordem" },
          { l: "I", t: "Impulsiona", d: "Transformar em continuidade" },
        ].map((b, i) => (
          <Reveal key={b.l} delay={i * 120}>
            <a
              href="#sistema-ori"
              className="block bg-[#26533C] text-white p-8 md:p-10 transition-colors duration-300 hover:bg-[#C4B58E] hover:text-[#26533C] group"
            >
              <div
                className="font-light leading-none"
                style={{ fontSize: "clamp(2.4rem, 4vw, 3.2rem)" }}
              >
                {b.l}
              </div>
              <div className="mt-4 text-lg font-medium">{b.t}</div>
              <div className="mt-2 text-sm opacity-85 leading-relaxed font-light">
                {b.d}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Serviços teaser */}
      <div className="mt-16 md:mt-20">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">Serviços</span>
          <h3 className="mt-4 text-xl md:text-2xl font-light text-[#26533C] max-w-xl">
            Caminhos possíveis dentro da Casa
          </h3>
        </Reveal>
        <Reveal delay={120}>
          <a
            href="#servicos"
            className="mt-7 inline-flex items-center gap-2 text-[#26533C] border-b border-[#26533C] pb-1 text-sm tracking-wide hover:gap-3 transition-all"
          >
            Ver caminhos possíveis <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== CAROL TEASER ============== */
export function CarolTeaser() {
  return (
    <Section bg="areia-claro">
      <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-12 md:gap-16 items-center">
        <Reveal>
          <div className="aspect-[3/4] bg-[#C4B58E] flex items-center justify-center">
            <User size={56} strokeWidth={1} className="text-[#26533C]/50" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="label-eyebrow text-[#26533C]/70">
            Quem conduz a Casa
          </span>
          <h3
            className="mt-5 font-light"
            style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
          >
            À frente da Casa Orí está Carol Milhomens, terapeuta sistêmica e
            criadora do Sistema ORI.
          </h3>
          <p className="mt-6 text-[17px] leading-relaxed font-light text-[#26533C]/85 max-w-xl">
            Com olhar sistêmico e condução didática, Carol ajuda pessoas e
            empresas a transformarem problemas difíceis em caminhos possíveis.
          </p>
          <a
            href="#sobre"
            className="mt-8 inline-flex items-center gap-2 text-[#26533C] border-b border-[#26533C] pb-1 text-sm tracking-wide hover:gap-3 transition-all"
          >
            Conheça Carol <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== DEPOIMENTOS ============== */
export function Depoimentos() {
  return (
    <Section bg="areia">
      <Reveal>
        <span className="label-eyebrow text-[#26533C]/75">Depoimentos</span>
        <h3 className="mt-4 text-2xl md:text-3xl font-light text-[#26533C] max-w-2xl">
          O que dizem quem passou pela Casa
        </h3>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="bg-[#E8DEC8] p-8 h-full flex flex-col">
              <span
                className="script text-[#26533C] text-4xl leading-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="mt-4 text-[15px] leading-relaxed font-light text-[#26533C]/85 flex-1">
                Depoimento a ser inserido — texto da cliente sobre a experiência
                no processo conduzido na Casa Orí.
              </p>
              <p className="mt-6 text-xs tracking-widest uppercase text-[#26533C]/70">
                — Nome, contexto
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============== PODCAST ============== */
export function Podcast() {
  return (
    <Section bg="verde">
      <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-8 md:gap-10">
        <Reveal>
          <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center">
            <Mic size={28} strokeWidth={1.3} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <span className="label-eyebrow text-white/65">Em breve</span>
          <h3 className="mt-3 text-2xl md:text-3xl font-light">
            Podcast Casa Orí
          </h3>
          <p className="mt-3 text-white/80 font-light max-w-lg">
            Conversas sobre o que sustenta nossas histórias e a forma como elas
            se repetem.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <CTA href="#" variant="outlineWhite">
            Ouvir no Spotify
          </CTA>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== INSTAGRAM ============== */
export function InstagramGrid() {
  return (
    <Section bg="branco">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">Instagram</span>
          <h3 className="mt-3 text-2xl md:text-3xl font-light text-[#26533C]">
            @suacasa.ori
          </h3>
        </Reveal>
        <Reveal delay={100}>
          <a
            href="https://instagram.com/suacasa.ori"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#26533C] border-b border-[#26533C] pb-1 text-sm tracking-wide self-start md:self-auto"
          >
            Seguir no Instagram <InstagramIcon size={16} />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="aspect-square bg-[#E8DEC8] flex items-center justify-center hover:bg-[#C4B58E] transition-colors duration-300">
              <Camera size={28} strokeWidth={1.2} className="text-[#26533C]/55" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============== FAQ ============== */
const faqItems = [
  {
    q: "Preciso saber exatamente o que estou sentindo para começar?",
    a: "Não. Muitas pessoas chegam apenas com a sensação de que estão cansadas, confusas ou vivendo algo que se repete. E isso já é suficiente para começar.",
  },
  {
    q: "Como saber qual atendimento faz mais sentido para mim?",
    a: "Você não precisa decidir sozinha. No primeiro contato, é possível entender melhor o que você está vivendo e identificar qual caminho pode ser mais adequado para o seu momento.",
  },
  {
    q: "Os atendimentos podem ser online?",
    a: "Sim. A Casa Orí oferece atendimentos online e presenciais, de acordo com o serviço e a disponibilidade de agenda.",
  },
  {
    q: "A Casa Orí só atende pessoas físicas?",
    a: "O foco principal da Casa Orí está no desenvolvimento pessoal. Por isso, esse trabalho também pode ser aplicado em empresas e organizações — já que toda empresa é feita de pessoas.",
  },
  {
    q: "Preciso já chegar com tudo entendido?",
    a: "Não. O processo começa justamente quando você decide olhar para o que está vivendo, mesmo que ainda não saiba explicar tudo com clareza.",
  },
];

export function Faq() {
  return (
    <Section bg="areia-claro">
      <Reveal>
        <span className="label-eyebrow text-[#26533C]/70">Dúvidas</span>
        <h3
          className="mt-4 font-light max-w-3xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          Talvez você esteja se perguntando...
        </h3>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-12 max-w-3xl">
          <Accordion items={faqItems} tone="verde" />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============== HOME CTA ============== */
export function HomeCta() {
  return (
    <Section bg="verde">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <p
            className="script"
            style={{ fontSize: "clamp(1.7rem, 4.2vw, 3rem)" }}
          >
            “Se algo está pesando aí dentro, talvez seja a hora de olhar para
            isso de um outro jeito.”
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10">
            <CTA href="#contato" variant="areia">
              Seja bem-vindo à Casa Orí
            </CTA>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== SOBRE ============== */
export function PorQue() {
  return (
    <Section id="sobre" bg="areia-claro">
      <div className="max-w-3xl">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">
            Por que Casa Orí
          </span>
        </Reveal>
        <Reveal delay={100}>
          <p
            className="mt-6 font-light"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)", lineHeight: 1.4 }}
          >
            A palavra <em>Casa</em> carrega a ideia de abrigo: um lugar seguro
            onde você pode chegar sem precisar ter tudo organizado.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p
            className="mt-6 font-light"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)", lineHeight: 1.4 }}
          >
            Já <em>Orí</em> significa cabeça, direção. É aquilo que te guia.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="my-10 h-px w-20 bg-[#26533C]" />
        </Reveal>
        <Reveal delay={300}>
          <p className="text-[17px] md:text-lg leading-relaxed font-light text-[#26533C]/90">
            A Casa Orí nasce desse encontro: um lugar onde o que pesa encontra
            acolhimento e o que parecia confuso começa a ganhar direção.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <p
            className="script mt-10 text-[#26533C]"
            style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.2rem)" }}
          >
            “Porque voltar para si também precisa de lugar e direção.”
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function QuemConduz() {
  return (
    <Section bg="verde">
      <div className="grid md:grid-cols-[minmax(0,420px)_1fr] gap-12 md:gap-16 items-start">
        <Reveal>
          <div className="aspect-[3/4] bg-[#C4B58E]/90 flex items-center justify-center -mt-2">
            <User size={64} strokeWidth={1} className="text-[#26533C]/55" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="label-eyebrow text-white/65">Quem conduz</span>
          <h3
            className="mt-4 font-light"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", lineHeight: 1.2 }}
          >
            Carol Milhomens
          </h3>
          <p className="mt-2 text-white/75 italic font-light">
            Terapeuta sistêmica e criadora do Sistema ORI
          </p>

          <div className="mt-8 space-y-5 text-white/85 font-light leading-relaxed text-[16px] md:text-[17px] max-w-xl">
            <p>
              Carol começou como arquiteta. Projetava estruturas físicas —
              fundações, plantas, sistemas que sustentam o que se constrói por
              cima.
            </p>
            <p>
              Em algum momento, percebeu que as estruturas que mais precisavam
              de atenção não eram as de concreto. Eram as internas.
            </p>
            <p>
              Não foi uma virada. Foi uma soma. O mesmo olhar que lê uma planta
              baixa aprendeu a ler padrões de comportamento, dinâmicas
              familiares, o que sustenta — e o que compromete — tudo que se
              constrói na vida de uma pessoa.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-white/85 font-light leading-relaxed text-[16px] md:text-[17px] max-w-xl border-t border-white/15 pt-8">
            <p>
              “Antes de conduzir outras pessoas nesse caminho, eu também fui
              transformada por ele. O olhar sistêmico e o estudo da comunicação
              mudaram a forma como eu me percebo, olho para a minha história e
              me relaciono com a vida.”
            </p>
            <p>
              “Ao atuar com Desenvolvimento Pessoal desde 2019, entendi que
              minha forma de escutar, enxergar o todo e traduzir questões
              profundas de um jeito mais claro eram os diferenciais do meu
              trabalho.”
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const pilares = [
  {
    t: "Acolhimento com autorresponsabilidade",
    d: "Aqui, a sua dor tem lugar e a sua participação no processo também.",
  },
  {
    t: "Profundidade com linguagem acessível",
    d: "O olhar sistêmico ajuda a enxergar além do problema aparente.",
  },
  {
    t: "Escuta com movimento",
    d: "Você pode falar sobre o que incomoda, mas o processo não para na fala.",
  },
  {
    t: "Cada processo respeita o seu tempo",
    d: "Sem perder o compromisso com aquilo que precisa mudar.",
  },
];

export function ComoConduzido() {
  return (
    <Section bg="branco">
      <Reveal>
        <span className="label-eyebrow text-[#26533C]/70">
          Como é conduzido o trabalho
        </span>
        <h3
          className="mt-4 font-light max-w-2xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          Quatro pilares sustentam cada processo.
        </h3>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
        {pilares.map((p, i) => (
          <Reveal key={p.t} delay={i * 100}>
            <div className="border-l-2 border-[#26533C] pl-6 py-2">
              <div className="text-xs tracking-widest uppercase text-[#26533C]/60">
                0{i + 1}
              </div>
              <h4 className="mt-3 text-xl text-[#26533C]">{p.t}</h4>
              <p className="mt-3 text-[#26533C]/80 font-light leading-relaxed">
                {p.d}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SobreCta() {
  return (
    <Section bg="verde">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <p
            className="script"
            style={{ fontSize: "clamp(1.7rem, 4.2vw, 3rem)" }}
          >
            “A escuta não é silêncio. É presença que organiza.”
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10">
            <WhatsAppCTA />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== SERVIÇOS ============== */
export function AvaliacaoInicial() {
  return (
    <Section id="servicos" bg="areia-claro">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">
            Avaliação Inicial
          </span>
        </Reveal>
        <Reveal delay={100}>
          <p
            className="mt-6 font-light"
            style={{ fontSize: "clamp(1.25rem, 2.1vw, 1.6rem)", lineHeight: 1.45 }}
          >
            Antes de indicar um serviço, é preciso entender o que está
            acontecendo e que tipo de condução pode realmente te ajudar.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-[#26533C]/80 font-light text-[16px] leading-relaxed">
            É a partir desse primeiro momento de escuta que o caminho começa a
            ser definido.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10">
            <CTA href={QUIZ_URL} external variant="verde">
              Descobrir qual serviço é para mim →
            </CTA>
          </div>
        </Reveal>
        <Reveal delay={380}>
          <p className="mt-5 text-sm italic text-[#26533C]/65">
            Responda algumas perguntas e descubra o caminho mais indicado para o
            seu momento.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

type Servico = {
  bg: "verde" | "areia";
  titulo: string;
  meta: string;
  paraQuem: string[];
  beneficios?: string[];
  cta?: { label: string; href: string };
  destaque?: boolean;
};

const servicos: Servico[] = [
  {
    bg: "verde",
    titulo: "Terapia Sistêmica",
    meta: "Acompanhamento contínuo · Sessões semanais ou quinzenais · 1 hora",
    paraQuem: [
      "sente que precisa de suporte mais próximo neste momento",
      "está vivendo conflitos que se repetem",
      "tem dificuldade de sustentar mudanças sozinho",
    ],
    beneficios: [
      "perceber mais rápido o que não está funcionando",
      "ter apoio próximo para o que vai surgindo no caminho",
      "construir novas possibilidades com mais precisão",
    ],
  },
  {
    bg: "areia",
    titulo: "Constelação Familiar Individual",
    meta: "Atendimento pontual · 2 horas · Questão específica",
    paraQuem: [
      "tem um tema específico que precisa ser olhado com mais atenção",
      "quer entender o que está por trás de uma relação ou repetição",
      "prefere um processo mais reservado e individual",
    ],
    beneficios: [
      "aprofundar um tema com mais privacidade e direcionamento",
      "acessar novas possibilidades de compreensão",
      "identificar se aquele tema pede ou não continuidade",
    ],
  },
  {
    bg: "verde",
    titulo: "Constelação Familiar em Grupo",
    meta: "Atendimento pontual · Até 3 horas · Presencial · Campo coletivo",
    paraQuem: [
      "deseja viver esse processo em um contexto coletivo",
      "se beneficia da força do grupo para ampliar a percepção",
      "quer acessar compreensões que surgem no movimento do grupo",
    ],
    beneficios: [
      "ampliar a compreensão a partir da experiência coletiva",
      "acessar percepções que não surgiriam em atendimento individual",
      "identificar se o tema pede ou não continuidade",
    ],
  },
  {
    bg: "areia",
    titulo: "Vivências",
    meta: "Experiências presenciais · Desenvolvimento pessoal",
    paraQuem: [
      "sente que alguns temas precisam ser vividos, não só falados",
      "se beneficia da troca com outras pessoas",
      "busca uma experiência mais prática e participativa",
    ],
    beneficios: [
      "acessar emoções e percepções no próprio corpo",
      "ampliar a compreensão a partir da escuta e da troca",
      "transformar reflexões em experiências mais concretas",
    ],
  },
  {
    bg: "verde",
    titulo: "Casa Orí para Empresas",
    meta: "Palestras · Treinamentos · Vivências · Processos personalizados",
    paraQuem: [
      "estão com a produtividade caindo",
      "vivem apagando incêndio",
      "têm dificuldade de alinhar equipe e liderança",
      "percebem que os mesmos problemas continuam voltando",
    ],
    beneficios: [
      "identificar o que está travando os resultados",
      "reduzir ruídos que impactam a execução no dia a dia",
      "construir acordos mais claros e decisões mais sustentáveis",
      "melhorar o alinhamento entre equipe e liderança",
    ],
    cta: {
      label: "Quero saber mais sobre o trabalho em empresas",
      href: WHATSAPP_EMPRESAS,
    },
    destaque: true,
  },
];

function ServicoCard({ s, full = false }: { s: Servico; full?: boolean }) {
  const isVerde = s.bg === "verde";
  const tone = isVerde
    ? "bg-[#26533C] text-white"
    : "bg-[#E8DEC8] text-[#26533C]";
  const subtle = isVerde ? "text-white/70" : "text-[#26533C]/65";
  const bullet = isVerde ? "text-white/90" : "text-[#26533C]/85";
  return (
    <div
      className={`${tone} rounded-2xl p-8 md:p-10 h-full flex flex-col ${
        full ? "lg:p-12" : ""
      }`}
    >
      <span className={`text-[11px] tracking-[0.22em] uppercase ${subtle}`}>
        {s.meta}
      </span>
      <h3
        className="mt-4 font-medium"
        style={{
          fontSize: full
            ? "clamp(1.7rem, 2.6vw, 2.2rem)"
            : "clamp(1.4rem, 2vw, 1.8rem)",
          lineHeight: 1.2,
        }}
      >
        {s.titulo}
      </h3>

      <div className={full ? "mt-8 grid md:grid-cols-2 gap-10" : "mt-8"}>
        <div>
          <div className={`text-xs uppercase tracking-widest ${subtle}`}>
            {full ? "Para empresas que" : "Para quem"}
          </div>
          <ul className="mt-3 space-y-2">
            {s.paraQuem.map((p, i) => (
              <li
                key={i}
                className={`pl-5 relative font-light leading-relaxed text-[15px] ${bullet}`}
              >
                <span
                  className="absolute left-0 top-3 w-2.5 h-px"
                  style={{ background: "currentColor" }}
                />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {s.beneficios && (
          <div className={full ? "" : "mt-6"}>
            <div className={`text-xs uppercase tracking-widest ${subtle}`}>
              É possível
            </div>
            <ul className="mt-3 space-y-2">
              {s.beneficios.map((p, i) => (
                <li
                  key={i}
                  className={`pl-5 relative font-light leading-relaxed text-[15px] ${bullet}`}
                >
                  <span
                    className="absolute left-0 top-3 w-2.5 h-px"
                    style={{ background: "currentColor" }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {s.cta && (
        <div className="mt-10">
          <CTA
            href={s.cta.href}
            external
            variant={isVerde ? "outlineWhite" : "verde"}
          >
            {s.cta.label}
          </CTA>
        </div>
      )}
    </div>
  );
}

export function ServicosGrid() {
  const principais = servicos.filter((s) => !s.destaque);
  const empresas = servicos.find((s) => s.destaque);
  return (
    <Section bg="branco">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="label-eyebrow text-[#26533C]/70">
            Caminhos possíveis
          </span>
          <h2
            className="mt-5 font-light text-[#26533C]"
            style={{
              fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
              lineHeight: 1.2,
            }}
          >
            Cinco formas de começar
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {principais.map((s, i) => (
          <Reveal key={s.titulo} delay={i * 80}>
            <ServicoCard s={s} />
          </Reveal>
        ))}
      </div>

      {empresas && (
        <Reveal delay={120}>
          <div className="mt-6 md:mt-8">
            <ServicoCard s={empresas} full />
          </div>
        </Reveal>
      )}

      <Reveal delay={160}>
        <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
          <h3
            className="font-light text-[#26533C]"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25 }}
          >
            Ainda em dúvida por onde começar?
          </h3>
          <p className="mt-5 text-[16px] leading-relaxed font-light text-[#26533C]/80">
            Tudo bem não saber. Na Casa Orí, o primeiro passo é a escuta. A
            partir de uma conversa inicial, entendemos o que está acontecendo e
            indicamos o melhor caminho para você.
          </p>
          <div className="mt-8">
            <CTA href={WHATSAPP_URL} external variant="verde">
              Falar com a Carol
            </CTA>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function ServicosLista() {
  return <ServicosGrid />;
}

export function ComoEscolher() {
  return null;
}

export function ComoEscolher() {
  return (
    <Section bg="branco">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h3
            className="font-light"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.25 }}
          >
            Ainda em dúvida por onde começar?
          </h3>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-[17px] leading-relaxed font-light text-[#26533C]/85">
            Tudo bem não saber. Na Casa Orí, o primeiro passo é a escuta. A
            partir de uma conversa inicial, entendemos o que está acontecendo e
            indicamos o melhor caminho para você.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10">
            <WhatsAppCTA variant="verde">
              Vamos construir esse caminho juntos →
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function ServicosCta() {
  return (
    <Section bg="verde">
      <div className="text-center max-w-3xl mx-auto">
        <Reveal>
          <p
            className="script"
            style={{ fontSize: "clamp(1.7rem, 4.2vw, 3rem)" }}
          >
            “Talvez você não precise de mais esforço. Talvez precise de um novo
            olhar.”
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10">
            <CTA href="#contato" variant="areia">
              Quero começar
            </CTA>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ============== SISTEMA ORI ============== */
type Eixo = {
  letra: string;
  nome: string;
  titulo: string;
  sub: string;
  itens: string[];
  frase: string;
  bg: "areia" | "verde";
};

const eixos: Eixo[] = [
  {
    letra: "O",
    nome: "Observa",
    titulo: "Identifica o que está por trás do problema.",
    sub: "Enquanto o padrão não é visto, o problema só muda de forma.",
    itens: [
      "reconhecer repetições",
      "diferenciar fato, interpretação e padrão",
      "identificar gatilhos e pontos de tensão",
      "entender o custo real do que está acontecendo",
    ],
    frase: "“É quando o que era desconhecido começa a fazer sentido.”",
    bg: "areia",
  },
  {
    letra: "R",
    nome: "Reorganiza",
    titulo: "Colocar no lugar o que está fora de ordem.",
    sub: "A mudança só acontece quando cada coisa assume o seu lugar.",
    itens: [
      "reposicionar papéis e responsabilidades",
      "estabelecer limites mais claros",
      "reorganizar a forma de se comunicar",
      "construir novas possibilidades de ação",
    ],
    frase:
      "“É quando o padrão automático instável dá lugar para um novo mais seguro.”",
    bg: "verde",
  },
  {
    letra: "I",
    nome: "Impulsiona",
    titulo: "Transformar as novas possibilidades em continuidade.",
    sub: "Não basta entender e agir uma vez.",
    itens: [
      "ajustar o que não funcionou",
      "adaptar as ações à vida real",
      "sustentar novas escolhas com consistência",
      "revisar o caminho sempre que necessário",
    ],
    frase: "“É o que evita dois extremos: desistir ou se perder em mil ações.”",
    bg: "areia",
  },
];

export function SistemaOriIntro() {
  return (
    <section id="sistema-ori" className="kraft px-5 sm:px-6 lg:px-10 py-14 md:py-24 lg:py-32">
      <div className="max-w-[1180px] mx-auto">
        {/* Intro band */}
        <Reveal>
          <div className="bg-[#26533C] rounded-t-3xl px-6 sm:px-10 md:px-16 lg:px-20 pt-14 md:pt-20 pb-28 md:pb-48 text-center relative overflow-hidden">
            <span className="label-eyebrow text-[#E8DEC8]/70">
              Metodologia autoral
            </span>
            <h2
              className="mt-5 font-light text-[#E8DEC8]"
              style={{ fontSize: "clamp(2.2rem, 5.2vw, 4rem)", lineHeight: 1.05 }}
            >
              O Sistema ORI
            </h2>
            <p
              className="script mt-7 text-[#C4B58E]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.1rem)" }}
            >
              Por trás de cada processo, existe uma estrutura.
            </p>
            <p className="mt-6 mx-auto max-w-2xl text-[#E8DEC8]/90 font-light leading-relaxed text-[15px] md:text-[17px]">
              O Sistema ORI é a metodologia que sustenta a forma como o trabalho
              na Casa Orí é conduzido — em processos individuais e dentro de
              empresas.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-6 -mt-20 md:-mt-32 relative z-20">
          {eixos.map((e, i) => {
            const isMid = i === 1;
            const surface = isMid
              ? "bg-[#C4B58E] border-[#26533C]/10"
              : "bg-[#E8DEC8] border-[#C4B58E]/40";
            const divider = isMid ? "border-[#26533C]/20" : "border-[#C4B58E]/50";
            const subtle = "text-[#26533C]/70";
            return (
              <Reveal key={e.letra} delay={i * 80}>
                <div
                  className={`${surface} border rounded-2xl p-7 md:p-9 shadow-2xl flex flex-col h-full transform ${
                    isMid ? "md:translate-y-4" : ""
                  } hover:-translate-y-2 transition-transform duration-300`}
                >
                  <div
                    className="text-[#26533C] font-light leading-none"
                    style={{ fontSize: "clamp(3.5rem, 5.5vw, 5rem)" }}
                  >
                    {e.letra}
                  </div>
                  <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#26533C]/60 font-medium">
                    {e.nome}
                  </span>

                  <div className="flex-grow mt-8">
                    <h3
                      className="text-[#26533C] font-normal leading-snug"
                      style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)" }}
                    >
                      {e.titulo}
                    </h3>
                    <p className={`mt-3 italic font-light text-[14px] ${subtle}`}>
                      {e.sub}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {e.itens.map((it, j) => (
                        <li
                          key={j}
                          className="pl-5 relative font-light leading-relaxed text-[14.5px] text-[#26533C]/85"
                        >
                          <span
                            className="absolute left-0 top-3 w-2.5 h-px"
                            style={{ background: "currentColor" }}
                          />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-6 mt-8 border-t ${divider}`}>
                    <p
                      className="script text-[#26533C] leading-snug"
                      style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}
                    >
                      {e.frase}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SistemaOriEixos() {
  return null;
}

const diferenciais = [
  { icon: Eye, t: "Transforma leitura em ação possível" },
  { icon: Heart, t: "Acompanha sem criar dependência" },
  { icon: Compass, t: "Respeita o tempo sem perder direção" },
  { icon: Layers, t: "Fortalece autonomia ao longo do caminho" },
];

export function SistemaOriDiferencial() {
  return (
    <Section bg="branco">
      <Reveal>
        <span className="label-eyebrow text-[#26533C]/70">Diferencial</span>
        <h3
          className="mt-4 font-light max-w-2xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          O que torna o Sistema ORI singular.
        </h3>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {diferenciais.map((d, i) => (
          <Reveal key={d.t} delay={i * 100}>
            <div className="border-t border-[#26533C]/25 pt-6">
              <d.icon size={22} strokeWidth={1.4} />
              <p className="mt-5 text-[#26533C] font-light leading-relaxed">
                {d.t}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function SistemaOriAplicacao() {
  return (
    <Section bg="areia-claro">
      <Reveal>
        <span className="label-eyebrow text-[#26533C]/70">Onde se aplica</span>
        <h3
          className="mt-4 font-light max-w-2xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          Da vida pessoal às organizações.
        </h3>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16">
        <Reveal>
          <h4 className="text-xl text-[#26533C]">Na vida pessoal</h4>
          <ul className="mt-5 space-y-2">
            {[
              "processos terapêuticos",
              "relações e família",
              "decisões e posicionamento",
            ].map((x) => (
              <li
                key={x}
                className="pl-5 relative font-light leading-relaxed text-[#26533C]/85"
              >
                <span className="absolute left-0 top-3 w-2.5 h-px bg-[#26533C]" />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <h4 className="text-xl text-[#26533C]">Nas empresas</h4>
          <ul className="mt-5 space-y-2">
            {[
              "organização de papéis",
              "liderança e tomada de decisão",
              "comunicação e execução",
              "alinhamento de equipe",
            ].map((x) => (
              <li
                key={x}
                className="pl-5 relative font-light leading-relaxed text-[#26533C]/85"
              >
                <span className="absolute left-0 top-3 w-2.5 h-px bg-[#26533C]" />
                {x}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function SistemaOriEsperar() {
  return (
    <Section bg="verde">
      <Reveal>
        <span className="label-eyebrow text-white/70">O que esperar</span>
        <h3
          className="mt-4 font-light max-w-2xl"
          style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", lineHeight: 1.25 }}
        >
          Conquistas ao longo do processo
        </h3>
      </Reveal>

      <ul className="mt-12 grid gap-4 max-w-3xl">
        {[
          "Identificar padrões antes de repetir",
          "Entender o que sustenta os problemas",
          "Se posicionar com mais consciência",
          "Tomar decisões mais alinhadas",
          "Sustentar mudanças na prática",
        ].map((x, i) => (
          <Reveal key={x} delay={i * 80} as="li">
            <div className="border-l-2 border-[#C4B58E] pl-5 py-1 text-white/90 text-[17px] font-light">
              {x}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <p
          className="script mt-16 text-[#C4B58E] max-w-3xl"
          style={{ fontSize: "clamp(1.6rem, 3.8vw, 2.4rem)" }}
        >
          “O Sistema ORI não resolve por você. Ele organiza o caminho para que
          você consiga fazer a sua parte com mais clareza.”
        </p>
      </Reveal>
    </Section>
  );
}

/* ============== ANTES DE COMEÇAR ============== */
const antes = [
  {
    q: "Não existe fórmula pronta",
    a: "Cada pessoa chega com uma história, um contexto e uma necessidade diferente. O caminho não é igual para todo mundo — ele é construído a partir do que você vive.",
  },
  {
    q: "Não se resolve tudo em uma sessão",
    a: "Alguns atendimentos são pontuais, mas mudanças mais consistentes acontecem com tempo, repetição e comprometimento com o processo.",
  },
  {
    q: "Ninguém resolve por você",
    a: "Existe direção, acompanhamento e suporte. Mas a mudança não vem de fora. Ela acontece a partir do que você está disposto a olhar, sustentar e transformar.",
  },
  {
    q: "Só entender não resolve seu problema",
    a: "Ter consciência é importante, mas não suficiente. O que aparece precisa ganhar forma na prática — nas suas ações, decisões, na forma como você se posiciona e se comunica.",
  },
  {
    q: "Não é para te prender aqui",
    a: "O acompanhamento existe para te ajudar a caminhar com mais clareza, não para criar dependência. O objetivo é que você desenvolva autonomia ao longo do processo.",
  },
  {
    q: "Seu problema não começou agora",
    a: "O que você vive hoje não começou recentemente. Muitas vezes, ele se conecta a padrões e dinâmicas que vêm do seu sistema familiar.",
  },
  {
    q: "Vai incomodar, e isso faz parte",
    a: (
      <>
        <p>
          Olhar para o que precisa ser visto gera desconforto. Mas aqui esse
          desconforto tem direção e acompanha um processo de mudança.
        </p>
        <p
          className="script mt-5 text-[#26533C]"
          style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)" }}
        >
          “Qual desconforto você escolhe? O que já te acompanha há tanto tempo
          ou o que pode abrir espaço para algo novo?”
        </p>
      </>
    ),
  },
];

export function Antes() {
  return (
    <>
      <Section id="antes" bg="areia-claro">
        <Reveal>
          <span className="label-eyebrow text-[#26533C]/70">
            Antes de começar
          </span>
          <h2
            className="mt-4 font-light max-w-3xl"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", lineHeight: 1.2 }}
          >
            Antes de começar, é importante alinhar algumas coisas.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 max-w-3xl">
            <Accordion items={antes} tone="verde" />
          </div>
        </Reveal>
      </Section>

    </>
  );
}

/* ============== CONTATO ============== */
export function Contato() {
  return (
    <>
      <Section id="contato" bg="verde">
        <div className="max-w-3xl">
          <Reveal>
            <span className="label-eyebrow text-white/70">Próximos passos</span>
          </Reveal>
          <Reveal delay={100}>
            <p
              className="script mt-6 text-[#C4B58E]"
              style={{ fontSize: "clamp(1.8rem, 4.6vw, 3rem)" }}
            >
              “O caminho pode começar por uma conversa.”
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 space-y-4 text-white/85 font-light leading-relaxed text-[17px]">
              <p>Sem precisar ter tudo entendido.</p>
              <p>Sem precisar ter todas as respostas.</p>
              <p>
                Só com a disponibilidade de olhar para o que está pedindo
                cuidado.
              </p>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="mt-8 text-white/85 font-light leading-relaxed text-[17px] max-w-xl">
              Se você deseja agendar um atendimento, tirar dúvidas sobre os
              serviços ou entender qual caminho pode fazer mais sentido para o
              seu momento, entre em contato pelo WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-10">
              <WhatsAppCTA variant="areia">
                <MessageCircle size={18} className="mr-2" />
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </Section>


      <Section bg="branco">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p
              className="script text-[#26533C]"
              style={{ fontSize: "clamp(1.8rem, 4.2vw, 2.8rem)" }}
            >
              “Profundidade para compreender.
              <br />
              Direção para transformar.”
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 text-[#26533C]/75 text-sm tracking-wide">
              Casa Orí · Carol Milhomens · @suacasa.ori
            </p>
            <p className="mt-1 text-[#26533C]/75 text-sm tracking-wide">
              Asa Sul, Brasília
            </p>
            <div className="mt-6 flex items-center justify-center gap-5 text-[#26533C]">
              <a
                href="https://instagram.com/suacasa.ori"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:opacity-70 transition-opacity"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

/* ============== FOOTER ============== */
export function Footer() {
  return (
    <footer className="bg-[#26533C] text-white py-6 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wide text-white/80">
        <div>
          Casa Orí © 2026 · Carol Milhomens · Asa Sul, Brasília · @suacasa.ori
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/suacasa.ori"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-70 transition-opacity"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
