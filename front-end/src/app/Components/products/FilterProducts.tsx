"use client";
import ProductsAtom from "@/atoms/productsAtoms";
import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export default function FilterProducts({ setFillteredProducts, local }: any) {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [productsData] = useRecoilState(ProductsAtom); // Read-only

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    if (newValue !== null) {
      setSelectedCategory(newValue);

      // Filter products based on selected category
      const filteredProducts =
        newValue === ""
          ? productsData // Show all products
          : productsData.filter(
              (product: any) => product.category === newValue
            );

      setFillteredProducts(filteredProducts); // Update state with filtered products
    }
  };

  const t = useTranslations("filter");

  return (
    <Stack
      direction={local === "ar" ? "row-reverse" : "row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={3}
    >
      <Box sx={{ textAlign: local === "ar" ? "end" : "start" }}>
        <Typography variant="h6" color={theme.palette.text.primary}>
          {t("Selected Products")}
        </Typography>
        <Typography
          fontWeight={300}
          color={theme.palette.text.secondary}
          variant="body1"
        >
          {t("exclusiveBrand")}
        </Typography>
      </Box>

      <ToggleButtonGroup
        color="error"
        value={selectedCategory}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
          flexWrap: "wrap",
          gap: 2,
          ".Mui-selected": {
            border: "1px solid rgba(233, 69, 96, 0.5) !important",
            color: "#e94560",
            backgroundColor: "initial",
          },
        }}
      >
        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value=""
          aria-label="all products"
        >
          {t("allProducts")}
        </ToggleButton>

        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value="women"
          aria-label="women category"
        >
          {t("womenCategory")}
        </ToggleButton>

        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value="man"
          aria-label="men category"
        >
          {t("menCategory")}
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
