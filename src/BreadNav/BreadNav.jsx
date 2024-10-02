// eslint-disable-next-line no-unused-vars
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Breadcrumbs, Button, Link, Stack, Typography } from "@mui/material";
const BreadNav = () => {
  return (
    <Stack direction="row" spacing={102} sx={{px:2, py:1, borderBottom:"solid 1px #bbb " }} role="presentation">
      <Typography variant="h5"fontWeight={500}>
        EQ3
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/"
        >
          <LocationOnOutlinedIcon sx={{ mr: 0.5, fontSize: "20px" }} />
        </Link>
        <Link
          underline="none"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <HelpOutlineIcon sx={{ mr: 0.5, fontSize: "20px" }} />
        </Link>
        <Link
          underline="none"
          color="inherit"
          sx={{ display: "flex", alignItems: "center",fontSize: "15px" }}
        >
          <FavoriteBorderIcon sx={{ mr: 0.5, fontSize: "20px" }} />
        </Link>
        <Link
          underline="none"
          color="inherit"
          sx={{ display: "flex", alignItems: "center",fontSize: "15px" }}
        >
          <AccountCircleOutlinedIcon sx={{ mr: 0.5, fontSize: "20px" }} />
          Join/Login to EQ3
        </Link>
        <Link
          underline="none"
          color="inherit"
          sx={{ display: "flex", alignItems: "center",fontSize: "15px" }}
        >
          <LanguageIcon sx={{ mr: 0.5, fontSize: "20px" }} />
          EN/CAD
        </Link>
        <Button
          variant="outlined"
          startIcon={<ShoppingCartOutlinedIcon sx={{fontSize:"20px"}} />}
          sx={{ color: "inherit", borderColor: "inherit", textTransform:"capitalize",fontSize: "15px" }}
        >Cart</Button>
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadNav;
