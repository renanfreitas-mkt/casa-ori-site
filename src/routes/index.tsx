import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  Dores,
  ComoAjuda,
  CarolTeaser,
  Depoimentos,
  Podcast,
  InstagramGrid,
  Faq,
  HomeCta,
  PorQue,
  QuemConduz,
  ComoConduzido,
  SobreCta,
  AvaliacaoInicial,
  ComoEscolher,
  ServicosCta,
  SistemaOriIntro,
  SistemaOriEixos,
  SistemaOriDiferencial,
  SistemaOriAplicacao,
  SistemaOriEsperar,
  Antes,
  Contato,
  Footer,
} from "@/components/site/sections";
import { ServicosCarousel } from "@/components/site/ServicosCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Orí — Terapia sistêmica e constelação familiar · Carol Milhomens" },
      {
        name: "description",
        content:
          "Casa Orí é um espaço de terapia sistêmica, constelação familiar e desenvolvimento de equipes em Brasília, conduzido por Carol Milhomens.",
      },
      {
        property: "og:title",
        content: "Casa Orí — Terapia sistêmica e constelação familiar",
      },
      {
        property: "og:description",
        content:
          "Escuta, profundidade e direção. Um lugar para olhar para a própria história.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Dores />
        <ComoAjuda />
        <CarolTeaser />
        <Depoimentos />
        <Podcast />
        <InstagramGrid />
        <Faq />
        <HomeCta />

        <PorQue />
        <QuemConduz />
        <ComoConduzido />
        <SobreCta />

        <AvaliacaoInicial />
        <ServicosLista />
        <ComoEscolher />
        <ServicosCta />

        <SistemaOriIntro />
        <SistemaOriEixos />
        <SistemaOriDiferencial />
        <SistemaOriAplicacao />
        <SistemaOriEsperar />

        <Antes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
