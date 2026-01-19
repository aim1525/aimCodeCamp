import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import Hero from "./components/Hero";
import ProgressChecklist from "./components/ProgressChecklist";
import Projects from "./components/Projects";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { defaultProfile, profile } from "./data/profile";
import { defaultProjects, projectsData } from "./data/projectsData";
import {
  createTripleClickHandler,
  fireConfetti,
  getEasterEggUnlocked,
  getStoredTheme,
  setEasterEggUnlocked,
  setStoredTheme,
} from "./utils/easterEgg";

const themes = [
  { id: "classic", label: "Classic" },
  { id: "neon", label: "Neon" },
  { id: "sunset", label: "Sunset" },
];

const App = () => {
  const [easterEggUnlockedState, setEasterEggUnlockedState] = useState(false);
  const [theme, setTheme] = useState("classic");
  const confettiCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setEasterEggUnlockedState(getEasterEggUnlocked());
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    setStoredTheme(theme);
  }, [theme]);

  const handleUnlock = useCallback(() => {
    setEasterEggUnlockedState(true);
    setEasterEggUnlocked(true);
    if (confettiCanvasRef.current) {
      fireConfetti(confettiCanvasRef.current, 2000);
    }
  }, []);

  const handleTripleClick = useMemo(
    () => createTripleClickHandler(handleUnlock),
    [handleUnlock],
  );

  return (
    <div className="app">
      <canvas ref={confettiCanvasRef} className="confetti-canvas" aria-hidden="true" />
      <header className="header">
        <nav>
          <span className="logo">SCC Code Camp</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero
          name={profile.name}
          tagline={profile.tagline}
          cta={
            <a className="button primary" href="#contact">
              Build with me
            </a>
          }
        />

        <ProgressChecklist
          name={profile.name}
          tagline={profile.tagline}
          defaultName={defaultProfile.name}
          defaultTagline={defaultProfile.tagline}
          projectsCount={projectsData.length}
          defaultProjectsCount={defaultProjects.length}
          easterEggUnlocked={easterEggUnlockedState}
          badge={<span className="badge">15-min Lab</span>}
        />

        <section className="section" id="about">
          <div className="section-header">
            <h2>About</h2>
            <p>Share a quick summary about your goals, vibe, or favorite tech stack.</p>
          </div>
          <div className="card">
            <p>
              This starter kit is all about speed: personalize two files, unlock the easter egg, and
              ship your link in minutes.
            </p>
          </div>
        </section>

        <Projects projects={projectsData} />

        <section className="section" id="contact">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Make it easy for mentors and friends to reach you.</p>
          </div>
          <div className="contact-card">
            <p>
              <strong>Email:</strong> you@example.com
            </p>
            <p>
              <strong>GitHub:</strong> github.com/your-handle
            </p>
            <button className="button ghost" type="button">
              Copy email
            </button>
          </div>
        </section>

        {easterEggUnlockedState ? (
          <section className="section" id="theme">
            <div className="section-header">
              <h2>Unlocked</h2>
              <p>Pick a skin to personalize your portfolio.</p>
            </div>
            <ThemeSwitcher
              themes={themes}
              activeTheme={theme}
              onThemeChange={setTheme}
            />
          </section>
        ) : null}
      </main>

      <footer className="footer">
        <p>Made for the SCC Code Camp micro-lab.</p>
        <button
          type="button"
          className="secret-dot"
          onClick={handleTripleClick}
          aria-label="Hidden theme unlock"
          title=""
        />
      </footer>
    </div>
  );
};

export default App;
