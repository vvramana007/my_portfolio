import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-mono">
          © {new Date().getFullYear()} Venkata Ramana · Built with AI & care
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:ramana121198@gmail.com" aria-label="Email" className="hover:text-neon-cyan transition">
            <Mail className="size-4" />
          </a>
          <a href="https://github.com/vvramana007" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon-cyan transition">
            <Github className="size-4" />
          </a>
          <a href="https://www.linkedin.com/in/venkata-ramana-veeraiahgari-9042b3169/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neon-cyan transition">
            <Linkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
