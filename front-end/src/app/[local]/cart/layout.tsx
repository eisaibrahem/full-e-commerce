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
import Cart from "@/app/Components/cart/Cart";
import Details from "@/app/Components/cart/Details";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Payment from "@/app/Components/cart/Payment";
import OrdersPage from "@/app/Components/cart/review";
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

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  // @ts-ignore
  const primaryColor = theme.palette.primaryColor.main;
  // @ts-ignore
  const secondaryColor = theme.palette.secondaryColor.main;

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.history.back();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));
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
                  <MyStepper />
                  {children}
                  {/* <Stack
                    direction="row"
                    justifyContent="space-between"
                    mt={2}
                    gap={2}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                  >
                    {activeStep > 0 && (
                      <Button
                        onClick={handleBack}
                        variant="outlined"
                        color="error"
                      >
                        {activeStep === 1
                          ? "Back To Cart"
                          : activeStep === 2
                          ? "Back To Checkout"
                          : "Back To Payment"}
                      </Button>
                    )}
                    {activeStep < 3 && (
                      <Link
                        style={{ marginLeft: "auto" }}
                        href={
                          activeStep === 0
                            ? "cart/details"
                            : activeStep === 1
                            ? "payment"
                            : "review"
                        }
                      >
                        <Button
                          sx={{ width: "400px" }}
                          variant="contained"
                          color="error"
                          onClick={handleNext}
                        >
                          {activeStep === 0
                            ? "Check Out"
                            : activeStep === 1
                            ? "Proccess to Payment"
                            : "review"}
                        </Button>
                      </Link>
                    )}
                  </Stack> */}
                </Container>
              </Box>
            </IntlProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Box>
    </RecoilRoot>
  );
}
