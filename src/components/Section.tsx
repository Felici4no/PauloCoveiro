type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[12rem_1fr] md:py-28">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
          <span className="font-mono text-xs text-muted">{index}</span>
          <h2 className="text-sm font-medium uppercase tracking-[0.18em]">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
