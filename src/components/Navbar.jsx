import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ content, language, theme, onToggleLanguage, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-[var(--glass-border)] bg-[var(--nav-bg)] px-4 py-3 shadow-glass backdrop-blur-2xl">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home section">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-strong)] text-sm font-bold text-[var(--accent)] shadow-glow">
            NT
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-[var(--text)] sm:block">
            Nguyễn Ngọc Thiên
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {content.nav.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleLanguage}
            className="language-button"
            aria-label={`Switch language to ${content.nextLabel}`}
            title={`Switch language to ${content.nextLabel}`}
          >
            <Languages size={17} />
            <span>{language === "vi" ? "VI" : "EN"}</span>
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className="icon-button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="icon-button lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="mx-auto mt-3 max-w-6xl rounded-2xl border border-[var(--glass-border)] bg-[var(--nav-bg)] p-3 shadow-glass backdrop-blur-2xl lg:hidden"
        >
          {content.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="mobile-nav-link">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
