import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";

const Dores = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.Dores })),
);
const ComoAjuda = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.ComoAjuda })),
);
const QuemConduz = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.QuemConduz })),
);
const Depoimentos = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.Depoimentos })),
);
const InstagramGrid = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.InstagramGrid })),
);
const Faq = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.Faq })),
);
const HomeCta = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.HomeCta })),
);
const Podcast = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.Podcast })),
);
const Footer = lazy(() =>
  import("@/components/site/sections").then((m) => ({ default: m.Footer })),
);

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
        <Suspense fallback={<div className="min-h-screen" />}>
          <Dores />
          <ComoAjuda />
          <QuemConduz />
          <Depoimentos />
          <InstagramGrid />
          <Faq />
          <HomeCta />
          <Podcast />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
