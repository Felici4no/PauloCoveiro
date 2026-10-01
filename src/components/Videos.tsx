import { videos, videosIntro, youtubeChannel } from "@/content/videos";
import { VideoFacade } from "./VideoFacade";

export function Videos() {
  return (
    <div className="border-t border-ink py-12 md:py-20">
      <div className="grid-frame gap-y-8">
        <div className="col-span-4 md:col-span-4">
          <h4 className="display text-[13vw] md:text-[5vw]">Vídeos</h4>
          <p className="mt-4 max-w-xs text-lg leading-snug">{videosIntro}</p>
          <a
            href={youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="meta link-seed mt-6 inline-block"
          >
            Canal no YouTube ↗
          </a>
        </div>
        {videos.length > 0 && (
          <ul className="col-span-4 grid gap-x-gutter gap-y-10 md:col-span-8 md:grid-cols-2">
            {videos.map((v) => (
              <li key={v.youtubeId}>
                <VideoFacade youtubeId={v.youtubeId} title={v.title} />
                <p className="mt-3 text-lg font-semibold uppercase leading-tight tracking-tight">
                  {v.title}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
