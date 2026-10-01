import type { StaticImageData } from "next/image";

/**
 * Modelo de conteúdo do arquivo de Paulo Coveiro.
 * Para adicionar uma obra: crie um objeto `Work` no arquivo da área
 * (src/content/works/<area>.ts). Layout, índice, página própria
 * (/trabalhos/<slug>), sitemap e dados estruturados são gerados a partir dele.
 */

export type CategoryId = "cinema" | "teatro" | "musica";

export type Category = {
  id: CategoryId;
  label: string;
  /** Uma linha de abertura da área. REVISAR com o editorial. */
  lede?: string;
};

export type WorkImage = {
  src: StaticImageData;
  /** Descreva a imagem, não o SEO: quem, o quê, onde. */
  alt: string;
  caption?: string;
};

export type Credit = { role: string; name: string };

export type ExternalLink = { label: string; url: string };

/**
 * Composições editoriais disponíveis. Todas nascem do mesmo grid de 12 colunas.
 * - feature: obra ocupando praticamente toda a tela
 * - monumental: imagem horizontal sangrada + ficha abaixo
 * - vertical: imagem vertical + texto
 * - mosaic: mosaico fotográfico
 * - title: título enorme + imagem pequena
 * - sequence: sequência de quadros, como fotogramas
 */
export type WorkLayout =
  | "feature"
  | "monumental"
  | "vertical"
  | "mosaic"
  | "title"
  | "sequence";

export type Work = {
  slug: string;
  title: string;
  /** Ano ou intervalo ("2023–2025"). Deixe vazio se não houver data confirmada. */
  year?: string;
  /** Duração, quando não há data exata ("mais de um ano"). */
  duration?: string;
  category: CategoryId;
  /** Função de Paulo na obra: "ator", "diretor", "cantor"... */
  roles: string[];
  /** Personagem, quando houver. */
  character?: string;
  direction?: string[];
  production?: string[];
  venue?: string;
  city?: string;
  /** Uma frase. Usada no índice, na meta description e em cards de compartilhamento. */
  summary: string;
  /** Texto corrido. REVISAR: textos provisórios vindos do portfólio em PDF. */
  description?: string[];
  images?: WorkImage[];
  /** ID do vídeo no YouTube (o trecho depois de "v="). */
  youtubeId?: string;
  links?: ExternalLink[];
  credits?: Credit[];
  /** Obras em destaque ganham composição editorial; as demais entram na lista. */
  featured?: boolean;
  layout?: WorkLayout;
  /**
   * Dados estruturados (schema.org). Só preencha `event` com dados reais.
   */
  schema?:
    | { type: "Movie" }
    | { type: "CreativeWork" }
    | {
        type: "MusicEvent" | "TheaterEvent";
        event?: { startDate: string; locationName: string; locality?: string };
      };
};

export type Video = {
  youtubeId: string;
  title: string;
  /** Data de publicação no YouTube (AAAA-MM-DD). Necessária para o VideoObject. */
  uploadDate?: string;
  description?: string;
};

export type TimelineEntry = {
  year: string;
  text: string;
  /** Liga a entrada a uma obra do acervo. */
  workSlug?: string;
};
