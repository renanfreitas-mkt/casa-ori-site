import { createFileRoute } from "@tanstack/react-router";
import { ContatoEd } from "@/components/site/v2/EditorialPages";

const title = 'Contato — Agende uma conversa inicial | Casa Orí';
const description =
  'O caminho pode começar por uma conversa. Atendimentos online e presenciais na Asa Sul, Brasília.';

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
