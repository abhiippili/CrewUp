import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const BannerBox = styled(Box)({
  background: "#232526",
  background: "-webkit-linear-gradient(to right, #414345, #232526)",
  background: "linear-gradient(to right, #414345, #232526)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const TextBox = styled(Box)({
  height: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
});

const MainText = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: 600,
  textShadow: "1px 2px 2px #000000",
  color: "#FFC72C"
});

const SubText = styled(Typography)({
  fontFamily: "Inter",
  color: "white",
  marginTop: "1rem",
  textShadow: "1px 2px 2px #000000"
});

const ActionButton = styled(Button)({
  border: "1px solid #FFC72C",
  marginRight: "1rem",
  color: "#FFC72C",
  fontFamily: "inherit"
});

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ paddingTop: "0.5rem", height: "240px" }}>
      <BannerBox>
        <TextBox>
          <MainText variant="h3">Crew Up!</MainText>
          <SubText>
            That one market place for contractors and daily wage workers
          </SubText>
        </TextBox>
        <Box>
          <ActionButton
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/tasks")}
          >
            Explore Tasks
          </ActionButton>

          <ActionButton
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/portfolios")}
          >
            Explore Portfolios
          </ActionButton>
        </Box>
      </BannerBox>
    </Box>
  );
};

export default Banner;
