import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Can't use AuthContext outside of provider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
