import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, LineChart, Workflow, Cloud } from "lucide-react";

const highlights = [
  { icon: Brain, label: "Agentic AI" },
  { icon: LineChart, label: "ML & Forecasting" },
  { icon: Workflow, label: "RAG Pipelines" },
  { icon: Cloud, label: "MLOps on Azure / AWS" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Bridging <span className="gradient-text">AI</span> and <span className="gradient-text">ML</span> at scale</>}
    >
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-4 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I'm an <span className="text-foreground font-medium">AI / ML Engineer with 4+ years</span>{" "}
            of experience across the financial and logistics sectors. I specialize in{" "}
            <span className="text-foreground font-medium">
              agentic workflows, high-precision RAG architectures, and scalable ML pipelines
            </span>
            .
          </p>
          <p>
            At <span className="text-foreground font-medium">Northern Trust</span>, I architect
            multi-agent research systems on Azure OpenAI + LangGraph that cut institutional
            analysis time by 65%. At <span className="text-foreground font-medium">TCS</span>, I
            built forecasting and routing models (XGBoost, LSTM, Spark) that delivered 30%
            operational savings.
          </p>
          <p className="text-base">
            My toolkit spans{" "}
            <span className="text-foreground">
              LangGraph, Semantic Kernel, Azure OpenAI, Hugging Face, Databricks, Airflow,
              FastAPI, Docker, Kubernetes, and MLflow
            </span>
            .
          </p>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
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
