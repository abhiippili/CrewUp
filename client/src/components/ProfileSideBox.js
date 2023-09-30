import { Box, Paper, styled, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledPaper = styled(Paper)({
  borderRadius: "1rem",
  background: "#fff"
});

const SideBox = styled(Box)({
  padding: "1rem 1rem",
  textAlign: "center",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});

export const ProfileSideBox = () => {
  const navigate = useNavigate();
  const { user: contextUser, setUser } = useContext(AuthContext);

  const handleLogout = (e) => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      setUser((prev) => null);
      navigate("/signin");
    }
  };

  return (
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
  );
};
