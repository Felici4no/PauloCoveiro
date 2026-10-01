import type { Category, CategoryId, Work } from "../types";
import { cinema } from "./cinema";
import { teatro } from "./teatro";
import { musica } from "./musica";

/**
 * Áreas do acervo, na ordem em que aparecem no site.
 * Para uma nova área: acrescente o id em `CategoryId` (types.ts), crie o
 * arquivo da área e registre-a aqui.
 */
export const categories: Category[] = [
  {
    id: "cinema",
    label: "Cinema",
    // REVISAR
    lede: "Personagens em filmes de coletivos e produções independentes.",
  },
  {
    id: "teatro",
    label: "Teatro",
    // REVISAR
    lede: "Em cena desde os 15 anos — como ator, pesquisador e professor.",
  },
  {
    id: "musica",
    label: "Música",
    // REVISAR
    lede: "Voz e violão, banda, saraus e palcos de grande produção.",
  },
];

const byCategory: Record<CategoryId, Work[]> = { cinema, teatro, musica };

/** Ordena do mais recente para o mais antigo; obras sem ano vão ao final. */
function byYearDesc(a: Work, b: Work) {
  const ya = parseInt(a.year ?? "", 10) || 0;
  const yb = parseInt(b.year ?? "", 10) || 0;
  return yb - ya;
}

export function getWorks(category: CategoryId): Work[] {
  return [...byCategory[category]].sort(byYearDesc);
}

export function getAllWorks(): Work[] {
  return categories.flatMap((c) => getWorks(c.id));
}

export function getWork(slug: string): Work | undefined {
  return getAllWorks().find((w) => w.slug === slug);
}

export function getCategory(id: CategoryId): Category {
  return categories.find((c) => c.id === id)!;
}

/** Número de duas casas: 1 → "01". */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}
