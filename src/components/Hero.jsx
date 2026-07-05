import { ArrowRight, BriefcaseBusiness, Code2, Github, Home, Mail, MessageCircle, Sparkles, UserRound } from "lucide-react";

export default function Hero({ content }) {
  return (
    <section id="home" className="hero-stage relative min-h-screen overflow-hidden px-4 pb-10 pt-28 sm:px-6 lg:pt-24">
      <div className="hero-scanline" aria-hidden="true" />
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between">
        <div className="hero-main relative flex flex-1 items-center justify-center">
          <div className="hero-availability animate-reveal">
            <span />
            {content.available}
          </div>

          <div className="hero-kicker">
            <Sparkles size={16} />
            {content.eyebrow}
          </div>

          <div className="hero-title-wrap" aria-hidden="true">
            <p>{content.name}</p>
            <h1>{content.headline}</h1>
          </div>

          <div className="hero-avatar-shell animate-float">
            <div className="hero-orbit" aria-hidden="true" />
            <img
              src="/hero-tech-visual.png"
              alt="Futuristic developer avatar visual for Nguyen Ngoc Thien portfolio"
              className="hero-avatar-image"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="960"
              height="960"
            />
            <div className="hero-chip hero-chip-left">{content.techBadge}</div>
            <div className="hero-chip hero-chip-right">{content.statusBadge}</div>
          </div>

          <aside className="os-panel diagnostics-panel">
            <div className="os-panel-header">
              <span>{content.diagnosticTitle}</span>
              <small>v2.6.0</small>
            </div>
            <div className="os-meter">
              <span style={{ width: "68%" }} />
            </div>
            <div className="os-table">
              {content.diagnosticRows.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-1.5">
              {content.meta.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </aside>

          <aside className="os-panel console-panel">
            <div className="os-panel-header">
              <span>{content.consoleTitle}</span>
              <small>tty001</small>
            </div>
            <div className="console-lines">
              {content.consoleLines.map((line) => (
                <p key={line}>
                  <span>$</span> {line}
                </p>
              ))}
            </div>
          </aside>

          <div className="hero-copy-card">
            <p>{content.tagline}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="primary-button">
                {content.primaryCta} <ArrowRight size={18} />
              </a>
              <a href="#contact" className="secondary-button">
                {content.secondaryCta} <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-bottom-row">
          <div className="hero-meta-list">
            {content.stats.map(([value, label]) => (
              <div key={label}>
                <span>{value}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <nav className="hero-dock" aria-label="Quick portfolio navigation">
            {[
              [Home, "#home", "Home"],
              [UserRound, "#about", "About"],
              [BriefcaseBusiness, "#projects", "Projects"],
              [Code2, "#skills", "Skills"],
              [MessageCircle, "#contact", "Contact"],
              [Github, "https://github.com/ngocthien2100", "GitHub"],
            ].map(([Icon, href, label]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              >
                <Icon size={20} />
              </a>
            ))}
          </nav>
          <div className="hero-focus-card">
            <span>{content.focusLabel}</span>
            <strong>{content.focus}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
