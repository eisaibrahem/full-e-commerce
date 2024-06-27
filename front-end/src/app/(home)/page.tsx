"use client";
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Header from "../Components/header/Header";
import Hero from "../Components/hero/Hero";
import Footer from "../Components/footer/Footer";
import Products from "../Components/products/Products";
import ScrollToTop from "../Components/scroll/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { useRouter } from "next/router";
import { IntlProvider } from "next-intl";

export default function Home({ local }: { local: string }) {
  const [theme, colorMode] = useMode();

  // Provide a default locale in case `local` is undefined
  const locale = local || "en";

  let messages;
  try {
    messages = require(`../../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}`, error);
    messages = {}; // Provide an empty object or a default set of messages
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          {/* @ts-ignore */}
          <IntlProvider messages={messages} locale={locale}>
            <Box>
              <Header local={locale} />
              {/* @ts-ignore */}
              <Box bgcolor={theme.palette.bgColor.main}>
                <Hero />
              </Box>
              <Products />
              <ScrollToTop />
            </Box>
          </IntlProvider>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
