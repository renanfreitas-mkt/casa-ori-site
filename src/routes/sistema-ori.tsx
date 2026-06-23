import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import {
  SistemaOriIntro,
  SistemaOriDiferencial,
  SistemaOriAplicacao,
  SistemaOriEsperar,
  Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/sistema-ori")({
  head: () => ({
    meta: [
      { title: "Sistema ORI — Casa Orí" },
      {
        name: "description",
        content:
          "O Sistema ORI é a metodologia autoral que sustenta o trabalho da Casa Orí — em processos individuais e dentro de empresas: Observa, Reorganiza, Impulsiona.",
      },
      { property: "og:title", content: "Sistema ORI — Metodologia autoral" },
      {
        property: "og:description",
        content:
          "Observa, Reorganiza, Impulsiona. A estrutura por trás de cada processo conduzido na Casa Orí.",
      },
    ],
  }),
  component: SistemaOriPage,
});

function SistemaOriPage() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main className="pt-20">
        <SistemaOriIntro />
        <SistemaOriDiferencial />
        <SistemaOriAplicacao />
        <SistemaOriEsperar />
      </main>
      <Footer />
    </div>
  );
}
