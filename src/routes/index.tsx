import { createFileRoute } from "@tanstack/react-router";
import { HomeEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Casa Orí — Terapia sistêmica e desenvolvimento";
const description =
  "Terapia sistêmica, constelação familiar e desenvolvimento de equipes em Brasília, com atendimento presencial e online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <HomeEd />
      </main>
      <EdFooter />
    </div>
  );
}
