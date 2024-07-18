import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

export default function Child() {
  const {theme} = useContext(ThemeContext);
  return (
    <ul className="list-group pb-2">
      <li className={`${theme} list-group-item`}>This is the child component</li>
    </ul>
  );
}
