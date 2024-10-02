import {
  alpha,
  AppBar,
  Box,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  border: "1px solid #aaa",
  borderRadius: 4,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
    },
  },
}));
const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={3}>
            <Typography variant="p">Living</Typography>
            <Typography variant="p">Dining</Typography>
            <Typography variant="p">Bedroom</Typography>
            <Typography variant="p">Outdoor</Typography>
            <Typography variant="p">Office</Typography>
            <Typography variant="p">Lighting</Typography>
            <Typography variant="p">Rugs</Typography>
            <Typography variant="p">Accessories</Typography>
            <Typography variant="p">Brands</Typography>
          </Stack>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box sx={{textAlign:"center",p:2,my:1,bgcolor:"#F5A049"}} >
        <Typography variant="p">
          Explore our range of home furnishings 
        </Typography>
      </Box>
    </Box>
  );
};

export default NavBar;
