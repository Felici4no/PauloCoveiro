import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { VideoFacade } from "@/components/VideoFacade";
import { Ficha } from "@/components/works/Ficha";
import { Seed } from "@/components/seed/Seed";
import { person } from "@/content/site";
import { getAllWorks, getCategory, getWork, getWorks, pad } from "@/content/works";
import { workSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(props: PageProps<"/trabalhos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) return {};
  const category = getCategory(work.category);
  const title = `${work.title}${work.year ? ` (${work.year.replace(/–$/, "")})` : ""} — ${category.label}`;
  const image = work.images?.[0];
  return {
    title,
    description: work.summary,
    alternates: { canonical: `/trabalhos/${work.slug}` },
    openGraph: {
      type: "article",
      title: `${title} — ${person.name}`,
      description: work.summary,
      url: `/trabalhos/${work.slug}`,
      ...(image && { images: [{ url: image.src.src, width: image.src.width, height: image.src.height, alt: image.alt }] }),
    },
    twitter: { card: "summary_large_image", title: `${title} — ${person.name}`, description: work.summary },
  };
}

export default async function WorkPage(props: PageProps<"/trabalhos/[slug]">) {
  const { slug } = await props.params;
  const work = getWork(slug);
  if (!work) notFound();

  const category = getCategory(work.category);
  const siblings = getWorks(work.category);
  const index = siblings.indexOf(work);
  const next = siblings[(index + 1) % siblings.length];
  const [main, ...rest] = work.images ?? [];

  return (
    <>
      <JsonLd data={workSchema(work)} />
      <SiteNav home={false} />
      <main id="conteudo" className="pt-6 md:pt-20">
        <nav aria-label="Trilha" className="grid-frame meta text-ink-soft">
          <ol className="col-span-4 flex flex-wrap gap-2 md:col-span-12">
            <li>
              <Link href="/" className="link-seed">{person.name}</Link> /
            </li>
            <li>
              <Link href={`/#${category.id}`} className="link-seed">{category.label}</Link> /
            </li>
            <li aria-current="page" className="text-ink">{work.title}</li>
          </ol>
        </nav>

        <article>
          <header className="grid-frame mt-10 gap-y-6 md:mt-14">
            <p className="meta col-span-4 flex items-center gap-2 md:col-span-12">
              <Seed /> {category.label} — {pad(index + 1)}
              {work.year && <span className="text-ink-soft">· {work.year}</span>}
            </p>
            <h1 className="display col-span-4 text-[17vw] text-balance md:col-span-12 md:text-[11vw]">
              {work.title}
            </h1>
          </header>

          {main && (
            <div className="mt-10 md:mt-14">
              <Image
                src={main.src}
                alt={main.alt}
                sizes="100vw"
                preload
                className="h-auto max-h-[88svh] w-full bg-paper-deep object-cover"
              />
            </div>
          )}

          <div className="grid-frame gap-y-10 border-t border-ink py-10 md:py-16">
            <div className="col-span-4 md:col-span-4">
              <h2 className="meta mb-4">Ficha</h2>
              <Ficha work={work} full />
            </div>
            <div className="col-span-4 space-y-5 text-xl leading-snug md:col-span-6 md:col-start-6 md:text-2xl">
              <p className="font-semibold">{work.summary}</p>
              {work.description?.map((p) => <p key={p}>{p}</p>)}
              {work.links && work.links.length > 0 && (
                <ul className="meta flex flex-wrap gap-x-6 gap-y-2 pt-4">
                  {work.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url} target="_blank" rel="noopener noreferrer" className="link-seed">
                        {l.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {work.youtubeId && (
            <div className="grid-frame pb-16">
              <div className="col-span-4 md:col-span-10 md:col-start-2">
                <VideoFacade youtubeId={work.youtubeId} title={work.title} />
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <ul className="grid-frame gap-y-gutter pb-16 md:pb-24">
              {rest.map((img, i) => (
                <li key={img.alt} className={`col-span-4 ${i % 2 ? "md:col-span-4 md:col-start-8 md:mt-24" : "md:col-span-6"}`}>
                  <Image src={img.src} alt={img.alt} sizes="(min-width: 48rem) 50vw, 100vw" className="h-auto w-full" />
                </li>
              ))}
            </ul>
          )}
        </article>

        {next && next.slug !== work.slug && (
          <Link
            href={`/trabalhos/${next.slug}`}
            className="group block border-t border-ink bg-ink text-paper transition-colors hover:bg-seed"
          >
            <span className="grid-frame gap-y-3 py-10 md:py-16">
              <span className="meta col-span-4 md:col-span-3">Próximo — {category.label}</span>
              <span className="display col-span-4 text-[13vw] md:col-span-9 md:text-[7vw]">{next.title} →</span>
            </span>
          </Link>
        )}
      </main>
      <Footer />
    </>
  );
}
