import { createFileRoute } from "@tanstack/react-router";
import { ServicosEmpresasEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Para empresas — Casa Orí";
const description =
  "Palestras, encontros de comunicação e programas de liderança para equipes e empresas.";

export const Route = createFileRoute("/para-empresas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/para-empresas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/para-empresas" }],
  }),
  component: ParaEmpresasPage,
});

function ParaEmpresasPage() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <ServicosEmpresasEd />
      </main>
      <EdFooter />
    </div>
  );
}
