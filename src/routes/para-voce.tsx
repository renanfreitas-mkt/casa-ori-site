import { createFileRoute } from "@tanstack/react-router";
import { ServicosPessoasEd } from "@/components/site/v2/EditorialPages";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

const title = "Para você — Casa Orí";
const description =
  "Terapia sistêmica, constelação familiar e vivências: processos individuais no seu ritmo, presenciais em Brasília ou online.";

export const Route = createFileRoute("/para-voce")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/para-voce" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/para-voce" }],
  }),
  component: ParaVocePage,
});

function ParaVocePage() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen overflow-x-hidden">
      <EdNav />
      <main>
        <ServicosPessoasEd />
      </main>
      <EdFooter />
    </div>
  );
}
