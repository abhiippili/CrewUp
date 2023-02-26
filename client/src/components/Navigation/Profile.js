import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Box, styled, Typography } from "@mui/material";

const ProfileBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const Profile = ({ worker, user }) => {
  return (
    <ProfileBox>
      {worker ? (
        <EngineeringIcon fontSize="medium" />
      ) : (
        <AccountCircleIcon fontSize="medium" />
      )}
      <Typography
        sx={{
          fontSize: "0.8rem",
          fontFamily: "Inter",
          fontWeight: 600
        }}
      >
        Hello, {user}
      </Typography>
    </ProfileBox>
  );
};

export default Profile;
