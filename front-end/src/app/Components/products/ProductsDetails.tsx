"use client";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRecoilState } from "recoil";
import CartAtom from "@/atoms/cartAtoms";
import ProductsAtom, { checkedProductsAtom } from "@/atoms/productsAtoms";

export default function ProductsDetails() {
  const [selectedImg, setSelectedImg] = useState(0);
  const t = useTranslations("productDetails");
  const [drawerData, setDrawerData] = useRecoilState(CartAtom);
  const [clickedProduct, setClickedProduct] =
    useRecoilState(checkedProductsAtom);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Image
        width={300}
        height={280}
        style={{ width: "300px", height: "280px" }}
        className="dialog-img"
        src={`${clickedProduct.Images[selectedImg]}`}
        alt={clickedProduct.title}
      />

      <Box
        sx={{
          py: 1,
          textAlign: { sm: "left" },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          alignContent={"center"}
        >
          <Typography variant="h5">{clickedProduct.title}</Typography>
          <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
            ${clickedProduct.price}
          </Typography>
        </Stack>
        <Typography variant="body1">{clickedProduct.description}</Typography>

        <Stack
          sx={{
            justifyContent: {
              xs: "center",
              sm: "left",
            },
          }}
          direction={"row"}
          gap={1}
          my={1.5}
          mx={0.5}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              gap: 2,
              // width: "100%",
              overflow: "auto",
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
                mb: 0.8,
              },
            }}
          >
            {clickedProduct.Images.map((item: any, index: any) => (
              <ToggleButton
                key={index}
                value={index}
                sx={{
                  width: "110px",
                  height: "110px",
                  m: 0,
                  p: 0,
                  opacity: 0.5,
                }}
                onClick={() => setSelectedImg(index)}
              >
                <Image
                  style={{
                    borderRadius: 3,
                  }}
                  height={110}
                  width={110}
                  src={item}
                  alt={clickedProduct.title}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Button
          onClick={() => {
            setDrawerData([
              ...drawerData,
              {
                title: clickedProduct.title,
                price: clickedProduct.price,
                image: clickedProduct.Images[0],
                count: 1,
              },
            ]);
          }}
          sx={{
            mb: { xs: 1, sm: 0 },
            textTransform: "capitalize",
            mx: { xs: "auto", sm: 0 },
          }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          {t("buyNow")}
        </Button>
      </Box>
    </Box>
  );
}
