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

// Step 3: Use the Provider to Wrap the Component tree
export default function App() {
  return (
    <GreetingProvider>
      <Greeting />
    </GreetingProvider>
  );
}

// Step 4.1: Create Custom hooks that return the context values
function useUsername() {
  return useContext(GreetingContext);
}

// Step 4.2: Access context in Consumer Components - using a custom hook
function Greeting() {
  const { username, setUsername } = useUsername();
  return (
    <div className="card p-3">
      <h1>Parent component: <small>Hello {username}</small></h1>
      <div>
      Change Name: <input
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <Child />
    </div>
  );
}

function Child() {
  const { username } = useUsername();
  return (
    <h2 className="card mt-2 p-3">Child component: <small>Hello {username}</small></h2>
  );
}