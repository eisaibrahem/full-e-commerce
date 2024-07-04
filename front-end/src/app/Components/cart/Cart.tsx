import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  ListItem,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Cart({ setTotal, total, handleNext }: any) {
  const theme = useTheme();
  //   @ts-ignore
  const primaryColor = theme.palette.primaryColor.main;

  const [drowerData, setDrowerData] = useState([
    {
      title: "Denim Blue Jeans",
      price: 134,
      image: "/assets/images/DenimBlueJeans.png",
      count: 1,
    },
    {
      title: "Yellow Casual Sweater",
      price: 80,
      image: "/assets/images/YellowCasualSweater.png",
      count: 1,
    },
    {
      title: "Silver High Neck Sweater",
      price: 220,
      image: "/assets/images/SilverHighNeckSweater.png",
      count: 1,
    },
  ]);

  useEffect(() => {
    const newTotal = drowerData.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(newTotal);
  }, [drowerData]);

  const updateItemCount = ({
    index,
    newCount,
  }: {
    index: number;
    newCount: number;
  }) => {
    setDrowerData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, count: newCount } : item
      )
    );
  };

  const removeItem = (index: number) => {
    setDrowerData((prevData) => prevData.filter((_, i) => i !== index));
  };
  return (
    <Stack
      component={motion.section}
      sx={{ transition: "all 0.3s ease-in-out" }}
      direction={"row"}
      gap={3}
      flexWrap={"wrap"}
    >
      <Stack
        gap={3}
        component="nav"
        aria-label="Device settings"
        sx={{
          m: "0",
          py: "0",
          px: "0px",
          ".MuiListItem-root": { p: "5px" },
          // @ts-ignore
          background: "backgroundSelector.main",
          flexGrow: 2,
        }}
      >
        {drowerData.map((item, index) => (
          <MyListItem
            key={index}
            item={item}
            index={index}
            updateItemCount={updateItemCount}
            removeItem={removeItem}
          />
        ))}
      </Stack>

      <Paper sx={{ flexGrow: 1, p: 2 }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#aaa" }}
          >
            Total :
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ${total}
          </Typography>
        </Stack>
        <Divider sx={{ my: 1 }} />
        <Stack gap={2}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"start"}
            gap={1}
          >
            <Typography variant="body2">Additional Comments</Typography>
            <Typography
              variant="body2"
              color={primaryColor}
              px={1}
              py={0.3}
              sx={{
                borderRadius: "5px",
                bgcolor: "#f8d7da",
              }}
            >
              Note
            </Typography>
          </Stack>
          <TextField
            size="small"
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
          />
          <TextField
            size="small"
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Voucher"
            multiline
          />
          <Button variant="outlined" color="error" sx={{ width: "100%" }}>
            Apply Voucher
          </Button>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body1">Shipping Estimates</Typography>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            size="small"
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Zip Code"
            multiline
          />
          <Button variant="outlined" color="error" sx={{ width: "100%" }}>
            Apply Voucher
          </Button>
          <Button
            onClick={handleNext}
            variant="contained"
            color="error"
            sx={{ width: "100%" }}
          >
            Check Out
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );

  function MyListItem({ item, index, updateItemCount, removeItem }: any) {
    return (
      <Paper sx={{ display: "block", p: 2 }}>
        <Stack
          direction={useMediaQuery("(min-width:500px)") ? "row" : "column"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box p={0.0} mr={2} border={"1px solid #eee"} borderRadius={"5px"}>
            <Image
              width={200}
              height={200}
              src={item.image}
              alt={item.title}
              style={{ width: "120px", height: "120px" }}
            />
          </Box>

          <Stack
            width={"100%"}
            direction={"column"}
            gap={1}
            justifyContent={"left"}
            flexGrow={1}
          >
            <Typography variant="h6">
              {item.title.slice(0, 40)} {item.title.length > 40 ? "..." : ""}
            </Typography>
            <Typography variant="caption">
              ${item.price.toFixed(2)} x {item.count}
            </Typography>
            <Typography variant="body1" color={primaryColor}>
              ${(item.price * item.count).toFixed(2)}
            </Typography>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
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
                  borderRadius: "5px",
                }}
              >
                <Add sx={{ fontSize: "18px" }} />
              </IconButton>
              <Typography variant="body1" sx={{ px: 0, py: 0 }}>
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
                  borderRadius: "5px",
                }}
              >
                <Remove sx={{ fontSize: "18px" }} />
              </IconButton>
            </Stack>
          </Stack>
          <IconButton
            sx={{
              p: 0.5,
              "&:hover": { color: "red" },
              position: "absolute",
              right: 0,
              top: 0,
            }}
            onClick={() => removeItem(index)}
          >
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Stack>
      </Paper>
    );
  }
}
