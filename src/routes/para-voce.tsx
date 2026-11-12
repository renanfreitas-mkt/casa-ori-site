import { createFileRoute } from "@tanstack/react-router";
import { ParaVoceAbismo } from "@/components/site/v2/PaginasAbismo";
import { LayoutAbismo } from "@/components/site/v2/abismo-ui";

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
    <LayoutAbismo passo="cpf">
      <ParaVoceAbismo />
    </LayoutAbismo>
  );
}
