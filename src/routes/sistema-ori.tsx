import { createFileRoute } from "@tanstack/react-router";
import { OriEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Sistema ORI — Casa Orí";
const description =
  "Observa, Reorganiza, Integra: o método que conduz processos individuais e trabalhos com equipes.";

export const Route = createFileRoute("/sistema-ori")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/sistema-ori" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/sistema-ori" }],
  }),
  component: SistemaOriPage,
});

function SistemaOriPage() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <OriEd />
      </main>
      <EdFooter />
    </div>
  );
}
