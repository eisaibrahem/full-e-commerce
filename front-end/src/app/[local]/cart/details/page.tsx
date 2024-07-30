"use client";
import { totalAtom } from "@/atoms/cartAtoms";
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
import { useTranslations } from "next-intl";
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

  const t = useTranslations("cart");
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
          <Typography variant="subtitle1">{t("shippingAddress")}</Typography>

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
                label={t("fullName")}
                placeholder={t("fullName")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label={t("phoneNumber")}
                placeholder={t("phoneNumber")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label={t("zipCode")}
                placeholder={t("zipCode")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label={t("address1")}
                placeholder={t("address1")}
                multiline
              />
            </Stack>
            <Stack gap={2} flexGrow={1}>
              <TextField
                size="small"
                id="outlined-textarea"
                type="email"
                label={t("email")}
                placeholder={t("email")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label={t("city")}
                placeholder={t("city")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label={t("state")}
                placeholder={t("state")}
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label={t("address2")}
                placeholder={t("address2")}
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
            {t("Back To Cart")}
          </Button>

          <Link href="payment" style={{ flexGrow: 1 }}>
            <Button
              sx={{ width: "100%" }}
              onClick={handleNext}
              variant="contained"
              color="error"
            >
              {t("Proceed To Payment")}
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
            <Typography variant="body1">{t("subtotal")}:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">{t("shipping")}:</Typography>
            <Typography variant="body1">-</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">{t("tax")}:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              $40.00
            </Typography>
          </Stack>
          <Typography variant="body1">{t("discount")}:</Typography>
          <Divider />
          <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
            ${(total + 40).toFixed(2)}
          </Typography>
          <TextField
            size="small"
            id="outlined-textarea"
            label={t("voucher")}
            placeholder="EISA-545"
            multiline
          />
          <Button variant="outlined" color="error">
            {t("checkout")}
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
