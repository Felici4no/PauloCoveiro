import type { Work } from "@/content/types";

/** Linhas da ficha técnica, no formato de créditos: "função — nome". */
export function fichaRows(work: Work, { full = false } = {}) {
  const rows: { role: string; value: string }[] = [];
  if (work.character) rows.push({ role: "personagem", value: work.character });
  if (work.roles.length) rows.push({ role: "função", value: work.roles.join(", ") });
  if (work.direction?.length) rows.push({ role: "direção", value: work.direction.join(", ") });
  if (work.production?.length) rows.push({ role: "produção", value: work.production.join(", ") });
  if (work.venue) rows.push({ role: "local", value: work.venue });
  if (work.city) rows.push({ role: "cidade", value: work.city });
  if (work.duration) rows.push({ role: "período", value: work.duration });
  if (full) {
    for (const c of work.credits ?? []) {
      if (c.name === "Paulo Coveiro" && c.role === work.character) continue;
      // Evita repetir o que já está na ficha (ex.: produção).
      if (rows.some((r) => r.value.startsWith(c.name))) continue;
      rows.push({ role: c.role, value: c.name });
    }
  }
  return rows;
}

export function Ficha({
  work,
  full = false,
  className = "",
}: {
  work: Work;
  full?: boolean;
  className?: string;
}) {
  const rows = fichaRows(work, { full });
  if (!rows.length) return null;

  return (
    <dl className={`grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-1.5 text-sm ${className}`}>
      {rows.map((row) => (
        <div key={row.role + row.value} className="contents">
          <dt className="font-mono text-xs leading-5 text-ink-soft">{row.role} —</dt>
          <dd className="leading-5">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
