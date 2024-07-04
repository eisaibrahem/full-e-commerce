import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function Details({ total, handleBack, handleNext }: any) {
  return (
    <Stack
      component={motion.section}
      sx={{
        display: "flex",
        flexDirection: useMediaQuery("(min-width:800px)")
          ? "row"
          : "column-reverse",
        gap: 3,
      }}
    >
      <Stack sx={{ flexGrow: 2, gap: 3 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1">Shipping Address</Typography>

          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={2}
            mt={2}
          >
            <Stack gap={2} flexGrow={1}>
              <TextField
                size="small"
                id="outlined-textarea"
                label="Full Name"
                placeholder="Full Name"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label="Phone Number"
                placeholder="Phone Number"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                type="number"
                label="Zip code"
                placeholder="Zip code"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="address1"
                placeholder="address1"
                multiline
              />
            </Stack>
            <Stack gap={2} flexGrow={1}>
              <TextField
                size="small"
                id="outlined-textarea"
                type="email"
                label="Email"
                placeholder="Email"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="Company"
                placeholder="Company"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="Country"
                placeholder="Country"
                multiline
              />
              <TextField
                size="small"
                id="outlined-textarea"
                label="address2"
                placeholder="address2"
                multiline
              />
            </Stack>
          </Stack>
        </Paper>
        <Stack
          direction={"row"}
          gap={2}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Button
            onClick={handleBack}
            sx={{ flexGrow: 1 }}
            variant="outlined"
            color="error"
          >
            Back To Cart
          </Button>
          <Button
            onClick={handleNext}
            sx={{ flexGrow: 1 }}
            variant="contained"
            color="error"
          >
            Proceed To Payment
          </Button>
        </Stack>
      </Stack>

      <Paper sx={{ p: 2, flexGrow: 1, height: "fit-content" }}>
        <Stack flexGrow={1} p={0} gap={1} justifyContent={"start"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">SubTotal:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              ${total.toFixed(2)}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">Shipping:</Typography>
            <Typography variant="body1">-</Typography>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="body1">Tax:</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              $40.00
            </Typography>
          </Stack>
          <Typography variant="body1">Discount:</Typography>
          <Divider />
          <Typography variant="h5" sx={{ fontWeight: "bold", my: 1 }}>
            ${(total + 40).toFixed(2)}
          </Typography>
          <TextField
            size="small"
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Voucher"
            multiline
          />
          <Button variant="outlined" color="error">
            Checkout
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
}
