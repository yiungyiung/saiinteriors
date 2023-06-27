import React from "react";
import Botnav from "../components/BotNav"
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
import Itemcard from "../components/Itemcard";
import { useRef, useState, useEffect, useMemo } from "react";
function Home() {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = '';

      if (innerWidth < 768) {
        newSize = 'h2';
      } else {
        newSize = 'h1';
      }

      setScreenSize(newSize);
    };

    handleResize(); // Call once to set the initial screen size

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  const [sz, setSz] = useState(() => (size.x > size.y ? size.y : size.x));
  useEffect(() => {
    setSz(size.x > size.y ? size.y : size.x);
  }, [size]);
  return <>
  <Box sx={{marginTop:"2rem", marginBottom:"2.5rem", display:"flex", alignItems: "center",justifyContent: "center"}}>
  <Toolbar >
    <Typography color="#dfe4e2" align="center" variant={screenSize}>PlaceHolder</Typography>
  </Toolbar>
  </Box>
   <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          mt="0.8rem"
          mb="0.8rem"
        >
          <Grid item>
            <Itemcard name="Kitchen" link='/kitchen' sz={sz}/>
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
          <Grid item>
            <Itemcard sz={sz} />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "auto" }}>
        <Botnav />
      </Box></>;
}

export default Home;
