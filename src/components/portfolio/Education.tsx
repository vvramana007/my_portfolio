import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const certs = [
  "IBM Generative AI: Prompt Engineering",
  "Oracle Fusion AI Agent Studio — Foundations",
  "Oracle Cloud Infrastructure 2025 — Application Integration Pro",
  "Microsoft Azure AI Fundamentals",
  "Multi AI Agent Systems with crewAI",
  "Machine Learning Specialization — Stanford & DeepLearning.AI",
  "HackerRank SQL (Intermediate)",
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Credentials"
      title={<>Always <span className="gradient-text">learning</span></>}
    >
      <div className="grid md:grid-cols-5 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-card neon-border rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 size-40 rounded-full bg-neon-blue/15 blur-2xl" />
          <GraduationCap className="size-6 text-neon-cyan" />
          <h3 className="mt-3 text-lg font-semibold">Master's in Computer Information Systems</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Colorado State University · Fort Collins
          </p>
          <p className="text-xs font-mono text-neon-cyan mt-2">Jan 2024 — May 2025</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3 glass-card neon-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="size-5 text-neon-cyan" />
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {certs.map((c) => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-neon-cyan shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
