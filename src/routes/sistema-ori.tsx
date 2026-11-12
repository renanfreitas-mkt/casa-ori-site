import { createFileRoute } from "@tanstack/react-router";
import { OriAbismo } from "@/components/site/v2/PaginasAbismo";
import { LayoutAbismo } from "@/components/site/v2/abismo-ui";

const title = "Sistema ORI — Casa Orí";
const description =
  "Observa, Reorganiza, Integra: o método que conduz processos individuais e trabalhos com equipes.";

export const Route = createFileRoute("/sistema-ori")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/sistema-ori" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/sistema-ori" }],
  }),
  component: SistemaOriPage,
});

function SistemaOriPage() {
  return (
    <LayoutAbismo passo={false}>
      <OriAbismo />
    </LayoutAbismo>
  );
}
