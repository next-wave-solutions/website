import { SplitWords, WordUnit } from "@/components/motion/SplitWords";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientText } from "@/components/ui/GradientText";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaRotator } from "./CtaRotator";
import { CtaWavesField } from "./CtaWavesField";
import styles from "./final-cta.module.css";

function getWhatsAppHref(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (!raw) return undefined;

  const digits = raw.replace(/\D/g, "");
  if (!digits) return undefined;

  return `https://wa.me/${digits}`;
}

export function FinalCta() {
  const whatsappHref = getWhatsAppHref();

  return (
    <Section id="contato" className={styles.cta} aria-labelledby="cta-heading" data-spotlight>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />
      <CtaWavesField className={styles.wavesField} wavesClassName={styles.waves} />

      <Container className={styles.inner}>
        <header className={styles.intro}>
          <SectionLabel className={`motion-reveal ${styles.label}`}>Próximo passo</SectionLabel>
          <h2 id="cta-heading" className={`${styles.headline} motion-words`}>
            <SplitWords text="Toda" />{" "}
            <WordUnit index={1}>
              <GradientText>próxima onda</GradientText>
            </WordUnit>
            <br />
            <SplitWords text="começa com uma ideia." start={2} />
          </h2>
        </header>

        <div className={`${styles.waveStage} motion-reveal ${styles.delay2}`} aria-hidden="true">
          <svg
            className={styles.wave}
            viewBox="0 0 1200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="cta-wave-gradient" x1="0" y1="90" x2="1200" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
                <stop offset="35%" stopColor="var(--primary)" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#06b6d4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path
              className={`${styles.waveStroke} ${styles.wavePrimary}`}
              d="M-40 110 C 140 40, 280 40, 420 95 S 700 170, 860 105 S 1080 30, 1240 85"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
              stroke="url(#cta-wave-gradient)"
            />
            <path
              className={`${styles.waveStroke} ${styles.waveSecondary}`}
              d="M-40 130 C 160 70, 300 65, 440 115 S 720 175, 880 125 S 1100 55, 1240 105"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className={`${styles.waveStroke} ${styles.waveTertiary}`}
              d="M-40 145 C 180 95, 320 90, 460 130 S 740 180, 900 140 S 1120 80, 1240 120"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <div className={styles.closing}>
          <div className={styles.closingCopy}>
            <div className={`motion-reveal ${styles.delay2}`}>
              <CtaRotator />
            </div>
            <p className={`${styles.lead} motion-reveal ${styles.delay3}`}>
              Conte o que você tem em mente. Ajudamos a transformar a ideia em um plano claro para
              tirar do papel.
            </p>
          </div>

          <div className={`${styles.actions} motion-reveal ${styles.delay4}`}>
            {whatsappHref ? (
              <span className={styles.halo} data-magnetic>
                <Button
                  href={whatsappHref}
                  variant="primary"
                  className={styles.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com a Next Wave
                </Button>
              </span>
            ) : (
              <>
                <span className={styles.halo}>
                  <Button
                    type="button"
                    variant="primary"
                    className={styles.primary}
                    aria-disabled="true"
                    aria-describedby="cta-contact-pending"
                  >
                    Falar com a Next Wave
                  </Button>
                </span>
                <span id="cta-contact-pending" className="sr-only">
                  Contato por WhatsApp será configurado em breve.
                </span>
              </>
            )}

            <Button href="#solucoes" variant="secondary" className={styles.secondary}>
              Ver nossos serviços
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
