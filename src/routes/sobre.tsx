import { createFileRoute } from "@tanstack/react-router";
import { SobreAbismo } from "@/components/site/v2/PaginasAbismo";
import { LayoutAbismo } from "@/components/site/v2/abismo-ui";

const title = "Sobre — Carol Milhomens | Casa Orí";
const description =
  "Conheça a Casa Orí, Carol Milhomens, os pilares do trabalho e os alinhamentos antes de começar.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/sobre" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <LayoutAbismo passo={false}>
      <SobreAbismo />
    </LayoutAbismo>
  );
}
