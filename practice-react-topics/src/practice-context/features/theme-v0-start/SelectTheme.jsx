export default function SelectTheme({ theme, toggleTheme }) {
  return (
    <div className="form-check">
      <input id="ckbox" type="checkbox" className="form-check-input"
        checked={theme === 'dark'}
        onChange={() => toggleTheme()}
      />
      <label htmlFor="ckbox" className="form-check-label">Set Dark Theme</label>
    </div>
  );
}