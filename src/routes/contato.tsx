import { createFileRoute } from "@tanstack/react-router";
import { ContatoEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Contato — Casa Orí";
const description =
  "Fale com a Carol pelo WhatsApp ou responda perguntas rápidas para entendermos sua situação. Brasília e online.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/contato" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <ContatoEd />
      </main>
      <EdFooter />
    </div>
  );
}
