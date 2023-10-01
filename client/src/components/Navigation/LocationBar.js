import React, { useEffect, useState } from "react";
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
  const [location, setLocation] = useState("");

  const lgDownMatch = useMediaQuery(theme.breakpoints.down("lg"));

  // if (!isLoading && !isError) {
  //   const closest = locationData.data.location.location;
  //   setLocation(closest);
  // }

  return (
    <LocationBox>
      <MyLocationIcon fontSize="small" />
      <Autocomplete
        sx={{ width: "100%" }}
        disablePortal
        value={location}
        onChange={(e, newValue) => setLocation(newValue)}
        onInputChange={(e, newValue) => setLocation(newValue)}
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
