// E:\Projects\web\e-commerce\front-end\src\app\Components\header\Header.tsx
"use client";
import React from "react";
import { Box, Paper } from "@mui/material";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

export default function Header({ local }: { local: string }) {
  return (
    <Paper sx={{ pb: 1.5 }}>
      <Header1 local={local} />
      <Header2 local={local} />
      <Header3 />
    </Paper>
  );
}
