import { ArrowForwardIos, ArrowForwardIosOutlined } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <Container sx={{ my: 3, height: "100%" }}>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
        sx={{}}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Image
            src="/assets/images/banner-15.jpg"
            quality={100}
            width={500}
            height={500}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            alt="Banner 15"
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block", minWidth: "26.6%" },
            ml: 2,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              quality={100}
              width={500}
              height={500}
              style={{
                objectFit: "cover",
                width: "90%",
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
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                SALE 20% OFF
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
                shop now
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
                objectFit: "cover",
                width: "90%",
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
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                }}
              >
                LAPTOPS
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
                shop now
                <ArrowForwardIosOutlined sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
