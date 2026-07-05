import { ExternalLink, Github } from "lucide-react";

export default function Projects({ content }) {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>
            {content.body}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="mb-6 h-36 overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)]">
                <div className={`project-visual project-visual-${index + 1}`} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--heading)]">{project.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{project.description}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="mini-pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a href="#contact" className="project-button">
                  <ExternalLink size={16} /> {content.demoButton}
                </a>
                <a href="#contact" className="project-button">
                  <Github size={16} /> {content.codeButton}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
