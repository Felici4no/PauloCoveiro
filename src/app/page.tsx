import Image from "next/image";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { Works } from "@/components/Works";
import { site } from "@/content/site";

export default function Home() {
  const { about, contact } = site;

  return (
    <>
      <Header />

      <main className="flex-1">
        <section id="inicio" className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-16 pt-24 md:pb-24">
            <p className="text-sm uppercase tracking-[0.18em] text-muted">
              {site.role}
            </p>
            <h1 className="mt-6 font-serif text-[clamp(3.5rem,13vw,11rem)] leading-[0.9] tracking-tight">
              {site.name}
            </h1>
            <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-lg leading-relaxed text-muted">
                {site.tagline}
              </p>
              <a
                href="#trabalhos"
                className="self-start rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80 sm:self-auto"
              >
                Ver trabalhos ↓
              </a>
            </div>
          </div>
        </section>

        <Section id="sobre" index="01" title="Sobre">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
            <div className="space-y-6 text-xl leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {about.photo && (
              <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                <Image
                  src={about.photo}
                  alt={`Foto de ${site.name}`}
                  fill
                  sizes="(min-width: 1024px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <dl className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {about.highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 font-serif text-3xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="trabalhos" index="02" title="Trabalhos">
          <Works works={site.works} />
        </Section>

        <Section id="contato" index="03" title="Contato">
          <p className="max-w-md text-lg text-muted">{contact.note}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-8 inline-block break-all font-serif text-[clamp(2rem,6vw,4.5rem)] leading-tight underline decoration-line decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-foreground"
          >
            {contact.email}
          </a>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.location}</span>
        </div>
      </footer>
    </>
  );
}
