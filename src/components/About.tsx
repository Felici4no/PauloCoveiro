import Image from "next/image";
import Link from "next/link";
import { about, person } from "@/content/site";
import { timeline } from "@/content/timeline";
import { Seed } from "./seed/Seed";

/** Sobre: apresentação editorial curta + cronologia. */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="border-t border-ink">
      <div className="grid-frame gap-y-10 pt-6 pb-16 md:pb-28">
        <h2 id="sobre-titulo" className="meta col-span-4 flex items-center gap-2 md:col-span-3">
          <Seed /> Sobre — 02
        </h2>

        <div className="col-span-4 space-y-6 text-[1.6rem] leading-[1.18] tracking-tight md:col-span-7 md:col-start-4 md:text-[2.6rem]">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {person.signature && (
            <Image src={person.signature} alt="Assinatura de Paulo Coveiro" className="h-16 w-auto" />
          )}
        </div>

        {/* A única máscara oval do site: a forma da semente sobre o retrato. */}
        <figure className="col-span-3 col-start-2 md:col-span-3 md:col-start-10 md:row-start-2">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            sizes="(min-width: 48rem) 22vw, 66vw"
            className="reveal-clip h-auto w-full [clip-path:ellipse(48%_50%_at_50%_50%)]"
          />
        </figure>
      </div>

      <div className="grid-frame border-t border-rule gap-y-6 pt-6 pb-16 md:pb-28">
        <h3 className="meta col-span-4 md:col-span-3">Cronologia</h3>
        <ol className="col-span-4 md:col-span-9">
          {timeline.map((entry) => (
            <li
              key={entry.year + entry.text}
              className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-3 md:grid-cols-[9rem_1fr]"
            >
              <span className="meta pt-1 text-ink-soft">{entry.year}</span>
              {entry.workSlug ? (
                <Link href={`/trabalhos/${entry.workSlug}`} className="text-lg leading-snug hover:text-seed">
                  {entry.text}
                </Link>
              ) : (
                <span className="text-lg leading-snug">{entry.text}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
