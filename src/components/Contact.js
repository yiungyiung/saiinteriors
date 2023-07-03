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
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from '@mui/icons-material/Map';
function Contact() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          color: "#dfe4e2",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h1">Contact</Typography>
          <Divider
            variant="middle"
            style={{ backgroundColor: "#dfe4e2", height: "0.1rem" }}
          />
        </Box>
        <Grid container>
          <Grid mt="2rem" item xs={12} md={4} sm={12} lg={4} xl={4}>
            <Box
              mt="0.3rem"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
              }}
            >
              <Typography variant="h3">Email</Typography>
              <Typography mt="1rem" variant="h5">
                saihomedecor09@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid mt="2rem" item xs={12} md={4} sm={12} lg={4} xl={4}>
            <Box
              mt="0.3rem"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
              }}
            >
              <Typography variant="h3">Address</Typography>
              <Typography mt="1rem" variant="h5" align="center">
              Sarita Vaibhav, Sinhagad Road, Pune 411030, India

              </Typography>
            </Box>
          </Grid>
          <Grid mt="2rem" item xs={12} md={4} sm={12} lg={4} xl={4}>
            <Box
              mt="0.3rem"
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "auto",
              }}
            >
              <Typography variant="h3">Phone</Typography>
              <Typography mt="1rem" variant="h5">
                Mob: +91-9890903027
              </Typography>
              <Typography variant="h5">Tel: (020) 41305177</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt = "5rem" >
          <Typography variant="h4">Connect With Us</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              color: "#dfe4e2",
            }}
          >
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/sai_interiors__/")
              }
              style={{ color: "#dfe4e2", fontSize: "2rem" }}
            >
              <InstagramIcon fontSize="1rem" />
            </IconButton>
            <IconButton
              onClick={() => window.open("mailto:saihomedecor09@gmail.com")}
              style={{ color: "#dfe4e2", fontSize: "2rem" }}
            >
              <EmailIcon fontSize="1rem" />
            </IconButton>
            <IconButton
              onClick={() => window.open("mailto:saihomedecor09@gmail.com")}
              style={{ color: "#dfe4e2", fontSize: "2rem" }}
            >
              <MapIcon fontSize="1rem" />
            </IconButton>
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default Contact;
