"use client";
import { Container, Dialog, IconButton } from "@mui/material";
import React, { useState } from "react";
import FilterProducts from "./FilterProducts";
import MainProducts from "./MainProducts";
import { Close } from "@mui/icons-material";
import ProductsDetails from "./ProductsDetails";
import { useRecoilState } from "recoil";
import ProductsAtom from "@/atoms/productsAtoms";

export default function Products() {
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
        fillteredProducts={fillteredProducts}
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
          ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          overflow: "hidden",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            transition: "0.3s",
            rotate: "0deg",
            position: "absolute",
            p: 0.5,
            top: 4,
            right: 6,
            "&:hover": { color: "red", rotate: "90deg" },
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
