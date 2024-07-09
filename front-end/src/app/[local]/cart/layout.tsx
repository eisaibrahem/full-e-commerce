"use client";

import Header from "@/app/Components/header/Header";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

import { ColorModeContext, useMode } from "@/theme";
import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  Stack,
  StepConnector,
  stepConnectorClasses,
  styled,
  ThemeProvider,
} from "@mui/material";
import { IntlProvider } from "next-intl";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { RecoilRoot } from "recoil";
import Link from "next/link";
import MyStepper from "@/app/Components/cart/MyStepper";

const steps = ["Cart", "Details", "Payment", "Review"];

export default function Layout({
  params: { local },
  children,
}: {
  params: { local: string };
  children: React.ReactNode;
}) {
  let messages;
  try {
    messages = require(`../../../../messages/${local}.json`);
  } catch (error) {
    console.error(`Failed to load messages for locale ${local}`, error);
    messages = {}; // Provide an empty object or a default set of messages
  }
  const [theme, colorMode] = useMode();

  return (
    <RecoilRoot>
      <Box>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <IntlProvider messages={messages} locale={local}>
              <Header local={local} isCart={true} />
              {/* @ts-ignore */}
              <Box sx={{ bgcolor: theme.palette.bgColor.main, py: 2, mt: 3 }}>
                <Container>
                  <MyStepper local={local} />
                  {children}
                </Container>
              </Box>
            </IntlProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Box>
    </RecoilRoot>
  );
}
