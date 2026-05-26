import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Workflow, Cloud, Database, LineChart, Cpu } from "lucide-react";

const groups = [
  {
    title: "GenAI & LLMs",
    icon: Brain,
    items: ["LangGraph", "LangChain", "Azure OpenAI", "Semantic Kernel", "RAG", "Prompt Eng.", "Hugging Face"],
  },
  {
    title: "Machine Learning",
    icon: LineChart,
    items: ["XGBoost", "LSTM", "Prophet", "Scikit-learn", "Time-series", "Model Tuning"],
  },
  {
    title: "Data Engineering",
    icon: Database,
    items: ["Apache Spark", "Databricks", "Airflow", "dbt", "Azure Data Factory", "SQL"],
  },
  {
    title: "Vector & Retrieval",
    icon: Cpu,
    items: ["Azure AI Search", "FAISS", "Hybrid Search", "Hierarchical Chunking", "Embeddings"],
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    items: ["Azure ML", "AWS", "Docker", "Kubernetes", "FastAPI", "MLflow", "CI/CD"],
  },
  {
    title: "Automation",
    icon: Workflow,
    items: ["n8n", "REST APIs", "AI Agents", "Workflow Orchestration"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The full <span className="gradient-text">AI / ML</span> stack</>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass-card neon-border rounded-2xl p-6 group relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-neon-purple/10 blur-2xl group-hover:bg-neon-cyan/20 transition" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="size-10 rounded-xl bg-primary/15 text-neon-cyan grid place-items-center">
                  <g.icon className="size-5" />
                </span>
                <h3 className="font-semibold text-lg">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-muted/40 text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/40 transition"
                  >
                    {it}
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
