import React, { useContext } from "react";

const themes = {
  dark: {
    colors: {
      foreground: "#f2f2f2",
      background: "#282a36",
      primary: {
        main: "rgb(0, 188, 212)",
      },
      secondary: {
        main: "#50fa7b",
      },
    },
  },
};

const ThemeContext = React.createContext(themes.dark);

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={themes.dark}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
