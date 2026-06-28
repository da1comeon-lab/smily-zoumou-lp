type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-sage">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold leading-tight text-walnut md:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-sm leading-7 text-cocoa md:text-base">{lead}</p> : null}
    </div>
  );
}
