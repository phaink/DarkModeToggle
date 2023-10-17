"use client";

import { createContext } from "react";
import { useState } from "react";
type tMode = "light" | "dark";

export const ThemeContext = createContext<tMode>("light");
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState<tMode>("dark");
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className={`theme ${mode}`}> {children} </div>
    </ThemeContext.Provider>
  );
};
