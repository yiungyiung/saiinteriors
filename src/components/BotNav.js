import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";

function BotNav() {
  const [screenSize, setScreenSize] = useState("horizontal");
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = "";

      if (innerWidth < 768) {
        newSize = "horizontal";
      } else {
        newSize = "vertical";
      }

      setScreenSize(newSize);
    };

    handleResize(); // Call once to set the initial screen size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#352c22",
        color: "#dfe4e2",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography margin="1rem" variant="h5">
          SAI INTERIORS
          <Divider orientation="horizontal" sx={{ backgroundColor: "#dfe4e2" }} />
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: screenSize === "horizontal" ? "column" : "row",
          }}
        >
          <Divider
            orientation={screenSize}
            sx={{
              backgroundColor: "#dfe4e2",
              height: screenSize === "vertical" ? "5rem" : "0.05rem",
              width: screenSize === "vertical" ? "0.05rem" : "7rem",
              margin: "0.1rem",
            }}
          />
          <Box
            sx={{
              width: "20rem",
              margin: "1rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>
              <b>EMAIL</b>
            </Typography>
            <Typography>saihomedecor09@gmail.com</Typography>
          </Box>

          <Divider
            orientation={screenSize}
            sx={{
              backgroundColor: "#dfe4e2",
              height: screenSize === "vertical" ? "5rem" : "0.05rem",
              width: screenSize === "vertical" ? "0.05rem" : "7rem",
              margin: "0.1rem",
            }}
          />
          <Box
            sx={{
              width: "20rem",
              margin: "1rem",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>
              <b>Phone</b>
            </Typography>
            <Typography>Mob: 9890903027 | Tel:(020) 41305177</Typography>
          </Box>
          <Divider
            orientation={screenSize}
            sx={{
              backgroundColor: "#dfe4e2",
              height: screenSize === "vertical" ? "5rem" : "0.05rem",
              width: screenSize === "vertical" ? "0.05rem" : "7rem",
              margin: "0.1rem",
            }}
          />
        </Box>
        <p style={{ margin: "1rem" }}>
          © 2023 SaiInteriors • All rights reserved
        </p>
      </Box>
    </Box>
  );
}

export default BotNav;
