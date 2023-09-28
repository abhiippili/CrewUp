import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { getMyProfile } from "../api/usersApi";
import { Box, Grid, Paper, styled, TextField, Typography } from "@mui/material";
import { AuthContext } from "./../contexts/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

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
    if (!contextUser) {
      navigate("/signin");
    }
  }, [contextUser]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile
  });

  const handleLogout = (e) => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/signin");
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  const user = data.data.user;
  setUser(user);
  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "2rem 3rem" }}>
        <Grid item xs={3}>
          <StyledPaper elevation={2}>
            <SideBox onClick={() => navigate("/myprofile")}>
              <AccountCircleIcon sx={{ marginRight: "10px" }} />
              <Box sx={{ textAlign: "center" }}>My Profile</Box>
            </SideBox>
            <SideBox onClick={() => navigate("/mytasks")}>
              <ViewListIcon sx={{ marginRight: "10px" }} />
              <Box sx={{ textAlign: "center" }}>My Tasks</Box>
            </SideBox>
            <SideBox onClick={() => navigate("/myportfolio")}>
              <ContactPageIcon sx={{ marginRight: "10px" }} />
              <Typography>My Portfolio</Typography>
            </SideBox>
            <SideBox onClick={() => navigate("/settings")}>
              <SettingsIcon sx={{ marginRight: "10px" }} />
              <Typography>Settings</Typography>
            </SideBox>
            <SideBox onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: "10px" }} />
              <Typography>Logout</Typography>
            </SideBox>
          </StyledPaper>
        </Grid>
        <Grid item xs={9}>
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
