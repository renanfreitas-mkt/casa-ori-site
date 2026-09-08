import { createFileRoute } from "@tanstack/react-router";
import { ContatoEd } from "@/components/site/v2/EditorialPages";

const title = "Contato — Casa Orí | Tema editorial";
const description =
  "Fale com a Carol pelo WhatsApp ou entenda sua situação em poucas perguntas. Brasília e online.";

export const Route = createFileRoute("/v2/contato")({
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
  component: ContatoEd,
});
