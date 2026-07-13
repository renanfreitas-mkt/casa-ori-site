import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/sections";
import {
  Explicacao,
  DoresV3,
  SistemaOriV3,
  AvaliacaoV3,
  ServicosV3,
  CarolV3,
  ContinueConversa,
  DepoimentosV3,
  CtaFinal,
} from "@/components/site/HomeV3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Orí — Terapia sistêmica e desenvolvimento · Carol Milhomens" },
      {
        name: "description",
        content:
          "A Casa Orí ajuda pessoas e empresas a investigar o que ainda não foi percebido, mas continua influenciando comportamentos, relações e resultados.",
      },
      { property: "og:title", content: "Casa Orí — Terapia sistêmica e desenvolvimento" },
      {
        property: "og:description",
        content:
          "Investigar o que ainda não foi percebido e construir novas possibilidades de ação — para pessoas e para empresas.",
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
        <Explicacao />
        <DoresV3 />
        <SistemaOriV3 />
        <AvaliacaoV3 />
        <ServicosV3 />
        <CarolV3 />
        <ContinueConversa />
        <DepoimentosV3 />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
