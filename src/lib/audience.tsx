"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Audience } from "@/content/site";

const STORAGE_KEY = "mbs-audience";

type AudienceContextValue = {
  audience: Audience;
  setAudience: (next: Audience) => void;
  ready: boolean;
};

const AudienceContext = createContext<AudienceContextValue | null>(null);

function readQueryAudience(): Audience | null {
  if (typeof window === "undefined") return null;
  const q = new URLSearchParams(window.location.search).get("audience");
  if (q === "business" || q === "creator") return q;
  return null;
}

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>("business");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fromQuery = readQueryAudience();
    const fromStorage = localStorage.getItem(STORAGE_KEY) as Audience | null;
    const initial =
      fromQuery ??
      (fromStorage === "business" || fromStorage === "creator"
        ? fromStorage
        : "business");
    setAudienceState(initial);
    document.documentElement.dataset.audience = initial;
    setReady(true);
  }, []);

  const setAudience = useCallback((next: Audience) => {
    setAudienceState(next);
    document.documentElement.dataset.audience = next;
    localStorage.setItem(STORAGE_KEY, next);
    const url = new URL(window.location.href);
    url.searchParams.set("audience", next);
    window.history.replaceState({}, "", url.toString());
  }, []);

  const value = useMemo(
    () => ({ audience, setAudience, ready }),
    [audience, setAudience, ready],
  );

  return (
    <AudienceContext.Provider value={value}>{children}</AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) throw new Error("useAudience must be used within AudienceProvider");
  return ctx;
}
