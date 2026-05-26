import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "EnergAI",
    tagline: "Agentic AI for Renewable Energy Optimization",
    description:
      "Agentic AI system using IBM watsonx Orchestrate for renewable energy supply-demand analysis, weather-aware reasoning, and grid operator recommendations.",
    tags: ["watsonx", "Agentic AI", "Energy"],
    github: "https://github.com/vvramana007/EnergAI-Agentic-AI",
  },
  {
    title: "RAG LangChain Streamlit App",
    tagline: "Document Q&A with vector search",
    description:
      "End-to-end RAG application using LangChain, embeddings, vector search, and Streamlit for document-based question answering.",
    tags: ["LangChain", "RAG", "Streamlit"],
    github: "https://github.com/vvramana007/RAG-LangChain-Streamlit-App",
  },
  {
    title: "AI Jobs Agent",
    tagline: "Automated job-matching pipeline",
    description:
      "AI job-matching automation that scrapes job postings, compares descriptions with resumes, scores job fit, and organizes opportunities.",
    tags: ["Automation", "Agents", "Scraping"],
    github: "https://github.com/vvramana007/AI-Jobs-Agent",
  },
  {
    title: "Omni AI Agents Platform",
    tagline: "Enterprise agent deployment",
    description:
      "Enterprise AI agent deployment architecture with SSO, SAP integration, onboarding lifecycle, monitoring, and scalable automation workflows.",
    tags: ["Enterprise", "SAP", "SSO"],
    github: "https://github.com/vvramana007/Omni-AI-Agents-Platform",
  },
  {
    title: "IoT Smart Waste System",
    tagline: "Smart monitoring + UV disinfection",
    description:
      "IoT-based smart waste monitoring and UV disinfection system for safer waste handling and public health automation.",
    tags: ["IoT", "Hardware", "Health"],
    github: "https://github.com/vvramana007/IoT-Smart-Waste-System",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Projects that <span className="gradient-text">shipped</span></>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group glass-card neon-border rounded-2xl p-6 relative overflow-hidden flex flex-col"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                 style={{ background: "radial-gradient(circle at 30% 0%, oklch(0.65 0.27 300 / 0.25), transparent 60%)" }} />
            <div className="relative flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-neon-cyan transition">
                  {p.title}
                </h3>
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon-cyan transition" />
              </div>
              <p className="mt-1 text-xs font-mono text-neon-cyan/80">{p.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="relative mt-5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-muted/60 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Github className="size-4 text-muted-foreground group-hover:text-foreground transition" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
