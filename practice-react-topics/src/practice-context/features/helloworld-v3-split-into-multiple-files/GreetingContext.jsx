import { useState, useContext, createContext } from 'react';

// Step 1: Create a Context
const GreetingContext = createContext('World', () => 'World');

// Step 2: Create a Provider Component
const GreetingProvider = ({ children }) => {
  const [username, setUsername] = useState('World');

 return (
   <GreetingContext.Provider value={{ username, setUsername }}>
     {children}
   </GreetingContext.Provider>
 );
}

// Step 4.1: Create Custom hooks that return the context values
function useUsername() {
  return useContext(GreetingContext);
}

export { GreetingProvider, useUsername };