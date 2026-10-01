import type { Work } from "../types";
import cenaGalhos from "@/assets/images/teatro-cena-galhos.webp";
import thumeleRegistros from "@/assets/images/festival-thumele-iii-registros.webp";
import obliquoCartaz from "@/assets/images/obliquo-cartaz.webp";
import obliquoCena from "@/assets/images/obliquo-cena.webp";
import tempoZeroCartaz from "@/assets/images/tempo-zero-cartaz.webp";
import cursosCartaz from "@/assets/images/cia-caminho-velho-cartaz-cursos.webp";

// REVISAR: descrições transcritas do portfólio em PDF.
export const teatro: Work[] = [
  {
    slug: "festival-thumele-iii",
    title: "Festival Thumelê III",
    year: "2025",
    category: "teatro",
    roles: ["ator"],
    production: ["Cia. do Caminho Velho"],
    venue: "Teatro Padre Bento",
    city: "Guarulhos",
    summary:
      "Apresentação com a Cia. do Caminho Velho no Festival Thumelê, no Teatro Padre Bento.",
    description: [
      // REVISAR: trecho parcialmente encoberto no PDF; confirmar redação.
      "Apresentação da Cia. do Caminho Velho no festival de artes Thumelê, no Teatro Padre Bento, em Guarulhos.",
      "Festival incentivado pela Lei Aldir Blanc, contemplando a apresentação de mais de 30 artistas em 3 dias de festival.",
    ],
    images: [
      {
        src: cenaGalhos,
        alt: "Em cena, um ator avança com um feixe de galhos enquanto quatro atrizes se entrelaçam no chão do palco",
      },
      {
        src: thumeleRegistros,
        alt: "Três registros da apresentação no Teatro Padre Bento, incluindo o agradecimento do elenco",
      },
    ],
    featured: true,
    layout: "monumental",
    schema: { type: "TheaterEvent" },
  },
  {
    slug: "obliquo",
    title: "Oblíqu0",
    year: "2025",
    category: "teatro",
    roles: ["texto", "direção", "professor"],
    direction: ["Paulo Coveiro"],
    production: ["Cia. do Caminho Velho — cursos de iniciação teatral"],
    summary:
      "Peça escrita e dirigida por Paulo, montada com a turma de iniciação teatral que ele conduziu em 2025.",
    description: [
      "No ano de 2025 fui professor de duas turmas de iniciação teatral. Entre os alunos estavam pessoas do Bairro dos Pimentas e alunos da universidade; montamos as peças “Tempo Zero” e “Oblíqu0”.",
    ],
    credits: [
      { role: "texto e direção", name: "Paulo Coveiro" },
      // REVISAR: datas lidas no cartaz (25/11, 02/12 e 09/12, às 18h).
      { role: "apresentações", name: "25/11, 02/12 e 09/12, 18h" },
    ],
    images: [
      {
        src: obliquoCartaz,
        alt: "Cartaz de Oblíqu0: uma forma vermelha pontiaguda sobre fundo preto",
      },
      {
        src: obliquoCena,
        alt: "Elenco de Oblíqu0 de braços erguidos sob um feixe de luz amarela",
      },
    ],
    featured: true,
    layout: "vertical",
    schema: { type: "CreativeWork" },
  },
  {
    slug: "tempo-zero",
    title: "Tempo Zero",
    year: "2025",
    category: "teatro",
    roles: ["professor"],
    production: ["Cia. do Caminho Velho — cursos de iniciação teatral"],
    summary:
      "Montagem de conclusão de uma das turmas de iniciação teatral conduzidas por Paulo.",
    images: [
      {
        src: tempoZeroCartaz,
        alt: "Cartaz de Tempo Zero: o elenco em pose de grupo sob luz verde",
      },
      {
        src: cursosCartaz,
        alt: "Cartaz dos cursos de teatro de iniciação da Cia. do Caminho Velho",
      },
    ],
    featured: true,
    layout: "mosaic",
    schema: { type: "CreativeWork" },
  },
];
