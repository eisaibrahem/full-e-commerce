import { Add, Edit, ExpandMoreOutlined } from "@mui/icons-material";
import {
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function HeaderLinks() {
  const t = useTranslations("header3");
  const linksData = [
    {
      title: "Home",
      deep: ["Projects"],
      subTitles: ["About", "Projects", "Contact", "Team"],
    },
    {
      title: "Pages",
      subTitles: ["About", "Contact"],
    },
    { title: "Blog", subTitles: ["Contact"] },
    {
      title: "Shop",
      subTitles: ["About", "Contact"],
    },
    {
      title: "Portfolio",
      subTitles: ["About", "Contact"],
    },
    {
      title: "Contact",
      subTitles: ["About", "Contact"],
    },
  ];
  const theme = useTheme();
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={2}>
      {linksData.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            "&:hover": { cursor: "pointer", color: theme.palette.primary.main },
            "&:hover>.MuiBox-root": { display: "block" },
          }}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant="body2">{t(item.title)}</Typography>
            <ExpandMoreOutlined />
          </Stack>
          <Box
            sx={{
              display: "none",
              minWidth: "120px",
              py: 0,
              position: "absolute",
              zIndex: 10,
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Paper sx={{ p: 0, mt: 2 }}>
              <List sx={{ p: 0 }}>
                {item.subTitles.map((subTitle, index) => (
                  <>
                    <ListItem
                      key={index}
                      sx={{
                        p: 0,
                        position: "relative",
                        "&:hover>.MuiBox-root": { display: "block" },
                      }}
                    >
                      <ListItemButton
                        sx={{
                          p: 0,
                          ".MuiTypography-root": {
                            fontSize: 14,
                            textAlign: "center",
                          },
                        }}
                      >
                        <ListItemText primary={t(subTitle)} />
                        {item.deep?.find((t) => t === subTitle) && (
                          <ExpandMoreOutlined
                            sx={{ transform: "rotate(-90deg)" }}
                          />
                        )}
                      </ListItemButton>
                      {item.deep?.find((t) => t === subTitle) && (
                        <Box
                          sx={{
                            display: "none",
                            minWidth: "140px",
                            py: 0,
                            zIndex: 10,
                            position: "absolute",
                            left: "100%",
                            top: "0",
                          }}
                        >
                          <Paper sx={{ p: 0, ml: 0.5, mt: 2 }}>
                            <List sx={{ p: 0 }}>
                              {
                                <>
                                  <ListItem key={index} sx={{ p: 0 }}>
                                    <ListItemButton
                                      sx={{
                                        p: 0,
                                        px: 1,
                                        gap: 1,
                                        ".MuiTypography-root": {
                                          fontSize: 14,
                                          textAlign: "center",
                                        },
                                      }}
                                    >
                                      <ListItemText
                                        primary={t("Edit Product")}
                                      />
                                      <Edit fontSize="small" />
                                    </ListItemButton>
                                  </ListItem>
                                  <Divider />
                                  <ListItem key={index} sx={{ p: 0 }}>
                                    <ListItemButton
                                      sx={{
                                        p: 0,
                                        px: 1,
                                        gap: 1,
                                        ".MuiTypography-root": {
                                          fontSize: 14,
                                          textAlign: "center",
                                        },
                                      }}
                                    >
                                      <ListItemText
                                        primary={t("Add Product")}
                                      />
                                      <Add fontSize="small" />
                                    </ListItemButton>
                                  </ListItem>
                                  <Divider />
                                </>
                              }
                            </List>
                          </Paper>
                        </Box>
                      )}
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
