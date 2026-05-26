import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neon-cyan">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
