"use client";

import { useCallback, useRef, useState } from "react";
import { FlameIcon, SnowflakeIcon, CheckIcon } from "@/components/icons";

const MIN = 58;
const MAX = 82;
const SWEEP = 240; // degrees, from -120° to +120° (0° = 12 o'clock)
const TICKS = 48;

const GLACIER: [number, number, number] = [46, 125, 206];
const AMBER: [number, number, number] = [245, 160, 11];
const EMBER: [number, number, number] = [224, 84, 16];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** Cold → amber → hot ramp. f in [0,1]. */
function rampColor(f: number) {
  const [from, to, t] =
    f < 0.5 ? [GLACIER, AMBER, f * 2] : [AMBER, EMBER, (f - 0.5) * 2];
  const r = Math.round(lerp(from[0], to[0], t));
  const g = Math.round(lerp(from[1], to[1], t));
  const b = Math.round(lerp(from[2], to[2], t));
  return `rgb(${r},${g},${b})`;
}

function tempToAngle(t: number) {
  return -SWEEP / 2 + ((t - MIN) / (MAX - MIN)) * SWEEP;
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return [cx + r * Math.sin(rad), cy - r * Math.cos(rad)];
}

export default function ThermoDial() {
  const [temp, setTemp] = useState(68);
  const [touched, setTouched] = useState(false);
  const dragging = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const fraction = (temp - MIN) / (MAX - MIN);
  const color = rampColor(fraction);
  const angle = tempToAngle(temp);

  const mode =
    temp >= 71
      ? { label: "Heating", Icon: FlameIcon }
      : temp <= 66
        ? { label: "Cooling", Icon: SnowflakeIcon }
        : { label: "Just right", Icon: CheckIcon };

  const setFromPointer = useCallback((clientX: number, clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    let deg = (Math.atan2(dx, -dy) * 180) / Math.PI;
    deg = Math.max(-SWEEP / 2, Math.min(SWEEP / 2, deg));
    const t = Math.round(MIN + ((deg + SWEEP / 2) / SWEEP) * (MAX - MIN));
    setTemp(t);
    setTouched(true);
  }, []);

  const ticks = Array.from({ length: TICKS }, (_, i) => {
    const f = i / (TICKS - 1);
    const deg = -SWEEP / 2 + f * SWEEP;
    const lit = deg <= angle + 0.01;
    const [x1, y1] = polar(170, 170, 134, deg);
    const [x2, y2] = polar(170, 170, lit ? 152 : 148, deg);
    return { x1, y1, x2, y2, lit, color: rampColor(f), key: i };
  });

  const [kx, ky] = polar(170, 170, 116, angle);

  return (
    <div className="relative mx-auto w-[min(80vw,400px)]">
      {/* Ambient temperature glow */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-full blur-3xl transition-colors duration-500"
        style={{ background: `${color}26` }}
      />

      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label="Set your comfort temperature"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={temp}
        aria-valuetext={`${temp} degrees — ${mode.label}`}
        className="relative aspect-square w-full cursor-grab touch-none select-none outline-none active:cursor-grabbing"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromPointer(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromPointer(e.clientX, e.clientY);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp" || e.key === "ArrowRight") {
            setTemp((t) => Math.min(MAX, t + 1));
            setTouched(true);
            e.preventDefault();
          }
          if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
            setTemp((t) => Math.max(MIN, t - 1));
            setTouched(true);
            e.preventDefault();
          }
        }}
      >
        <svg viewBox="0 0 340 340" className="h-full w-full">
          {/* Slow-rotating dashed halo */}
          <g className="motion-safe:animate-spin-slow origin-center">
            <circle
              cx="170"
              cy="170"
              r="166"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 10"
              className="text-ink/15"
            />
          </g>

          {ticks.map((t) => (
            <line
              key={t.key}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke={t.lit ? t.color : "rgba(21,28,37,0.13)"}
              strokeWidth={t.lit ? 3 : 2}
              strokeLinecap="round"
              className="transition-colors duration-300"
            />
          ))}

          {/* Knob */}
          <circle
            cx={kx}
            cy={ky}
            r="11"
            fill="#fffdf8"
            stroke={color}
            strokeWidth="3"
            className="transition-colors duration-300"
          />
          <circle cx={kx} cy={ky} r="3.5" fill={color} className="transition-colors duration-300" />
        </svg>

        {/* Range labels */}
        <span className="eyebrow absolute bottom-[6%] left-[16%] !text-[0.6rem] text-glacier">
          {MIN}°
        </span>
        <span className="eyebrow absolute right-[16%] bottom-[6%] !text-[0.6rem] text-ember">
          {MAX}°
        </span>

        {/* Readout */}
        <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full border border-line bg-[#fffdf8] shadow-[0_18px_50px_-18px_rgba(21,28,37,0.35),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <span className="display text-[3.6rem] leading-none text-ink md:text-[4.2rem]">
            {temp}
            <span
              className="align-top text-[0.45em] transition-colors duration-300"
              style={{ color }}
            >
              °
            </span>
          </span>
          <span
            className="mt-2 flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors duration-300"
            style={{ background: `${color}1d`, color }}
          >
            <mode.Icon className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="eyebrow !text-[0.58rem] !tracking-[0.18em]">
              {mode.label}
            </span>
          </span>
        </div>
      </div>

      <p
        className={`eyebrow mt-5 text-center !text-[0.6rem] text-body/70 transition-opacity duration-500 ${
          touched ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        Drag the dial — we&apos;ll handle the rest
      </p>
    </div>
  );
}
