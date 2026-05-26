import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import { InteractiveAvatar } from "./InteractiveAvatar";

const floatingTechs = [
  { label: "Python", x: "4%", y: "12%" },
  { label: "LangChain", x: "88%", y: "10%" },
  { label: "LangGraph", x: "93%", y: "58%" },
  { label: "OpenAI", x: "2%", y: "55%" },
  { label: "Azure", x: "8%", y: "82%" },
  { label: "AWS", x: "82%", y: "86%" },
  { label: "XGBoost", x: "48%", y: "4%" },
  { label: "n8n", x: "44%", y: "94%" },
  { label: "Databricks", x: "96%", y: "32%" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      {floatingTechs.map((t, i) => (
        <motion.div
          key={t.label}
          className="hidden md:block absolute glass-card neon-border rounded-full px-3 py-1 text-xs font-mono text-neon-cyan"
          style={{ left: t.x, top: t.y }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5 + (i % 4),
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {t.label}
        </motion.div>
      ))}

      <div className="mx-auto w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 glass-card neon-border rounded-full px-3 py-1 text-xs text-neon-cyan font-mono">
            <Sparkles className="size-3" /> Available for AI / ML roles
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
            Hi, I'm <span className="gradient-text">Venkata Ramana</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            AI / ML Engineer building{" "}
            <span className="text-foreground font-medium">Agentic AI</span>,{" "}
            <span className="text-foreground font-medium">RAG systems</span>, and{" "}
            <span className="text-foreground font-medium">production ML pipelines</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground font-mono">
            Fort Collins, Colorado · 4+ yrs · GenAI · ML · MLOps
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition glow-cyan"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkata-ramana-veeraiahgari-9042b3169/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-card neon-border px-5 py-3 text-sm font-semibold hover:text-neon-cyan transition"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/vvramana007"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-card neon-border px-5 py-3 text-sm font-semibold hover:text-neon-cyan transition"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <InteractiveAvatar />
        </motion.div>
      </div>
    </section>
  );
}
