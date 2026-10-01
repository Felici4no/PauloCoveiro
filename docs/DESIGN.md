# Sistema visual

**O brutalismo vem do grid; a personalidade, da semente.**

## Origem: olho-de-cabra

A semente (*Abrus precatorius*) é uma elipse vermelha com uma coroa preta numa das
extremidades. Dela saem as cores, a forma e os pequenos sinais do site. Ela nunca é
ilustrada — aparece como unidade gráfica, pequena e pontual.

| Uso | Onde |
| --- | --- |
| Marcador de seção | `● TRABALHOS — 01`, faixas das áreas |
| Indicador ativo | navegação (aparece só na seção atual) |
| Numeração | `SeedNumber`: número da obra dentro da semente |
| Cursor | desktop (`pointer: fine`), via CSS; inverte para preto sobre links |
| Máscara oval | uma única vez: retrato na seção Sobre |
| Favicon / OG | `src/app/icon.svg`, `opengraph-image.tsx` |
| Inversão | hover de botões e "Próximo": preto ↔ vermelho, as duas faces da semente |

Se começar a parecer "tema de sementes", recue.

## Cor

| Token | Valor | Uso |
| --- | --- | --- |
| `paper` | `#f1ece2` | fundo |
| `paper-deep` | `#e6dfd1` | placeholder de imagem |
| `ink` | `#0f0e0d` | texto, divisórias fortes, faixas |
| `ink-soft` | `#55504a` | metadados (6,8:1 sobre papel) |
| `seed` | `#c4161c` | destaque pontual (5,1:1 sobre papel) |
| `seed-deep` | `#6b0f14` | variação secundária |

## Tipografia

- **Archivo** (variável, eixo de largura): texto e títulos. Títulos em caixa alta,
  peso 800, largura 72% (`display`).
- **IBM Plex Mono** 400/500: metadados, números, ficha técnica (`meta`).

## Grid

4 colunas no mobile, 12 a partir de 768px (`grid-frame`). Margens 16/32px, gutter 16/24px.
Imagens podem sangrar até a borda da viewport; o texto nunca.

## Composições de obra

Seis variações sobre o mesmo grid (`src/components/works/layouts.tsx`): `feature`,
`monumental`, `vertical`, `mosaic`, `title`, `sequence`. Obras sem destaque entram numa
lista compacta, para que a área aguente dezenas de trabalhos.

## Movimento

Só CSS: subida do nome na capa e recorte das imagens no scroll (`animation-timeline: view()`,
onde houver suporte). Tudo desligado com `prefers-reduced-motion`.
