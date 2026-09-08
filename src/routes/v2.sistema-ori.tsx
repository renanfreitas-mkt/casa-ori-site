import { createFileRoute } from "@tanstack/react-router";
import { OriEd } from "@/components/site/v2/EditorialPages";

const title = "Sistema ORI — Casa Orí | Tema editorial";
const description =
  "Observa, Reorganiza, Integra: o método que conduz processos individuais e trabalhos com equipes.";

export const Route = createFileRoute("/v2/sistema-ori")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OriEd,
});
