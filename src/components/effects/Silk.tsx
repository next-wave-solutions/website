"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { Color, Mesh, Program, Renderer, Triangle } from "ogl";
import styles from "./threads.module.css";

type Rgb = [number, number, number];

type SilkProps = HTMLAttributes<HTMLDivElement> & {
  /** Fold (valley) tones, left → right. */
  lowStart: Rgb;
  lowEnd: Rgb;
  /** Sheen (crest) tones, left → right. */
  highStart: Rgb;
  highEnd: Rgb;
  /** Phase units per second. React Bits default is ~0.5; lower is calmer. */
  speed?: number;
  scale?: number;
  rotation?: number;
  noiseIntensity?: number;
  /** Render a single still frame (reduced motion). */
  paused?: boolean;
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

const fragmentShader = `
precision highp float;

varying vec2 vUv;
uniform float uTime;
uniform float uAspect;
uniform float uScale;
uniform float uRotation;
uniform float uNoise;
uniform vec3 uLowStart;
uniform vec3 uLowEnd;
uniform vec3 uHighStart;
uniform vec3 uHighEnd;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  vec2 r = e * sin(e * texCoord);
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c) * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 tex = rotateUvs(vec2(vUv.x * uAspect, vUv.y) * uScale, uRotation);
  float t = uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - t);
  float pattern = 0.6 + 0.4 * sin(
    5.0 * (tex.x + tex.y + cos(3.0 * tex.x + 5.0 * tex.y) + 0.02 * t)
    + sin(20.0 * (tex.x + tex.y - 0.1 * t))
  );

  float x = smoothstep(0.05, 0.95, vUv.x);
  vec3 low = mix(uLowStart, uLowEnd, x);
  vec3 high = mix(uHighStart, uHighEnd, x);
  vec3 color = mix(low, high, smoothstep(0.2, 1.0, pattern)) - rnd / 255.0 * uNoise;

  gl_FragColor = vec4(color, 1.0);
}
`;

/**
 * React Bits "Silk", ported to ogl and reshaped for Next Wave: two-tone brand
 * folds over the section surface instead of a single gray cloth.
 */
export default function Silk({
  lowStart,
  lowEnd,
  highStart,
  highEnd,
  speed = 0.22,
  scale = 0.7,
  rotation = 0.35,
  noiseIntensity = 1.5,
  paused = false,
  className,
  ...rest
}: SilkProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const propsRef = useRef({ lowStart, lowEnd, highStart, highEnd, speed, scale, rotation, noiseIntensity });
  const renderRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    propsRef.current = { lowStart, lowEnd, highStart, highEnd, speed, scale, rotation, noiseIntensity };
    renderRef.current?.();
  }, [lowStart, lowEnd, highStart, highEnd, speed, scale, rotation, noiseIntensity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer;
    try {
      renderer = new Renderer({ alpha: false, powerPreference: "low-power" });
    } catch {
      return;
    }
    const gl = renderer.gl;
    if (!gl) return;
    container.appendChild(gl.canvas);
    gl.canvas.setAttribute("aria-hidden", "true");
    gl.canvas.tabIndex = -1;
    gl.canvas.style.pointerEvents = "none";

    const initial = propsRef.current;
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uAspect: { value: 1 },
        uScale: { value: initial.scale },
        uRotation: { value: initial.rotation },
        uNoise: { value: initial.noiseIntensity },
        uLowStart: { value: new Color(...initial.lowStart) },
        uLowEnd: { value: new Color(...initial.lowEnd) },
        uHighStart: { value: new Color(...initial.highStart) },
        uHighEnd: { value: new Color(...initial.highEnd) },
      },
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    let phase = 0;

    function draw() {
      const p = propsRef.current;
      program.uniforms.uScale.value = p.scale;
      program.uniforms.uRotation.value = p.rotation;
      program.uniforms.uNoise.value = p.noiseIntensity;
      program.uniforms.uLowStart.value.set(...p.lowStart);
      program.uniforms.uLowEnd.value.set(...p.lowEnd);
      program.uniforms.uHighStart.value.set(...p.highStart);
      program.uniforms.uHighEnd.value.set(...p.highEnd);
      program.uniforms.uTime.value = phase;
      renderer.render({ scene: mesh });
    }
    renderRef.current = draw;

    /* The folds are soft, so a reduced backing store is invisible and much cheaper. */
    const MAX_RENDER_DIM = 1100;
    function resize() {
      const width = container!.clientWidth;
      const height = container!.clientHeight;
      if (!width || !height) return;
      const baseDpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const longestSide = Math.max(width, height) * baseDpr;
      renderer.dpr = longestSide > MAX_RENDER_DIM ? (baseDpr * MAX_RENDER_DIM) / longestSide : baseDpr;
      renderer.setSize(width, height);
      program.uniforms.uAspect.value = width / height;
      draw();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    let frame = 0;
    let last = 0;
    function update(now: number) {
      frame = requestAnimationFrame(update);
      const delta = last ? Math.min((now - last) / 1000, 0.1) : 0;
      last = now;
      if (!isVisible || document.hidden) return;
      phase += delta * propsRef.current.speed;
      draw();
    }
    if (!paused) frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      renderRef.current = null;
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className={[styles.container, className].filter(Boolean).join(" ")}
      aria-hidden="true"
      {...rest}
    />
  );
}
