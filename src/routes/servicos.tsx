import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/sections";
import {
  ServicosIntro,
  ServicosPessoa,
  ServicosEmpresa,
  ServicosFinal,
} from "@/components/site/ServicosPage";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Casa Orí" },
      {
        name: "description",
        content:
          "Caminhos possíveis dentro da Casa Orí: terapia sistêmica, constelação familiar individual e em grupo, vivências e Casa Orí para empresas.",
      },
      { property: "og:title", content: "Serviços — Casa Orí" },
      {
        property: "og:description",
        content:
          "Cinco formas de começar: terapia sistêmica, constelação familiar, vivências e Casa Orí para empresas.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main className="pt-20">
        <ServicosIntro />
        <ServicosPessoa />
        <ServicosEmpresa />
        <ServicosFinal />
      </main>
      <Footer />
    </div>
  );
}
