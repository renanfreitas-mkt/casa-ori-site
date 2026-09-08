import { createFileRoute } from "@tanstack/react-router";
import { SobreEd } from "@/components/site/v2/EditorialPages";

const title = 'Sobre a Casa Orí e Carol Milhomens';
const description =
  'A Casa Orí em Brasília e quem conduz o processo: Carol Milhomens, criadora do Sistema ORI.';

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
