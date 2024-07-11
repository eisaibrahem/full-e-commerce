"use client";
import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import Header from "../Components/header/Header";
import Hero from "../Components/hero/Hero";
import Footer from "../Components/footer/Footer";
import Products from "../Components/products/Products";
import ScrollToTop from "../Components/scroll/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { useRouter } from "next/router";
import { IntlProvider } from "next-intl";
import { RecoilRoot } from "recoil";

export default function Home({
  params: { local },
}: {
  params: { local: string };
}) {
  return (
    <>
      <Box>
        <Hero />
      </Box>
      <Products />
      <ScrollToTop />
    </>
  );
}
