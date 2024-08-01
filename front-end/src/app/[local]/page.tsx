"use client";
import React from "react";
import { Box } from "@mui/material";
import Hero from "../Components/hero/Hero";
import Products from "../Components/products/Products";
import ScrollToTop from "../Components/scroll/ScrollToTop";

export default function Home({
  params: { local },
}: {
  params: { local: string };
}) {
  return (
    <>
      <Box>
        <Hero local={local} />
      </Box>
      <Products local={local} />
      <ScrollToTop />
    </>
  );
}
