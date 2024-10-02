/* eslint-disable no-unused-vars */
import React from "react";
import Sections from "../Sections/Sections";
import leftImg from "../assets/images/leftone.webp";
import rightImg from "../assets/images/rightone.webp";
import lastImg from "../assets/images/lastone.jpeg";
import { Container } from "@mui/material";

const LastSection = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Sections
        dir={2}
        image={leftImg}
        head={"AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM"}
        text={"Affirm provides flexible payment solutions, allowing you to buy better and pay over time."}
        BtnText={"Learn More"}
      />
      <Sections
        image={rightImg}
        head={"CHOOSE WITH CONFIDENCE"}
        text={"Remove the guesswork in choosing your upholstery design by ordering complimentary swatches."}
        BtnText={"Order Swatches"}
      />
      <Sections
        dir={2}
        image={lastImg}
        head={"Complimentary Design Services"}
        text={"Let's create your dream space together"}
        BtnText={"Book A Consultation"}
      />
    </Container>
  );
};

export default LastSection;
