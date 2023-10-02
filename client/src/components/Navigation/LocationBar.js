import React, { useContext, useEffect, useState } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import {
  Autocomplete,
  Box,
  styled,
  TextField,
  useMediaQuery
} from "@mui/material";
import { theme } from "./../../theme";
import { useQuery } from "@tanstack/react-query";
import { LocationContext } from "../../contexts/LocationContext";

const LocationBox = styled(Box)({
  display: "flex",
  height: "2.5rem",
  minWidth: "35%",
  alignItems: "center",
  border: "2px solid #544f4f",
  borderRadius: "0.75rem",
  paddingLeft: "0.5rem",
  [theme.breakpoints.down("md")]: {
    flex: 1
  }
});

const LocationBar = () => {
  const { myLocation, setMyLocation } = useContext(LocationContext);

  const lgDownMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <LocationBox>
      <MyLocationIcon fontSize="small" />
      <Autocomplete
        sx={{ width: "100%" }}
        disablePortal
        value={myLocation}
        onChange={(e, newValue) => {
          setMyLocation(newValue);
          console.log(myLocation);
        }}
        onInputChange={(e, newValue) => setMyLocation(newValue)}
        options={locations}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={lgDownMatch ? "Location" : "Select a location"}
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
