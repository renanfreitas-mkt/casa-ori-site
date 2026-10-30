import { createFileRoute } from "@tanstack/react-router";
import { QuizEmpresaFlow } from "@/components/site/quiz/QuizEmpresa";

const title = "Quiz para Empresas e Líderes — Casa Orí";
const description =
  "Descubra o que está por trás dos ruídos de comunicação na sua equipe e veja por onde começar.";

export const Route = createFileRoute("/quiz-empresa")({
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
  component: QuizEmpresaPage,
});

function QuizEmpresaPage() {
  return (
    <main className="min-h-screen">
      <QuizEmpresaFlow destino={{ href: "/para-empresas", label: "Conhecer os formatos para empresas" }} />
    </main>
  );
}
