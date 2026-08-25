import { createFileRoute, Outlet } from "@tanstack/react-router";
import { EdNav, EdFooter } from "@/components/site/v2/ui";

export const Route = createFileRoute("/v2")({
  component: V2Layout,
});

function V2Layout() {
  return (
    <div className="theme-editorial bg-ed-cream min-h-screen">
      <EdNav />
      <main>
        <Outlet />
      </main>
      <EdFooter />
    </div>
  );
}
