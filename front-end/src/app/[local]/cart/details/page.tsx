"use client";
import { totalAtom } from "@/atoms/cart-atom";
import {
  activeStepAtom,
  completedStepsAtom,
  stepsAtom,
} from "@/atoms/stepperAtoms";
import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Details() {
  const [total, setTotal] = useRecoilState(totalAtom);

  const [steps, setSteps] = useRecoilState(stepsAtom);
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const [completed, setCompleted] = useRecoilState(completedStepsAtom);

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
    // const newActiveStep =
    //   isLastStep() && !allStepsCompleted()
    //     ? // It's the last step, but not all steps have been completed,
    //       // find the first step that has been completed
    //       steps.findIndex((step, i) => !(i in completed))
    //     : activeStep + 1;
    // setActiveStep(newActiveStep);
    // localStorage.setItem("activeStep", newActiveStep.toString());
  };

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    setActiveStep(1);
    localStorage.setItem("activeStep", "1");
  }, []);

  return (
    <Stack
      component={motion.section}
      sx={{
        display: "flex",
        flexDirection: useMediaQuery("(min-width:800px)")
          ? "row"
          : "column-reverse",
        gap: 3,
      }}
    >
      <Stack sx={{ flexGrow: 2, gap: 3 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1">Shipping Address</Typography>

          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={2}
            mt={2}
          >
            <Stack gap={2} flexGrow={1}>
              <TextField
                size="small"
                id="outlined-textarea"
                label="Full Name"
                placeholder="Full Name"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label="Zip code"
                placeholder="Zip code"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="address1"
                placeholder="address1"
                multiline
              />
            </Stack>
            <Stack gap={2} flexGrow={1}>
              <TextField
                size="small"
                id="outlined-textarea"
                type="email"
                label="Email"
                placeholder="Email"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="Company"
                placeholder="Company"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="Country"
                placeholder="Country"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="address2"
                placeholder="address2"
                multiline
              />
            </Stack>
          </Stack>
        </Paper>
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Button
            onClick={handleBack}
            sx={{ flexGrow: 1 }}
            variant="outlined"
            color="error"
          >
            Back To Cart
          </Button>

          <Link href="payment" style={{ flexGrow: 1 }}>
            <Button
              sx={{ width: "100%" }}
              onClick={handleNext}
              variant="contained"
              color="error"
            >
              Proceed To Payment
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Paper sx={{ p: 2, flexGrow: 1, height: "fit-content" }}>
        <Stack flexGrow={1} p={0} gap={1} justifyContent={"start"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">SubTotal:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">Shipping:</Typography>
            <Typography variant="body1">-</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">Tax:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              $40.00
            </Typography>
          </Stack>
          <Typography variant="body1">Discount:</Typography>
          <Divider />
          <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
            ${(total + 40).toFixed(2)}
          </Typography>
          <TextField
            size="small"
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Voucher"
            multiline
          />
          <Button variant="outlined" color="error">
            Checkout
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
