"use client";
import CartAtom from "@/atoms/cartAtoms";
import { Add, Close, Remove, ShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function RightDrawer({ setIsDrawerOpen, local }: any) {
  const [drawerData, setDrawerData] = useRecoilState(CartAtom);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = drawerData.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(newTotal);
  }, [drawerData]);

  const updateItemCount = ({
    index,
    newCount,
  }: {
    index: number;
    newCount: number;
  }) => {
    setDrawerData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, count: newCount } : item
      )
    );
  };

  const removeItem = (index: number) => {
    setDrawerData((prevData) => prevData.filter((_, i) => i !== index));
  };
  const theme = useTheme();
  return (
    <Box
      height={"100%"}
      overflow={"hidden"}
      width={"100%"}
      sx={{
        pt: 3,
        pb: 2,
        px: 2,

        display: "flex",
        flexDirection: "column",

        // @ts-ignore
        bgcolor: theme.palette.backgroundSelector.main,
        borderRadius: "6px",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={2} alignItems={"center"}>
          <ShoppingCart />
          <Typography variant="body1">{drawerData.length} Items</Typography>
        </Stack>
        <IconButton sx={{ p: 0.5 }} onClick={() => setIsDrawerOpen(false)}>
          <Close style={{ fontSize: "20px" }} />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack
        divider={<Divider />}
        gap={1}
        component="nav"
        aria-label="Device settings"
        sx={{
          mb: 1.5,
          overflow: "auto",
          flexGrow: 1,
        }}
      >
        {drawerData.map((item, index) => (
          <MyListItem
            key={index}
            item={item}
            index={index}
            updateItemCount={updateItemCount}
            removeItem={removeItem}
          />
        ))}
      </Stack>

      <Stack gap={1.5}>
        <Button
          variant="contained"
          color="error"
          sx={{ width: "100%", borderRadius: "5px" }}
        >
          Checkout Now ${total.toFixed(2)}
        </Button>
        <Link href={`/${local}/cart`} onClick={() => setIsDrawerOpen(false)}>
          <Button
            variant="outlined"
            sx={{ width: "100%", borderRadius: "5px" }}
          >
            View Cart
          </Button>
        </Link>
      </Stack>
    </Box>
  );

  function MyListItem({ item, index, updateItemCount, removeItem }: any) {
    return (
      <ListItem sx={{ display: "block" }}>
        <Stack direction={"row"} alignItems={"center"}>
          <Stack direction={"column"} gap={0.1} alignItems={"center"}>
            <IconButton
              onClick={() =>
                updateItemCount({ index, newCount: item.count + 1 })
              }
              color="error"
              sx={{
                textAlign: "center",
                width: "25px",
                height: "25px",
                border: "1px solid #f44336",
              }}
            >
              <Add sx={{ fontSize: "18px" }} />
            </IconButton>
            <Typography variant="body2" sx={{ px: 0, py: 0 }}>
              {item.count}
            </Typography>
            <IconButton
              onClick={() =>
                item.count > 1 &&
                updateItemCount({ index, newCount: item.count - 1 })
              }
              color="error"
              sx={{
                width: "25px",
                height: "25px",
                border: "1px solid #f44336",
              }}
            >
              <Remove sx={{ fontSize: "18px" }} />
            </IconButton>
          </Stack>

          <Box p={0.0} mx={1.5} border={"1px solid #eee"} borderRadius={"5px"}>
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.title}
              style={{ width: "70px", height: "70px" }}
            />
          </Box>

          <Stack
            direction={"column"}
            gap={1}
            justifyContent={"left"}
            textAlign={"left"}
            flexGrow={1}
          >
            <Typography variant="body2">
              {item.title.slice(0, 26)} {item.title.length > 26 ? "..." : ""}
            </Typography>
            <Typography variant="caption">
              ${item.price.toFixed(2)} x {item.count}
            </Typography>
            <Typography variant="body2" color={"error"}>
              ${(item.price * item.count).toFixed(2)}
            </Typography>
          </Stack>
          <IconButton
            sx={{ p: 0.5, "&:hover": { color: "red" } }}
            onClick={() => removeItem(index)}
            size="small"
          >
            <Close sx={{ fontSize: "16px" }} />
          </IconButton>
        </Stack>
      </ListItem>
    );
  }
}
