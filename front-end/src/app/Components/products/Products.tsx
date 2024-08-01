"use client";
import { Container, Dialog, IconButton } from "@mui/material";
import React, { useState } from "react";
import FilterProducts from "./FilterProducts";
import MainProducts from "./MainProducts";
import { Close } from "@mui/icons-material";
import ProductsDetails from "./ProductsDetails";
import { useRecoilState } from "recoil";
import ProductsAtom from "@/atoms/productsAtoms";

export default function Products({ local }: any) {
  const [open, setOpen] = useState(false);
  const [clickedProduct, setClickedProduct] = useState({});
  const [productsData] = useRecoilState(ProductsAtom); // Read-only
  const [fillteredProducts, setFillteredProducts] = useState(productsData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ py: 9 }}>
      <FilterProducts
        local={local}
        setFillteredProducts={setFillteredProducts}
      />
      <MainProducts
        setOpen={setOpen}
        setClickedProduct={setClickedProduct}
        clickedProduct={clickedProduct}
        myDate={productsData}
        fillteredProducts={fillteredProducts} // Pass filtered products
      />
      <Dialog
        sx={{
          ".MuiBackdrop-root": {
            backdropFilter: "blur(10px)", // Apply the blur effect
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Optional: Add a semi-transparent background
          },
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          overflow: "hidden",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* gg */}
        <IconButton
          sx={{
            bgcolor: "rgba(245, 185, 185, 0.5)",
            transition: "0.3s",
            rotate: "0deg",
            position: "absolute",
            p: 0.5,
            top: 4,
            right: 6,
            "&:hover": {
              color: "red",
              rotate: "90deg",
              bgcolor: "rgba(255, 0, 0, 0.3)",
            },
          }}
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>

        <ProductsDetails />
      </Dialog>
    </Container>
  );
}
