export default function Education({ content }) {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>
            {content.body}
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-[var(--timeline)] sm:left-1/2" />
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`timeline-item ${index % 2 === 0 ? "sm:pr-[54%]" : "sm:ml-[54%]"}`}
            >
              <span className="timeline-marker" aria-hidden="true" />
              <div className="glass-card p-5">
                <p className="text-sm font-semibold text-[var(--accent)]">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--heading)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
