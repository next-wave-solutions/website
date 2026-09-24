"use client";

import { useEffect, useId, useState } from "react";
import { headerCta, headerLinks } from "./nav";
import styles from "./header.module.css";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <MenuIcon open={open} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!open}>
        <nav aria-label="Principal">
          {headerLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className={styles.panelCta} href={headerCta.href} onClick={() => setOpen(false)}>
          {headerCta.label}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}
