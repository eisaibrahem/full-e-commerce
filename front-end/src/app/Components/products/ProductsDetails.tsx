"use client";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Image from "next/image";
import { useState } from "react";
import Loading from "../loading/Loading";
import { useGetProductByNameQuery } from "@/Redux/Product";
import { useTranslations } from "next-intl";
import { useRecoilState } from "recoil";
import CartAtom from "@/atoms/cartAtoms";
import ProductsAtom, { checkedProductsAtom } from "@/atoms/productsAtoms";

const baseUrlImage = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
export default function ProductsDetails() {
  const [selectedImg, setSelectedImg] = useState(0);
  const t = useTranslations("productDetails");
  const [drawerData, setDrawerData] = useRecoilState(CartAtom);
  const [productsData, setProductsData] = useRecoilState(ProductsAtom);
  const [clickedProduct, setClickedProduct] =
    useRecoilState(checkedProductsAtom);

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Image
          width={360}
          height={360}
          className="dialog-img"
          src={`${clickedProduct.Images[selectedImg]}`}
          alt=""
        />
      </Box>

      <Box
        sx={{
          py: 2,
          textAlign: { xs: "center", sm: "left" },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography variant="h5">{clickedProduct.title}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct.price}
        </Typography>
        <Typography variant="body1">{clickedProduct.description}</Typography>

        <Stack
          sx={{
            justifyContent: {
              xs: "center",
              sm: "left",
            },
            overflow: "auto",
          }}
          direction={"row"}
          gap={1}
          my={1.5}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                opacity: "1",
                backgroundColor: "initial",
                overflow: "auto",
                mb: 0.8,
              },
            }}
          >
            {clickedProduct.Images.map((item: any, index: any) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <Image
                    onClick={() => {
                      setSelectedImg(index);
                    }}
                    style={{
                      borderRadius: 3,
                      width: "100%",
                      height: "100%",
                    }}
                    height={500}
                    width={500}
                    src={`${item}`}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
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
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          {t("buyNow")}
        </Button>
      </Box>
    </Box>
  );
}
