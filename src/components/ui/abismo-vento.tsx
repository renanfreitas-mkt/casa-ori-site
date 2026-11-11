"use client"

// Fundo "Abismo": a foto do cânion desenhada em WebGL, com vento leve no mato,
// brilho correndo no rio, névoa atravessando devagar e um zoom lento (efeito câmera).
// O balanço só acontece onde a foto é verde-clara (o mato); as paredes escuras ficam paradas.
// Sem WebGL ou com "reduzir movimento", mostra a foto parada (a <img> por baixo).

import { useEffect, useRef } from "react"

const VERT = `attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const FRAG = `precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_img;
uniform vec2 u_res;      // tamanho do canvas
uniform vec2 u_imgSize;  // tamanho da foto
uniform float u_time;
uniform vec2 u_focus;    // ponto da foto que fica sempre visível no recorte (0..1)
uniform float u_flip;    // 1.0 = foto espelhada na horizontal

float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; } return v; }

void main() {
  // "object-fit: cover" com ponto de foco + zoom lento de câmera
  float rc = u_res.x / u_res.y, ri = u_imgSize.x / u_imgSize.y;
  vec2 scale = rc > ri ? vec2(1.0, ri / rc) : vec2(rc / ri, 1.0);
  float zoom = 1.0 + 0.035 * (0.5 - 0.5 * cos(u_time * 0.045));
  scale /= zoom;
  vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
  // centraliza o recorte no ponto de foco, sem sair da foto
  vec2 centro = clamp(u_focus, scale * 0.5, 1.0 - scale * 0.5);
  uv = (uv - 0.5) * scale + centro;
  // espelhada: o foco e o recorte valem para a imagem já invertida
  uv.x = mix(uv.x, 1.0 - uv.x, u_flip);

  vec3 base = texture2D(u_img, uv).rgb;
  float lum = dot(base, vec3(0.299, 0.587, 0.114));
  // máscara do mato: verde dominante e claro o bastante
  float green = smoothstep(0.008, 0.06, base.g - max(base.r, base.b));
  float mato = green * smoothstep(0.05, 0.22, lum);

  // vento: rajadas que atravessam da esquerda para a direita
  float t = u_time;
  float rajada = 0.55 + 0.45 * sin(t * 0.35 + uv.x * 2.5);
  float n = fbm(uv * vec2(9.0, 14.0) + vec2(t * 0.55, t * 0.12));
  vec2 off = vec2(
    (sin(uv.y * 90.0 + t * 2.2 + n * 6.0) * 0.0016 + (n - 0.5) * 0.0038) * rajada,
    (n - 0.5) * 0.0013
  ) * mato;
  vec3 col = texture2D(u_img, uv + off).rgb;
  // o mato clareia um pouco quando a rajada passa (as folhas viram para a luz)
  col *= 1.0 + mato * (n - 0.45) * 0.14 * rajada;

  // rio: brilho correndo
  float rio = smoothstep(0.62, 0.85, lum) * (1.0 - green);
  col += rio * (0.5 + 0.5 * sin(uv.y * 260.0 - t * 3.5)) * 0.06;

  // névoa atravessando devagar, mais densa no alto e no fundo do cânion
  float fog = fbm(uv * vec2(2.2, 3.5) + vec2(t * 0.018, -t * 0.006));
  float alto = smoothstep(0.75, 0.05, uv.y);
  col = mix(col, vec3(0.78, 0.83, 0.78), smoothstep(0.45, 0.85, fog) * 0.16 * alto);

  gl_FragColor = vec4(col, 1.0);
}`

export function AbismoVento({
  src,
  className,
  focus = [0.5, 0.5],
  espelhar = false,
}: {
  src: string
  className?: string
  /** ponto da foto (0..1) que deve continuar visível quando a tela corta as laterais */
  focus?: [number, number]
  /** inverte a foto na horizontal (o foco é dado já na imagem invertida) */
  espelhar?: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    if (reduce) return // fica a <img> parada
    const gl = canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false })
    if (!gl) return

    const sh = (type: number, code: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, code)
      gl.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(prog, "a_position")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const u = {
      res: gl.getUniformLocation(prog, "u_res"),
      imgSize: gl.getUniformLocation(prog, "u_imgSize"),
      time: gl.getUniformLocation(prog, "u_time"),
      focus: gl.getUniformLocation(prog, "u_focus"),
      flip: gl.getUniformLocation(prog, "u_flip"),
    }
    gl.uniform2f(u.focus, focus[0], focus[1])
    gl.uniform1f(u.flip, espelhar ? 1 : 0)

    let raf = 0
    let disposed = false
    let visible = true
    let ready = false
    const start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(u.res, w, h)
    }
    const frame = (now: number) => {
      raf = 0
      if (disposed || !visible || !ready) return
      resize()
      gl.uniform1f(u.time, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }
    const play = () => {
      if (!raf && !disposed && visible && ready) raf = requestAnimationFrame(frame)
    }

    const tex = gl.createTexture()
    const img = new Image()
    img.decoding = "async"
    img.onload = () => {
      if (disposed) return
      gl.bindTexture(gl.TEXTURE_2D, tex)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img)
      gl.uniform2f(u.imgSize, img.naturalWidth, img.naturalHeight)
      ready = true
      canvas.style.opacity = "1"
      play()
    }
    img.src = src

    const io = new IntersectionObserver(([e]) => {
      visible = (e?.isIntersecting ?? true) && document.visibilityState === "visible"
      play()
    })
    io.observe(canvas)
    const onVis = () => {
      visible = document.visibilityState === "visible"
      play()
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      disposed = true
      cancelAnimationFrame(raf)
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      gl.deleteTexture(tex)
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
    }
  }, [src, focus[0], focus[1], espelhar])

  return (
    <div className={className}>
      {/* foto parada por baixo: aparece antes do WebGL carregar, ou se ele não existir */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: `${(espelhar ? 1 - focus[0] : focus[0]) * 100}% ${focus[1] * 100}%`,
          transform: espelhar ? "scaleX(-1)" : undefined,
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full transition-opacity duration-700"
        style={{ opacity: 0 }}
      />
    </div>
  )
}
