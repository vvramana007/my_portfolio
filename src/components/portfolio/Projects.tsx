import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "EnergAI",
    tagline: "Agentic AI for Renewable Energy",
    description:
      "Agentic AI system using IBM watsonx Orchestrate for renewable energy supply-demand optimization, weather-aware reasoning, and grid operator recommendations.",
    tags: ["watsonx", "Agentic AI", "Energy", "HTML"],
    github: "https://github.com/vvramana007/EnergAI-Agentic-AI",
    stars: 0,
    forks: 0,
    language: "HTML",
  },
  {
    title: "RAG LangChain Streamlit App",
    tagline: "Document Q&A with Vector Search",
    description:
      "End-to-end RAG application using LangChain, LLMs, embeddings, and Streamlit for intelligent document querying and retrieval-augmented generation.",
    tags: ["LangChain", "RAG", "Streamlit", "LLM"],
    github: "https://github.com/vvramana007/RAG-LangChain-Streamlit-App",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
  {
    title: "AI Jobs Agent",
    tagline: "Automated Job-Matching Pipeline",
    description:
      "AI-powered job matching agent that scrapes job postings, evaluates fit using LLMs, scores candidates, and organizes opportunities automatically.",
    tags: ["Automation", "Agents", "LLM", "Scraping"],
    github: "https://github.com/vvramana007/AI-Jobs-Agent",
    stars: 0,
    forks: 0,
    language: null,
  },
  {
    title: "Omni AI Agents Platform",
    tagline: "Enterprise Agent Deployment",
    description:
      "Enterprise AI agent platform with SSO, SAP integration, deployment lifecycle, monitoring, and scalable automation workflows for large organizations.",
    tags: ["Enterprise", "SSO", "SAP", "Automation"],
    github: "https://github.com/vvramana007/Omni-AP-AI-Agents-Platform",
    stars: 0,
    forks: 0,
    language: null,
  },
  {
    title: "Walmart Forecasting",
    tagline: "Time-Series Revenue Prediction",
    description:
      "Time-series forecasting project using FRED retail-sales data to predict Walmart quarterly revenue with out-of-sample evaluation and baseline comparison.",
    tags: ["Forecasting", "Time-Series", "ML", "Jupyter"],
    github: "https://github.com/vvramana007/walmart-forecasting",
    stars: 0,
    forks: 0,
    language: "Jupyter Notebook",
  },
  {
    title: "IoT Smart Waste System",
    tagline: "Smart Monitoring + UV Disinfection",
    description:
      "IoT-based smart waste monitoring and UV disinfection system for safer medical waste handling and public health automation.",
    tags: ["IoT", "Hardware", "Health", "Embedded"],
    github: "https://github.com/vvramana007/IoT-Smart-Waste-System",
    stars: 0,
    forks: 0,
    language: null,
  },
];

const languageColors: Record<string, string> = {
  "HTML": "#e34c26",
  "Jupyter Notebook": "#f37626",
  "JavaScript": "#f1e05a",
  "Python": "#3572A5",
  "TypeScript": "#3178c6",
};

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
            rel="noopener noreferrer"
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
                <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon-cyan transition shrink-0" />
              </div>
              <p className="mt-1 text-xs font-mono text-neon-cyan/80">{p.tagline}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
            <div className="relative mt-5 flex flex-col gap-3">
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
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  {p.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="size-2.5 rounded-full inline-block"
                        style={{ backgroundColor: languageColors[p.language] || "#8b949e" }}
                      />
                      {p.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="size-3" /> {p.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="size-3" /> {p.forks}
                  </span>
                </div>
                <Github className="size-4 group-hover:text-foreground transition" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/vvramana007?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/40 border border-muted hover:border-neon-cyan/50 hover:text-neon-cyan transition text-sm font-medium"
        >
          <Github className="size-4" />
          View All Repositories on GitHub
        </a>
      </motion.div>
    </Section>
  );
}
