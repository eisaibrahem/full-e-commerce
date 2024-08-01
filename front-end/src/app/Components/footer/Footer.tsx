import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18, flexWrap: "wrap", gap: 1 }}
      >
        Designed and developed by
        <Box
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          color="primary"
        >
          Eisa Ibrahem ©2024
        </Box>
      </Typography>
    </Box>
  );
}
