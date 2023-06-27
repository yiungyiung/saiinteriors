import React from "react";
import NavBar from "./components/NavBar";
import BotNav from "./components/BotNav";
import Contact from "./components/Contact";
import Home from "./Pages/Home";
import Kitchen from "./Pages/Kitchen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Itemcard from "./components/Itemcard";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Grid,
} from "@mui/material";

function App() {

  return (
    <Box
      height="100vh"
      sx={{
        minHeight: "100vh",
        overflowY: "auto",
        scrollBehavior: "smooth",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box sx={{ margin: "auto" }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Box>
      
      <Box sx={{ marginTop: "auto" }}>
        <BotNav />
      </Box>
    </Box>
  );
}

export default App;
