// E:\Projects\web\e-commerce\front-end\src\app\RecoilProvider.tsx
"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Header from "./Components/header/Header";
import { IntlProvider } from "next-intl";
import { ColorModeContext, useMode } from "@/theme";
import { Box, ScopedCssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import Footer from "./Components/footer/Footer";

export default function RecoilProvider({
  local,
  children,
}: {
  local: string;
  children: React.ReactNode;
}) {
  const [theme, colorMode] = useMode();

  let messages;
  try {
    messages = require(`../../messages/${local}.json`);
  } catch (error) {
    console.error(`Failed to load messages for locale ${local}`, error);
    messages = {}; // Provide an empty object or a default set of messages
  }
  const mytheme = useTheme();
  return (
    <RecoilRoot>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ScopedCssBaseline />
          <IntlProvider messages={messages} locale={local}>
            <Provider store={store}>
              {/* @ts-ignore */}
              <Box bgcolor={theme.palette.bgColor.main}>
                <Header local={local} />
                {children}
                <Footer />
              </Box>
            </Provider>
          </IntlProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </RecoilRoot>
  );
}
