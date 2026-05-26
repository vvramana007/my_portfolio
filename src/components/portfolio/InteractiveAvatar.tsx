import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import heroImg from "@/assets/ai-engineer-hero.png";

const lines = [
  "Hi! I'm Ramana 👋",
  "I build Agentic AI with LangGraph.",
  "I architect RAG pipelines on Azure OpenAI.",
  "I ship ML at scale — Spark, Databricks, MLflow.",
  "Cut research time by 65% at Northern Trust.",
  "Let's build something intelligent together.",
];

// Orbiting tech labels around the avatar
const orbit = [
  { label: "LangGraph", angle: 0, radius: 200 },
  { label: "Azure OpenAI", angle: 60, radius: 230 },
  { label: "RAG", angle: 120, radius: 200 },
  { label: "XGBoost", angle: 180, radius: 230 },
  { label: "LSTM", angle: 240, radius: 200 },
  { label: "Spark", angle: 300, radius: 230 },
];

export function InteractiveAvatar() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % lines.length), 3200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* glow ring */}
      <div className="absolute inset-0 m-auto size-[360px] md:size-[440px] rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-blue/20 to-neon-purple/30 blur-3xl animate-pulse-glow" />

      {/* rotating ring */}
      <motion.div
        className="absolute size-[420px] md:size-[520px] rounded-full border border-neon-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {orbit.map((o) => {
          const x = Math.cos((o.angle * Math.PI) / 180) * (o.radius - 40);
          const y = Math.sin((o.angle * Math.PI) / 180) * (o.radius - 40);
          return (
            <motion.div
              key={o.label}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-card neon-border rounded-full px-3 py-1 text-[10px] md:text-xs font-mono text-neon-cyan whitespace-nowrap"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {o.label}
            </motion.div>
          );
        })}
      </motion.div>

      {/* avatar */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.04 }}
        className="relative z-10 cursor-pointer"
        onClick={() => setIdx((i) => (i + 1) % lines.length)}
      >
        <img
          src={heroImg}
          alt="Venkata Ramana, AI engineer"
          width={1024}
          height={1024}
          className="w-[300px] md:w-[420px] h-auto drop-shadow-[0_20px_60px_oklch(0.65_0.27_300/0.5)] rounded-full"
        />
        {/* status dot */}
        <span className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-1.5 glass-card neon-border rounded-full px-2.5 py-1 text-[10px] font-mono text-neon-cyan">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-neon-cyan opacity-75 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-neon-cyan" />
          </span>
          online
        </span>
      </motion.div>

      {/* speech bubble */}
      <div className="absolute -top-2 md:top-6 left-0 md:-left-6 z-20 max-w-[220px] md:max-w-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="glass-card neon-border rounded-2xl rounded-bl-sm px-4 py-3 text-sm shadow-lg"
          >
            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono uppercase tracking-wider text-neon-cyan">
              <Sparkles className="size-3" /> Ramana.ai
            </div>
            <p className="text-foreground leading-snug">{lines[idx]}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-2 text-[10px] font-mono text-muted-foreground/70 pl-2">
          tap avatar to chat →
        </p>
      </div>
    </div>
  );
}
