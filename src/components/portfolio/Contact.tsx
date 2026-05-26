import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio · ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:ramana121198@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 600);
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="gradient-text">smart</span></>}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card neon-border rounded-2xl p-6 flex flex-col gap-4"
        >
          <p className="text-muted-foreground">
            Open to AI Engineer roles, agentic AI collaborations, and SAP + AI
            consulting. Reach out and let's talk.
          </p>
          <a
            href="mailto:ramana121198@gmail.com"
            className="flex items-center gap-3 rounded-xl bg-primary text-primary-foreground px-4 py-3 font-medium hover:opacity-90 transition glow-cyan"
          >
            <Mail className="size-4" /> ramana121198@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-ramana-veeraiahgari-9042b3169/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 font-medium hover:text-neon-cyan transition"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/vvramana007"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 px-4 py-3 font-medium hover:text-neon-cyan transition"
          >
            <Github className="size-4" /> GitHub
          </a>
          <p className="text-xs font-mono text-muted-foreground mt-auto">
            Based in Fort Collins, Colorado · open to remote
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card neon-border rounded-2xl p-6 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Name
            </label>
            <input
              required
              name="name"
              className="rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition"
              placeholder="you@company.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="rounded-xl bg-muted/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition resize-none"
              placeholder="Tell me about the role or project…"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition disabled:opacity-60 glow-cyan"
          >
            <Send className="size-4" />
            {sending ? "Sending…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
