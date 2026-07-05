export default function Skills({ content }) {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading">
          <span>{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>
            {content.body}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {content.groups.map((group) => (
            <article key={group.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-[var(--heading)]">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
