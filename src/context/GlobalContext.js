import React, { createContext, useContext } from 'react';

const GlobalContext = createContext('');
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("Can't use GlobalContext outside of provider");
  }
  return context;
};
