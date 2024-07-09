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
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";

export default function MyStepper() {
  const [theme, colorMode] = useMode();

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
              <StepButton
                color="inherit"
                sx={{ fontWeight: "bold", color: "white" }}
                onClick={handleStep(index)}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      )}
    </>
  );
}
