// src/components/MyListItem.tsx
import { CartItem } from "@/atoms/cart-atom";
import { Add, Close, Remove } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

type MyListItemProps = {
  item: CartItem;
  index: number;
  updateItemCount: (index: number, newCount: number) => void;
  removeItem: (index: number) => void;
};

const MyListItem: React.FC<MyListItemProps> = ({
  item,
  index,
  updateItemCount,
  removeItem,
}) => {
  const isWideScreen = useMediaQuery("(min-width:500px)");

  return (
    <Paper sx={{ display: "block", p: 2 }}>
      <Stack
        direction={isWideScreen ? "row" : "column"}
        alignItems="center"
        position="relative"
      >
        <Box p={0.0} mr={2} border="1px solid #eee" borderRadius="5px">
          <Image
            width={200}
            height={200}
            src={item.image}
            alt={item.title}
            style={{ width: "120px", height: "120px" }}
          />
        </Box>

        <Stack
          width="100%"
          direction="column"
          gap={1}
          justifyContent="left"
          flexGrow={1}
        >
          <Typography variant="h6">
            {item.title.slice(0, 40)} {item.title.length > 40 ? "..." : ""}
          </Typography>
          <Typography variant="caption">
            ${item.price.toFixed(2)} x {item.count}
          </Typography>
          <Typography variant="body1" color="primary">
            ${(item.price * item.count).toFixed(2)}
          </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton
              onClick={() => updateItemCount(index, item.count + 1)}
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
                item.count > 1 && updateItemCount(index, item.count - 1)
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
};

export default MyListItem;
