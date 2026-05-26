import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingDown, Target, Gauge, Briefcase } from "lucide-react";

const stats = [
  { icon: TrendingDown, value: 65, suffix: "%", label: "Research time reduced", sub: "Northern Trust" },
  { icon: Target, value: 100, suffix: "%", label: "RAG citation accuracy", sub: "Legal documents" },
  { icon: Gauge, value: 30, suffix: "%", label: "Logistics cost savings", sub: "TCS · XGBoost + LSTM" },
  { icon: Briefcase, value: 4, suffix: "+", label: "Years shipping AI/ML", sub: "Finance · Logistics" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="px-6 -mt-8 relative z-10">
      <div className="mx-auto max-w-6xl grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card neon-border rounded-2xl p-5 relative overflow-hidden group"
          >
            <div className="absolute -bottom-6 -right-6 size-24 rounded-full bg-neon-cyan/10 blur-2xl group-hover:bg-neon-purple/20 transition" />
            <s.icon className="size-5 text-neon-cyan" />
            <div className="mt-3 text-3xl md:text-4xl font-bold gradient-text font-display">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-sm font-medium">{s.label}</div>
            <div className="text-xs font-mono text-muted-foreground mt-0.5">{s.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
