import * as React from "react";
import { useRef, useState, useEffect } from "react";
import styled from 'styled-components'
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
} from "@mui/material";
//import "./Img.css"
function Itemcard(props) {
  const [screenSize, setScreenSize] = useState(30);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
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
            padding: "0.1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor:"#dfe4e2",
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
            <a href={props.link}>
              <img
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`${isButtonHovered ? 'darkenimg' : 'img'}`}
                style={{
                  borderRadius: "0.8rem",
                  width: `${props.sz / screenSize}em`,
                  height: `${props.sz / screenSize}em`,

                }}
                src={props.img}
                
              />
              </a>
              <Box
                sx={{
                  position: "absolute",
                  top: "5%",
                  left: "2%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                className={`${isButtonHovered ? 'darken' : ''}`}
                  href={props.link}
                  sx={{
                    color: "#dfe4e2",
                    ":hover": {
                      backgroundColor: "black",
                      color: "#dfe4e2",
                      borderColor: "#c38f24",
                      border: "0.2rem solid",
                    },
                  }}
                >
                  <Typography variant="h4">
                    <b>{props.name}</b>
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Itemcard;
