import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  Hero,
  Dores,
  ComoAjuda,
  QuemConduz,
  Depoimentos,
  InstagramGrid,
  Faq,
  HomeCta,
  Podcast,
  Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Orí — Terapia sistêmica e desenvolvimento · Carol Milhomens" },
      {
        name: "description",
        content:
          "Casa Orí é um espaço para olhar de perto o que está pedindo atenção — na vida pessoal, nas relações e no trabalho. Conduzido por Carol Milhomens, em Brasília.",
      },
      { property: "og:title", content: "Casa Orí — Terapia sistêmica e desenvolvimento" },
      {
        property: "og:description",
        content:
          "Um espaço para olhar de perto o que está pedindo atenção — na vida pessoal, nas relações e no trabalho.",
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
        <QuemConduz />
        <Depoimentos />
        <InstagramGrid />
        <Faq />
        <HomeCta />
        <Podcast />
      </main>
      <Footer />
    </div>
  );
}
