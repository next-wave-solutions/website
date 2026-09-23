import Image from "next/image";
import { ComingSoonWave } from "./ComingSoonWave";
import styles from "./coming-soon.module.css";

export function ComingSoon() {
  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.orbPurple} />
        <span className={styles.orbCyan} />
        <span className={styles.orbGreen} />
        <span className={styles.grid} />
        <span className={styles.noise} />
      </div>
      <ComingSoonWave />

      <div className={styles.center}>
        <div className={styles.content}>
          <Image
            src="/brand/nextwave-mark.png"
            alt="Next Wave Solutions"
            width={571}
            height={313}
            priority
            className={`${styles.mark} ${styles.enter}`}
            style={{ animationDelay: "40ms" }}
          />

          <h1
            className={`${styles.headline} ${styles.enter}`}
            style={{ animationDelay: "150ms" }}
          >
            <span className={styles.line}>
              Estamos
              <br className={styles.narrowBreak} /> preparando
            </span>
            <span className={styles.line}>
              a <span className={styles.gradient}>próxima onda.</span>
            </span>
          </h1>

          <div
            className={`${styles.copy} ${styles.enter}`}
            style={{ animationDelay: "280ms" }}
          >
            <p>Algo novo está tomando forma.</p>
            <p>Em breve, uma nova experiência da Next Wave Solutions.</p>
          </div>

          <p
            className={`${styles.status} ${styles.enter}`}
            style={{ animationDelay: "400ms" }}
          >
            <span className={styles.dot} aria-hidden="true" />
            Em desenvolvimento
          </p>
        </div>
      </div>

      <p
        className={`${styles.credit} ${styles.enter}`}
        style={{ animationDelay: "500ms" }}
      >
        Next Wave Solutions · 2026
      </p>
    </main>
  );
}
