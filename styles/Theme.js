import React, { useContext } from "react";

const themes = {
  dark: {
    colors: {
      foreground: "#f8f8f2",
      background: "#282a36",
      backgroundSecondary: "#22212c",
      primary: {
        main: "rgb(0, 188, 212)",
      },
      secondary: {
        main: "#50fa7b",
      },
      divider: "#44475a",
    },
  },
};

const ThemeContext = React.createContext(themes.dark);

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={themes.dark}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
