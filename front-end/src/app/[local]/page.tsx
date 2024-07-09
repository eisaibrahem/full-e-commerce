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
import { RecoilRoot } from "recoil";

export default function Home({
  params: { local },
}: {
  params: { local: string };
}) {
  const [theme, colorMode] = useMode();

  let messages;
  try {
    messages = require(`../../../messages/${local}.json`);
  } catch (error) {
    console.error(`Failed to load messages for locale ${local}`, error);
    messages = {}; // Provide an empty object or a default set of messages
  }

  return (
    <RecoilRoot>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            {/* @ts-ignore */}
            <IntlProvider messages={messages} locale={local}>
              <Box>
                <Header local={local} isCart={false} />
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
    </RecoilRoot>
  );
}
