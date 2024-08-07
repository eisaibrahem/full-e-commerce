"use client";
import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import CartAtom, { CartItem, totalAtom } from "@/atoms/cartAtoms";
import {
  activeStepAtom,
  completedStepsAtom,
  stepsAtom,
} from "@/atoms/stepperAtoms";
import Link from "next/link";
import MyListItem from "@/app/Components/cart/MylistItem";
import { useTranslations } from "next-intl";

const states = [
  { value: "20", label: "القاهرة" },
  { value: "50", label: "الاسكندرية" },
  { value: "30", label: "الجيزة" },
  { value: "40", label: "البحيرة" },
  { value: "50", label: "الدقهلية" },
  { value: "60", label: "دمياط" },
];

type CartProps = {
  setTotal: (total: number) => void;
  total: number;
  handleNext: () => void;
};

export default function Cart({ local }: any) {
  const [drawerData, setDrawerData] = useRecoilState(CartAtom);
  const [total, setTotal] = useRecoilState(totalAtom);

  const [steps, setSteps] = useRecoilState(stepsAtom);
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const [completed, setCompleted] = useRecoilState(completedStepsAtom);

  const totalSteps = () => {
    return steps.length;
  };
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const completedSteps = () => {
    return Object.keys(completed).length;
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

  useEffect(() => {
    // @ts-ignore
    const newTotal = drawerData.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.count,
      0
    );
    setTotal(newTotal);
  }, [drawerData]);

  const updateItemCount = (index: number, newCount: number) => {
    setDrawerData((prevData: CartItem[]) =>
      prevData.map((item, i) =>
        i === index ? { ...item, count: newCount } : item
      )
    );
  };

  const removeItem = (index: number) => {
    setDrawerData((prevData: CartItem[]) =>
      prevData.filter((_: any, i: number) => i !== index)
    );
  };
  useEffect(() => {
    setActiveStep(0);
    localStorage.setItem("activeStep", "0");
  }, []);

  const t = useTranslations("cart");
  return (
    <Stack
      component={motion.section}
      sx={{ transition: "all 0.3s ease-in-out" }}
      direction="row"
      gap={3}
      flexWrap="wrap"
    >
      {
        <Stack
          gap={3}
          component="nav"
          aria-label="Device settings"
          sx={{
            m: 0,
            py: 0,
            px: "0px",
            ".MuiListItem-root": { p: "5px" },
            background: "backgroundSelector.main",
            flexGrow: 2,
          }}
        >
          {drawerData.length === 0 ? (
            <Typography
              variant="h5"
              textAlign={"center"}
              align="center"
              my={"auto"}
              color={"#aaa"}
            >
              {t("emptyCart")}
            </Typography>
          ) : (
            // @ts-ignore
            drawerData.map((item: CartItem, index: number) => (
              <MyListItem
                key={index}
                item={item}
                index={index}
                updateItemCount={updateItemCount}
                removeItem={removeItem}
              />
            ))
          )}
        </Stack>
      }

      <Paper sx={{ flexGrow: 1, p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#aaa" }}
          >
            {t("total")} :
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ${total}
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Stack gap={2}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="start"
            gap={1}
          >
            <Typography variant="body2">{t("AdditionalComments")}</Typography>
            <Typography
              variant="body2"
              px={1}
              py={0.3}
              sx={{
                borderRadius: "5px",
                bgcolor: "#f8d7da",
                color: "#721c24",
                fontSize: "12px",
              }}
            >
              {t("Note")}
            </Typography>
          </Stack>
          <TextField
            size="small"
            id="outlined-multiline-static"
            label={t("Comments")}
            multiline
            rows={4}
          />
          <TextField
            size="small"
            id="outlined-textarea"
            label={t("voucher")}
            placeholder="EISA199"
            multiline
          />
          <Button variant="outlined" color="error" sx={{ width: "100%" }}>
            {t("applayVoucher")}
          </Button>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">{t("ShippingEstimates")}</Typography>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label={t("state")}
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            id="outlined-textarea"
            label={t("zipCode")}
            placeholder="1225"
            multiline
          />
          <Button variant="outlined" color="error" sx={{ width: "100%" }}>
            {t("applayVoucher")}
          </Button>
          <Link href={`cart/details`}>
            <Button
              onClick={handleNext}
              variant="contained"
              color="error"
              sx={{ width: "100%" }}
            >
              {t("checkout")}
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
}
