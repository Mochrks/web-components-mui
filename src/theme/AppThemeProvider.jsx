"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createMainTheme } from "./mainTheme";
import PropTypes from "prop-types";

const ColorModeContext = createContext({ mode: "light", toggleColorMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const value = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((m) => (m === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  const theme = useMemo(() => createMainTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
