type TocSection = {
  heading: string;
  id: string;
};

type Props = {
  sections: TocSection[];
};

export default function TableOfContents({ sections }: Props) {
  if (sections.length <= 2) return null;

  return (
    <nav className="mx-auto max-w-4xl px-6 pt-12 md:px-12" aria-label="Sommaire">
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-400 mb-4">
          Sommaire
        </p>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-stone-950 hover:underline"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}