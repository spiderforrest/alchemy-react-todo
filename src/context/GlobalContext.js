import React, { createContext } from 'react';

export const GlobalContext = createContext('');
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
