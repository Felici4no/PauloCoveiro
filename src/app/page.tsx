import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SiteNav } from "@/components/SiteNav";
import { Works } from "@/components/works/Works";
import { videos } from "@/content/videos";
import { homeSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema(videos)} />
      <SiteNav />
      <main id="conteudo">
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
