import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Contato, Footer } from "@/components/site/sections";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Casa Orí" },
      {
        name: "description",
        content:
          "Agende uma conversa inicial com a Carol pelo WhatsApp. Primeiro contato gratuito, sem compromisso de continuidade.",
      },
      { property: "og:title", content: "Falar com a Casa Orí" },
      {
        property: "og:description",
        content:
          "Agende uma conversa inicial. Online ou presencial, conforme sua necessidade.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="bg-white text-[#1C1C1C] overflow-x-hidden">
      <Nav />
      <main className="pt-20">
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
