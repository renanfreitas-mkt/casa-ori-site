import { lazy, Suspense, useEffect, useState } from "react";

const MeshGradient = lazy(() =>
  import("@paper-design/shaders-react").then((m) => ({ default: m.MeshGradient }))
);

export function HeroShader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-80">
        <MeshGradient
          style={{ width: "100%", height: "100%" }}
          colors={["#1d4230", "#2d5c42", "#C4B58E", "#0f2a1e"]}
          speed={0.25}
          distortion={0.75}
          swirl={0.6}
        />
      </div>
    </Suspense>
  );
}
