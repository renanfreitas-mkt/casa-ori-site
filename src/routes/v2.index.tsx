import { createFileRoute } from "@tanstack/react-router";
import { HomeEd } from "@/components/site/v2/EditorialPages";

const title = "Casa Orí — Terapia sistêmica e desenvolvimento de equipes | Tema editorial";
const description =
  "Versão editorial do site da Casa Orí: escuta atenta em Brasília para o que pesa na vida pessoal e nas equipes.";

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
