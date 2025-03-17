import { useContext, createContext, useState, useEffect } from "react";
import { profile } from "../services/api-service";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    profile()
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  function login(user) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  function updateUserContext(updatedData) {
    setUser(prevUser => ({ ...prevUser, ...updatedData }));
  }
  
  const contextData = {
    user,
    login,
    logout,
    updateUserContext,
  };

  if (user === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}