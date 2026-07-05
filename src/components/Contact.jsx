import { Github, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact({ content }) {
  return (
    <section id="contact" className="section-padding pb-16">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-7">
          <span className="section-kicker">{content.kicker}</span>
          <h2 className="mt-4 text-3xl font-bold text-[var(--heading)] sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            {content.body}
          </p>
          <div className="mt-8 space-y-4">
            <a href={`mailto:${content.email}`} className="contact-link">
              <Mail size={18} /> {content.email}
            </a>
            <a href={`tel:${content.phone.replaceAll(" ", "")}`} className="contact-link">
              <Phone size={18} /> {content.phone}
            </a>
            <a href={content.github} className="contact-link">
              <Github size={18} /> GitHub
            </a>
            <div className="contact-link">
              <MapPin size={18} /> {content.address}
            </div>
          </div>
        </div>

        <form className="glass-card grid gap-4 p-7" onSubmit={(event) => event.preventDefault()}>
          <label className="field-label">
            {content.nameLabel}
            <input className="field-input" type="text" name="name" placeholder={content.namePlaceholder} />
          </label>
          <label className="field-label">
            {content.emailLabel}
            <input className="field-input" type="email" name="email" placeholder={content.emailPlaceholder} />
          </label>
          <label className="field-label">
            {content.messageLabel}
            <textarea
              className="field-input min-h-32 resize-y"
              name="message"
              placeholder={content.messagePlaceholder}
            />
          </label>
          <button type="submit" className="primary-button justify-center">
            {content.submit} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
