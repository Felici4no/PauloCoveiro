/**
 * A semente olho-de-cabra como unidade gráfica: uma elipse vermelha com a
 * "coroa" preta numa das extremidades. Usada como marcador, indicador ativo,
 * favicon e cursor — sempre pequena e pontual.
 */

const CAP = "M7 .73A12 8 0 0 0 7 15.27 9 9 0 0 0 7 .73Z";

type SeedProps = {
  /** "seed": vermelho com coroa preta. "inverse": preto com coroa vermelha. */
  tone?: "seed" | "inverse";
  className?: string;
  /** Rotação em graus — usada para variar a repetição sem mudar a forma. */
  rotate?: number;
};

export function Seed({ tone = "seed", className = "", rotate = 0 }: SeedProps) {
  const [body, cap] =
    tone === "seed" ? ["var(--seed)", "var(--ink)"] : ["var(--ink)", "var(--seed)"];

  return (
    <svg
      viewBox="0 0 24 16"
      aria-hidden="true"
      focusable="false"
      className={`inline-block h-[0.66em] w-auto shrink-0 ${className}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <ellipse cx="12" cy="8" rx="12" ry="8" fill={body} />
      <path d={CAP} fill={cap} />
    </svg>
  );
}

/** Número dentro da semente — numeração de obras e seções. */
export function SeedNumber({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex h-7 min-w-11 items-center justify-end overflow-hidden rounded-[50%] bg-seed pl-4 pr-2.5 font-mono text-xs font-medium text-paper ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-3.5 rounded-r-[50%] bg-ink"
      />
      <span className="relative">{value}</span>
    </span>
  );
}
