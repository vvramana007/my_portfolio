import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Northern Trust",
    title: "AI Engineer",
    period: "Jul 2025 — Present · USA",
    focus:
      "Multi-agent research systems with LangGraph + Azure OpenAI. High-precision RAG over institutional legal docs. Semantic Kernel self-correction loops.",
    wins: ["65% faster cross-asset research", "100% RAG citation accuracy", "+35% retrieval relevance"],
  },
  {
    company: "Tata Consultancy Services",
    title: "Assistant System Engineer / ML Engineer",
    period: "Oct 2020 — Dec 2023 · India",
    focus:
      "Demand forecasting & routing optimization with XGBoost + LSTM on logistics data. Spark + Airflow pipelines, dbt + Databricks, Azure ML monitoring & drift detection.",
    wins: ["30% lower ops cost", "+20% predictive accuracy", "25% faster delivery"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A track record of <span className="gradient-text">shipping</span></>}
    >
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent" />
        {roles.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[1.35rem] md:-left-[2.05rem] top-2 size-4 rounded-full bg-primary glow-cyan ring-4 ring-background" />
            <div className="glass-card neon-border rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                <Briefcase className="size-3.5" /> {r.title}
              </div>
              <h3 className="mt-1 text-xl font-semibold">{r.company}</h3>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">{r.period}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {r.focus}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.wins.map((w) => (
                  <span key={w} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 text-neon-cyan border border-neon-cyan/30">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
