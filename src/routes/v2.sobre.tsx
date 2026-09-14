import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/sobre")({
  beforeLoad: () => {
    throw redirect({ to: "/sobre", statusCode: 301 });
  },
});
