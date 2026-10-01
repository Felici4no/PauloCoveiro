import Image from "next/image";
import { hero, person } from "@/content/site";
import { Seed } from "./seed/Seed";

/**
 * Capa. O nome é a peça tipográfica principal; a fotografia ocupa a coluna
 * direita e é atravessada por COVEIRO. O vermelho aparece só na semente.
 */
export function Hero() {
  return (
    <header id="capa" className="relative overflow-hidden pt-4 md:pt-16">
      <div className="grid-frame meta items-start gap-y-2 text-ink-soft">
        <p className="col-span-2 md:col-span-3">
          <span className="text-ink">Nº 001</span> — Arquivo
        </p>
        <p className="col-span-2 text-right md:col-span-3 md:col-start-10">
          {person.city}, {person.region}
        </p>
      </div>

      <div className="grid-frame relative mt-10 md:mt-6">
        <h1 className="display relative z-10 col-span-4 text-[25.5vw] md:col-span-12 md:col-start-1 md:row-start-1 md:text-[20vw]">
          <span className="block overflow-hidden pb-[0.04em]">
            <span className="reveal-line block">Paulo</span>
          </span>
          <span className="block overflow-hidden pb-[0.04em] md:-mt-[0.04em] md:pl-[8vw]">
            <span className="reveal-line block" style={{ ["--delay" as string]: "90ms" }}>
              Coveiro
            </span>
          </span>
        </h1>

        {/* Fotografia: divide a mesma linha do grid com o nome e fica sob ele. */}
        <div className="col-span-3 col-start-2 -mt-[9vw] md:col-span-3 md:col-start-10 md:row-start-1 md:mt-[1vw] md:self-start">
          <Image
            src={person.portrait.src}
            alt={person.portrait.alt}
            sizes="(min-width: 48rem) 25vw, 75vw"
            preload
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="grid-frame mt-8 gap-y-6 border-t border-ink pt-4 pb-24 md:mt-10 md:pb-10">
        <ul className="col-span-4 flex flex-wrap gap-x-5 gap-y-1 text-lg font-semibold uppercase tracking-tight md:col-span-5 md:text-2xl">
          {person.disciplines.map((d, i) => (
            <li key={d} className="flex items-center gap-2">
              {i === 0 && <Seed />}
              {d}
            </li>
          ))}
        </ul>
        <p className="col-span-4 max-w-md text-lg leading-snug md:col-span-4 md:col-start-9 md:text-xl">
          {hero.line}
        </p>
      </div>
    </header>
  );
}
