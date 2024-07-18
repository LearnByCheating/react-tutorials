import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export default function SelectTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  function handleChange(e) {
    toggleTheme(e.target.checked ? 'dark' : 'light');
  }

  return (
    <div className={`${theme} border-bottom py-2`}>
      <input
        id="theme"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleChange}
        className="form-check-input mx-2"
      />
      <label className="form-check-label" htmlFor="theme">
        Set Dark Theme
      </label>
    </div>
  );
}