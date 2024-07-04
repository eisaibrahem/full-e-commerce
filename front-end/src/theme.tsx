"use client";
import React, { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
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
            main: "#f6f9fc !important",
          },
          bgColor: {
            main: "#f6f6f6 !important",
          },
          primaryColor: {
            main: "#d23f57 !important",
          },
          textSteper: {
            main: "#e07384 !important",
          },

          secondaryColor: {
            main: "#e07384 !important",
          },
        }
      : {
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
          primaryColor: {
            main: "#e07384 !important",
          },
          textSteper: {
            main: "#d23f57 !important",
          },

          secondaryColor: {
            main: "#d23f57 !important",
          },
        }),
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") ?? "light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("mode");
      if (storedMode) {
        setMode(storedMode);
      }
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode] as const;
};
