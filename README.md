# Paulo Coveiro — arquivo digital

Site-portfólio de Paulo Coveiro, ator, cantor e educador de teatro de Guarulhos (SP).
Next.js 16 (App Router, páginas estáticas) + Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera tudo estático
```

Defina o domínio definitivo em `NEXT_PUBLIC_SITE_URL` (canonical, sitemap, Open Graph e
JSON-LD dependem dele). Sem a variável, usa `https://paulocoveiro.com`.

## Onde está cada coisa

```
src/content/            conteúdo — edite aqui, não nos componentes
  site.ts               identidade, SEO, capa, sobre, contato, perfis (sameAs)
  works/cinema.ts       obras por área
  works/teatro.ts
  works/musica.ts
  works/index.ts        ordem das áreas e helpers
  videos.ts             vídeos do YouTube (fachada leve)
  timeline.ts           cronologia
  types.ts              modelo de dados (Work, Category, Video…)
src/assets/images/      fotografias (importadas: dimensões e srcset automáticos)
src/components/         capa, navegação, sobre, contato, rodapé, semente
src/components/works/   índice, áreas, ficha técnica e as 6 composições editoriais
src/lib/schema.ts       dados estruturados (schema.org)
src/app/                rotas: /, /trabalhos/[slug], sitemap, robots, manifest, ícones, OG
docs/DESIGN.md          sistema visual
```

## Adicionar uma obra

1. Coloque as imagens em `src/assets/images/` com nomes descritivos
   (`nome-da-obra-cena.webp`).
2. Acrescente um objeto ao arquivo da área (`src/content/works/<area>.ts`):

```ts
{
  slug: "nome-da-obra",          // vira /trabalhos/nome-da-obra
  title: "Nome da obra",
  year: "2026",
  category: "teatro",
  roles: ["ator"],
  character: "Fulano",          // opcional
  direction: ["Nome"],          // opcional
  summary: "Uma frase.",
  description: ["Parágrafo…"],
  images: [{ src: imagemImportada, alt: "O que se vê na imagem" }],
  featured: true,                // false/omisso → entra na lista compacta
  layout: "monumental",          // feature | monumental | vertical | mosaic | title | sequence
}
```

Índice, contagem por área, página própria, sitemap e JSON-LD são gerados a partir disso.

## Pendências de conteúdo

- **Textos**: tudo marcado com `// REVISAR` é provisório (transcrito do portfólio em PDF) e
  será reescrito com profissionais de letras.
- **Fotografias**: as imagens atuais são recortes em baixa resolução do PDF. Substitua pelos
  originais mantendo os nomes de arquivo.
- **Vídeos**: `src/content/videos.ts` está vazio — adicione os IDs do canal.
- **Assinatura manuscrita**: `person.signature` em `site.ts` (aparece na seção Sobre).
- **Perfis**: acrescente Instagram, IMDb, Spotify etc. em `person.profiles` quando confirmados.

## Deploy

Pronto para a Vercel com as configurações padrão (defina `NEXT_PUBLIC_SITE_URL`).
