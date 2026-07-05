import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import { languages } from "./data.js";

const readStorage = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const writeStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The UI should still work when storage is unavailable.
  }
};

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const saved = readStorage("portfolio-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const getInitialLanguage = () => {
  if (typeof window === "undefined") return "vi";
  const saved = readStorage("portfolio-language");
  return saved === "en" || saved === "vi" ? saved : "vi";
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = languages[language];

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
    writeStorage("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === "vi" ? "vi" : "en";
    writeStorage("portfolio-language", language);
  }, [language]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));
  const toggleLanguage = () => setLanguage((current) => (current === "vi" ? "en" : "vi"));

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Navbar
        content={content}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Skills content={content.skills} />
        <Projects content={content.projects} />
        <Education content={content.education} />
        <Contact content={content.contact} />
      </main>
    </div>
  );
}
