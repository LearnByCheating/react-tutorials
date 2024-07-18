import { useState, createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialAuth = { currentUser: '', isLoggedIn: false  };
  const [auth, setAuth] = useState(initialAuth);
  return (
    <AuthContext.Provider value={{auth, setAuth}}> 
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
