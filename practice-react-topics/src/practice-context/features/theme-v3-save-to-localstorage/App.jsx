import { ThemeProvider } from './ThemeContext.jsx';
import Parent from './Parent.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <Parent />         
    </ThemeProvider>
  );
}
