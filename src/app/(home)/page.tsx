"use client";
import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Header from "../Components/header/Header";
import Hero from "../Components/hero/Hero";

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <Box>
          <Header />
          <Hero />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
