import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Hand } from "lucide-react";
import heroImg from "@/assets/ai-engineer-hero.png";

const lines = [
  "Hi! I'm Ramana 👋",
  "I build Agentic AI with LangGraph.",
  "I architect RAG pipelines on Azure OpenAI.",
  "I ship ML at scale — Spark, Databricks, MLflow.",
  "Cut research time by 65% at Northern Trust.",
  "Let's build something intelligent together.",
];

// Orbiting tech labels (deterministic positions to avoid hydration mismatch)
const orbit = [
  { label: "LangGraph", angle: 0 },
  { label: "Azure OpenAI", angle: 60 },
  { label: "RAG", angle: 120 },
  { label: "XGBoost", angle: 180 },
  { label: "LSTM", angle: 240 },
  { label: "Spark", angle: 300 },
].map((o) => {
  const r = 200;
  const x = Math.round(Math.cos((o.angle * Math.PI) / 180) * r * 1000) / 1000;
  const y = Math.round(Math.sin((o.angle * Math.PI) / 180) * r * 1000) / 1000;
  return { ...o, x, y };
});

export function InteractiveAvatar() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % lines.length), 3200);
    return () => clearInterval(t);
  }, [paused]);

  // Periodic wave animation (anime-style greeting)
  useEffect(() => {
    const t = setInterval(() => {
      setWaving(true);
      setTimeout(() => setWaving(false), 1400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative flex justify-center items-center min-h-[460px] md:min-h-[560px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* glow ring */}
      <div className="absolute inset-0 m-auto size-[360px] md:size-[440px] rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-blue/20 to-neon-purple/30 blur-3xl animate-pulse-glow" />

      {/* pulsing rings (radar effect) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-neon-cyan/30"
          initial={{ width: 280, height: 280, opacity: 0.6 }}
          animate={{ width: 520, height: 520, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        />
      ))}

      {/* rotating orbit ring */}
      <motion.div
        className="absolute size-[420px] md:size-[520px] rounded-full border border-neon-cyan/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {orbit.map((o) => (
          <motion.div
            key={o.label}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 glass-card neon-border rounded-full px-3 py-1 text-[10px] md:text-xs font-mono text-neon-cyan whitespace-nowrap"
            style={{ transform: `translate(${o.x}px, ${o.y}px)` }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {o.label}
          </motion.div>
        ))}
      </motion.div>

      {/* avatar — anime-style: bob + subtle head tilt + breathing */}
      <motion.div
        animate={{
          y: [0, -12, 0, -6, 0],
          rotate: [-1.5, 1.5, -1.5],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        whileTap={{ scale: 0.97 }}
        className="relative z-10 cursor-pointer"
        onClick={() => setIdx((i) => (i + 1) % lines.length)}
      >
        <img
          src={heroImg}
          alt="Venkata Ramana Veeraiahgari, AI engineer"
          width={1024}
          height={1024}
          className="w-[300px] md:w-[420px] h-auto drop-shadow-[0_20px_60px_oklch(0.65_0.27_300/0.5)] rounded-full"
        />

        {/* sparkle bursts around avatar (anime sparkles) */}
        {[
          { x: -20, y: 30, delay: 0 },
          { x: 320, y: 60, delay: 0.6 },
          { x: -10, y: 280, delay: 1.2 },
          { x: 340, y: 320, delay: 1.8 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ left: s.x, top: s.y }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2.4,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <Sparkles className="size-4 text-neon-cyan" />
          </motion.div>
        ))}

        {/* anime waving hand */}
        <AnimatePresence>
          {waving && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-10 -right-2 md:top-16 md:-right-4 origin-bottom-left"
            >
              <motion.div
                animate={{ rotate: [0, 25, -10, 25, -10, 0] }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-3xl md:text-5xl drop-shadow-[0_0_12px_oklch(0.88_0.18_200/0.8)]"
              >
                <Hand className="size-8 md:size-12 text-neon-cyan" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
      <div className="absolute top-0 md:top-6 left-0 md:-left-6 z-20 max-w-[220px] md:max-w-[260px]">
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
