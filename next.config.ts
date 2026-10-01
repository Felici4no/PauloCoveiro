import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Miniaturas dos vídeos do YouTube (fachada leve, sem embed até o clique).
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
