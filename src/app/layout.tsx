import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { person, seo, siteUrl } from "@/content/site";
import "./globals.css";

// Archivo variável com eixo de largura: um só arquivo para texto e para o
// nome em escala de capa (condensado).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.title, template: `%s — ${person.name}` },
  description: seo.description,
  applicationName: person.name,
  authors: [{ name: person.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    siteName: person.name,
    title: seo.title,
    description: seo.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f1ece2",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexMono.variable} antialiased`}>
      <body className="min-h-svh font-sans">
        <a
          href="#conteudo"
          className="meta sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
