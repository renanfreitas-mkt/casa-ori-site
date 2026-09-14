import { createFileRoute } from "@tanstack/react-router";
import { ServicosEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Serviços — Casa Orí";
const description =
  "Terapia sistêmica, constelação familiar, vivências, palestras e programas de liderança para equipes.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/servicos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/servicos" }],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <ServicosEd />
      </main>
      <EdFooter />
    </div>
  );
}
