import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  PorQue,
  ComoConduzido,
  Antes,
  Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Casa Orí · Carol Milhomens" },
      {
        name: "description",
        content:
          "Quem conduz a Casa Orí, como o trabalho é feito e o que é importante alinhar antes de começar um processo.",
      },
      { property: "og:title", content: "Sobre a Casa Orí" },
      {
        property: "og:description",
        content:
          "Carol Milhomens, terapeuta sistêmica e criadora do Sistema ORI. Os pilares e as premissas do trabalho.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main className="pt-20">
        <PorQue />
        <QuemConduz />
        <ComoConduzido />
        <Antes />
      </main>
      <Footer />
    </div>
  );
}
