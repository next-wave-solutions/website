import { Fragment, type CSSProperties, type ReactNode } from "react";

type SplitWordsProps = {
  text: string;
  /** Position of the first word in the parent sequence (drives the stagger). */
  start?: number;
};

const order = (index: number) => ({ "--i": index }) as CSSProperties;

/**
 * Splits text into `.word` spans for `.motion-words` / `.motion-read` parents.
 * Words stay real text in the DOM, so reading and copying are unaffected.
 */
export function SplitWords({ text, start = 0 }: SplitWordsProps) {
  return text.split(" ").map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      {index > 0 ? " " : null}
      <span className="word" style={order(start + index)}>
        {word}
      </span>
    </Fragment>
  ));
}

/** Animates arbitrary inline content (e.g. gradient text) as a single word. */
export function WordUnit({ index, children }: { index: number; children: ReactNode }) {
  return (
    <span className="word" style={order(index)}>
      {children}
    </span>
  );
}
