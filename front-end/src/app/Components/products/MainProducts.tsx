"use client";
import { Stack } from "@mui/material";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRecoilState } from "recoil";
import CartAtom from "@/atoms/cartAtoms";
import MyCard from "./MyCard";
import ProductsAtom from "@/atoms/productsAtoms";

const baseUrlImage = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;

export default function MainProducts({
  myDate,
  setOpen,
  setClickedProduct,
  clickedProduct,
  fillteredProducts, // Use filtered products here
}: any) {
  const t = useTranslations("mainProducts");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [drawerData, setDrawerData] = useRecoilState(CartAtom);

  // Add product to cart
  const addToCart = () => {
    setDrawerData([...drawerData, clickedProduct]);
  };

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      mt={2}
      sx={{ justifyContent: { xs: "center", lg: "space-between" }, gap: 3 }}
    >
      <AnimatePresence>
        {fillteredProducts.map((item: any) => (
          <MyCard
            key={item.id}
            item={item}
            handleClickOpen={handleClickOpen}
            setClickedProduct={setClickedProduct}
          />
        ))}
      </AnimatePresence>
    </Stack>
  );
}
