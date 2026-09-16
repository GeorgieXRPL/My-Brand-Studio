"use client";

import { useEffect } from "react";

const STORAGE_KEY = "mbs-galaxy-intro";

function finishIntro() {
  const root = document.documentElement;
  if (root.dataset.galaxy !== "pending") return;
  root.dataset.galaxy = "leaving";
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // private mode
  }
  window.setTimeout(() => {
    delete root.dataset.galaxy;
  }, 850);
}

export function GalaxyIntro() {
  useEffect(() => {
    if (document.documentElement.dataset.galaxy !== "pending") return;

    const timer = window.setTimeout(finishIntro, 1200);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") finishIntro();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="galaxy-intro" role="dialog" aria-label="Welcome to My Brand Studio">
      <div className="galaxy-veil" aria-hidden />
      <div className="galaxy-stars galaxy-stars-far" aria-hidden />
      <div className="galaxy-stars galaxy-stars-near" aria-hidden />
      <div className="galaxy-dust" aria-hidden />
      <div className="galaxy-nebula" aria-hidden />
      <div className="galaxy-core" aria-hidden />
      <p className="galaxy-mark">My Brand Studio</p>
      <button type="button" className="galaxy-skip" onClick={finishIntro}>
        Skip
      </button>
    </div>
  );
}
