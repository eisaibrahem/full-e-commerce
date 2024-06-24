"use client";
import Typography from "@mui/material/Typography";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Header from "../Components/header/Header";
import Hero from "../Components/hero/Hero";
import Footer from "../Components/footer/Footer";
import Products from "../Components/products/Products";
import ScrollToTop from "../Components/scroll/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline />
        <Provider store={store}>
          <Box>
            <Header />
            {/* @ts-ignore */}
            <Box bgcolor={theme.palette.bgColor.main}>
              <Hero />
            </Box>
            <Products />
            <Footer />
            <ScrollToTop />
          </Box>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
