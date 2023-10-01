import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { getMyProfile } from "../api/usersApi";
import { Box, Grid, Paper, styled, TextField, Typography } from "@mui/material";
import { AuthContext } from "./../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import { ProfileSideBox } from "../components/ProfileSideBox";

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff"
});

const FlexBox = styled(Box)({
  display: "flex",
  // justifyContent: "space-between",
  padding: "1rem 3rem"
});

const SideBox = styled(Box)({
  padding: "1rem 1rem",
  textAlign: "center",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});

const Profile = () => {
  const navigate = useNavigate();
  const { user: contextUser, setUser } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile
  });

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const user = data.data.user;
  setUser(user);

  //1.fetch the current user, and
  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "2rem 3rem" }}>
        <Grid item xs={2}>
          <ProfileSideBox />
        </Grid>
        <Grid item xs={10}>
          <StyledPaper elevation={3}>
            <Box>
              <TextField>For Image</TextField>
              <FlexBox>
                <Typography>
                  <b>Email : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.email}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  {" "}
                  <b>Username : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.username}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  <b>Phone Number : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.phoneNumber}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  <b>Date Of Birth : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.dateOfBirth}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  <b>Gender : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.gender}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  <b>Address : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>
                  {user.address}
                </Typography>
              </FlexBox>
              <FlexBox>
                <Typography>
                  <b>City : </b>
                </Typography>
                <Typography sx={{ marginLeft: "1rem" }}>{user.city}</Typography>
              </FlexBox>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
