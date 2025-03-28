import React, { createContext, useEffect, useState } from 'react';
import { getLocalstorage, setLocalstorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalstorage(); 
    const data = getLocalstorage();
    setUserData(data?.employees || []);  
  }, []);

  useEffect(() => {
    if (userData !== null) {
      localStorage.setItem("employees", JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
