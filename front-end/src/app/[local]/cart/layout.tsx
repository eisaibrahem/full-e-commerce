"use client";

import * as React from "react";
import Box from "@mui/material/Box";

import { Container, useTheme } from "@mui/material";

import MyStepper from "@/app/Components/cart/MyStepper";

const steps = ["Cart", "Details", "Payment", "Review"];

export default function Layout({
  params: { local },
  children,
}: {
  params: { local: string };
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ py: 2, mt: 3 }}>
        {/* @ts-ignore */}
        <Container sx={{ bgcolor: theme.palette.bgColor.main }}>
          <MyStepper local={local} />
          {children}
        </Container>
      </Box>
    </>
  );
}
