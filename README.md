# Paulo Coveiro — site / portfólio

Portfólio de música e audiovisual feito com [Next.js](https://nextjs.org) (App Router) e Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Editando o conteúdo

Todo o texto do site está em [`src/content/site.ts`](src/content/site.ts):

- `name`, `role`, `tagline`, `location`, `url`: identificação e SEO.
- `about`: parágrafos da bio, foto (`/public/...`) e destaques.
- `works`: lista de trabalhos. Cada item aceita `cover` (imagem em `public/trabalhos/`),
  `url` (link externo) e `embed` (URL de incorporação do YouTube/Spotify/SoundCloud, que
  vira um player ao clicar em "Ouvir / assistir").
- `contact`: e-mail e redes sociais.

Os textos marcados com `[editar]` são provisórios.

## Estrutura

```
src/
  app/          layout, página e estilos globais
  components/   Header, Section, Works (grade com filtro por tipo)
  content/      site.ts — conteúdo editável
public/         imagens (capas em public/trabalhos/)
```

## Deploy

Pronto para a [Vercel](https://vercel.com/new): importe o repositório e use as configurações padrão.
