import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export default function SelectTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="form-check">
      <input
        id="ckbox"
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => toggleTheme()}
        className="form-check-input"
      />
      <label 
        htmlFor="ckbox" 
        className="form-check-label"
      >Set Dark Theme</label>
    </div>
  );
}