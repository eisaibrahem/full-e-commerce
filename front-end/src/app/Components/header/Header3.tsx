"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close,
  ExpandMore,
  KeyboardArrowRight,
  Laptop,
  MenuBookOutlined,
  MenuOutlined,
  SportsEsportsOutlined,
  Window,
} from "@mui/icons-material";
import { useTranslations } from "next-intl";
import HeaderLinks from "./HeaderLinks";

export default function Header3() {
  const t = useTranslations("header3");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  // @ts-ignore
  const bgSelector = theme.palette.backgroundSelector.main;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drowerData = [
    { title: "Home", subTitles: ["About", "Projects", "Contact"] },
    { title: "Pages", subTitles: ["About", "Contact"] },
    { title: "Blog", subTitles: ["Contact"] },
    { title: "Shop", subTitles: ["About", "Contact"] },
    { title: "Portfolio", subTitles: ["About", "Contact"] },
    { title: "Contact", subTitles: ["About", "Contact"] },
  ];

  const drawerList = () =>
    drowerData.map((item, index) => (
      <Accordion
        key={index}
        sx={{ bgcolor: bgSelector, width: "90%", py: 0, mt: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {t(item.title)}
        </AccordionSummary>
        <List sx={{ py: 0 }}>
          {item.subTitles.map((subTitle, index) => (
            <ListItem key={index} sx={{ py: 0 }}>
              <ListItemButton sx={{ py: 0 }}>
                <ListItemText primary={t(subTitle)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Accordion>
    ));

  return (
    <Container sx={{ mt: 1 }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "220px",
              bgcolor: bgSelector,
              justifyContent: "start",
              color: theme.palette.text.secondary,
              transition: "all 0.5s ease",
            }}
          >
            <Window />
            <Typography sx={{ p: "0 ", textTransform: "capitalize", mx: 1 }}>
              {t("Categories")}
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRight
              sx={{
                transition: "all 0.3s ease",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
            sx={{
              marginTop: "8px",
              ".MuiMenu-list": { width: "220px", bgcolor: bgSelector, p: "0" },
            }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t("Games")}</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Laptop fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t("Electronics")}</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>
              <ListItemText>{t("Books")}</ListItemText>
            </MenuItem>
          </Menu>
        </Box>

        {useMediaQuery("(max-width:900px)") ? (
          <IconButton onClick={() => setIsDrawerOpen((prev) => !prev)}>
            <MenuOutlined />
          </IconButton>
        ) : (
          <HeaderLinks />
        )}

        <Drawer
          anchor={"top"}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{
            ".MuiDrawer-paper": {
              bgcolor: "transparent",
              width: "80%",
              mx: "auto",
              borderRadius: "0 0 6px 6px",
            },
          }}
        >
          <Stack
            sx={{
              pt: 4,
              pb: 2,
              alignItems: "center",
              bgcolor: bgSelector,
              position: "relative",
              borderRadius: "0 0 6px 6px",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                p: 0.3,
                m: 0,

                transition: "all 0.3s ease",
                "&:hover": { color: "red", transform: "rotate(90deg)" },
              }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <Close fontSize="small" />
            </IconButton>
            {drawerList()}
          </Stack>
        </Drawer>
      </Stack>
    </Container>
  );
}
