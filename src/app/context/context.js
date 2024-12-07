'use client'

import { createContext, useState, useContext } from 'react';
import users from '../../data/datasets/users.json';
import years from '../../data/datasets/years.json';

  // Create the Context
const GlobalContext = createContext();

  // Create a Provider Component
export const GlobalProvider = ({ children }) => {
  const [ user, setUser ] = useState(users.data[0]);
  const [ year, setYear ] = useState(years.data.at(-1)); // select most recent year

  return (
    <GlobalContext.Provider value = {{ user, setUser, year, setYear }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
