import Details from "@/app/Components/cart/Details";
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

export default function Page({ total, handleBack, handleNext }: any) {
  return (
    <Details total={total} handleBack={handleBack} handleNext={handleNext} />
  );
}
