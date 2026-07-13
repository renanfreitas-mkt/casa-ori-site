import { useEffect, useRef } from "react";

const colors = {
  orange: "#c46d4a",
  yellow: "#d19f42",
  green: "#748c7c",
  brown: "#6b4d32",
};

const nodes = [
  { angle: -Math.PI / 2, color: colors.orange, text1: "Surge um", text2: "problema", icon: "warn" },
  { angle: 0, color: colors.yellow, text1: "Você tenta", text2: "resolver", icon: "search" },
  { angle: Math.PI / 2, color: colors.green, text1: "Gasta tempo", text2: "e energia", icon: "battery" },
  { angle: Math.PI, color: colors.brown, text1: "O problema", text2: "continua", icon: "refresh" },
] as const;

export function HeroCanvasCycle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let animationTime = 0;
    let globalRotation = 0;
    let lastTime = 0;
    let isHoveringCenter = false;
    let rafId = 0;

    function drawIcon(type: string, x: number, y: number, size: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.strokeStyle = "white";
      ctx!.lineWidth = 1.5;
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
      ctx!.beginPath();
      const s = size * 0.4;
      if (type === "warn") {
        ctx!.moveTo(0, -s);
        ctx!.lineTo(-s * 0.9, s * 0.8);
        ctx!.lineTo(s * 0.9, s * 0.8);
        ctx!.closePath();
        ctx!.moveTo(0, -s * 0.2);
        ctx!.lineTo(0, s * 0.3);
        ctx!.moveTo(0, s * 0.6);
        ctx!.lineTo(0, s * 0.65);
      } else if (type === "search") {
        ctx!.arc(-s * 0.2, -s * 0.2, s * 0.5, 0, Math.PI * 2);
        ctx!.moveTo(s * 0.15, s * 0.15);
        ctx!.lineTo(s * 0.7, s * 0.7);
      } else if (type === "battery") {
        ctx!.rect(-s * 0.8, -s * 0.4, s * 1.6, s * 0.8);
        ctx!.moveTo(s * 0.8, -s * 0.2);
        ctx!.lineTo(s * 1.0, -s * 0.2);
        ctx!.lineTo(s * 1.0, s * 0.2);
        ctx!.lineTo(s * 0.8, s * 0.2);
        ctx!.moveTo(s * 0.1, -s * 0.2);
        ctx!.lineTo(-s * 0.2, s * 0.1);
        ctx!.lineTo(s * 0.1, s * 0.1);
        ctx!.lineTo(-s * 0.1, s * 0.3);
      } else if (type === "refresh") {
        ctx!.arc(0, 0, s * 0.7, -Math.PI * 0.8, Math.PI * 0.5);
        ctx!.moveTo(-s * 0.7, -s * 0.5);
        ctx!.lineTo(-s * 0.7, -s * 0.1);
        ctx!.lineTo(-s * 0.3, -s * 0.1);
        ctx!.beginPath();
        ctx!.arc(0, 0, s * 0.7, Math.PI * 0.2, -Math.PI * 0.5);
        ctx!.moveTo(s * 0.7, s * 0.5);
        ctx!.lineTo(s * 0.7, s * 0.1);
        ctx!.lineTo(s * 0.3, s * 0.1);
      }
      ctx!.stroke();
      ctx!.restore();
    }

    function drawCurvedArrow(
      startAngle: number,
      endAngle: number,
      radius: number,
      colorStart: string,
      colorEnd: string,
      thickness: number,
    ) {
      ctx!.beginPath();
      const x1 = centerX + Math.cos(startAngle) * radius;
      const y1 = centerY + Math.sin(startAngle) * radius;
      const x2 = centerX + Math.cos(endAngle) * radius;
      const y2 = centerY + Math.sin(endAngle) * radius;
      const gradient = ctx!.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      ctx!.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx!.strokeStyle = gradient;
      ctx!.lineWidth = thickness;
      ctx!.stroke();
      ctx!.save();
      ctx!.translate(centerX + Math.cos(endAngle) * radius, centerY + Math.sin(endAngle) * radius);
      ctx!.rotate(endAngle + Math.PI / 2);
      ctx!.fillStyle = colorEnd;
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.lineTo(-thickness * 1.5, -thickness * 2);
      ctx!.lineTo(thickness * 1.5, -thickness * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const radius = Math.max(1, Math.min(width, height) * 0.28);
      const nodeRadius = Math.max(1, radius * 0.3);

      ctx!.save();
      ctx!.translate(centerX, centerY);
      ctx!.rotate(globalRotation);
      ctx!.translate(-centerX, -centerY);
      const arrowPulse = Math.sin(animationTime) * 0.03;
      drawCurvedArrow(-Math.PI / 2 + 0.3 + arrowPulse, 0 - 0.4 - arrowPulse, radius, colors.orange, colors.yellow, 4);
      drawCurvedArrow(0 + 0.3 + arrowPulse, Math.PI / 2 - 0.4 - arrowPulse, radius, colors.yellow, colors.green, 4);
      drawCurvedArrow(Math.PI / 2 + 0.3 + arrowPulse, Math.PI - 0.4 - arrowPulse, radius, colors.green, colors.brown, 4);
      drawCurvedArrow(Math.PI + 0.3 + arrowPulse, Math.PI * 1.5 - 0.4 - arrowPulse, radius, colors.brown, colors.orange, 4);

      nodes.forEach((node) => {
        const x = centerX + Math.cos(node.angle) * radius;
        const y = centerY + Math.sin(node.angle) * radius;
        ctx!.save();
        ctx!.translate(x, y);
        ctx!.rotate(-globalRotation);
        ctx!.beginPath();
        ctx!.arc(0, 0, nodeRadius, 0, Math.PI * 2);
        ctx!.fillStyle = node.color;
        ctx!.shadowColor = "rgba(0,0,0,0.25)";
        ctx!.shadowBlur = 12;
        ctx!.shadowOffsetY = 5;
        ctx!.fill();
        ctx!.shadowColor = "transparent";
        drawIcon(node.icon, 0, -nodeRadius * 0.3, nodeRadius);
        ctx!.fillStyle = "white";
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.font = `300 ${nodeRadius * 0.22}px "Roboto", sans-serif`;
        ctx!.fillText(node.text1, 0, nodeRadius * 0.25);
        ctx!.fillText(node.text2, 0, nodeRadius * 0.55);
        ctx!.restore();
      });
      ctx!.restore();

      ctx!.save();
      const centerScale = isHoveringCenter ? 1.03 + Math.sin(animationTime * 2) * 0.015 : 1;
      ctx!.translate(centerX, centerY);
      ctx!.scale(centerScale, centerScale);
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillStyle = "#F5EFE3";
      ctx!.font = `italic ${radius * 0.13}px "Cormorant Garamond", serif`;
      ctx!.fillText("E se existir", 0, -radius * 0.15);
      ctx!.fillText("algo que você", 0, 0);
      ctx!.fillText("ainda não vê?", 0, radius * 0.15);
      ctx!.restore();
    }

    function resizeCanvas() {
      const rect = container!.getBoundingClientRect();
      const size = Math.max(200, Math.min(rect.width, rect.height));
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = size * dpr;
      canvas!.height = size * dpr;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
      canvas!.style.width = `${size}px`;
      canvas!.style.height = `${size}px`;
      width = size;
      height = size;
      centerX = width / 2;
      centerY = height / 2;
      draw();
    }

    function animate(currentTime: number) {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      if (deltaTime > 0.1) {
        rafId = requestAnimationFrame(animate);
        return;
      }
      animationTime += deltaTime;
      globalRotation += deltaTime * 0.05;
      draw();
      rafId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const centerRadius = (Math.min(width, height) / 2) * 0.4;
      isHoveringCenter = dist < centerRadius;
    }

    const ro = new ResizeObserver(resizeCanvas);
    ro.observe(container);
    resizeCanvas();
    canvas.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square mx-auto"
      style={{ maxWidth: "min(780px, 92vw, 68vh)" }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
    </div>
  );
}
