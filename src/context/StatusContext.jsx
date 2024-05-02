import { createContext, useContext, useState } from "react";

// Create global context for global state

const GlobalState = createContext();

// Global Status Provider
export const StatusProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({saludo:"Hola Mundo"});

  return (
    <GlobalState.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalState);
