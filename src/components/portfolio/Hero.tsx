import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import heroImg from "@/assets/ai-engineer-hero.png";

const floatingTechs = [
  { label: "Python", x: "5%", y: "10%", delay: 0 },
  { label: "LangChain", x: "85%", y: "8%", delay: 0.5 },
  { label: "LangGraph", x: "92%", y: "55%", delay: 1 },
  { label: "OpenAI", x: "2%", y: "55%", delay: 1.5 },
  { label: "Azure", x: "10%", y: "85%", delay: 2 },
  { label: "AWS", x: "80%", y: "88%", delay: 2.5 },
  { label: "SAP", x: "50%", y: "5%", delay: 3 },
  { label: "n8n", x: "45%", y: "92%", delay: 3.5 },
  { label: "Streamlit", x: "95%", y: "30%", delay: 4 },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      {/* floating chips */}
      {floatingTechs.map((t) => (
        <motion.div
          key={t.label}
          className="hidden md:block absolute glass-card neon-border rounded-full px-3 py-1 text-xs font-mono text-neon-cyan"
          style={{ left: t.x, top: t.y }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 5 + t.delay,
            delay: t.delay,
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
            <Sparkles className="size-3" /> Available for AI roles
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-[1.05]">
            Hi, I'm{" "}
            <span className="gradient-text">Venkata Ramana</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            AI Engineer building{" "}
            <span className="text-foreground font-medium">Agentic AI</span>,{" "}
            <span className="text-foreground font-medium">RAG systems</span>, and{" "}
            <span className="text-foreground font-medium">enterprise automation</span>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground font-mono">
            Fort Collins, Colorado · GenAI · SAP + AI
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
          className="relative flex justify-center"
        >
          {/* glow ring */}
          <div className="absolute inset-0 m-auto size-[360px] md:size-[440px] rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-blue/20 to-neon-purple/30 blur-3xl animate-pulse-glow" />
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="3D illustration of Venkata Ramana, AI engineer"
              width={1024}
              height={1024}
              className="relative w-[320px] md:w-[460px] h-auto drop-shadow-[0_20px_60px_oklch(0.65_0.27_300/0.5)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
