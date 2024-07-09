"use client";
import {
  Box,
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
import React, { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { totalAtom } from "@/atoms/cart-atom";
import { useRecoilState } from "recoil";
import Link from "next/link";
import {
  activeStepAtom,
  completedStepsAtom,
  stepsAtom,
} from "@/atoms/stepperAtoms";

export default function Payment() {
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
  const [selectedValue, setSelectedValue] = React.useState(
    "Pay with credit card"
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    setActiveStep(2);
    localStorage.setItem("activeStep", "2");
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
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Stack sx={{ flexGrow: 2, gap: 3, transition: "all 0.3s ease-in-out" }}>
        <Paper sx={{ p: 2 }}>
          <FormControl sx={{ display: "block" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Pay with credit card"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="Pay with credit card"
                control={<Radio />}
                label="Pay with credit card"
              />

              {selectedValue === "Pay with credit card" && (
                <>
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
                        label="Card Number"
                        placeholder="Card Number"
                        multiline
                      />
                      <TextField
                        size="small"
                        id="outlined-textarea"
                        type="number"
                        label="Name On Card"
                        placeholder="Name On Card"
                        multiline
                      />
                    </Stack>
                    <Stack gap={2} flexGrow={1}>
                      <TextField
                        size="small"
                        id="outlined-textarea"
                        type="number"
                        label="Exp Data"
                        placeholder="MM/YY"
                        multiline
                      />
                      <TextField
                        size="small"
                        id="outlined-textarea"
                        label="Company"
                        placeholder="Company"
                        multiline
                      />
                    </Stack>
                  </Stack>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ my: 2, mr: "auto" }}
                  >
                    Submit
                  </Button>
                </>
              )}
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                value="Pay with Paypal"
                control={<Radio />}
                label="Pay with Paypal"
              />
              {selectedValue === "Pay with Paypal" && (
                <>
                  <Stack direction={"row"} gap={2} alignItems={"center"}>
                    <TextField
                      sx={{ flexGrow: 1 }}
                      size="small"
                      id="outlined-textarea"
                      label="Card Number"
                      placeholder="Card Number"
                      multiline
                    />
                    <Button variant="outlined" color="error" sx={{ my: 2 }}>
                      Submit
                    </Button>
                  </Stack>
                </>
              )}
              <Divider sx={{ my: 2 }} />

              <FormControlLabel
                value="Cash On Delivery"
                control={<Radio />}
                label="Cash On Delivery"
              />
            </RadioGroup>
          </FormControl>
        </Paper>
        <Stack
          direction={"row"}
          gap={3}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Button
            onClick={handleBack}
            sx={{ flexGrow: 1 }}
            variant="outlined"
            color="error"
          >
            Back To Checkout
          </Button>
          <Link href="review" style={{ flexGrow: 1 }}>
            <Button sx={{ width: "100%" }} variant="contained" color="error">
              Review
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Paper sx={{ p: 2, flexGrow: 1, height: "fit-content" }}>
        <Stack flexGrow={1} p={0} gap={1}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" color="#777">
              SubTotal:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" color="#777">
              Shipping:
            </Typography>
            <Typography variant="body1">-</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" color="#777">
              Tax:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              $40.00
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1" color="#777">
              Discount:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              $20.00
            </Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Typography
            textAlign={"end"}
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            ${(total + 40 - 20).toFixed(2)}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}
