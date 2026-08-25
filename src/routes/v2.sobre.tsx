import { createFileRoute } from "@tanstack/react-router";
import { SobreEd } from "@/components/site/v2/EditorialPages";

const title = "Sobre — Carol Milhomens | Casa Orí (tema editorial)";
const description =
  "Quem conduz a Casa Orí, o significado do nome, os pilares do trabalho e as premissas antes de começar.";

export const Route = createFileRoute("/v2/sobre")({
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
  component: SobreEd,
});
