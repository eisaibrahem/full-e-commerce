import { Box, Divider, Paper, Skeleton, Stack } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      gap={2}
      flexWrap={"wrap"}
    >
      {[1, 2, 2, 4, 5, 6].map((item, index) => (
        <Paper
          key={index}
          sx={{ mt: 2, borderRadius: "5px", px: 0.5, pt: 0.5 }}
        >
          <Skeleton
            sx={{ borderRadius: "5px" }}
            animation="wave"
            variant="rectangular"
            width={300}
            height={250}
          />
          <Divider sx={{ my: 1 }} />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", width: "100%" }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", width: "80%" }}
          />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", width: "100%" }}
          />
        </Paper>
      ))}
    </Stack>
  );
}
