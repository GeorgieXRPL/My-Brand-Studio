import { lookImagePath, type LookStill } from "@/content/look-stills";

export function LookCardFigure({ still }: { still: LookStill }) {
  return (
    <figure className="look-figure">
      <img
        src={lookImagePath(still.slug)}
        alt={still.alt}
        width={1200}
        height={750}
      />
      {still.caption ? <figcaption>{still.caption}</figcaption> : null}
    </figure>
  );
}
