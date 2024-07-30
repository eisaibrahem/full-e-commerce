"use client";
import { checkedProductsAtom } from "@/atoms/productsAtoms";
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
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { useRecoilState } from "recoil";

export default function MyCard({ handleClickOpen, item }: any) {
  const t = useTranslations("mainProducts");
  const [clickedProduct, setClickedProduct] =
    useRecoilState(checkedProductsAtom);
  return (
    <Card
      onClick={() => {
        handleClickOpen();
        setClickedProduct(item);
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
        image={`${item.Images[0]}`}
        title="green iguana"
      />
      <CardContent>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography gutterBottom variant="h6" component="div">
            {item.title.slice(0, 21)}
            {item.title?.length > 21 && "..."}
          </Typography>
          <Typography
            minWidth={60}
            variant="subtitle1"
            component="p"
            textAlign={"right"}
          >
            {item.price} $
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {item.description.slice(0, 100)}
          {item.description?.length > 100 && "..."}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          onClick={() => {
            // handleClickOpen();
            // setclickedProduct(item);
            // setDrawerData([
            //   ...drawerData,
            //   {
            //     title: item.attributes.productTitle,
            //     price: item.attributes.productPrice,
            //     image: `${item.attributes.productImage.data[0].attributes.url}`,
            //     count: 1,
            //   },
            // ]);
          }}
          sx={{
            textTransform: "capitalize",
            position: "relative",
            zIndex: 10,
          }}
          size="large"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          {t("addToCart")}
        </Button>
        <Rating precision={0.1} name="read-only" value={item.rating} readOnly />
      </CardActions>
    </Card>
  );
}
