import type { Work, WorkLayout } from "@/content/types";
import { Ficha } from "./Ficha";
import { Figure, MoreLink, WorkMeta, WorkSummary, WorkTitle } from "./parts";

type LayoutProps = { work: Work; index: string };

/**
 * Pequeno sistema editorial: seis composições sobre o mesmo grid de 12
 * colunas. A obra escolhe a sua em `layout`; sem escolha, alterna-se.
 */
export const layouts: Record<WorkLayout, (p: LayoutProps) => React.ReactNode> = {
  feature: Feature,
  monumental: Monumental,
  vertical: Vertical,
  mosaic: Mosaic,
  title: TitleLayout,
  sequence: Sequence,
};

export const layoutCycle: WorkLayout[] = ["monumental", "vertical", "title", "mosaic", "sequence"];

/** Obra ocupando praticamente toda a tela; ficha numa faixa preta. */
function Feature({ work, index }: LayoutProps) {
  const [main, ...rest] = work.images ?? [];
  return (
    <article className="border-t border-ink">
      {main && (
        <Figure
          image={main}
          sizes="100vw"
          fill
          className="h-[78svh] min-h-[22rem] w-full md:h-[88svh]"
        />
      )}
      <div className="bg-ink text-paper">
        <div className="grid-frame gap-y-8 py-10 md:py-14">
          <div className="col-span-4 md:col-span-7">
            <WorkMeta work={work} index={index} />
            <WorkTitle work={work} className="mt-5 text-[17vw] md:text-[9vw]" />
          </div>
          <div className="col-span-4 space-y-6 md:col-span-4 md:col-start-9 md:pt-12">
            <WorkSummary work={work} />
            <Ficha work={work} className="[&_dt]:text-paper/60" />
            <MoreLink work={work} />
          </div>
          {rest.length > 0 && (
            <div className="col-span-4 grid grid-cols-2 gap-gutter md:col-span-12 md:grid-cols-6">
              {rest.map((img) => (
                <Figure key={img.alt} image={img} sizes="(min-width: 48rem) 33vw, 50vw" className={`bg-transparent md:col-span-2 ${rest.length === 1 ? "col-span-2" : ""}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/** Imagem horizontal sangrada; título grande e ficha abaixo. */
function Monumental({ work, index }: LayoutProps) {
  const [main, second] = work.images ?? [];
  return (
    <article className="border-t border-ink pb-16 md:pb-24">
      {main && <Figure image={main} sizes="100vw" className="w-full" />}
      <div className="grid-frame mt-6 gap-y-8 md:mt-8">
        <div className="col-span-4 md:col-span-7">
          <WorkMeta work={work} index={index} />
          <WorkTitle work={work} className="mt-4 text-[15vw] md:text-[7.5vw]" />
        </div>
        <div className="col-span-4 space-y-6 md:col-span-4 md:col-start-9">
          <WorkSummary work={work} />
          <Ficha work={work} />
          <MoreLink work={work} />
        </div>
        {second && (
          <Figure
            image={second}
            sizes="(min-width: 48rem) 25vw, 66vw"
            className="col-span-3 md:col-span-3 md:col-start-2 md:-mt-8"
          />
        )}
      </div>
    </article>
  );
}

/** Imagem vertical + texto, em colunas assimétricas. */
function Vertical({ work, index }: LayoutProps) {
  const [main, second] = work.images ?? [];
  return (
    <article className="grid-frame gap-y-8 border-t border-ink py-12 md:py-20">
      {main && (
        <Figure
          image={main}
          sizes="(min-width: 48rem) 33vw, 100vw"
          className="col-span-4 md:col-span-4 md:row-span-2"
        />
      )}
      <div className="col-span-4 md:col-span-6 md:col-start-6">
        <WorkMeta work={work} index={index} />
        <WorkTitle work={work} className="mt-4 text-[14vw] md:text-[6vw]" />
      </div>
      <div className="col-span-4 grid gap-8 md:col-span-7 md:col-start-6 md:grid-cols-7 md:gap-gutter">
        <div className="space-y-6 md:col-span-4">
          <WorkSummary work={work} />
          <Ficha work={work} />
          <MoreLink work={work} />
        </div>
        {second && (
          <Figure
            image={second}
            sizes="(min-width: 48rem) 20vw, 66vw"
            className="w-2/3 md:col-span-3 md:w-full md:self-end"
          />
        )}
      </div>
    </article>
  );
}

/** Mosaico: imagens em alturas desencontradas, texto na coluna estreita. */
function Mosaic({ work, index }: LayoutProps) {
  const images = work.images ?? [];
  const spans = [
    "col-span-2 md:col-span-3 md:col-start-1",
    "col-span-2 mt-12 md:col-span-3 md:mt-24",
    "col-span-4 md:col-span-4 md:-mt-12",
    "col-span-2 md:col-span-2",
  ];
  return (
    <article className="grid-frame gap-y-8 border-t border-ink py-12 md:py-20">
      <div className="col-span-4 md:col-span-5">
        <WorkMeta work={work} index={index} />
        <WorkTitle work={work} className="mt-4 text-[14vw] md:text-[6vw]" />
        <div className="mt-8 space-y-6">
          <WorkSummary work={work} />
          <Ficha work={work} />
          <MoreLink work={work} />
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-gutter md:col-span-6 md:col-start-7 md:grid-cols-6">
        {images.map((img, i) => (
          <Figure
            key={img.alt}
            image={img}
            sizes="(min-width: 48rem) 25vw, 50vw"
            className={spans[i % spans.length]}
          />
        ))}
      </div>
    </article>
  );
}

/** Título enorme + imagem pequena. */
function TitleLayout({ work, index }: LayoutProps) {
  const [main] = work.images ?? [];
  return (
    <article className="grid-frame gap-y-8 border-t border-ink py-12 md:py-20">
      <div className="col-span-4 md:col-span-12">
        <WorkMeta work={work} index={index} />
        <WorkTitle work={work} className="mt-4 text-[22vw] md:text-[15vw]" />
      </div>
      <div className="col-span-4 space-y-6 md:col-span-4 md:col-start-2">
        <WorkSummary work={work} />
        <Ficha work={work} />
        <MoreLink work={work} />
      </div>
      {main && (
        <Figure
          image={main}
          sizes="(min-width: 48rem) 33vw, 100vw"
          className="col-span-4 md:col-span-4 md:col-start-8 md:-mt-[6vw]"
        />
      )}
    </article>
  );
}

/** Sequência de quadros, como fotogramas. Rola na horizontal no mobile. */
function Sequence({ work, index }: LayoutProps) {
  const images = work.images ?? [];
  return (
    <article className="border-t border-ink py-12 md:py-20">
      <div className="grid-frame gap-y-8">
        <div className="col-span-4 md:col-span-6">
          <WorkMeta work={work} index={index} />
          <WorkTitle work={work} className="mt-4 text-[13vw] md:text-[5.5vw]" />
        </div>
        <div className="col-span-4 space-y-6 md:col-span-4 md:col-start-9 md:pt-10">
          <WorkSummary work={work} />
          <Ficha work={work} />
          <MoreLink work={work} />
        </div>
      </div>
      <ol className="mt-10 flex snap-x snap-mandatory gap-gutter overflow-x-auto px-margin pb-2 md:grid md:grid-cols-12 md:overflow-visible">
        {images.map((img, i) => (
          <li
            key={img.alt}
            className="w-[82%] shrink-0 snap-start md:col-span-6 md:w-auto"
          >
            <Figure image={img} sizes="(min-width: 48rem) 50vw, 82vw" className="aspect-video" fill />
            <p className="meta mt-2 text-ink-soft">Quadro {String(i + 1).padStart(2, "0")}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
