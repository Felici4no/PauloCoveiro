import type { Video, Work } from "@/content/types";
import { person, seo, siteUrl } from "@/content/site";
import { getCategory } from "@/content/works";

/**
 * Dados estruturados (schema.org, JSON-LD).
 * Regra: só propriedades com dado real. Nada é preenchido para "completar".
 */

export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;

const abs = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export function personSchema() {
  return {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    url: `${siteUrl}/`,
    image: abs(person.portrait.src.src),
    jobTitle: person.jobTitles,
    email: `mailto:${person.email}`,
    birthPlace: { "@type": "Place", name: `${person.city}, ${person.region}` },
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: person.city,
        addressRegion: person.region,
        addressCountry: person.country,
      },
    },
    sameAs: person.profiles.map((p) => p.url),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: `${siteUrl}/`,
    name: person.name,
    inLanguage: "pt-BR",
    about: { "@id": personId },
  };
}

export function homeSchema(videos: Video[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      websiteSchema(),
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: seo.title,
        description: seo.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: abs(person.portrait.src.src),
      },
      ...videos.filter((v) => v.uploadDate && v.description).map(videoSchema),
    ],
  };
}

export function videoSchema(v: Video) {
  return {
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    uploadDate: v.uploadDate,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
    url: `https://www.youtube.com/watch?v=${v.youtubeId}`,
  };
}

export function workSchema(work: Work) {
  const url = `${siteUrl}/trabalhos/${work.slug}`;
  const images = (work.images ?? []).map((i) => abs(i.src.src));
  const paulo = { "@id": personId };
  const kind = work.schema?.type ?? "CreativeWork";
  const year = work.year?.match(/^\d{4}$/) ? work.year : undefined;

  let node: Record<string, unknown>;
  if ((kind === "MusicEvent" || kind === "TheaterEvent") && "event" in work.schema! && work.schema.event) {
    const e = work.schema.event;
    node = {
      "@type": kind,
      name: work.title,
      startDate: e.startDate,
      location: {
        "@type": "Place",
        name: e.locationName,
        ...(e.locality && {
          address: { "@type": "PostalAddress", addressLocality: e.locality },
        }),
      },
      performer: paulo,
    };
  } else if (kind === "Movie") {
    node = {
      "@type": "Movie",
      name: work.title,
      ...(year && { dateCreated: year }),
      actor: paulo,
      ...(work.production?.length && {
        productionCompany: work.production.map((name) => ({
          "@type": "Organization",
          name: name.split(" — ")[0],
        })),
      }),
    };
  } else {
    node = {
      "@type": "CreativeWork",
      name: work.title,
      ...(year && { dateCreated: year }),
      genre: getCategory(work.category).label,
      ...(work.direction?.includes(person.name) ? { creator: paulo } : { contributor: paulo }),
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...node, "@id": `${url}#work`, url, description: work.summary, ...(images.length && { image: images }) },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${work.title} — ${person.name}`,
        inLanguage: "pt-BR",
        isPartOf: { "@id": websiteId },
        about: { "@id": `${url}#work` },
      },
      personSchema(),
    ],
  };
}
