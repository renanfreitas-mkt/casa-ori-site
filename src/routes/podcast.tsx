import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Podcast, Footer } from "@/components/site/sections";

export const Route = createFileRoute("/podcast")({
  head: () => ({
    meta: [
      { title: "Podcast Casa Orí" },
      {
        name: "description",
        content:
          "Conversas sobre o que sustenta nossas histórias e a forma como elas se repetem. Ouça o Podcast Casa Orí no Spotify.",
      },
      { property: "og:title", content: "Podcast Casa Orí" },
      {
        property: "og:description",
        content:
          "Conversas sobre o que sustenta nossas histórias e a forma como elas se repetem.",
      },
    ],
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main className="pt-20">
        <Podcast />
      </main>
      <Footer />
    </div>
  );
}
