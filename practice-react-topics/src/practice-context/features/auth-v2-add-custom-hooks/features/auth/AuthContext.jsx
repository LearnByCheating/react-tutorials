import { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const initialAuth = { currentUser: '', isLoggedIn: false };
  const [auth, setAuth] = useState(initialAuth);
  return (
    <AuthContext.Provider value={{auth, setAuth}}> 
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
