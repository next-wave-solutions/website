import { GradientText } from "@/components/ui/GradientText";
import styles from "./hero.module.css";

export function Hero() {
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
            Falar com o time
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
