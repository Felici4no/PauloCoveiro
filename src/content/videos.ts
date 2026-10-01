import type { Video } from "./types";

export const youtubeChannel = "https://www.youtube.com/@paulocoveiro";

// REVISAR
export const videosIntro = "Apresentações, covers e registros de palco.";

/**
 * Vídeos em destaque do canal. Cada vídeo carrega só a miniatura; o player do
 * YouTube é inserido apenas quando a pessoa clica.
 *
 * Para adicionar: copie o ID do vídeo (youtube.com/watch?v=ESTE_ID). Com
 * `uploadDate` e `description` preenchidos, o vídeo também entra nos dados
 * estruturados (VideoObject).
 *
 * Exemplo:
 * { youtubeId: "dQw4w9WgXcQ", title: "Nome da faixa — ao vivo", uploadDate: "2025-05-10", description: "..." },
 */
export const videos: Video[] = [];
