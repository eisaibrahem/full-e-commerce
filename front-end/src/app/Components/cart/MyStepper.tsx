import {
  activeStepAtom,
  completedStepsAtom,
  stepsAtom,
} from "@/atoms/stepperAtoms";
import { useMode } from "@/theme";
import {
  Step,
  StepButton,
  StepConnector,
  stepConnectorClasses,
  Stepper,
  styled,
  useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { Navigation } from "swiper/modules";

export default function MyStepper({ local }: { local: string }) {
  const theme = useTheme();

  const [steps, setSteps] = useRecoilState(stepsAtom);
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const [completed, setCompleted] = useRecoilState(completedStepsAtom);

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

  //   const handleComplete = () => {
  //     const newCompleted = completed;
  //     newCompleted[activeStep] = true;
  //     setCompleted(newCompleted);
  //     handleNext();
  //   };

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
  const t = useTranslations("cart");
  return (
    <>
      {activeStep !== 3 && (
        <Stepper
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          sx={{
            flexWrap: "wrap",
            textAlign: "center",
            mx: "auto",
            width: "60%",
            mb: 2,
            ".MuiTouchRipple-root": {},
            ".MuiStep-root": {
              bgcolor: primaryColor,
            },

            display: { xs: "none", sm: "flex" },
          }}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={completed[index]}
              sx={{
                my: 1,
                py: 0.5,
                px: 1.5,

                borderRadius: "25px",
                display: "flex",

                mx: "0",
                ".MuiStepLabel-label": {
                  fontWeight: "bold !important",

                  color: secondaryColor,
                },

                ".Mui-completed": {
                  color: "white !important",
                },
                ".Mui-active": {
                  color: "#fff !important",
                },

                circle: {
                  color: "white !important",
                  opacity: "0.2 ",
                  backgroundColor: "white !important",
                },
                " .MuiStepIcon-text": {
                  fill: "white !important",
                  color: "white !important",
                },
                ".MuiSvgIcon-root": {
                  color: "white !important",
                },
              }}
            >
              <Link
                href={
                  activeStep === 0
                    ? index === 0
                      ? `/${local}/cart`
                      : index === 1
                      ? "cart/details"
                      : "cart/payment"
                    : index === 0
                    ? `/${local}/cart`
                    : index === 1
                    ? "details"
                    : "payment"
                }
              >
                <StepButton
                  color="inherit"
                  sx={{
                    fontWeight: "bold",
                    color: "white",
                    px: 1.2,
                    py: 0.6,
                    my: -0.6,
                    mx: -1.2,

                    borderRadius: "25px",
                  }}
                  onClick={handleStep(index)}
                >
                  {t(label)}
                </StepButton>
              </Link>
            </Step>
          ))}
        </Stepper>
      )}
    </>
  );
}
