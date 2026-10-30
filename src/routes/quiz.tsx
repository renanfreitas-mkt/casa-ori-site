import { createFileRoute } from "@tanstack/react-router";
import { QuizFlow } from "@/components/site/quiz/QuizFlow";

const title = "Quiz de Autoconhecimento Guiado — Casa Orí";
const description =
  "Uma provocação de autoobservação: marque o que você reconhece e veja o que pode estar por trás do que te incomoda.";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  return (
    <main className="min-h-screen">
      <QuizFlow destino={{ href: "/para-voce", label: "Conhecer o trabalho para você" }} />
    </main>
  );
}
