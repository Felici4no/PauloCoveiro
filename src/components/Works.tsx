"use client";

import Image from "next/image";
import { useState } from "react";
import type { Work } from "@/content/site";

const ALL = "Todos";

export function Works({ works }: { works: Work[] }) {
  const types = [ALL, ...new Set(works.map((work) => work.type))];
  const [filter, setFilter] = useState(ALL);
  const visible =
    filter === ALL ? works : works.filter((work) => work.type === filter);

  return (
    <div>
      {types.length > 2 && (
        <div
          role="group"
          aria-label="Filtrar por tipo"
          className="mb-10 flex flex-wrap gap-2"
        >
          {types.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              aria-pressed={filter === type}
              className="rounded-full border border-line px-4 py-1.5 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background"
            >
              {type}
            </button>
          ))}
        </div>
      )}

      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {visible.map((work) => (
          <li key={work.slug}>
            <WorkCard work={work} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkCard({ work }: { work: Work }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-surface">
        {playing && work.embed ? (
          <iframe
            src={work.embed}
            title={work.title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ) : work.cover ? (
          <Image
            src={work.cover}
            alt={`Capa de ${work.title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-6">
            <span className="font-serif text-5xl italic text-muted/50">
              {work.type}
            </span>
          </div>
        )}

        {work.embed && !playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute bottom-4 right-4 rounded-full bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-foreground hover:text-background"
          >
            ▶ Ouvir / assistir
          </button>
        )}
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 text-xs text-muted">
        <span className="uppercase tracking-[0.14em]">{work.type}</span>
        <span className="font-mono">{work.year}</span>
      </div>
      <h3 className="mt-2 font-serif text-3xl leading-tight">{work.title}</h3>
      <p className="mt-3 max-w-prose leading-relaxed text-muted">
        {work.description}
      </p>
      {work.credits && work.credits.length > 0 && (
        <ul className="mt-3 space-y-0.5 text-sm text-muted">
          {work.credits.map((credit) => (
            <li key={credit}>{credit}</li>
          ))}
        </ul>
      )}
      {work.url && (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border-b border-foreground pb-0.5 text-sm"
        >
          Abrir ↗
        </a>
      )}
    </article>
  );
}
