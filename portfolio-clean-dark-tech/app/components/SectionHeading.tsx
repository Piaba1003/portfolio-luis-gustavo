import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 flex items-start gap-4">
      <span className="font-mono text-sm text-primary/70 pt-2 select-none">
        {index}
      </span>
      <div>
        <span className="font-mono text-xs text-text-secondary tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
        <h2 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tightish mt-2 text-text-primary">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}
