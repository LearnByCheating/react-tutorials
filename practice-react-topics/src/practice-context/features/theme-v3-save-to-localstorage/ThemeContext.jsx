import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider({children}){
  const [theme, setTheme] = useState(() => {
    // get stored value
    let storedTheme = localStorage.getItem('theme');
    storedTheme = storedTheme ? storedTheme : 'light';
    return storedTheme;
  });

  useEffect(() => {
    document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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