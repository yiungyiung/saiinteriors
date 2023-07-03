import React from "react";
import Botnav from "../components/BotNav";
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
import i1 from "../Images/11.svg"
import i2 from "../Images/12.svg"
import { useRef, useState, useEffect, useMemo } from "react";
function Home() {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      let newSize = "";

      if (innerWidth < 768) {
        newSize = "h2";
      } else {
        newSize = "h1";
      }

      setScreenSize(newSize);
    };

    handleResize(); // Call once to set the initial screen size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
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
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography variant={screenSize}>
            <Box>
              <img src={screenSize=="h1"?i1:i2}  style={{borderRadius:"2rem",width:"90vw"}}/>
            </Box>
          </Typography>
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
          <Itemcard name="Kitchen" link="/kitchen" sz={sz} img="/kitchen/1.jpg"/>
        </Grid>
        <Grid item>
        <Itemcard name="Wardrobe" link="/wardrobe" sz={sz} img="/Wardrobe/1.jpg" />
        </Grid>
        <Grid item>
        <Itemcard name="TV Unit" link="/tvunit" sz={sz} img="/Tvunit/2.jpg" />
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
      </Box>
    </>
  );
}

export default Home;
