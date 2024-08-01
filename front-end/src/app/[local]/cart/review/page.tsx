"use client";
import { useEffect } from "react";
import { NextPage } from "next";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Pagination,
  useTheme,
} from "@mui/material";
import {
  ShoppingBag as OrderIcon,
  Favorite as WishlistIcon,
  Headphones as SupportIcon,
  Person as ProfileIcon,
  LocationOn as AddressIcon,
  CreditCard as PaymentIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useRecoilState } from "recoil";
import {
  activeStepAtom,
  completedStepsAtom,
  stepsAtom,
} from "@/atoms/stepperAtoms";
import { useTranslations } from "next-intl";

const orders = [
  {
    id: "f0ba538b-c8f3-45ce",
    status: "Pending",
    date: "Nov 10, 2024",
    amount: 350.0,
  },
  {
    id: "1f10985b-09a8-4d93",
    status: "Processing",
    date: "Nov 10, 2024",
    amount: 500.0,
  },
  {
    id: "6d54d506-208a-43bb",
    status: "Delivered",
    date: "Dec 22, 2023",
    amount: 700.0,
  },
  {
    id: "63d35462-520b-4566",
    status: "Delivered",
    date: "Nov 20, 2023",
    amount: 700.0,
  },
  {
    id: "753deee0-56b3-40a7",
    status: "Cancelled",
    date: "Dec 14, 2023",
    amount: 300.0,
  },
];

const OrdersPage: NextPage = () => {
  const [steps, setSteps] = useRecoilState(stepsAtom);
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const [completed, setCompleted] = useRecoilState(completedStepsAtom);

  useEffect(() => {
    setActiveStep(3);
    localStorage.setItem("activeStep", "3");
  }, []);

  const t = useTranslations("cart");
  const theme = useTheme();

  const renderListItem = (icon: any, text: string, count: number) => (
    <ListItem button>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} sx={{ color: theme.palette.text.primary }} />
      <Typography sx={{ color: theme.palette.text.secondary }}>
        {count}
      </Typography>
    </ListItem>
  );

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box sx={{ width: { xs: "100%", md: 250 }, bgcolor: "background.paper" }}>
        <Typography
          variant="h6"
          sx={{ p: 2, color: theme.palette.text.primary }}
        >
          {t("DASHBOARD")}
        </Typography>
        <List>
          {renderListItem(<OrderIcon color="error" />, t("Orders"), 5)}
          {renderListItem(<WishlistIcon />, t("Wishlist"), 19)}
          {renderListItem(<SupportIcon />, t("Support Tickets"), 1)}
        </List>
        <Typography
          variant="h6"
          sx={{ p: 2, color: theme.palette.text.primary }}
        >
          {t("ACCOUNT SETTINGS")}
        </Typography>
        <List>
          {renderListItem(<ProfileIcon />, t("Profile Info"), 3)}
          {renderListItem(<AddressIcon />, t("Addresses"), 16)}
          {renderListItem(<PaymentIcon />, t("Payment Methods"), 4)}
        </List>
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: theme.palette.text.primary }}
        >
          <OrderIcon color="error" sx={{ mr: 1, verticalAlign: "middle" }} />
          {t("My Orders")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t("Order ID")}</TableCell>
                <TableCell>{t("Status")}</TableCell>
                <TableCell>{t("Date")}</TableCell>
                <TableCell align="right">{t("Amount")}</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Chip
                      label={t(order.status)}
                      color={
                        order.status === "Delivered"
                          ? "success"
                          : order.status === "Cancelled"
                          ? "error"
                          : order.status === "Processing"
                          ? "info"
                          : "default"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell align="right">
                    ${order.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <ChevronRightIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Pagination count={5} color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default OrdersPage;
