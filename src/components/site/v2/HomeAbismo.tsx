import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { HeroAbismo } from "./HeroAbismo";
import { C, FechamentoAbismo, IconeInstagram, Kicker, MenuAbismo, Pilula, Titulo, fonte, serifa } from "./abismo-ui";
import {
  CAROL,
  HOME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PODCAST_EMBED_URL,
  PODCAST_URL,
  QUIZ_CNPJ_URL,
  QUIZ_CPF_URL,
  WHATSAPP_URL,
} from "../content";
import carolAnotacoes from "@/assets/carol-anotacoes.jpg.asset.json";

/*
 * HOME NA ESTÉTICA DO ABISMO — a home oficial do site.
 * TEXTOS: os da revisão da Carol (content.ts → HOME); hero e rótulos fixos como estavam.
 * Ordem das dobras: hero · na prática · transição · método · depoimento (Luana) · quem conduz ·
 * serviços · depoimento (Bruna) · a conversa continua · comece a travessia.
 */

const rotulo = "text-[12px] font-medium uppercase tracking-[0.16em]";
const corpo = "text-[16px] font-light leading-relaxed md:text-[17px]";

/* ---------------- 2ª dobra: na prática ---------------- */

function NaPratica() {
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <Kicker>{HOME.pratica.kicker}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <Titulo className="mt-6 max-w-[16ch]">{HOME.pratica.titulo}</Titulo>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-[28px] border border-[#26533C]/12 bg-[#F3F6F1] p-8 md:p-10">
              <span className={`${rotulo} text-[#26533C]/70`}>Para você</span>
              <ul className="mt-7 divide-y divide-[#263120]/10">
                {HOME.pratica.cpf.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-[#263120]/80 first:pt-0 last:pb-0">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-[28px] bg-[#717d5f] p-8 text-white md:p-10">
              <span className={`${rotulo} text-white/75`}>Para sua empresa</span>
              <ul className="mt-7 divide-y divide-white/20">
                {HOME.pratica.cnpj.map((d) => (
                  <li key={d} className="py-4 text-[15.5px] font-light leading-relaxed text-white/92 first:pt-0 last:pb-0">
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

/* ---------------- 3ª dobra: transição entre prática e método ---------------- */

function Transicao() {
  // a frase em duas linhas: a primeira afirma, a segunda vira a chave para o método
  const [antes, depois] = HOME.transicao.split(". ");
  return (
    <section className="relative isolate overflow-hidden bg-[#1F4232] px-5 py-24 text-[#F0F1EB] sm:px-10 md:py-36 lg:px-14">
      <img src="/img/abismo-sem-homem.webp" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.16] [filter:blur(1px)]" />
      <Reveal>
        <p className={`${fonte} mx-auto max-w-[22ch] text-center text-[clamp(1.9rem,4.4vw,3.6rem)] font-light leading-[1.1] tracking-[-0.035em]`}>
          {antes}.
          <span className={`${serifa} mt-3 block text-[1.12em] text-[#C9DCC4]`}>{depois}</span>
        </p>
      </Reveal>
    </section>
  );
}

/* ---------------- 4ª dobra: método ---------------- */

function Metodo() {
  return (
    <section id="sistema-ori" className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <Kicker>Sistema ORI</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <Titulo className="mt-6">{HOME.metodo.titulo}</Titulo>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className={`${serifa} max-w-[30rem] text-[clamp(1.3rem,2.2vw,1.75rem)] leading-[1.3] text-[#26533C]`}>
              {HOME.metodo.lateral.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {HOME.metodo.eixos.map((e, i) => (
            <Reveal key={e.letra} delay={i * 60} className="h-full">
              <Link
                to="/sistema-ori"
                className="group flex h-full flex-col rounded-[28px] border border-[#26533C]/15 bg-[#E6EEE2] p-8 transition-colors duration-300 hover:border-[#26533C]/45 hover:bg-[#DCE8D6] md:p-9"
              >
                <span className={`${serifa} text-[64px] leading-none text-[#26533C]`}>{e.letra}</span>
                <span className={`${rotulo} mt-4 text-[#26533C]`}>{e.nome}</span>
                <h3 className={`${fonte} mt-6 text-[21px] font-normal leading-snug tracking-[-0.015em]`}>{e.pergunta}</h3>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-[#263120]/72">{e.texto}</p>
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

/* ---------------- depoimentos ---------------- */

/** 5ª dobra — trecho de depoimento sem foto (a foto da Carol vem logo depois). */
function DepoimentoLuana() {
  const d = HOME.depoimentoLuana;
  return (
    <section className="bg-[#F3F6F1] px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <Reveal>
        <figure className="mx-auto max-w-[56rem] text-center">
          <span aria-hidden="true" className={`${serifa} block text-[80px] leading-[0.6] text-[#26533C]/45`}>
            “
          </span>
          <blockquote className={`${serifa} mt-4 text-[clamp(1.3rem,2.3vw,1.9rem)] leading-[1.4] text-[#263120]`}>{d.texto}</blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <span aria-hidden="true" className={`${serifa} grid h-11 w-11 place-items-center rounded-full border border-[#26533C]/30 text-[20px] not-italic text-[#26533C]`}>
              {d.inicial}
            </span>
            <span className={`${rotulo} text-[#263120]/60`}>{d.autor}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}

/** 8ª dobra — depoimento com foto, em verde. */
function DepoimentoBruna() {
  const d = HOME.depoimentoBruna;
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
            <blockquote className={`${serifa} mt-4 text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.45] text-[#F0F1EB]/92`}>{d.texto}</blockquote>
            <figcaption className="mt-8 flex items-center gap-3">
              <span aria-hidden="true" className={`${serifa} grid h-11 w-11 place-items-center rounded-full border border-[#F0F1EB]/30 text-[20px] not-italic`}>
                {d.inicial}
              </span>
              <span className={`${rotulo} text-[#F0F1EB]/65`}>{d.autor}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 6ª dobra: quem conduz ---------------- */

function QuemConduz() {
  const [abertura, ...resto] = HOME.quemConduz;
  return (
    <section id="carol" className="relative overflow-hidden bg-[#26533C] px-5 py-20 text-[#F0F1EB] sm:px-10 md:py-28 lg:px-14">
      {/* névoa do abismo bem sutil ao fundo */}
      <img src="/img/abismo-sem-homem.webp" alt="" aria-hidden="true" loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] [filter:blur(2px)]" />
      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="mx-auto max-w-[500px] overflow-hidden rounded-[32px]">
            <img src="/img/carol-quem-conduz.webp" alt="Carol Milhomens" loading="lazy" className="aspect-[1/1] w-full object-cover object-[50%_76%] md:aspect-[5/6]" />
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
          {/* a primeira frase abre o relato, em destaque */}
          <Reveal delay={140}>
            <p className={`${serifa} mt-8 max-w-[34rem] text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.35] text-[#C9DCC4]`}>{abertura}</p>
          </Reveal>
          {resto.map((p, i) => (
            <Reveal key={i} delay={200 + i * 60}>
              <p className={`mt-5 max-w-[34rem] text-[#F0F1EB]/78 ${corpo}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7ª dobra: serviços ---------------- */

function LinhaServico({ titulo, texto, href }: { titulo: string; texto: string; href: string }) {
  return (
    <article className="grid gap-2 border-b border-[#263120]/12 py-6 last:border-b-0 md:grid-cols-[0.8fr_1.2fr] md:gap-6">
      <h3 className={`${fonte} text-[21px] font-normal leading-snug tracking-[-0.015em] text-[#263120]`}>{titulo}</h3>
      <div>
        <p className="text-[15px] font-light leading-relaxed text-[#263120]/72">{texto}</p>
        <Link to={href} className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#263120] underline-offset-4 hover:underline">
          Explica mais
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}

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
            <p className={`max-w-[34rem] text-[#263120]/75 ${corpo}`}>{HOME.servicos.lateral}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className={`${rotulo} text-[#26533C]/70`}>Para você</span>
              <div className="mt-3 flex-1">
                {HOME.servicos.cpf.map((s) => (
                  <LinhaServico key={s.titulo} titulo={s.titulo} texto={s.texto} href="/para-voce" />
                ))}
              </div>
              <div className="mt-8">
                <Pilula href="/para-voce">Para você</Pilula>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-white p-8 md:p-10">
              <span className={`${rotulo} text-[#26533C]/70`}>Para sua empresa</span>
              <div className="mt-3 flex-1">
                {HOME.servicos.cnpj.map((s) => (
                  <LinhaServico key={s.titulo} titulo={s.titulo} texto={s.texto} href="/para-empresas" />
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

/* ---------------- 9ª dobra: a conversa continua (Instagram primeiro, depois o podcast) ---------------- */

function ConversaContinua() {
  const { instagram, podcast } = HOME.conversa;
  return (
    <section className="bg-white px-5 py-20 text-[#263120] sm:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <Titulo>{HOME.conversa.titulo}</Titulo>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-[#E6EEE2] p-8 md:p-10">
              <Kicker>{instagram.kicker}</Kicker>
              <h3 className={`${fonte} mt-6 text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.08] tracking-[-0.03em]`}>{instagram.titulo}</h3>
              <p className="mt-5 text-[15.5px] font-light leading-relaxed text-[#263120]/70">{instagram.texto}</p>
              <div className="mt-7 flex flex-1 flex-col justify-between gap-8 rounded-[18px] bg-[#26533C] px-7 py-8 text-[#F0F1EB]">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${fonte} flex items-center gap-3 text-[clamp(1.6rem,3vw,2.3rem)] font-light tracking-[-0.03em] transition-opacity hover:opacity-80`}
                >
                  <IconeInstagram className="h-8 w-8 shrink-0 text-[#C9DCC4]" />
                  {INSTAGRAM_HANDLE}
                </a>
                <div>
                  <Pilula href={INSTAGRAM_URL} tom="claro">
                    {instagram.cta}
                  </Pilula>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-[28px] border border-[#26533C]/12 bg-[#E6EEE2] p-8 md:p-10">
              <Kicker>{podcast.kicker}</Kicker>
              <h3 className={`${fonte} mt-6 text-[clamp(1.7rem,3vw,2.4rem)] font-normal leading-[1.08] tracking-[-0.03em]`}>{podcast.titulo}</h3>
              <p className="mt-5 text-[15.5px] font-light leading-relaxed text-[#263120]/70">{podcast.texto}</p>
              <div className="mt-7 overflow-hidden rounded-[18px]">
                <iframe
                  title="Podcast da Casa Orí no Spotify"
                  src={PODCAST_EMBED_URL}
                  width="100%"
                  height="232"
                  loading="lazy"
                  style={{ border: 0 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              </div>
              <div className="mt-7">
                <Pilula href={PODCAST_URL} tom="contorno">
                  {podcast.cta}
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
  const { cpf, cnpj } = HOME.final;
  return (
    <div className={`min-h-screen overflow-x-hidden bg-white ${fonte} antialiased`} style={{ color: C.oliva }}>
      <MenuAbismo />
      <main>
        <section id="inicio" className="relative z-10 bg-white">
          <HeroAbismo cpfHref={QUIZ_CPF_URL} cnpjHref={QUIZ_CNPJ_URL} telaCheia />
        </section>
        <NaPratica />
        <Transicao />
        <Metodo />
        <DepoimentoLuana />
        <QuemConduz />
        <Servicos />
        <DepoimentoBruna />
        <ConversaContinua />
      </main>
      {/* 10ª dobra: foto sem a pessoa; quem chegou até aqui já vai direto para o WhatsApp */}
      <FechamentoAbismo
        imagem="/img/abismo-sem-homem.webp"
        titulo={
          <>
            Comece a <em className={serifa}>travessia</em>
          </>
        }
        cartoes={[
          { ...cpf, href: WHATSAPP_URL },
          { ...cnpj, href: WHATSAPP_URL },
        ]}
      />
    </div>
  );
}
