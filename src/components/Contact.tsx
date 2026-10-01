import { contact, person } from "@/content/site";
import { Seed } from "./seed/Seed";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="border-t border-ink">
      <div className="grid-frame gap-y-10 pt-6 pb-20 md:pb-32">
        <p className="meta col-span-4 flex items-center gap-2 md:col-span-3">
          <Seed /> Contato — 03
        </p>
        <div className="col-span-4 md:col-span-12">
          <h2 id="contato-titulo" className="display text-[16.5vw] md:text-[12.5vw]">
            {contact.heading}
          </h2>
        </div>
        <div className="col-span-4 md:col-span-8 md:col-start-4">
          <a
            href={`mailto:${person.email}`}
            className="block break-all text-[7.4vw] font-semibold leading-tight tracking-tight underline decoration-1 underline-offset-[0.15em] transition-colors hover:text-seed md:text-[3.6vw]"
          >
            {person.email}
          </a>
          <p className="mt-6 max-w-md text-lg text-ink-soft">{contact.note}</p>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {person.profiles.map((p) => (
              <li key={p.url}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="meta link-seed inline-flex min-h-11 items-center"
                >
                  {p.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
