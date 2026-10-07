"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import styles from "./threads.module.css";

type ThreadsProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
  color?: [number, number, number];
  /** Optional mid stop for purple → blue/cyan → green progression. */
  colorMid?: [number, number, number];
  /** Optional end stop for a subtle left→right brand gradient along the field. */
  colorEnd?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
  /** Lower = fewer threads (performance + calmer look). Default 18 (React Bits uses 40). */
  lineCount?: number;
  /** Multiplier on animation clock. <1 = slower. Default 1. */
  timeScale?: number;
  /**
   * Light-mode refine: >0 boosts brand chroma so neutral/gray haze does not dominate.
   * Keep small (e.g. 0.25–0.4). Dark should stay ~0.
   */
  chromaBoost?: number;
};

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

function buildFragmentShader(lineCount: number) {
  return `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform vec3 uColorMid;
uniform vec3 uColorEnd;
uniform float uAmplitude;
uniform float uDistance;
uniform float uChromaBoost;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = ${Math.max(6, Math.min(lineCount, 40))};
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
  vec2 Pi = floor(P);
  vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
  vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
  Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
  Pt += vec2(26.0, 161.0).xyxy;
  Pt *= Pt;
  Pt = Pt.xzxz * Pt.yyww;
  vec4 hash_x = fract(Pt * (1.0 / 951.135664));
  vec4 hash_y = fract(Pt * (1.0 / 642.949883));
  vec4 grad_x = hash_x - 0.49999;
  vec4 grad_y = hash_y - 0.49999;
  vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
    * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
  grad_results *= 1.4142135623730950;
  vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
    * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
  vec4 blend2 = vec4(blend, vec2(1.0 - blend));
  return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
  return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
  float split_offset = (perc * 0.4);
  float split_point = 0.1 + split_offset;

  float amplitude_normal = smoothstep(split_point, 0.7, st.x);
  float amplitude_strength = 0.5;
  float finalAmplitude = amplitude_normal * amplitude_strength
    * amplitude * (1.0 + (mouse.y - 0.5) * 0.08);

  float time_scaled = time / 10.0 + (mouse.x - 0.5) * 0.35;
  float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

  float xnoise = mix(
    Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
    Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
    st.x * 0.3
  );

  float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

  float line_start = smoothstep(
    y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
    y,
    st.y
  );

  float line_end = smoothstep(
    y,
    y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
    st.y
  );

  return clamp(
    (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
    0.0,
    1.0
  );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  float line_strength = 1.0;
  for (int i = 0; i < u_line_count; i++) {
    float p = float(i) / float(u_line_count);
    line_strength *= (1.0 - lineFn(
      uv,
      u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
      p,
      (PI * 1.0) * p,
      uMouse,
      iTime,
      uAmplitude,
      uDistance
    ));
  }

  float colorVal = 1.0 - line_strength;
  float t = smoothstep(0.1, 0.9, uv.x);
  vec3 lineColor = t < 0.5
    ? mix(uColor, uColorMid, t * 2.0)
    : mix(uColorMid, uColorEnd, (t - 0.5) * 2.0);
  // Soft chroma lift — reduces muddy gray without neon
  float luma = dot(lineColor, vec3(0.299, 0.587, 0.114));
  lineColor = mix(vec3(luma), lineColor, 1.0 + uChromaBoost);
  fragColor = vec4(lineColor * colorVal, colorVal * 0.82);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;
}

export default function Threads({
  color = [0.545, 0.361, 0.965],
  colorMid,
  colorEnd,
  amplitude = 0.85,
  distance = 0.22,
  enableMouseInteraction = false,
  lineCount = 18,
  timeScale = 1,
  chromaBoost = 0,
  className,
  ...rest
}: ThreadsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameId = useRef(0);
  const resolvedMid = colorMid ?? color;
  const resolvedEnd = colorEnd ?? color;
  const propsRef = useRef({
    color,
    colorMid: resolvedMid,
    colorEnd: resolvedEnd,
    amplitude,
    distance,
    enableMouseInteraction,
    timeScale,
    chromaBoost,
  });

  useEffect(() => {
    propsRef.current = {
      color,
      colorMid: colorMid ?? color,
      colorEnd: colorEnd ?? color,
      amplitude,
      distance,
      enableMouseInteraction,
      timeScale,
      chromaBoost,
    };
  }, [
    color,
    colorMid,
    colorEnd,
    amplitude,
    distance,
    enableMouseInteraction,
    timeScale,
    chromaBoost,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ alpha: true, powerPreference: "low-power" });
    } catch {
      return;
    }
    const gl = renderer.gl;
    if (!gl) return;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);
    gl.canvas.setAttribute("aria-hidden", "true");
    gl.canvas.tabIndex = -1;
    gl.canvas.style.pointerEvents = "none";

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: buildFragmentShader(lineCount),
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(gl.canvas.width, gl.canvas.height, gl.canvas.width / gl.canvas.height),
        },
        uColor: { value: new Color(...propsRef.current.color) },
        uColorMid: { value: new Color(...propsRef.current.colorMid) },
        uColorEnd: { value: new Color(...propsRef.current.colorEnd) },
        uAmplitude: { value: propsRef.current.amplitude },
        uDistance: { value: propsRef.current.distance },
        uChromaBoost: { value: propsRef.current.chromaBoost },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const MAX_RENDER_DIM = 1440;
    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const baseDpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const longestSide = Math.max(width, height) * baseDpr;
      const dpr = longestSide > MAX_RENDER_DIM ? (baseDpr * MAX_RENDER_DIM) / longestSide : baseDpr;
      renderer.dpr = dpr;
      renderer.setSize(width, height);
      program.uniforms.iResolution.value.r = gl.canvas.width;
      program.uniforms.iResolution.value.g = gl.canvas.height;
      program.uniforms.iResolution.value.b = gl.canvas.width / gl.canvas.height;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("resize", resize);
    resize();

    const currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    const interactionRoot =
      (container.closest("section") as HTMLElement | null) ?? container;

    function handleMouseMove(e: MouseEvent) {
      const rect = interactionRoot.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    interactionRoot.addEventListener("mousemove", handleMouseMove);
    interactionRoot.addEventListener("mouseleave", handleMouseLeave);

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    function update(t: number) {
      animationFrameId.current = requestAnimationFrame(update);
      if (!isVisible || document.hidden) return;

      const {
        color,
        colorMid,
        colorEnd,
        amplitude,
        distance,
        enableMouseInteraction,
        timeScale,
        chromaBoost,
      } = propsRef.current;

      program.uniforms.uColor.value.set(...color);
      program.uniforms.uColorMid.value.set(...colorMid);
      program.uniforms.uColorEnd.value.set(...colorEnd);
      program.uniforms.uAmplitude.value = amplitude;
      program.uniforms.uDistance.value = distance;
      program.uniforms.uChromaBoost.value = chromaBoost;

      if (enableMouseInteraction) {
        const smoothing = 0.03;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      // Slower than React Bits default for a calmer brand feel
      program.uniforms.iTime.value = t * 0.00072 * timeScale;

      renderer.render({ scene: mesh });
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resize);
      interactionRoot.removeEventListener("mousemove", handleMouseMove);
      interactionRoot.removeEventListener("mouseleave", handleMouseLeave);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [lineCount]);

  return (
    <div
      ref={containerRef}
      className={[styles.container, className].filter(Boolean).join(" ")}
      aria-hidden="true"
      {...rest}
    />
  );
}
