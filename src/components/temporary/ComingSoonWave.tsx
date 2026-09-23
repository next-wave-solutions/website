import styles from "./coming-soon.module.css";

const core =
  "M-180 500 C 40 560, 220 590, 390 520 C 580 442, 690 300, 880 286 C 1070 272, 1160 392, 1320 348 C 1460 310, 1540 200, 1700 140";

const upper =
  "M-180 230 C 80 120, 260 150, 440 214 C 640 286, 760 176, 960 148 C 1160 120, 1320 196, 1720 86";

const lower =
  "M-180 590 C 90 660, 280 640, 470 582 C 700 512, 830 430, 1040 412 C 1260 392, 1420 292, 1720 236";

const particles = [
  { cx: 210, cy: 248, r: 1.7, fill: "#8B5CF6", delay: "0s" },
  { cx: 430, cy: 214, r: 1.4, fill: "#A78BFA", delay: "0.8s" },
  { cx: 620, cy: 390, r: 2, fill: "#6366F1", delay: "1.4s" },
  { cx: 860, cy: 300, r: 1.5, fill: "#3B82F6", delay: "0.4s" },
  { cx: 1040, cy: 360, r: 1.8, fill: "#06B6D4", delay: "1.8s" },
  { cx: 1280, cy: 250, r: 1.6, fill: "#22D3EE", delay: "1.1s" },
  { cx: 1480, cy: 168, r: 2.1, fill: "#10B981", delay: "0.2s" },
  { cx: 330, cy: 470, r: 1.3, fill: "#C4B5FD", delay: "2.1s", late: true },
  { cx: 980, cy: 430, r: 1.2, fill: "#67E8F9", delay: "2.6s", late: true },
  { cx: 1180, cy: 180, r: 1.3, fill: "#6EE7B7", delay: "1.6s", late: true },
];

export function ComingSoonWave() {
  return (
    <div className={styles.waveLayer} aria-hidden="true">
      <svg
        className={styles.waveSvg}
        viewBox="0 0 1440 760"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nw-wave" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="32%" stopColor="#6366F1" />
            <stop offset="54%" stopColor="var(--info)" />
            <stop offset="74%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
          <filter id="nw-soft" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        <g className={styles.driftEcho}>
          <path
            d={upper}
            className={`${styles.hairline} ${styles.flow}`}
            stroke="url(#nw-wave)"
            strokeWidth="1.25"
            opacity="0.38"
          />
          <path
            d={lower}
            className={styles.hairline}
            stroke="url(#nw-wave)"
            strokeWidth="1.15"
            opacity="0.28"
          />
        </g>

        <g className={styles.drift}>
          <path
            d={core}
            className={styles.aura}
            stroke="url(#nw-wave)"
            strokeWidth="18"
            filter="url(#nw-soft)"
          />
          <path
            d={core}
            className={styles.hairline}
            stroke="url(#nw-wave)"
            strokeWidth="6"
            opacity="0.22"
          />
          <path
            d={core}
            className={styles.core}
            stroke="url(#nw-wave)"
            strokeWidth="2.25"
          />
          <path
            d={core}
            className={styles.spark}
            stroke="#F9FAFB"
            strokeWidth="2.25"
          />
          {particles.map((particle) => (
            <circle
              key={`${particle.cx}-${particle.cy}`}
              className={particle.late ? `${styles.particle} ${styles.particleLate}` : styles.particle}
              cx={particle.cx}
              cy={particle.cy}
              r={particle.r}
              fill={particle.fill}
              style={{ animationDelay: particle.delay }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
