import { ArrowForwardIos, ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
import IconsSection from "./IconsSection";
import { useTranslations } from "next-intl";

const mySlider = [
  { text: "MEN", link: "/assets/images/banner-15.jpg" },
  { text: "WOMEN", link: "/assets/images/banner-25.jpg" },
];
export default function Hero() {
  const t = useTranslations("hero");
  const theme = useTheme();

  return (
    //@ts-ignore
    <Container sx={{ my: 3, bgcolor: theme.palette.bgColor.main, pt: 3 }}>
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={2}
        justifyContent={
          useMediaQuery(theme.breakpoints.down("md"))
            ? "center"
            : "space-between"
        }
      >
        <Swiper
          loop={true}
          style={{
            margin: "0",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  className="img"
                  src={item.link}
                  width={1000}
                  height={1000}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Banner 15"
                />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                      ":hover": {
                        cursor: "grab",
                      },
                      ":active": {
                        cursor: "grabbing",
                      },
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h5"
                  >
                    {t("lifeStyleCollection")}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {t(item.text)}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      {t("saleUpTo")}
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      {t("30% OFF")}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    {t("freeShipping")}
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    {t("shopNow")}
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: useMediaQuery(theme.breakpoints.down("md"))
              ? "none"
              : "flex",
            minWidth: "26.5%",
            flexDirection: "column",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              quality={100}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/assets/images/banner-17.jpg"
              alt=""
            />

            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                }}
              >
                {t("NEW ARRIVALS")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                {t("SUMMER")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                {t("SALE 20% OFF")}
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                {t("shop now")}
                <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <Image
              quality={100}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/assets/images/banner-16.jpg"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                {t("GAMING 4K")}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                {t("DESKTOPS &")}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                {t("LAPTOPS")}
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                {t("shop now")}
                <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <IconsSection />
    </Container>
  );
}
