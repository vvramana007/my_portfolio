import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Cpu, Workflow, Cloud } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Agentic AI" },
  { icon: Cpu, label: "RAG Systems" },
  { icon: Workflow, label: "Automation" },
  { icon: Cloud, label: "Cloud-native" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering <span className="gradient-text">intelligent systems</span></>}
    >
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 text-lg text-muted-foreground leading-relaxed"
        >
          I'm an AI & ML Engineer with{" "}
          <span className="text-foreground font-medium">4+ years of experience</span>{" "}
          building agentic AI systems, high-precision RAG pipelines, workflow
          automation platforms, and scalable cloud-native AI solutions. I specialize in{" "}
          <span className="text-foreground font-medium">
            LangChain, LangGraph, Azure OpenAI, IBM watsonx, n8n automation, SAP + AI
            integrations
          </span>
          , and production-ready AI systems.
        </motion.p>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card neon-border rounded-2xl p-4 flex flex-col gap-2"
            >
              <h.icon className="size-5 text-neon-cyan" />
              <span className="text-sm font-medium">{h.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
