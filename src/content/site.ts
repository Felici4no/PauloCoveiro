// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar textos,
// trabalhos e contatos — os componentes não precisam ser alterados.
// Itens marcados com [editar] são textos provisórios.

export type WorkType =
  | "Álbum"
  | "EP"
  | "Single"
  | "Videoclipe"
  | "Trilha sonora"
  | "Ao vivo";

export type Work = {
  slug: string;
  title: string;
  type: WorkType;
  year: number;
  description: string;
  /** Caminho em /public (ex.: "/trabalhos/capa.jpg"). Sem capa, usa um bloco neutro. */
  cover?: string;
  /** Link principal (Spotify, YouTube, Bandcamp...). */
  url?: string;
  /** URL de incorporação (embed) do YouTube, Spotify ou SoundCloud. */
  embed?: string;
  credits?: string[];
};

export type SocialLink = { label: string; url: string };

export const site = {
  name: "Paulo Coveiro",
  role: "Músico · Compositor · Audiovisual",
  tagline: "[editar] Uma frase curta que resume o seu som e o seu trabalho.",
  location: "[editar] Cidade, Estado",
  url: "https://paulocoveiro.com",

  about: {
    paragraphs: [
      "[editar] Primeiro parágrafo da bio: quem você é, de onde vem e como começou na música.",
      "[editar] Segundo parágrafo: influências, linguagem sonora, parcerias e trabalhos com audiovisual.",
      "[editar] Terceiro parágrafo (opcional): momento atual, próximos lançamentos ou shows.",
    ],
    /** Caminho em /public. Deixe vazio para esconder a foto. */
    photo: "",
    highlights: [
      { label: "Lançamentos", value: "[editar]" },
      { label: "Em atividade desde", value: "[editar]" },
      { label: "Base", value: "[editar]" },
    ],
  },

  works: [
    {
      slug: "album-exemplo",
      title: "[editar] Título do álbum",
      type: "Álbum",
      year: 2026,
      description: "[editar] Uma ou duas frases sobre o disco.",
      credits: ["Composição e voz: Paulo Coveiro"],
    },
    {
      slug: "single-exemplo",
      title: "[editar] Título do single",
      type: "Single",
      year: 2025,
      description: "[editar] Sobre a faixa.",
    },
    {
      slug: "clipe-exemplo",
      title: "[editar] Título do videoclipe",
      type: "Videoclipe",
      year: 2025,
      description: "[editar] Direção, conceito, onde foi gravado.",
    },
    {
      slug: "trilha-exemplo",
      title: "[editar] Trilha para curta",
      type: "Trilha sonora",
      year: 2024,
      description: "[editar] Para qual filme/projeto e qual foi o seu papel.",
    },
  ] satisfies Work[] as Work[],

  contact: {
    email: "contato@paulocoveiro.com",
    note: "[editar] Para shows, trilhas, parcerias e imprensa.",
    socials: [
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "YouTube", url: "https://youtube.com/" },
      { label: "Spotify", url: "https://open.spotify.com/" },
    ] satisfies SocialLink[] as SocialLink[],
  },
};
