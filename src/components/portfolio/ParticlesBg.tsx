import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Deterministic pseudo-random so SSR + client agree
function rand(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  x: rand(i + 1) * 100,
  y: rand(i + 17) * 100,
  size: rand(i + 31) * 3 + 1,
  duration: rand(i + 47) * 8 + 8,
  delay: rand(i + 61) * 5,
}));

export function ParticlesBg() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 grid-bg" />
      {/* animated gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 size-[480px] rounded-full bg-neon-purple/20 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 size-[520px] rounded-full bg-neon-blue/20 blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {mounted &&
        PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-neon-cyan/60"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 ${p.size * 4}px var(--neon-cyan)`,
            }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </div>
  );
}
