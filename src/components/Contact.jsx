import { useState } from "react";
import { Github, Mail, MapPin, Phone, Send } from "lucide-react";

const contactFormEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

export default function Contact({ content }) {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      message: formData.get("message")?.toString().trim(),
      source: "Portfolio contact form",
    };

    setStatus("sending");
    setStatusMessage(content.sendingMessage);

    if (!contactFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`,
      );
      window.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      setStatusMessage(content.mailFallbackMessage);
      return;
    }

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
      setStatusMessage(content.successMessage);
    } catch {
      setStatus("error");
      setStatusMessage(content.errorMessage);
    }
  };

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

        <form className="glass-card grid gap-4 p-7" onSubmit={handleSubmit} noValidate>
          <label className="field-label">
            {content.nameLabel}
            <input
              className="field-input"
              type="text"
              name="name"
              placeholder={content.namePlaceholder}
              autoComplete="name"
              required
            />
          </label>
          <label className="field-label">
            {content.emailLabel}
            <input
              className="field-input"
              type="email"
              name="email"
              placeholder={content.emailPlaceholder}
              autoComplete="email"
              required
            />
          </label>
          <label className="field-label">
            {content.messageLabel}
            <textarea
              className="field-input min-h-32 resize-y"
              name="message"
              placeholder={content.messagePlaceholder}
              minLength={10}
              required
            />
          </label>
          <div className="space-y-3">
            <button type="submit" className="primary-button w-full justify-center" disabled={status === "sending"}>
              {status === "sending" ? content.sendingButton : content.submit} <Send size={18} />
            </button>
            <p className="form-note" aria-live="polite">{statusMessage || content.formNote}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
