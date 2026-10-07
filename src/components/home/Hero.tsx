import { preload } from "react-dom";
import { GradientText } from "@/components/ui/GradientText";
import styles from "./hero.module.css";

/*
 * The plate is a CSS background (the LCP element), so the browser only finds it after CSS.
 * These URLs must stay identical to the ones in hero.module.css.
 * Theme is approximated by the system scheme; a manual override costs one unused preload.
 */
const PORTRAIT_PLATE = [
  "(max-width: 48rem)",
  "(min-width: 48.0625rem) and (max-width: 75rem) and (max-aspect-ratio: 1/1)",
];
const LANDSCAPE_PLATE = [
  "(min-width: 48.0625rem) and (min-aspect-ratio: 1001/1000)",
  "(min-width: 75.0625rem)",
];

const withScheme = (queries: string[], scheme: "light" | "dark") =>
  queries.map((query) => `${query} and (prefers-color-scheme: ${scheme})`).join(", ");

const PLATE_PRELOADS = [
  {
    href: "/_next/image?url=%2Fhero%2Fhero-plate-light-mobile.png&w=1200&q=75",
    media: withScheme(PORTRAIT_PLATE, "light"),
  },
  {
    href: "/_next/image?url=%2Fhero%2Fhero-plate-dark-mobile.png&w=1200&q=75",
    media: withScheme(PORTRAIT_PLATE, "dark"),
  },
  {
    href: "/_next/image?url=%2Fhero%2Fhero-plate-light-desktop.png&w=1920&q=75",
    media: withScheme(LANDSCAPE_PLATE, "light"),
  },
  {
    href: "/_next/image?url=%2Fhero%2Fhero-plate-dark-desktop.png&w=1920&q=75",
    media: withScheme(LANDSCAPE_PLATE, "dark"),
  },
];

export function Hero() {
  for (const plate of PLATE_PRELOADS) {
    preload(plate.href, { as: "image", fetchPriority: "high", media: plate.media });
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.plate} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.copy}>
        <p className={`${styles.eyebrow} motion-reveal`}>
          <span>Estratégia • Design • Tecnologia</span>
        </p>
        <h1 id="hero-heading" className={styles.headline}>
          <span className={`${styles.line} motion-reveal ${styles.delay1}`}>Cada ideia tem</span>
          <GradientText className={`${styles.flow} motion-reveal ${styles.delay2}`}>
            seu próprio fluxo.
          </GradientText>
        </h1>
        <p className={`${styles.subcopy} motion-reveal ${styles.delay3}`}>
          Transformamos ideias em produtos digitais que evoluem com o seu negócio.
        </p>
        <div className={`${styles.actions} motion-reveal ${styles.delay4}`}>
          <a className={styles.primary} href="#contato">
            Falar com a Next Wave
            <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.secondary} href="#projetos">
            Ver nossos projetos
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
