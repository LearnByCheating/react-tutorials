import { useState } from 'react';
import SelectTheme from './SelectTheme.jsx';
import Child from './Child.jsx';

export default function Parent() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={'border p-3 ' + theme}>
      <SelectTheme toggleTheme={toggleTheme} theme={theme} />
      <hr />
      <h2>This is the parent component</h2>
      <button className={`${theme} btn btn-outline-dark my-2`}>Click Me</button>
      <Child theme={theme} />
    </div>
  );
}
