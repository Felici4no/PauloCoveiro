"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Seed } from "./seed/Seed";

const items = [
  { id: "trabalhos", label: "Trabalhos" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

/**
 * Navegação mínima. Desktop: linha no topo; o nome só aparece depois que a
 * capa sai de vista. Mobile: barra fixa no rodapé, ao alcance do polegar.
 * A semente marca a seção ativa.
 */
export function SiteNav({ home = true }: { home?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [pastCover, setPastCover] = useState(!home);

  useEffect(() => {
    if (!home) return;
    const cover = document.getElementById("capa");
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const coverObserver = new IntersectionObserver(
      ([entry]) => setPastCover(!entry.isIntersecting),
      { rootMargin: "-30% 0px 0px 0px" },
    );
    if (cover) coverObserver.observe(cover);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => sectionObserver.observe(s));

    return () => {
      coverObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [home]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-paper md:top-0 md:bottom-auto md:border-t-0 md:border-b md:border-rule md:bg-paper/95 md:backdrop-blur-none"
    >
      <div className="grid-frame h-14 items-center md:h-12">
        <Link
          href="/"
          className={`meta hidden font-medium transition-opacity duration-300 md:col-span-6 md:block ${
            pastCover ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          tabIndex={pastCover ? undefined : -1}
          aria-hidden={pastCover ? undefined : true}
        >
          Paulo Coveiro
        </Link>
        <ul className="col-span-4 flex justify-between md:col-span-6 md:justify-end md:gap-10">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={href(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className="meta flex min-h-11 items-center gap-2 transition-colors hover:text-seed"
                >
                  <Seed
                    className={`transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
