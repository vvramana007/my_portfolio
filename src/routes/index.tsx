import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticlesBg } from "@/components/portfolio/ParticlesBg";
import { Stats } from "@/components/portfolio/Stats";
import { Education } from "@/components/portfolio/Education";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Venkata Ramana · AI Engineer · GenAI, Agentic AI, RAG" },
      {
        name: "description",
        content:
          "Portfolio of Venkata Ramana — AI Engineer specializing in Agentic AI, RAG systems, LangChain, Azure OpenAI, and SAP + AI enterprise automation.",
      },
      { property: "og:title", content: "Venkata Ramana · AI Engineer" },
      {
        property: "og:description",
        content:
          "Agentic AI, RAG, LangChain, Azure OpenAI, SAP + AI — production-ready AI systems.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticlesBg />
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <Toaster theme="dark" position="top-center" richColors />
    </main>
  );
}
