import type { StaticImageData } from "next/image";
import retratoCapa from "@/assets/images/paulo-coveiro-retrato-capa.webp";
import palcoSentado from "@/assets/images/paulo-coveiro-palco-sentado.webp";

/**
 * Identidade, textos gerais e contato.
 *
 * REVISAR (editorial): todos os textos marcados com `// REVISAR` são
 * provisórios, transcritos do portfólio em PDF. Paulo vai trabalhar a versão
 * final com profissionais de letras — substitua aqui, sem tocar no layout.
 *
 * IMAGENS PROVISÓRIAS: as fotos em src/assets/images são recortes em baixa
 * resolução do PDF. Substitua pelos arquivos originais mantendo o nome.
 */

/** Domínio definitivo ainda não definido — configure NEXT_PUBLIC_SITE_URL. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://paulocoveiro.com"
).replace(/\/$/, "");

export const person = {
  name: "Paulo Coveiro",
  /** Taxonomia da capa. Ordem = ordem de exibição. */
  disciplines: ["Ator", "Cantor", "Educador de teatro"],
  /** Usado em <title> e no schema Person. */
  jobTitles: ["Ator", "Cantor", "Educador de teatro"],
  city: "Guarulhos",
  region: "SP",
  country: "BR",
  email: "orievocoluap@gmail.com",
  portrait: {
    src: retratoCapa,
    alt: "Paulo Coveiro, de camiseta cinza, olhando para o alto; acima dele, sua própria imagem invertida sobre fundo amarelo",
  },
  /**
   * Perfis oficiais. Alimentam o `sameAs` do schema Person e o contato.
   * Adicione Instagram, IMDb, Spotify, Letterboxd etc. quando confirmados.
   */
  profiles: [
    { label: "YouTube", url: "https://www.youtube.com/@paulocoveiro" },
  ],
  /** Assinatura manuscrita (SVG/PNG transparente). Ainda não fornecida. */
  signature: null as StaticImageData | null,
};

export const seo = {
  title: "Paulo Coveiro — ator, cantor e educador de teatro",
  // REVISAR
  description:
    "Arquivo de Paulo Coveiro, ator, cantor e educador de teatro de Guarulhos (SP). Cinema, teatro e música: Neo-Brazyl, Guardiões da Providência, Pão Doce, Oblíqu0 e apresentações ao vivo.",
};

export const hero = {
  // REVISAR — frase de abertura, extraída do texto de apresentação do PDF.
  line: "Uso minha carne para contar histórias.",
};

export const about = {
  photo: {
    src: palcoSentado,
    alt: "Paulo Coveiro sentado no chão de um palco escuro, diante de uma porta azul",
  },
  // REVISAR — texto provisório do portfólio em PDF.
  paragraphs: [
    "Uso minha carne para contar histórias e faço isso profissionalmente há 5 anos. Realizei a maior parte dos trabalhos até hoje em Guarulhos, território onde nasci.",
    "Aos 27 anos, foco minha atuação nos palcos como educador de teatro, ator e cantor.",
  ],
};

export const contact = {
  heading: "Vamos conversar.",
  // REVISAR
  note: "Cinema, teatro, música, oficinas e convites.",
};

export const credits = {
  studio: "The Canteiro",
};
