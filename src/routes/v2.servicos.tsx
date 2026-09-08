import { createFileRoute } from "@tanstack/react-router";
import { ServicosEd } from "@/components/site/v2/EditorialPages";

const title = "Serviços — Casa Orí | Tema editorial";
const description =
  "Terapia sistêmica, constelação familiar, vivências, palestras e programas de liderança para equipes.";

export const Route = createFileRoute("/v2/servicos")({
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
  component: ServicosEd,
});
