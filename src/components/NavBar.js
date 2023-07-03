import React from "react";
import { shadows } from '@mui/system';
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
import image from "../Images/9.png";

function NavBar() {
  const [screenSize, setScreenSize] = useState(30);
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = "";

      if (innerWidth < 768) {
        newSize = "2rem";
      } else {
        newSize = "3.5rem";
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
      position="top"
      sx={{ backgroundColor:"rgb(0,0,0,0.4)", color: "#dfe4e2" }} //
    >
      <Toolbar sx={{ display: "flex" }}>
        <Typography
          color="#dfe4e2"
          component="div"
          sx={{ flexGrow: 1, fontSize: screenSize }}
        >
          <img
            src={image}
            style={{
              marginTop: "0.3em",
              width: screenSize === "3.5rem" ? "25rem" : "13.2rem",
              height: screenSize === "3.5rem" ? "7rem" : "4.2rem",
            }}
          />
        </Typography>
        <Box
          sx={{
            marginTop: "0.3em",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            className="btnnav"
            sx={{
              fontSize: screenSize === "3.5rem" ? "1.2em" : "0.8m",
              ":hover": { background: "#dfe4e2" },

              border: "0.2em solid",
              margin: "1em",
            }}
            variant="outlined"
            color="inherit"
            href="/"
          >
            <b>Home</b>
          </Button>
          <Button
            className="btnnav"
            
            sx={{
              fontSize: screenSize === "3.5rem" ? "1.2em" : "0.8m",
              ":hover": { background: "#dfe4e2" },

              border: "0.2em solid",
              margin: "1em",
            }}
            variant="outlined"
            color="inherit"
            href="/contact"
          >
            <b>Contact</b>
          </Button>
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: "#dfe4e2", height: "0.1rem" }} />
    </Box>
  );
}

export default NavBar;
