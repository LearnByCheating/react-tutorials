import { useEffect, useState, createContext, useContext } from 'react';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const currentUser = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser'))
    : '';
  const isLoggedIn = currentUser ? true : false;
  const initialAuth = { currentUser, isLoggedIn };
  const [auth, setAuth] = useState(initialAuth);

  useEffect(() => {
    if (auth.isLoggedIn) {
      localStorage.setItem('currentUser', JSON.stringify(auth.currentUser));
    } else {
      localStorage.removeItem('currentUser')
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{auth, setAuth}}> 
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
