/* eslint-disable no-unused-vars */
import React from "react";
import styled from "./style.module.css";
import { Box, Container, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Container sx={{py:5 }}>
      <div className={styled.hero}>
        <Box sx={{position:"absolute",bottom:"0",left:"25%", textAlign:"center",pb:2, color:"#fff" }} >
          <Typography variant="h4" >LABOUR DAY:ENJOY 20% OFF EQ3</Typography>
          <Typography variant="subtitle2" >
            Save on designs made wth longevity in mind. Now until September 3rd.
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default Hero;
