import { createFileRoute } from "@tanstack/react-router";
import { OriEd } from "@/components/site/v2/EditorialPages";

const title = 'Sistema ORI — Observa, Reorganiza, Integra | Casa Orí';
const description =
  'Método autoral que investiga o que ainda não está visível, constrói novas possibilidades de ação e sustenta a mudança.';

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
