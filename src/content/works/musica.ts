import type { Work } from "../types";
import sarauCartaz from "@/assets/images/sarau-prisma-cartaz.webp";
import cantandoMicrofone from "@/assets/images/paulo-coveiro-cantando-microfone.webp";
import guitarra from "@/assets/images/paulo-coveiro-guitarra.webp";
import mosaicoApresentacoes from "@/assets/images/musica-mosaico-apresentacoes.webp";

// REVISAR: descrições transcritas do portfólio em PDF.
export const musica: Work[] = [
  {
    slug: "sarau-prisma-29",
    title: "Sarau Prisma — 29ª edição",
    year: "2025",
    category: "musica",
    roles: ["cantor convidado"],
    venue: "Arquivo Histórico Municipal de São Paulo",
    city: "São Paulo",
    summary:
      "Paulo como convidado da 29ª edição do Sarau Prisma, no Arquivo Histórico Municipal, no Bom Retiro.",
    description: [
      "Desde o início, cantar sempre foi o que amo fazer. Com o tempo, fazer covers de música também se tornou uma profissão, e não há nada melhor do que trabalhar com o que se gosta.",
      "De lá pra cá, venho me apresentando em diversos lugares que me agraciaram com o convite. Já fui contratado para cantar em casamentos, aniversários, restaurantes, bares, casas de cultura, entre outros eventos.",
    ],
    credits: [{ role: "data", name: "27 de setembro de 2025, 12h às 15h" }],
    images: [
      {
        src: sarauCartaz,
        alt: "Cartaz da 29ª edição do Sarau Prisma, com Paulo Coveiro como convidado",
      },
      {
        src: cantandoMicrofone,
        alt: "Paulo Coveiro canta ao microfone diante de uma parede de tijolos",
      },
    ],
    featured: true,
    layout: "vertical",
    schema: {
      type: "MusicEvent",
      event: {
        startDate: "2025-09-27T12:00:00-03:00",
        locationName: "Arquivo Histórico Municipal de São Paulo",
        locality: "São Paulo",
      },
    },
  },
  {
    slug: "ao-vivo",
    title: "Ao vivo",
    year: "2023–",
    category: "musica",
    roles: ["voz", "violão"],
    summary:
      "Desde 2023, voz e violão em casas, saraus, eventos e palcos de grande produção.",
    description: [
      "Desde menino cantando, em 2023 decidi viver da música. Desde então, venho construindo uma trajetória sólida, com experiências que fortalecem minha identidade artística e minha atuação profissional.",
      "Hoje sigo atuando como cantor, levando ao palco experiência, presença e versatilidade, transitando entre diferentes formatos — do acústico ao palco de grande produção.",
    ],
    images: [
      {
        src: guitarra,
        alt: "Paulo Coveiro sorri enquanto toca guitarra, perto de uma janela",
      },
      {
        src: mosaicoApresentacoes,
        alt: "Mosaico de apresentações: voz e violão em palcos, saraus e com banda",
      },
    ],
    featured: true,
    layout: "feature",
  },
  {
    slug: "banda-top-times",
    title: "Banda Top Times",
    duration: "quase dois anos",
    category: "musica",
    roles: ["backing vocal"],
    summary:
      "Backing vocal em eventos corporativos, casamentos, grandes produções e aberturas de shows.",
    description: [
      "Com a Banda Top Times, atuei por quase dois anos como backing vocal, participando de eventos corporativos, casamentos e grandes produções, além de aberturas de shows para artistas de destaque.",
    ],
  },
  {
    slug: "imperio-bbq",
    title: "Churrascaria Império BBQ",
    duration: "mais de um ano",
    category: "musica",
    roles: ["voz e violão"],
    summary: "Voz e violão fixo por mais de um ano.",
    description: [
      "Fui voz e violão fixo por mais de um ano na Churrascaria Império BBQ, onde desenvolvi repertório versátil, constância de palco e forte conexão com o público.",
    ],
  },
  {
    slug: "pretos-em-conexao",
    title: "Pretos em Conexão",
    category: "musica",
    roles: ["cantor"],
    city: "Guarulhos",
    summary:
      "Presença na cena cultural de Guarulhos, em saraus e espaços culturais.",
    description: [
      "Também participei ativamente da cena cultural de Guarulhos, marcando presença em saraus e espaços culturais. Destaque para o Pretos em Conexão e o Sarau Prisma, importantes na minha formação artística, troca criativa e fortalecimento de rede cultural.",
    ],
  },
];
