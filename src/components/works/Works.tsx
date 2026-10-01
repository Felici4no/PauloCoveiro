import Link from "next/link";
import type { Category, Work } from "@/content/types";
import { categories, getWorks, pad } from "@/content/works";
import { Seed } from "../seed/Seed";
import { Videos } from "../Videos";
import { layoutCycle, layouts } from "./layouts";

/** Seção TRABALHOS: índice das áreas, depois cada área em sequência. */
export function Works() {
  return (
    <section id="trabalhos" aria-labelledby="trabalhos-titulo">
      <WorksIndex />
      {categories.map((category, i) => (
        <CategorySection key={category.id} category={category} number={pad(i + 1)} />
      ))}
    </section>
  );
}

function WorksIndex() {
  return (
    <div className="border-t border-ink">
      <div className="grid-frame gap-y-8 pt-6 pb-16 md:pb-28">
        <h2
          id="trabalhos-titulo"
          className="meta col-span-4 flex items-center gap-2 md:col-span-3"
        >
          <Seed /> Trabalhos — 01
        </h2>
        <ol className="col-span-4 md:col-span-9">
          {categories.map((c, i) => {
            const count = getWorks(c.id).length;
            return (
              <li key={c.id} className="border-b border-ink first:border-t md:first:border-t-0">
                <a
                  href={`#${c.id}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-3 transition-colors hover:text-seed md:grid-cols-[4rem_1fr_auto] md:py-4"
                >
                  <span className="meta">{pad(i + 1)}</span>
                  <span className="display text-[13vw] md:text-[6.5vw]">{c.label}</span>
                  <span className="meta text-right text-ink-soft group-hover:text-seed">
                    {pad(count)} {count === 1 ? "trabalho" : "trabalhos"}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function CategorySection({ category, number }: { category: Category; number: string }) {
  const works = getWorks(category.id);
  const featured = works.filter((w) => w.featured);
  const list = works.filter((w) => !w.featured);
  const headingId = `${category.id}-titulo`;

  return (
    <section id={category.id} aria-labelledby={headingId} className="scroll-mt-0">
      {/* Faixa da área: fica presa no topo enquanto a área está na tela. */}
      <div className="sticky top-0 z-20 border-y border-ink bg-paper md:top-12">
        <div className="grid-frame h-10 items-center">
          <h3 id={headingId} className="meta col-span-3 flex items-center gap-2 md:col-span-6">
            <Seed rotate={-12} /> {number} — {category.label}
          </h3>
          <p className="meta col-span-1 text-right text-ink-soft md:col-span-6">
            {pad(works.length)}
          </p>
        </div>
      </div>

      {category.lede && (
        <div className="grid-frame py-10 md:py-16">
          <p className="col-span-4 text-2xl leading-tight md:col-span-6 md:col-start-4 md:text-4xl">
            {category.lede}
          </p>
        </div>
      )}

      {featured.map((work, i) => {
        const Layout = layouts[work.layout ?? layoutCycle[i % layoutCycle.length]];
        return <Layout key={work.slug} work={work} index={pad(works.indexOf(work) + 1)} />;
      })}

      {list.length > 0 && <WorkList works={list} all={works} />}
      {category.id === "musica" && <Videos />}
    </section>
  );
}

/** Lista para o restante do acervo — escala para dezenas de obras. */
function WorkList({ works, all }: { works: Work[]; all: Work[] }) {
  return (
    <div className="border-t border-ink py-10 md:py-16">
      <ol className="frame">
        {works.map((work) => (
          <li key={work.slug} className="border-b border-rule">
            <Link
              href={`/trabalhos/${work.slug}`}
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[4rem_5fr_4fr_2fr] md:items-baseline md:py-5"
            >
              <span className="meta pt-1 text-ink-soft">{pad(all.indexOf(work) + 1)}</span>
              <span className="text-2xl font-semibold uppercase leading-tight tracking-tight group-hover:text-seed md:text-3xl">
                {work.title}
              </span>
              <span className="col-start-2 text-ink-soft md:col-start-auto">{work.summary}</span>
              <span className="meta col-start-2 text-ink-soft md:col-start-auto md:text-right">
                {[work.roles.join(", "), work.year ?? work.duration].filter(Boolean).join(" · ")}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
