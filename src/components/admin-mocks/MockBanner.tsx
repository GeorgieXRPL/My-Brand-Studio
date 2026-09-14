export function MockBanner() {
  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/75 px-4 py-2.5 text-xs text-white/80 backdrop-blur-md sm:px-6">
      <p>
        <span className="mr-2 rounded-full border border-amber-400/50 px-2 py-0.5 font-semibold uppercase tracking-wider text-amber-300">
          Mock
        </span>
        Demo only. No password. Edits stay on this page and never hit the live site.
      </p>
      <a href="/#admin" className="font-semibold text-amber-300 hover:underline">
        ← Back to My Brand Studio
      </a>
    </div>
  );
}
