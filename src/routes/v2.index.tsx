import { createFileRoute } from "@tanstack/react-router";
import { HomeEd } from "@/components/site/v2/EditorialPages";

const title = 'Casa Orí — Investigue o que ainda está invisível';
const description =
  'Terapia sistêmica, constelação familiar e desenvolvimento de equipes em Brasília. Comece com uma primeira conversa.';

export const Route = createFileRoute("/v2/")({
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
  component: HomeEd,
});
