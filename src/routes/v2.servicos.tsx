import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/servicos")({
  beforeLoad: () => {
    throw redirect({ to: "/para-voce", statusCode: 301 });
  },
});
