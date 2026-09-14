import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/sistema-ori")({
  beforeLoad: () => {
    throw redirect({ to: "/sistema-ori", statusCode: 301 });
  },
});
