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

interface Order {
  id: string;
  status: "Pending" | "Processing" | "Delivered" | "Cancelled";
  date: string;
  amount: number;
}

const orders: Order[] = [
  {
    id: "f0ba538b-c8f3-45ce",
    status: "Pending",
    date: "Nov 10, 2022",
    amount: 350.0,
  },
  {
    id: "1f10985b-09a8-4d93",
    status: "Processing",
    date: "Nov 10, 2022",
    amount: 500.0,
  },
  {
    id: "6d54d506-208a-43bb",
    status: "Delivered",
    date: "Dec 22, 2020",
    amount: 700.0,
  },
  {
    id: "63d35462-520b-4566",
    status: "Delivered",
    date: "Nov 20, 2020",
    amount: 700.0,
  },
  {
    id: "753deee0-56b3-40a7",
    status: "Cancelled",
    date: "Dec 14, 2020",
    amount: 300.0,
  },
];

const activeStep = Number(localStorage.getItem("activeStep"));
const OrdersPage: NextPage = () => {
  const [steps, setSteps] = useRecoilState(stepsAtom);
  const [activeStep, setActiveStep] = useRecoilState(activeStepAtom);
  const [completed, setCompleted] = useRecoilState(completedStepsAtom);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  useEffect(() => {
    setActiveStep(3);
    localStorage.setItem("activeStep", "3");
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Box sx={{ width: 250, bgcolor: "background.paper" }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          DASHBOARD
        </Typography>
        <List>
          <ListItem button selected>
            <ListItemIcon>
              <OrderIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            <Typography>5</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WishlistIcon />
            </ListItemIcon>
            <ListItemText primary="Wishlist" />
            <Typography>19</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SupportIcon />
            </ListItemIcon>
            <ListItemText primary="Support Tickets" />
            <Typography>1</Typography>
          </ListItem>
        </List>
        <Typography variant="h6" sx={{ p: 2 }}>
          ACCOUNT SETTINGS
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile Info" />
            <Typography>3</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AddressIcon />
            </ListItemIcon>
            <ListItemText primary="Addresses" />
            <Typography>16</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment Methods" />
            <Typography>4</Typography>
          </ListItem>
        </List>
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          <OrderIcon color="error" sx={{ mr: 1, verticalAlign: "middle" }} />
          My Orders
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
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
