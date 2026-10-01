"use client";

import Image from "next/image";
import { useState } from "react";
import { Seed } from "./seed/Seed";

/**
 * Miniatura do YouTube que só troca para o player (youtube-nocookie) no clique.
 * Nenhum script do YouTube é carregado antes disso.
 */
export function VideoFacade({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-ink">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 48rem) 50vw, 100vw"
            className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="invert-seed meta absolute bottom-0 left-0 flex items-center gap-2 px-4 py-3 group-hover:bg-seed">
            <Seed tone="inverse" /> Assistir<span className="sr-only">: {title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
