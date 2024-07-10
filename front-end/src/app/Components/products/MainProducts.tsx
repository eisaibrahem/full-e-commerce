"use client";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGetProductByNameQuery } from "@/Redux/Product";
import Loading from "../loading/Loading";
import { useTranslations } from "next-intl";
import { useRecoilState } from "recoil";
import CartAtom from "@/atoms/cart-atom";

const baseUrlImage = process.env.NEXT_PUBLIC_BASE_URL_IMAGE;
export default function MainProducts({
  myDate,
  setOpen,
  setclickedProduct,
  clickedProduct,
}: any) {
  const t = useTranslations("mainProducts");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const { data, error, isLoading } = useGetProductByNameQuery(myDate);
  const [drawerData, setDrawerData] = useRecoilState(CartAtom);

  // convert data to work with drawerData

  const addToCart = () => {
    setDrawerData([...drawerData, clickedProduct]);
  };

  return error ? (
    <>{error}</>
  ) : isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    data && (
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        mt={2}
        sx={{ justifyContent: { xs: "center", lg: "space-between" }, gap: 3 }}
      >
        <AnimatePresence>
          {data.data.map((item: any) => {
            // console.log(
            //   `${baseUrl}${item.attributes.productImage.data[0].attributes.url}`
            // );
            return (
              <Card
                onClick={() => {
                  handleClickOpen();
                  setclickedProduct(item);
                }}
                component={motion.section}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                key={item.id}
                sx={{
                  width: 333,

                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                  ":hover ": {
                    cursor: "pointer",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={`${item.attributes.productImage.data[0].attributes.url}`}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle.slice(0, 21)}
                      {item.attributes.productTitle?.length > 21 && "..."}
                    </Typography>

                    <Typography
                      minWidth={60}
                      variant="subtitle1"
                      component="p"
                      textAlign={"right"}
                    >
                      {item.attributes.productPrice} $
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDesc.slice(0, 100)}
                    {item.attributes.productDesc?.length > 100 && "..."}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      // handleClickOpen();
                      // setclickedProduct(item);
                      setDrawerData([
                        ...drawerData,
                        {
                          title: item.attributes.productTitle,
                          price: item.attributes.productPrice,
                          image: `${item.attributes.productImage.data[0].attributes.url}`,
                          count: 1,
                        },
                      ]);
                    }}
                    sx={{ textTransform: "capitalize" }}
                    size="large"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    {t("addToCart")}
                  </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.productRatting}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}
        </AnimatePresence>
      </Stack>
    )
  );
}
