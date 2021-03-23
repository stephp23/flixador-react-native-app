import React, { useState, useContext, createContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const ThemeContext = createContext();
const ThemeUpdate = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useThemeUpdate = () => {
  return useContext(ThemeUpdate);
};
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const handleDark = () => setDark(!dark);
  return (
    <ThemeContext.Provider value={dark}>
      <ThemeUpdate.Provider value={handleDark}>{children}</ThemeUpdate.Provider>
    </ThemeContext.Provider>
  );
};
