import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Autocomplete, Box, styled, TextField } from "@mui/material";

const LocationBox = styled(Box)({
  display: "flex",
  height: "2.5rem",
  width: "35%",
  alignItems: "center",
  border: "2px solid #544f4f",
  borderRadius: "0.75rem",
  paddingLeft: "0.5rem"
});

const LocationBar = () => {
  return (
    <LocationBox>
      <MyLocationIcon fontSize="small" />
      <Autocomplete
        sx={{ width: "100%" }}
        disablePortal
        options={locations}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select a location"
            variant="outlined"
          />
        )}
      />
    </LocationBox>
  );
};

const locations = [
  "Hyderabad",
  "Rajahmundry",
  "Bhimavaram",
  "Vijayawada",
  "Visakhapatnam"
];
export default LocationBar;
