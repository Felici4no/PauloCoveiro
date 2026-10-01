import Image from "next/image";
import Link from "next/link";
import type { Work, WorkImage } from "@/content/types";
import { SeedNumber } from "../seed/Seed";

/** Número da obra + ano, em metadado. */
export function WorkMeta({ work, index }: { work: Work; index: string }) {
  return (
    <div className="flex items-center gap-3">
      <SeedNumber value={index} />
      {work.year && <span className="meta">{work.year}</span>}
    </div>
  );
}

/** Título da obra. Sempre um link para a página própria. */
export function WorkTitle({
  work,
  className = "",
}: {
  work: Work;
  className?: string;
}) {
  return (
    <h4 className={`display text-balance ${className}`}>
      <Link
        href={`/trabalhos/${work.slug}`}
        className="decoration-seed decoration-[0.06em] underline-offset-[0.08em] hover:underline focus-visible:underline"
      >
        {work.title}
      </Link>
    </h4>
  );
}

export function WorkSummary({ work, className = "" }: { work: Work; className?: string }) {
  return <p className={`max-w-prose text-lg leading-snug ${className}`}>{work.summary}</p>;
}

export function MoreLink({ work }: { work: Work }) {
  return (
    <Link href={`/trabalhos/${work.slug}`} className="meta link-seed inline-block">
      Ficha completa<span className="sr-only">: {work.title}</span> →
    </Link>
  );
}

/** Imagem editorial: largura definida pelo contêiner, proporção da própria imagem. */
export function Figure({
  image,
  sizes,
  className = "",
  imgClassName = "",
  fill = false,
}: {
  image: WorkImage;
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** Preenche o contêiner (object-cover) em vez de manter a proporção. */
  fill?: boolean;
}) {
  return (
    <figure className={`reveal-clip relative self-start bg-paper-deep ${className}`}>
      {fill ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} className={`object-cover ${imgClassName}`} />
      ) : (
        <Image src={image.src} alt={image.alt} sizes={sizes} className={`h-auto w-full ${imgClassName}`} />
      )}
      {image.caption && <figcaption className="meta mt-2 text-ink-soft">{image.caption}</figcaption>}
    </figure>
  );
}
