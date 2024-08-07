import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({children}){
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };