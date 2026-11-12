import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { HeroAbismo } from "./HeroAbismo";
import { resumo } from "./EditorialPages";
import { C, FechamentoAbismo, Kicker, MenuAbismo, Pilula, PodcastInstagram, Titulo, fonte, serifa } from "./abismo-ui";
import {
  CAROL,
  DEPOIMENTOS,
  DORES_CNPJ,
  DORES_CPF,
  EIXOS_HOME,
  QUIZ_CNPJ_URL,
  QUIZ_CPF_URL,
  SERV_CNPJ,
  SERV_CPF,
  V2_COPY,
  type Servico,
} from "../content";
import carolAnotacoes from "@/assets/carol-anotacoes.jpg.asset.json";
/*
 * HOME NA ESTÉTICA DO ABISMO — a home oficial do site.
 * REGRA: os textos são exatamente os da home atual (content.ts / V2_COPY e os rótulos fixos da home).
 * Aqui só muda o layout: paleta oliva-escuro × névoa, Inter Tight + Instrument Serif, pílulas, fotos com tratamento.
 */


/* ---------------- seções ---------------- */

/** Talvez você reconheça — névoa, duas colunas; a de empresa em cartão oliva. */
function Reconhecimento() {
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <Kicker>Talvez você reconheça</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <Titulo className="mt-6 max-w-[16ch]">{V2_COPY.home.doresTitulo}</Titulo>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[28px] border border-[#26533C]/12 bg-[#F3F6F1] p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para você</span>
              <ul className="mt-7 divide-y divide-[#263120]/10">
                {DORES_CPF.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-[#263120]/80 first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            {/* verde-musgo: mais claro que o verde-noite da hero */}
            <div className="h-full rounded-[28px] bg-[#4F7A5C] p-8 text-white md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/70">Para sua empresa</span>
              <ul className="mt-7 divide-y divide-white/15">
                {DORES_CNPJ.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-white/90 first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Depoimento — foto à esquerda, citação grande em serifa itálica sobre oliva. */
function Depoimento() {
  const d = DEPOIMENTOS[0];
  return (
    <section className="bg-[#34604A] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto grid max-w-[1300px] items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-[28px]">
            <img
              src={carolAnotacoes.url}
              alt="Carol Milhomens anotando em uma prancheta durante uma sessão"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover [filter:saturate(.85)_contrast(1.03)]"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure>
            <span aria-hidden="true" className={`${serifa} block text-[72px] leading-[0.6] text-[#C9DCC4]`}>
              “
            </span>
            <blockquote className={`${serifa} mt-4 text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.45] text-[#F0F1EB]/92`}>
              {d.texto}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className={`${serifa} grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/30 text-[20px] not-italic`}>
                {d.inicial}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#F0F1EB]/65">Bruna C.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/** Sistema ORI — névoa, três cartões com a letra em serifa itálica. */
function SistemaOri() {
  return (
    <section id="sistema-ori" className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <Kicker>Sistema ORI</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo className="mt-6">Sistema ORI</Titulo>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[34rem] text-[16px] font-light leading-relaxed text-[#263120]/75 md:text-[17px]">{V2_COPY.home.subtitulo}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {EIXOS_HOME.map((e, i) => (
            <Reveal key={e.letra} delay={i * 60} className="h-full">
              <Link
                to="/sistema-ori"
                className="group flex h-full flex-col rounded-[28px] border border-[#26533C]/15 bg-[#E6EEE2] p-8 transition-colors duration-300 hover:border-[#26533C]/45 hover:bg-[#DCE8D6] md:p-9"
              >
                <span className={`${serifa} text-[64px] leading-none text-[#26533C]`}>{e.letra}</span>
                <span className="mt-4 text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]">{e.nome}</span>
                <h3 className={`${fonte} mt-6 text-[21px] font-normal leading-snug tracking-[-0.015em]`}>{e.titulo}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-[#263120]/70">{e.tensao}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-10">
            <Pilula href="/sistema-ori">Conhecer o Sistema ORI</Pilula>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Quem conduz — oliva, foto da Carol em arco e texto ao lado. */
function QuemConduz() {
  return (
    <section id="carol" className="relative overflow-hidden bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      {/* névoa do abismo bem sutil ao fundo */}
      <img src="/img/abismo.webp" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] [filter:blur(2px)]" />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          {/* foto quase quadrada, cantos arredondados; recorte centrado na Carol */}
          <div className="mx-auto max-w-[500px] overflow-hidden rounded-[32px]">
            <img
              src="/img/carol-quem-conduz.webp"
              alt="Carol Milhomens"
              loading="lazy"
              className="aspect-[1/1] w-full object-cover object-[50%_76%] md:aspect-[5/6]"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Kicker claro>{CAROL.titulo}</Kicker>
          </Reveal>
          <Reveal delay={80}>
            <Titulo claro className="mt-6">
              {CAROL.nome}
            </Titulo>
          </Reveal>
          {CAROL.paragrafos.map((p, i) => (
            <Reveal key={i} delay={140 + i * 60}>
              <p className={`max-w-[34rem] text-[16px] font-light leading-relaxed text-[#F0F1EB]/75 md:text-[17px] ${i === 0 ? "mt-8" : "mt-5"}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinhaServico({ s, href }: { s: Servico; href: string }) {
  return (
    <article className="grid gap-2 border-b border-[#263120]/12 py-6 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:gap-6">
      <h3 className={`${fonte} text-[21px] font-normal leading-snug tracking-[-0.015em] text-[#263120]`}>{s.titulo}</h3>
      <div>
        <p className="text-[15px] font-light leading-relaxed text-[#263120]/70">{resumo(s.ancora)}</p>
        <Link to={href} className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#263120] underline-offset-4 hover:underline">
          Explica mais
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}

/** Caminhos possíveis — névoa; intro em cima e as duas listas lado a lado
 *  (esquerda sempre "Para você", direita sempre "Para sua empresa", como nas dores). */
function Servicos() {
  return (
    <section id="servicos" className="bg-[#F3F6F1] px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <Kicker>Serviços</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo className="mt-6">Caminhos possíveis</Titulo>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[34rem] text-[16px] font-light leading-relaxed text-[#263120]/75 md:text-[17px]">{V2_COPY.servicos.introducao}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para você</span>
              <div className="mt-3 flex-1">
                {SERV_CPF.map((s) => (
                  <LinhaServico key={s.titulo} s={s} href="/para-voce" />
                ))}
              </div>
              <div className="mt-8">
                <Pilula href="/para-voce">Para você</Pilula>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#26533C]/70">Para sua empresa</span>
              <div className="mt-3 flex-1">
                {SERV_CNPJ.map((s) => (
                  <LinhaServico key={s.titulo} s={s} href="/para-empresas" />
                ))}
              </div>
              <div className="mt-8">
                <Pilula href="/para-empresas" tom="contorno">
                  Para empresas
                </Pilula>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


/* ---------------- página ---------------- */

export function HomeAbismo() {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-white ${fonte} antialiased`} style={{ color: C.oliva }}>
      <MenuAbismo />
      <main>
        <section id="inicio" className="relative z-10 bg-white">
          <HeroAbismo cpfHref={QUIZ_CPF_URL} cnpjHref={QUIZ_CNPJ_URL} telaCheia />
        </section>
        <Reconhecimento />
        <Depoimento />
        <SistemaOri />
        <QuemConduz />
        <Servicos />
        <PodcastInstagram />
      </main>
      <FechamentoAbismo />
    </div>
  );
}
