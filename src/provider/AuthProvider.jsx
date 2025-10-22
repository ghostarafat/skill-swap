import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      displayName: "",
      photoURL: "",
    });
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
