// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Button, Grid2, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Sections = ({ image, dir, head, BtnText , text }) => {
  return (
    <>
      <Grid2
        container
        rowSpacing={1}
        alignItems="center"
        justifyContent="space-between"
        columnSpacing={{ xs: 1, sm: 2, md: 4}}
      >
        <Grid2
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          order={dir}
          sx={{ textAlign: "start" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "700",width:600, mb: 5 }}
          >
            {head}
          </Typography>
          <Stack spacing={2} sx={{ my: 1 }}>
            <Typography variant="p" sx={{width:600}} >
              {text}
            </Typography>
            <Button
              variant="contained"
              sx={{ bgcolor: "#000", my: 3, width:170, textTransform:"capitalize" }}
              disableElevation
            >
              {BtnText}
            </Button>
          </Stack>
        </Grid2>
        <Grid2 columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
          <img src={image} alt="image" style={{ width: "450px" }} />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Sections;
