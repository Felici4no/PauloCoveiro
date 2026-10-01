import type { Work } from "../types";
import neoNeon from "@/assets/images/neo-brazyl-cena-neon.webp";
import neoBicicleta from "@/assets/images/neo-brazyl-cena-bicicleta.webp";
import neoCartaz from "@/assets/images/neo-brazyl-cartaz.webp";
import guardioesChamada from "@/assets/images/guardioes-da-providencia-chamada.webp";
import guardioesQuarto from "@/assets/images/guardioes-da-providencia-quarto.webp";
import paoDoceMosaico from "@/assets/images/pao-doce-mosaico.webp";

// REVISAR: descrições transcritas do portfólio em PDF.
export const cinema: Work[] = [
  {
    slug: "pao-doce",
    title: "Pão Doce",
    year: "2025",
    category: "cinema",
    roles: ["ator"],
    character: "Duka",
    summary:
      "Paulo vive Duka, padeiro confeiteiro, num filme sobre um pai que faz de tudo para cuidar da filha.",
    description: [
      "Em “Pão Doce” venho como o personagem Duka, padeiro confeiteiro e melhor amigo de Cako, padeiro (interpretado por Timm Arif).",
      "Filme contemplado pela Lei Paulo Gustavo, que conta a história de Fernando (interpretado por Francisco Gaspar), pai que faz de tudo para cuidar de sua filha Sofia (interpretada por Sofia Furtado).",
    ],
    credits: [
      // REVISAR: confirmar grafia dos nomes do elenco.
      { role: "Duka", name: "Paulo Coveiro" },
      { role: "Cako", name: "Timm Arif" },
      { role: "Fernando", name: "Francisco Gaspar" },
      { role: "Sofia", name: "Sofia Furtado" },
      { role: "fomento", name: "Lei Paulo Gustavo" },
    ],
    images: [
      {
        src: paoDoceMosaico,
        alt: "Bastidores e cenas de Pão Doce: elenco de touca e avental numa padaria, claquete e cartaz do filme",
      },
    ],
    featured: true,
    layout: "title",
    schema: { type: "Movie" },
  },
  {
    slug: "guardioes-da-providencia",
    title: "Guardiões da Providência",
    year: "2024",
    category: "cinema",
    roles: ["ator"],
    production: ["Kinoferico — coletivo de cinema do Bairro dos Pimentas"],
    city: "Guarulhos",
    summary:
      "Separados pela tela, dois amigos combinam planos para realizar o sonho de ter a própria franquia de super-heróis.",
    description: [
      "Separados pela tela, dois amigos combinam planos para realizar o sonho de ter a própria franquia de super-heróis…",
      "O filme é coordenado pelo coletivo de cinema do Bairro dos Pimentas chamado “Kinoferico”. A ideia veio de alunos da oficina de audiovisual e teve estreia nas salas de cinema do shopping do bairro.",
    ],
    images: [
      {
        src: guardioesChamada,
        alt: "Dois amigos de fone de ouvido conversam por videochamada, cada um em seu quarto",
      },
      {
        src: guardioesQuarto,
        alt: "Paulo Coveiro de fone de ouvido diante do computador, num quarto com estantes",
      },
    ],
    featured: true,
    layout: "sequence",
    schema: { type: "Movie" },
  },
  {
    slug: "neo-brazyl",
    title: "Neo-Brazyl",
    year: "2021",
    category: "cinema",
    roles: ["ator"],
    character: "Nando",
    production: ["Polissemia — coletivo de cinema"],
    summary:
      "Primeiro mergulho de Paulo nas telas: Nando, num filme afrossurreal, bregapunk e afrofuturista sobre o trabalho por aplicativo.",
    description: [
      "Com destaque para o primeiro mergulho nas telas, Neo-Brazyl (2021), do coletivo de cinema Polissemia, conta a história de Nando.",
      "Numa assinatura afrossurreal, bregapunk e afrofuturista, o filme discute os limites dos meios de trabalho contemporâneos, como os de aplicativos, especialmente os efeitos da gamificação.",
    ],
    credits: [
      { role: "Nando", name: "Paulo Coveiro" },
      { role: "produção", name: "Polissemia" },
    ],
    images: [
      {
        src: neoNeon,
        alt: "Cena de Neo-Brazyl em luz neon roxa: um entregador carrega sacolas azuis num corredor",
      },
      {
        src: neoBicicleta,
        alt: "Nando pedala à noite com a mochila de entregas nas costas",
      },
      {
        src: neoCartaz,
        alt: "Cartaz de Neo-Brazyl sobre um campo verde: “Uma produção Polissemia”",
      },
    ],
    featured: true,
    layout: "feature",
    schema: { type: "Movie" },
  },
];
