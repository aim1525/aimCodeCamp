type Theme = {
  id: string;
  label: string;
};

type ThemeSwitcherProps = {
  themes: Theme[];
  activeTheme: string;
  onThemeChange: (theme: string) => void;
};

const ThemeSwitcher = ({ themes, activeTheme, onThemeChange }: ThemeSwitcherProps) => {
  return (
    <div className="theme-switcher">
      <p className="theme-title">Theme Switcher</p>
      <div className="theme-buttons">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            className={activeTheme === theme.id ? "active" : undefined}
            onClick={() => onThemeChange(theme.id)}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
