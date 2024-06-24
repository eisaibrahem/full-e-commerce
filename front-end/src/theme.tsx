"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
          backgroundSelector: {
            main: "#f6f9fc",
          },
          bgColor: {
            main: "#f6f6f6",
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },
          backgroundSelector: {
            main: "#252b32",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
          bgColor: {
            main: "#1d2021",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = window.localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
        window.localStorage.setItem(
          "mode",
          mode === "light" ? "dark" : "light"
        );
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode] as const;
};
