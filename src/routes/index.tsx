import { createFileRoute } from "@tanstack/react-router";
import { HomeAbismo } from "@/components/site/v2/HomeAbismo";

const title = "Casa Orí — Terapia sistêmica e desenvolvimento";
const description =
  "Terapia sistêmica, constelação familiar e desenvolvimento de equipes em Brasília, com atendimento presencial e online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/" }],
  }),
  component: Index,
});

// A home oficial é a do abismo (a home antiga e o seletor de hero continuam no código, sem uso).
function Index() {
  return <HomeAbismo />;
}
