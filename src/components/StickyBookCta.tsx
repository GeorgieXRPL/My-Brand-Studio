"use client";

import { useEffect, useState } from "react";

export function StickyBookCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#same-day"
      className="fixed bottom-4 right-4 z-50 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--bg)] shadow-lg md:hidden"
    >
      Book free draft
    </a>
  );
}
