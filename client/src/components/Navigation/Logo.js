import { Box, styled, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme";
import { useQuery } from "@tanstack/react-query";
import { getLocationNearMe } from "../../api/locationsApi";

const LogoText = styled(Typography)({
  color: "black",
  fontWeight: "600",
  fontFamily: "Poppins"
});

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "self-end",
  flex: 3,
  [theme.breakpoints.between("sm", "md")]: {
    flex: 2.75
  }
});

const Logo = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [getLocation, setGetLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const arr = [position.coords.latitude, position.coords.longitude];
      setCoordinates(arr);
      setGetLocation(true);
    });
  }, []);

  const {
    data: locationData,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["nearme"],
    queryFn: () => getLocationNearMe(coordinates[0], coordinates[1]),
    enabled: getLocation
  });
  const navigate = useNavigate();
  return (
    <LogoBox>
      <LogoText onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
        Crew Up
      </LogoText>
    </LogoBox>
  );
};

export default Logo;
