import { Autocomplete, Box, styled, TextField } from "@mui/material";
import React from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const options = ["painter", "plumber", "labour", "electrician"];

const SearchBox = styled(Box)({
  display: "flex",
  width: "55%",
  height: "2.5rem",
  alignItems: "center",
  border: "2px solid #544f4f",
  borderRadius: "0.75rem",
  paddingLeft: "0.5rem"
});

const SearchBar = () => {
  return (
    <SearchBox>
      <PersonSearchIcon fontSize="small" />
      <Autocomplete
        sx={{ width: "100%" }}
        freeSolo
        disablePortal
        id="combo-box-demo"
        options={options}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search by work or name" />
        )}
      />
    </SearchBox>
  );
};

export default SearchBar;
