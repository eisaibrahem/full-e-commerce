"use client";
import { ColorModeContext } from "@/theme";
import {
  Box,
  IconButton,
  Stack,
  useTheme,
  Typography,
  ListItem,
  Container,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import {
  DarkModeOutlined,
  ExpandMore,
  Facebook,
  Instagram,
  LightModeOutlined,
  X,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const options = ["ar", "en"];

export default function Header1({ local }: { local: string }) {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
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

  const t = useTranslations("header1");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode && storedMode !== theme.palette.mode) {
      colorMode.toggleColorMode();
    }
  }, [colorMode, theme.palette.mode]);

  const pathname = usePathname();

  return (
    <Box
      bgcolor={"#2b3445"}
      py={0.3}
      sx={{ borderEndEndRadius: "5px", borderEndStartRadius: "5px" }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ color: "white" }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <Typography
              variant="body1"
              bgcolor={"#d23f57"}
              fontSize={"12px"}
              fontWeight={"bold"}
              borderRadius={2}
              sx={{ p: "3px 10px", textTransform: "uppercase" }}
            >
              {t("Hot")}
            </Typography>
            <Typography variant="body1" fontSize={"14px"}>
              {t("Deals of the day")}
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ color: "white", fontSize: "18px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "18px" }} color="warning" />
              )}
            </IconButton>

            {/* Language Button */}
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ borderRadius: "20px", m: "0", p: "0" }}
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
                  secondary={local.toUpperCase()}
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "12px",
                      color: "white",
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
                <Link
                  key={option}
                  href={
                    pathname.includes("/cart")
                      ? `/${option}/cart`
                      : `/${option}`
                  }
                  onClick={(event) => handleMenuItemClick(event, index)}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.text.primary,
                  }}
                >
                  <MenuItem
                    sx={{ fontSize: "12px" }}
                    selected={option === local}
                  >
                    {option.toUpperCase()}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            {/* Language Button */}

            <Box
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              <IconButton>
                <Facebook sx={{ color: "white", fontSize: "18px" }} />
              </IconButton>
              <IconButton>
                <X sx={{ color: "white", fontSize: "18px" }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "white", fontSize: "18px" }} />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
