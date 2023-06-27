import * as React from "react";
import img from "../Images/plast.jpg";
import { useRef, useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
  Paper,
  Toolbar,
  IconButton
} from "@mui/material";
import "./Img.css"
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
function Itemcard(props) {
  const [screenSize, setScreenSize] = useState(30);
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = "";

      if (innerWidth < 768) {
        newSize = "20";
      } else {
        newSize = "30";
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
    <Box mb="5rem">
      <Toolbar sx={{}}>
        <Box
          sx={{
            padding: "0.2rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#231c14",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.8rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-block",
                alignItems: "center",
                alignItems: "center",
                margin: "0.1rem",
              }}
            >
              <img
              className="img"
                style={{
                  borderRadius: "0.8rem",
                  width: `${props.sz / screenSize}em`,
                  height: `${props.sz / screenSize}em`,
                }}
                src={props.gg}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "0%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >

              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Itemcard;
