import { ExternalLink, Github } from "lucide-react";

const BADGE_CLASS = {
  java: "tech-badge-java",
  db: "tech-badge-db",
  web: "tech-badge-web",
  tool: "tech-badge-tool",
  pattern: "tech-badge-pattern",
};

export default function Projects({ content, contactGithub }) {
  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((project) => {
            const demoUrl = project.demoUrl || "#contact";
            const isExternalDemo = demoUrl.startsWith("http");

            return (
              <article key={project.title} className="project-card">
                <div className="project-image-shell mb-6 overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)]">
                  <img src={project.image} alt={project.imageAlt} className="project-image" loading="lazy" decoding="async" />
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

                {/* Tech Stack Badges */}
                <div className="tech-badge-group mt-5">
                  {project.stack.map((item) => {
                    const badgeName = typeof item === "string" ? item : item.name;
                    const badgeType = typeof item === "string" ? "tool" : item.type;
                    return (
                      <span key={badgeName} className={`tech-badge ${BADGE_CLASS[badgeType] || "tech-badge-tool"}`}>
                        {badgeName}
                      </span>
                    );
                  })}
                </div>

                <div className="project-actions">
                  <a
                    href={demoUrl}
                    className="project-button"
                    target={isExternalDemo ? "_blank" : undefined}
                    rel={isExternalDemo ? "noreferrer noopener" : undefined}
                  >
                    <ExternalLink size={16} /> {project.demoLabel || content.demoButton}
                  </a>
                  <a
                    href={project.codeUrl || contactGithub}
                    className="project-button"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Github size={16} /> {content.codeButton}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
