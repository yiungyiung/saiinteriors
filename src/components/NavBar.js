import React from "react";
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
import image from "../Images/plast.jpg";

function NavBar() {
  return (
    <Box
      position="top"
      sx={{ color: "#c38f24" }} //
    >
      <Toolbar sx={{ display: "flex" }}>
        <Typography
          color="#dfe4e2"
          component="div"
          sx={{ flexGrow: 1, fontSize: "2.5rem" }}
        >
          <b>SAI</b>
          <b> INTERIORS</b>
        </Typography>
        <Box
          sx={{
            margin :"auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Button
            className="btnnav"
            sx={{
              ":hover": { background: "#dfe4e2" },
              fontSize: "0.9rem",
              border: "4px solid",
              margin: "1vh",
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
              ":hover": { background: "#dfe4e2" },
              fontSize: "0.9rem",
              border: "4px solid",
              margin: "1vh",
            }}
            variant="outlined"
            color="inherit"
            href="/contact"
          >
            <b>Contact</b>
          </Button>
          
        </Box>
      </Toolbar>
      <Divider sx={{ backgroundColor: "#dfe4e2", height: "0.1rem", margin: "0.1rem" }} />
    </Box>
  );
}

export default NavBar;
