import { Compass, Layers, Rocket } from "lucide-react";

const icons = [Compass, Layers, Rocket];

export default function About({ content }) {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>
            {content.body}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {content.strengths.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="glass-card group p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-strong)] text-[var(--accent)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-[var(--heading)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
