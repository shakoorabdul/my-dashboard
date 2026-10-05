import { useState } from "react";
export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark card" : "card"}>
      <h2>Theme Toggle</h2>
      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Change Theme
      </button>
      {darkMode ? (
        <p>Dark Mode Enabled</p>
      ) : (
        <p>Light Mode Enabled</p>
      )}
    </div>
  );
}
