import { useState, type ReactNode } from "react";
import { Reveal } from "../Reveal";
import { QuizModal } from "../quiz/QuizFlow";
import {
  DepoimentoAbismo,
  FrasesRotativas,
  HeroPagina,
  Kicker,
  PainelAbismo,
  Pilula,
  PodcastInstagram,
  SecaoClara,
  Titulo,
  TituloPagina,
  VualaAbismo,
  fonte,
  serifa,
} from "./abismo-ui";
import {
  CAROL,
  DEPOIMENTOS,
  DEPOIMENTOS_VUALA,
  DIFERENCIAIS,
  DORES_CNPJ,
  DORES_CPF,
  EIXOS,
  GANHOS,
  NA_VIDA,
  NAS_EMPRESAS,
  NOME,
  PILARES,
  PREMISSAS,
  QUIZ_CNPJ_URL,
  QUIZ_CPF_URL,
  SERV_CNPJ,
  SERV_CPF,
  V2_COPY,
  WHATSAPP_URL,
  type Servico,
} from "../content";
import carolLaptop from "@/assets/carol-laptop.jpeg.asset.json";
import carolConduzindo from "@/assets/carol-conduzindo.jpg.asset.json";
import cartasConstelacao from "@/assets/cartas-constelacao.jpg.asset.json";
import fotoEmpresa1 from "@/assets/empresa-DSC00558.jpg.asset.json";
import fotoEmpresa2 from "@/assets/empresa-DSC00574.jpg.asset.json";
import logoAsset from "@/assets/casa-ori-logo.jpg.asset.json";

/*
 * PÁGINAS INTERNAS NA ESTÉTICA DO ABISMO (Para você, Para empresas, Sistema ORI, Sobre, Contato).
 * REGRA: os textos são exatamente os das páginas anteriores (content.ts e os rótulos fixos de EditorialPages.tsx).
 * Só muda o layout.
 */

const lead = "text-[16px] font-light leading-relaxed md:text-[18px]";

/* ---------------- peças das páginas ---------------- */

/** Topo com frases rotativas (Para você / Para empresas). */
function AberturaAbismo({
  kicker,
  frases,
  texto,
  cta,
  ctaHref,
  onCta,
  image,
  alt,
  focus,
}: {
  kicker: string;
  frases: readonly string[];
  texto: string;
  cta: string;
  ctaHref?: string;
  onCta?: () => void;
  image: string;
  alt: string;
  focus?: [number, number];
}) {
  return (
    // foto espelhada como na home: a pessoa fica à direita, atrás da foto da página, longe do texto
    <HeroPagina image={image} alt={alt} focus={focus ?? [0.74, 0.5]} espelhar>
      <Reveal>
        <Kicker claro>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-7">
          <FrasesRotativas frases={frases} />
        </div>
      </Reveal>
      <Reveal delay={180}>
        <p className={`mt-8 max-w-[34rem] text-[#F0F1EB]/80 ${lead}`}>{texto}</p>
      </Reveal>
      <Reveal delay={240}>
        <div className="mt-9">
          <Pilula href={onCta ? undefined : ctaHref} onClick={onCta} tom="claro">
            {cta}
          </Pilula>
        </div>
      </Reveal>
    </HeroPagina>
  );
}

/** Dores em cartões (duas colunas). */
function DoresAbismo({ kicker, titulo, itens, escuro = false }: { kicker: string; titulo: string; itens: readonly string[]; escuro?: boolean }) {
  return (
    <SecaoClara>
      <Reveal>
        <Kicker>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={80}>
        <Titulo className="mt-6 max-w-[18ch]">{titulo}</Titulo>
      </Reveal>
      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {itens.map((d, i) => (
          <Reveal key={d} delay={i * 50} as="li">
            <div
              className={`h-full rounded-[24px] px-7 py-6 text-[15.5px] font-light leading-relaxed ${
                escuro ? "bg-[#4F7A5C] text-white/90" : "border border-[#26533C]/12 bg-[#F3F6F1] text-[#263120]/80"
              }`}
            >
              {d}
            </div>
          </Reveal>
        ))}
      </ul>
    </SecaoClara>
  );
}

