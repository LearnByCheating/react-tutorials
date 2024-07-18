import { useState } from 'react';
import Parent from './Parent.jsx';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? 'dark' : 'light';

  return (
    <div className={theme}>
      <label>
        <input className="mx-1"
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Set Dark Theme
      </label>
      <Parent theme={theme} />    
    </div>
  )
}
