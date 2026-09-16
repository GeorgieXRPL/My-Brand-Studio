"use client";

import { useEffect, useState } from "react";
import {
  BOOKING_URL,
  CONTACT_PHONE_TEL,
} from "@/content/pricing";

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
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 md:hidden">
      <a
        href={CONTACT_PHONE_TEL}
        className="rounded-full border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm font-semibold text-[var(--fg)] shadow-lg"
      >
        Call
      </a>
      <a
        href={BOOKING_URL}
        className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--bg)] shadow-lg"
      >
        Book free draft
      </a>
    </div>
  );
}