/** Um serviço completo: título e formato à esquerda; âncora e parágrafos à direita. */
function ServicoAbismo({ s, i }: { s: Servico; i: number }) {
  return (
    <Reveal delay={i * 60}>
      <article className="grid gap-6 border-t border-[#263120]/12 py-10 md:grid-cols-[minmax(0,360px)_1fr] md:gap-12 md:py-12">
        <div>
          <h3 className={`${fonte} text-[26px] font-normal leading-snug tracking-[-0.02em] text-[#263120] md:text-[30px]`}>{s.titulo}</h3>
          <p className="mt-4 text-[13px] leading-relaxed text-[#263120]/55">{s.formato}</p>
        </div>
        <div>
          <p className={`${serifa} text-[21px] leading-relaxed text-[#26533C] md:text-[24px]`}>{s.ancora}</p>
          {s.paragrafos.map((p) => (
            <p key={p} className="mt-5 text-[15px] font-light leading-relaxed text-[#263120]/72 md:text-[16px]">
              {p}
            </p>
          ))}
          <div className="mt-7">
            <Pilula href={WHATSAPP_URL} tom="contorno">
              Quero saber mais
            </Pilula>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ListaServicos({ kicker, titulo, itens }: { kicker: string; titulo: string; itens: readonly Servico[] }) {
  return (
    <SecaoClara fundo="nevoa">
      <Reveal>
        <Kicker>{kicker}</Kicker>
      </Reveal>
      <Reveal delay={80}>
        <Titulo className="mt-6 max-w-[680px]">{titulo}</Titulo>
      </Reveal>
      <div className="mt-12">
        {itens.map((s, i) => (
          <ServicoAbismo key={s.titulo} s={s} i={i} />
        ))}
      </div>
    </SecaoClara>
  );
}

/** Cartão de vidro sobre a foto (Sobre e Contato). */
function CartaoVidro({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[24px] border border-white/60 bg-white/80 p-7 text-[#1B2A1E] shadow-[0_20px_50px_-30px_rgba(27,42,30,.6)] backdrop-blur-md md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

const rotulo = "text-[12px] font-medium uppercase tracking-[0.16em]";

/* ============================= PARA VOCÊ ============================= */

export function ParaVoceAbismo() {
  const [quizAberto, setQuizAberto] = useState(false);
  return (
    <>
      <AberturaAbismo
        kicker="Para você"
        frases={V2_COPY.paraVoce.frases}
        texto={V2_COPY.paraVoce.lead}
        cta={V2_COPY.contato.cpfCta}
        onCta={() => setQuizAberto(true)}
        image={cartasConstelacao.url}
        alt="Cartas de constelação familiar sobre a mesa durante um atendimento da Casa Orí"
      />
      <DoresAbismo kicker="Talvez você reconheça" titulo={V2_COPY.paraVoce.doresTitulo} itens={DORES_CPF} />
      <ListaServicos kicker="Para você" titulo="Processos no seu ritmo" itens={SERV_CPF} />
      <DepoimentoAbismo depoimento={DEPOIMENTOS[1]} />
      <QuizModal open={quizAberto} onClose={() => setQuizAberto(false)} />
    </>
  );
}

/* ============================= PARA EMPRESAS ============================= */

export function ParaEmpresasAbismo() {
  return (
    <>
      <AberturaAbismo
        kicker="Para empresas"
        frases={V2_COPY.paraEmpresas.frases}
        texto={V2_COPY.paraEmpresas.lead}
        cta={V2_COPY.contato.cnpjCta}
        ctaHref={QUIZ_CNPJ_URL}
        image={carolConduzindo.url}
        alt="Carol Milhomens conduzindo um encontro com uma equipe"
      />
      <DoresAbismo kicker="Talvez a sua empresa reconheça" titulo={V2_COPY.paraEmpresas.doresTitulo} itens={DORES_CNPJ} escuro />
      <VualaAbismo depoimento={DEPOIMENTOS_VUALA[1]} image={fotoEmpresa1.url} alt="Carol Milhomens em palestra sobre o ciclo da comunicação" />
      <ListaServicos kicker="Para sua empresa" titulo="Formatos de trabalho" itens={SERV_CNPJ} />
      <VualaAbismo depoimento={DEPOIMENTOS_VUALA[0]} image={fotoEmpresa2.url} alt="Carol Milhomens falando ao microfone durante um encontro" fotoDireita />
    </>
  );
}

/* ============================= SISTEMA ORI ============================= */

function ListaOri({ titulo, itens }: { titulo: string; itens: readonly string[] }) {
  return (
    <div className="h-full rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
      <h3 className={`${fonte} text-[24px] font-normal tracking-[-0.02em] text-[#263120]`}>{titulo}</h3>
      <ul className="mt-6 space-y-3">
        {itens.map((t) => (
          <li key={t} className="flex gap-3 text-[15px] font-light leading-relaxed text-[#263120]/75">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#26533C]/60" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function OriAbismo() {
  return (
    <>
      <HeroPagina focus={[0.74, 0.5]} espelhar>
        <Reveal>
          <Kicker claro>Sistema ORI</Kicker>
        </Reveal>
        <Reveal delay={60}>
          <TituloPagina className="mt-7">Sistema ORI</TituloPagina>
        </Reveal>
        <Reveal delay={160}>
          <p className={`mt-7 max-w-[36rem] text-[#F0F1EB]/80 ${lead}`}>
            A mesma estrutura conduz processos individuais e trabalhos dentro de empresas — o que muda é o contexto, não o método.
          </p>
        </Reveal>
      </HeroPagina>

      <SecaoClara>
        <div className="space-y-6">
          {EIXOS.map((e, i) => (
            <Reveal key={e.letra} delay={i * 80}>
              <article className="grid gap-6 rounded-[28px] border border-[#26533C]/15 bg-[#E6EEE2] p-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-12 md:p-12">
                <div>
                  <span className={`${serifa} block text-[72px] leading-none text-[#26533C] md:text-[88px]`}>{e.letra}</span>
                  <span className={`${rotulo} mt-3 block text-[#26533C]`}>{e.nome}</span>
                </div>
                <div>
                  <h3 className={`${fonte} max-w-[32ch] text-[24px] font-normal leading-snug tracking-[-0.02em] text-[#263120] md:text-[28px]`}>{e.titulo}</h3>
                  <p className="mt-4 text-[16px] font-light text-[#263120]/75">{e.tensao}</p>
                  <p className="mt-5 text-[15px] font-light leading-relaxed text-[#263120]/72 md:text-[16px]">{e.texto}</p>
                  <p className={`${serifa} mt-7 border-l-2 border-[#26533C]/40 pl-5 text-[19px] leading-relaxed text-[#26533C] md:text-[22px]`}>{e.citacao}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SecaoClara>

      <section className="bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-[1300px]">
          <Reveal>
            <Titulo claro>O diferencial do Sistema ORI</Titulo>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d} delay={i * 70} as="li">
                <div className="h-full rounded-[24px] border border-[#F0F1EB]/20 bg-[#F0F1EB]/[0.06] px-7 py-6 text-[16px] font-light leading-relaxed text-[#F0F1EB]/88">{d}</div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SecaoClara fundo="nevoa">
        <Reveal>
          <Titulo>Onde o Sistema ORI se aplica</Titulo>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="h-full">
            <ListaOri titulo="Na vida pessoal" itens={NA_VIDA} />
          </Reveal>
          <Reveal delay={100} className="h-full">
            <ListaOri titulo="Nas empresas" itens={NAS_EMPRESAS} />
          </Reveal>
        </div>
      </SecaoClara>

      <SecaoClara>
        <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <Titulo>O que você ganha no caminho</Titulo>
          </Reveal>
          <ol>
            {GANHOS.map((g, i) => (
              <Reveal key={g} delay={i * 60} as="li">
                <div className="flex items-baseline gap-5 border-b border-[#263120]/12 py-5">
                  <span className={`${serifa} w-10 shrink-0 text-[28px] text-[#26533C]`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] font-light leading-relaxed text-[#263120]/80">{g}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </SecaoClara>

      <DepoimentoAbismo depoimento={DEPOIMENTOS[3]} />

      <PainelAbismo>
        <div className="text-center">
          <Reveal>
            <h2 className={`${fonte} text-[clamp(2.2rem,5.4vw,4.2rem)] font-light leading-[1.04] tracking-[-0.04em]`}>A estrutura está aqui</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={`mx-auto mt-6 max-w-[34rem] text-[#F0F1EB]/85 ${lead}`}>O Sistema ORI organiza o caminho — e quem caminha é você.</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex justify-center">
              <Pilula href={QUIZ_CPF_URL} tom="claro">
                {V2_COPY.ori.cta}
              </Pilula>
            </div>
          </Reveal>
        </div>
      </PainelAbismo>
    </>
  );
}

/* ============================= SOBRE ============================= */

export function SobreAbismo() {
  return (
    <>
      <HeroPagina
        focus={[0.74, 0.5]}
        espelhar
        extra={
          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.2fr] md:items-center md:gap-5">
            {[NOME[0], NOME[1]].map((n, i) => (
              <div key={n.palavra} className="contents">
                <Reveal delay={i * 90} className="h-full">
                  <CartaoVidro>
                    <span className={`${fonte} text-[40px] font-normal uppercase tracking-[-0.02em] text-[#26533C] md:text-[48px]`}>{n.palavra}</span>
                    <p className="mt-3 text-[15px] font-light leading-relaxed text-[#1B2A1E]/80">{n.texto}</p>
                  </CartaoVidro>
                </Reveal>
                <span aria-hidden="true" className={`${serifa} text-center text-[44px] leading-none text-[#F0F1EB]/80`}>
                  {i === 0 ? "+" : "="}
                </span>
              </div>
            ))}
            <Reveal delay={180} className="h-full">
              <div className="flex h-full items-center rounded-[24px] bg-[#26533C] p-7 md:p-8">
                <p className="text-[16px] font-light leading-relaxed text-[#F0F1EB]/92 md:text-[18px]">{NOME[2].texto}</p>
              </div>
            </Reveal>
          </div>
        }
      >
        <div className="flex items-center gap-6">
          <img src={logoAsset.url} alt="" aria-hidden="true" className="h-16 w-16 rounded-full object-cover ring-1 ring-[#F0F1EB]/25 md:h-20 md:w-20" />
          <TituloPagina>Casa Orí</TituloPagina>
        </div>
      </HeroPagina>

      <SecaoClara>
        <Reveal>
          <Kicker>Como é o método</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <Titulo className="mt-6">Quatro pilares</Titulo>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PILARES.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 70} className="h-full">
              <div className="h-full rounded-[28px] border border-[#26533C]/15 bg-[#E6EEE2] p-8 md:p-10">
                <h3 className={`${fonte} text-[22px] font-normal leading-snug tracking-[-0.02em] text-[#263120] md:text-[24px]`}>{p.titulo}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-[#263120]/72">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SecaoClara>

      <section className="bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <Reveal>
              <Kicker claro>{CAROL.titulo}</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo claro className="mt-6">
                {CAROL.nome}
              </Titulo>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${serifa} mt-6 max-w-[34rem] text-[21px] leading-relaxed text-[#C9DCC4] md:text-[24px]`}>{V2_COPY.sobre.especialidade}</p>
            </Reveal>
            {V2_COPY.sobre.bio.map((p, i) => (
              <Reveal key={p} delay={200 + i * 60}>
                <p className="mt-5 max-w-[36rem] text-[15.5px] font-light leading-relaxed text-[#F0F1EB]/78 md:text-[16.5px]">{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mx-auto max-w-[480px] overflow-hidden rounded-[32px]">
              <img src={carolLaptop.url} alt="Carol Milhomens trabalhando na Casa Orí" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <SecaoClara fundo="nevoa">
        <Reveal>
          <Kicker>Antes de começar</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <Titulo className="mt-6">Antes de começar</Titulo>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {PREMISSAS.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 50}>
              <div className="h-full border-t border-[#263120]/15 py-7">
                <h3 className={`${fonte} text-[21px] font-normal leading-snug tracking-[-0.015em] text-[#263120]`}>{p.titulo}</h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-[#263120]/72">{p.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SecaoClara>

      <DepoimentoAbismo depoimento={DEPOIMENTOS[2]} />

      <PodcastInstagram />

      <PainelAbismo>
        <div className="text-center">
          <Reveal>
            <Kicker claro>O desconforto da mudança</Kicker>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${fonte} mx-auto mt-7 max-w-[18ch] text-[clamp(2.2rem,5.4vw,4.2rem)] font-light leading-[1.04] tracking-[-0.04em]`}>Qual desconforto você escolhe?</p>
          </Reveal>
          <Reveal delay={170}>
            <p className={`mx-auto mt-6 max-w-[42ch] text-[#F0F1EB]/75 ${lead}`}>
              O que já te acompanha há tanto tempo,{" "}
              <span className={`${serifa} text-[1.15em] text-[#F0F1EB]`}>ou o que te leva à mudança que você busca?</span>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex justify-center">
              <Pilula href={WHATSAPP_URL} tom="claro">
                {V2_COPY.sobre.cta}
              </Pilula>
            </div>
          </Reveal>
        </div>
      </PainelAbismo>
    </>
  );
}

/* ============================= CONTATO ============================= */

export function ContatoAbismo() {
  return (
    <>
      <HeroPagina
        focus={[0.74, 0.5]}
        espelhar
        extra={
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            <Reveal delay={160} className="h-full">
              <CartaoVidro>
                <span className={`${rotulo} text-[#26533C]/70`}>Para você</span>
                <p className="mt-4 flex-1 text-[16px] font-light leading-relaxed text-[#1B2A1E]/80">{V2_COPY.contato.cpfTexto}</p>
                <div className="mt-7">
                  <Pilula href={QUIZ_CPF_URL}>{V2_COPY.contato.cpfCta}</Pilula>
                </div>
              </CartaoVidro>
            </Reveal>
            <Reveal delay={240} className="h-full">
              <CartaoVidro>
                <span className={`${rotulo} text-[#26533C]/70`}>Para sua empresa</span>
                <p className="mt-4 flex-1 text-[16px] font-light leading-relaxed text-[#1B2A1E]/80">{V2_COPY.contato.cnpjTexto}</p>
                <div className="mt-7">
                  <Pilula href={QUIZ_CNPJ_URL}>{V2_COPY.contato.cnpjCta}</Pilula>
                </div>
              </CartaoVidro>
            </Reveal>
          </div>
        }
      >
        <Reveal>
          <Kicker claro>Contato</Kicker>
        </Reveal>
        <Reveal delay={60}>
          <TituloPagina className="mt-7 max-w-[16ch]">{V2_COPY.contato.titulo}</TituloPagina>
        </Reveal>
        <Reveal delay={160}>
          <p className={`mt-7 max-w-[36rem] text-[#F0F1EB]/80 ${lead}`}>{V2_COPY.contato.texto}</p>
        </Reveal>
      </HeroPagina>

      <section className="bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <Reveal>
              <Titulo claro>Fale com a Carol</Titulo>
            </Reveal>
            <Reveal delay={100}>
              <p className={`mt-6 max-w-[30rem] text-[#F0F1EB]/80 ${lead}`}>{V2_COPY.contato.whatsapp}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8">
                <Pilula href={WHATSAPP_URL} tom="claro">
                  Falar no WhatsApp
                </Pilula>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className={`${serifa} max-w-[16ch] text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] text-[#C9DCC4]`}>Profundidade para compreender. Direção para seguir.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
