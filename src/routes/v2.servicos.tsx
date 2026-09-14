import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/servicos")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos", statusCode: 301 });
  },
});
