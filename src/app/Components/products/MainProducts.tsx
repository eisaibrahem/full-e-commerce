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

export default function MainProducts() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const allProductsAPI = "products?populate=*";

  const [myDate, setmyDate] = useState(allProductsAPI);
  const { data, error, isLoading } = useGetproductByNameQuery(myDate);
  const [clickedProduct, setclickedProduct] = useState({});

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
      <AnimatePresence>
        {data.data.map((item: any) => {
          return (
            <Card
              component={motion.section}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
              key={item.id}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                // @ts-ignore
                image={`${item.attributes.productImg.data[0].attributes.url}`}
                title="green iguana"
              />

              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${item.attributes.productPrice}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={() => {
                    handleClickOpen();
                    setclickedProduct(item);
                  }}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                  add to cart
                </Button>
                <Rating
                  precision={0.1}
                  name="read-only"
                  value={item.attributes.productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          );
        })}
      </AnimatePresence>
    </Stack>
  );
}
