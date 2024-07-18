import { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext.jsx';
import SelectTheme from './SelectTheme.jsx';
import TodoList from './TodoList.jsx';

export default function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <div className={`${theme} container`}>
        <SelectTheme />
        <TodoList />
      </div>      
    </ThemeProvider>
  );
}