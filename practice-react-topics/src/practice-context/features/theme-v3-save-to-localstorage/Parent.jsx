import { useTheme } from './ThemeContext.jsx';
import SelectTheme from './SelectTheme.jsx';
import Child from './Child.jsx';

export default function Parent() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} border p-3`}>
      <SelectTheme />
      <hr />
      <h2>This is the parent component</h2>
      <button className={`${theme} btn btn-outline-dark my-2`}>Click Me</button>
      <Child />
    </div>
  );
}
