"use client";

import { useEffect, useId, useRef, useState } from "react";
import { headerCta, headerLinks } from "./nav";
import styles from "./header.module.css";

/** Mirrors the `max-width: 62rem` breakpoint in header.module.css. */
const DESKTOP_QUERY = "(min-width: 62.0625rem)";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (!open) {
      if (restoreFocus.current) buttonRef.current?.focus();
      restoreFocus.current = false;
      return;
    }

    firstLinkRef.current?.focus();

    const isInside = (node: EventTarget | null) =>
      node instanceof Node &&
      (buttonRef.current?.contains(node) || panelRef.current?.contains(node));

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      event.preventDefault();
      restoreFocus.current = true;
      setOpen(false);
    }

    function onFocusIn(event: FocusEvent) {
      if (!isInside(event.target)) setOpen(false);
    }

    function onPointerDown(event: PointerEvent) {
      if (!isInside(event.target)) setOpen(false);
    }

    const desktop = window.matchMedia(DESKTOP_QUERY);
    function onViewportChange() {
      if (desktop.matches) setOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open]);

  function toggle() {
    if (open) restoreFocus.current = true;
    setOpen((current) => !current);
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={toggle}
      >
        <MenuIcon open={open} />
      </button>
      <div ref={panelRef} id={panelId} className={styles.panel} hidden={!open}>
        <nav aria-label="Menu">
          {headerLinks.map((link, index) => (
            <a
              key={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              className={styles.link}
              href={link.href}
              onClick={() => setOpen(false)}
            >
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
