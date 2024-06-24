"use client";
import {
  Box,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

export default function FilterProducts({ myDate, setmyDate }: any) {
  const theme = useTheme();
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string
  ) => {
    if (newValue !== null) {
      setmyDate(newValue);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=women";

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={3}
    >
      <Box>
        <Typography variant="h6">Selected Products</Typography>
        <Typography fontWeight={300} variant="body1">
          All our new arrivals in a exclusive brand selection
        </Typography>
      </Box>

      <ToggleButtonGroup
        color="error"
        value={myDate}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{
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
          value={allProductsAPI}
          aria-label="left aligned"
        >
          All Products
        </ToggleButton>

        <ToggleButton
          sx={{ mx: "16px !important", color: theme.palette.text.primary }}
          className="myButton"
          value={menCategoryAPI}
          aria-label="centered"
        >
          MEN category
        </ToggleButton>

        <ToggleButton
          sx={{ color: theme.palette.text.primary }}
          className="myButton"
          value={womenCategoryAPI}
          aria-label="right aligned"
        >
          Women category
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
