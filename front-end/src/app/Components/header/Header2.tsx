import {
  ExpandMore,
  PersonOutline,
  SearchOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import { useTranslations } from "next-intl";

const options = ["All Categories", "Cars", "Electronics", "Clothes", "Shoes"];
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    left: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.5,
  position: "relative",
  borderRadius: "10px",
  border: "1px solid #777",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "&:focus-within": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: "250px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("md")]: {},
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

export default function Header2() {
  const t = useTranslations("header2");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(Number);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container sx={{ mt: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Stack alignItems={"center"}>
          <ShoppingCart />
          <Typography variant="body2">E-commerce</Typography>
        </Stack>

        <Search
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIconWrapper>
            <SearchOutlined />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />

          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              m: "0",
              py: "0",
              px: "6px",
              ".MuiListItem-root": { p: "5px" },
              // @ts-ignore
              bgcolor: theme.palette.backgroundSelector.main,
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <ListItem
              sx={{
                "&:hover": { cursor: "pointer" },
                px: 0,
              }}
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                secondary={t(options[selectedIndex])}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "14px",

                    width: "95px",
                    textAlign: "center",
                  },
                }}
              />
              <ExpandMore fontSize="small" />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            sx={{ borderRadius: "20px" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "14px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {t(option)}
              </MenuItem>
            ))}
          </Menu>
        </Search>

        <Stack direction="row" spacing={1}>
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={4}
              color="primary"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <IconButton aria-label="cart">
            <PersonOutline />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}
