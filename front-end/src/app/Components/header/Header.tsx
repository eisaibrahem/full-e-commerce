"use client";
import React from "react";
import { Box } from "@mui/material";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";
export default function Header({
  local,
  isCart,
}: {
  local: string;
  isCart: boolean;
}) {
  return (
    <Box>
      <Header1 local={local} isCart={isCart} />
      <Header2 local={local} />
      <Header3 />
    </Box>
  );
}
