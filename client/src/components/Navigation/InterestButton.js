import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { theme } from "./../../theme";

const InterestButtonBox = styled(Button)({
  display: "flex",
  boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.4)",
  maxHeight: "2.8rem",
  [theme.breakpoints.down("md")]: {
    marginRight: "2rem"
  }
});

const ButtonTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "8px"
});

const ButtonText = styled(Typography)({
  fontSize: "0.9rem",
  textTransform: "none",
  fontFamily: "Inter",
  fontWeight: 600
});

const InterestButton = () => {
  return (
    <InterestButtonBox variant="contained" color="primary">
      <AddCircleIcon fontSize="small" />
      <ButtonTextBox>
        <ButtonText>Interest</ButtonText>
        <ButtonText sx={{ fontSize: "0.5rem" }}>(For Workers)</ButtonText>
      </ButtonTextBox>
    </InterestButtonBox>
  );
};

export default InterestButton;
