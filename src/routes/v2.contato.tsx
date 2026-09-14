import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/contato")({
  beforeLoad: () => {
    throw redirect({ to: "/contato", statusCode: 301 });
  },
});
