import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toogleAuth = ()=>{
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, toogleAuth: toogleAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
